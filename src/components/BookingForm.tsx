import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Room } from "@/lib/types";

interface BookingFormProps {
  selectedRoomId?: string;
  rooms: Room[];
}

const formSchema = z
  .object({
    roomId: z.string({
      required_error: "Please select a room",
    }),
    checkIn: z.date({
      required_error: "Check-in date is required",
    }),
    checkOut: z.date({
      required_error: "Check-out date is required",
    }),
    guestName: z.string().min(2, { message: "Name must be at least 2 characters" }),
    guestEmail: z.string().email({ message: "Please enter a valid email address" }),
    guestPhone: z.string().min(5, { message: "Phone number is required" }),
    numberOfGuests: z.coerce.number().int().min(1, { message: "At least 1 guest is required" }),
  })
  .refine((data) => data.checkOut > data.checkIn, {
    message: "Check-out date must be after check-in date",
    path: ["checkOut"],
  });

type FormValues = z.infer<typeof formSchema>;

const STORAGE_KEY = "bookingFormDraft";
const DRAFT_EXPIRATION_MS = 30 * 60 * 1000; // 30 minutes

const BookingForm = ({ selectedRoomId, rooms }: BookingFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roomId: selectedRoomId || "",
      numberOfGuests: 1,
    },
  });

  const selectedRoom = form.watch("roomId")
    ? rooms.find((room) => room.id === form.watch("roomId"))
    : null;

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    const checkIn = new Date(data.checkIn);
    const checkOut = new Date(data.checkOut);
    const numberOfNights = Math.ceil(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
    );

    const roomPrice = rooms.find((room) => room.id === data.roomId)?.price || 0;
    const totalPrice = roomPrice * numberOfNights;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Booking Confirmed!",
        description: `Thank you, ${data.guestName}. Your booking has been confirmed for ${numberOfNights} nights. Total: $${totalPrice}`,
      });

      sessionStorage.removeItem(STORAGE_KEY);
      form.reset();
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was a problem processing your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Save draft in sessionStorage
  useEffect(() => {
    const subscription = form.watch((value) => {
      const draft = {
        timestamp: Date.now(),
        data: value,
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  // Load draft if still valid
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const { timestamp, data } = JSON.parse(saved);
        const now = Date.now();
        if (now - timestamp < DRAFT_EXPIRATION_MS) {
          if (data.checkIn) data.checkIn = new Date(data.checkIn);
          if (data.checkOut) data.checkOut = new Date(data.checkOut);
          form.reset(data);
          toast({ title: "Draft Restored", description: "Your booking draft was recovered." });
        } else {
          sessionStorage.removeItem(STORAGE_KEY);
          toast({ title: "Draft Expired", description: "Your previous booking draft has expired." });
        }
      } catch (e) {
        console.error("Failed to parse booking draft:", e);
      }
    }
  }, [form]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
      <h2 className="font-serif text-2xl font-bold text-hotel-blue mb-6">Book Your Stay</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Room Select */}
          <FormField
            control={form.control}
            name="roomId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a room" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {rooms.map((room) => (
                      <SelectItem key={room.id} value={room.id}>
                        {room.name} - ${room.price}/night
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Check-in and Check-out */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Check-in */}
            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Check-in Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Select date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Check-out */}
            <FormField
              control={form.control}
              name="checkOut"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Check-out Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Select date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => {
                          const checkIn = form.getValues("checkIn");
                          return checkIn ? date <= checkIn : date < new Date();
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Guests */}
          <FormField
            control={form.control}
            name="numberOfGuests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Guests</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(parseInt(value))}
                  defaultValue={field.value.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {(selectedRoom
                      ? Array.from({ length: selectedRoom.capacity }, (_, i) => i + 1)
                      : [1, 2, 3, 4]
                    ).map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedRoom && (
                  <FormDescription>
                    Maximum capacity: {selectedRoom.capacity} guests
                  </FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="guestName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guestEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Phone */}
          <FormField
            control={form.control}
            name="guestPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-hotel-gold hover:bg-hotel-gold/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Complete Booking"}
          </Button>

          {/* Preview Total */}
          {selectedRoom && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <div className="text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Room rate:</span>
                  <span>${selectedRoom.price}/night</span>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-200 text-hotel-blue font-bold flex justify-between">
                  <span>Total:</span>
                  <span>
                    {form.watch("checkIn") && form.watch("checkOut")
                      ? `$${selectedRoom.price *
                          Math.max(
                            1,
                            Math.ceil(
                              (form.watch("checkOut").getTime() -
                                form.watch("checkIn").getTime()) /
                                (1000 * 60 * 60 * 24)
                            )
                          )}`
                      : "$0"}
                  </span>
                </div>
              </div>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
