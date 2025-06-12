
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/lib/data";
import { Room } from "@/lib/types";

const BookNow = () => {
  const [searchParams] = useSearchParams();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  
  // Get the roomId from URL params
  const roomId = searchParams.get('roomId');
  
  useEffect(() => {
    if (roomId) {
      const room = rooms.find(r => r.id === roomId);
      if (room) {
        setSelectedRoom(room);
      }
    }
  }, [roomId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-hotel-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Book Your Stay</h1>
            <p className="text-lg">Complete your reservation in a few simple steps</p>
          </div>
        </div>
        
        {/* Booking Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Booking Form */}
              <div>
                <BookingForm selectedRoomId={roomId || undefined} rooms={rooms} />
              </div>
              
              {/* Selected Room or Policies */}
              <div>
                {selectedRoom ? (
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <h2 className="font-serif text-2xl font-bold text-hotel-blue p-6 border-b">Selected Room</h2>
                    <RoomCard room={selectedRoom} showBookButton={false} />
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="font-serif text-2xl font-bold text-hotel-blue mb-6">Booking Information</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-lg mb-2">Check-in / Check-out</h3>
                        <p className="text-gray-600">Check-in time starts at 3:00 PM</p>
                        <p className="text-gray-600">Check-out time is 11:00 AM</p>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg mb-2">Payment Policy</h3>
                        <p className="text-gray-600">We accept all major credit cards.</p>
                        <p className="text-gray-600">A valid credit card is required to confirm your reservation.</p>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg mb-2">Cancellation Policy</h3>
                        <p className="text-gray-600">Free cancellation up to 48 hours before check-in.</p>
                        <p className="text-gray-600">Cancellations less than 48 hours in advance may be subject to a charge.</p>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg mb-2">Special Requests</h3>
                        <p className="text-gray-600">Special requests are subject to availability and cannot be guaranteed.</p>
                        <p className="text-gray-600">Please contact us directly for any specific requirements.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookNow;
