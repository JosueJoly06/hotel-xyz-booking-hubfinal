
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { hotelInfo } from "@/lib/data";
import { Mail, Phone, MapPin, Clock, SendHorizontal } from "lucide-react";
import ContactMap from "@/components/ContactMap";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor ingrese un correo electrónico válido" }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "El asunto es requerido" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulamos el envío del correo
      console.log("Mensaje a enviar:", data);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Mensaje Enviado",
        description: `Gracias ${data.name}, hemos recibido tu mensaje. Nuestro equipo se pondrá en contacto pronto.`,
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error al Enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <div className="bg-hotel-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Contáctanos</h1>
            <p className="text-lg">Ponte en contacto con nosotros para cualquier consulta o solicitar información</p>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                  <h2 className="font-serif text-2xl font-bold text-hotel-blue mb-6">Envíanos un Mensaje</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nombre</FormLabel>
                              <FormControl>
                                <Input placeholder="Tu nombre" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Tu email" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Teléfono (Opcional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Tu número telefónico" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Asunto</FormLabel>
                              <FormControl>
                                <Input placeholder="Asunto de tu mensaje" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensaje</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="¿En qué podemos ayudarte?"
                                className="min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-hotel-gold hover:bg-hotel-gold/90 text-white" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="animate-spin">⚪</span> Enviando...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <SendHorizontal size={18} /> Enviar Mensaje
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
              
              {/* Contact Information */}
              <div>
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
                  <h2 className="font-serif text-2xl font-bold text-hotel-blue mb-6">Información de Contacto</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-hotel-gold mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium">Dirección</h3>
                        <p className="text-gray-600">{hotelInfo.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-hotel-gold mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium">Teléfono</h3>
                        <p className="text-gray-600">{hotelInfo.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-hotel-gold mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-600">{hotelInfo.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-hotel-gold mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium">Horario de Recepción</h3>
                        <p className="text-gray-600">Recepción 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                  <h2 className="font-serif text-2xl font-bold text-hotel-blue mb-6">Ubicación</h2>
                  <ContactMap lat={40.7128} lng={-74.0060} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
