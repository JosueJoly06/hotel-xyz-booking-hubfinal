
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Room } from "@/lib/types";
import { rooms } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BookingForm from "@/components/BookingForm";
import RoomCard from "@/components/RoomCard";

const BookRoom = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  
  useEffect(() => {
    if (roomId) {
      // Buscar la habitación en el array de habitaciones
      const foundRoom = rooms.find(r => r.id === roomId);
      if (foundRoom) {
        setRoom(foundRoom);
      }
    }
  }, [roomId]);

  if (!room) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Habitación no encontrada</h1>
        <Button asChild>
          <a href="/rooms">Volver a Habitaciones</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Reservar Habitación</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Detalles de la habitación */}
        <div>
          <RoomCard room={room} showBookButton={false} />
        </div>
        
        {/* Formulario de reserva */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Completar Reserva</CardTitle>
            </CardHeader>
            <CardContent>
              <BookingForm selectedRoomId={roomId} rooms={rooms} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookRoom;
