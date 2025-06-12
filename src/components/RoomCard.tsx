import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Room } from "@/lib/types";
import { Bed, Users, Wifi } from "lucide-react";

interface RoomCardProps {
  room: Room;
  showBookButton?: boolean;
}

const RoomCard = ({ room, showBookButton = true }: RoomCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const openLobbyWidget = () => {
    if (window.ldrs) {
      window.ldrs.open();
    } else {
      console.error("Lobby Date Range Selector no está disponible");
    }
  };

  return (
    <Card className="overflow-hidden border border-gray-200 h-full flex flex-col">
      <div className="relative aspect-[16/9]">
        <img
          key={currentImageIndex}
          src={room.images[currentImageIndex]}
          alt={`${room.name} - Imagen ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
          loading="lazy"
        />

        {/* Controles de imagen */}
        {room.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Imagen anterior"
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              aria-label="Imagen siguiente"
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
            >
              &#10095;
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/40 text-white text-xs px-2 py-1 rounded-full">
              {currentImageIndex + 1} / {room.images.length}
            </div>
          </>
        )}

        <div className="absolute bottom-0 right-0 bg-hotel-gold text-white px-4 py-1 font-semibold">
          ${room.price} <span className="text-sm font-normal">/noche</span>
        </div>
      </div>

      <CardContent className="flex-grow p-6">
        <h3 className="font-serif text-xl font-bold text-hotel-blue mb-2">{room.name}</h3>
        <p className="text-gray-600 mb-4">{room.description}</p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1" aria-label={`Camas: ${Math.ceil(room.capacity / 2)}`}>
            <Bed className="h-4 w-4" />
            <span>{room.capacity === 1 ? "1 cama" : `${Math.ceil(room.capacity / 2)} camas`}</span>
          </div>
          <div className="flex items-center gap-1" aria-label={`Capacidad: ${room.capacity} huéspedes`}>
            <Users className="h-4 w-4" />
            <span>{room.capacity} huéspedes</span>
          </div>
          <div className="flex items-center gap-1" aria-label="Wifi gratuito">
            <Wifi className="h-4 w-4" />
            <span>WiFi gratis</span>
          </div>
        </div>
      </CardContent>

      {showBookButton && (
        <CardFooter className="p-6 pt-0 mt-auto">
          <Button
            className="w-full bg-hotel-blue hover:bg-hotel-dark-blue text-white"
            onClick={openLobbyWidget}
          >
            Reservar {room.name}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default RoomCard;
