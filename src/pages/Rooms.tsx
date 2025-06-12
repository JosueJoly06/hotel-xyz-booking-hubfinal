
import { rooms } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import RoomCard from '@/components/RoomCard';

const Rooms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nuestras Habitaciones</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
