
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { rooms } from '@/lib/data';

const FeaturedRoomsSection = () => {
  const featuredRooms = rooms.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif font-bold">Habitaciones Destacadas</h2>
          <Link to="/rooms" className="flex items-center text-hotel-blue hover:text-hotel-gold transition-colors">
            Ver todas <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {featuredRooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={room.images[0]}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-hotel-gold font-bold text-lg">${room.price} / noche</span>
                  <Link to={`/book/${room.id}`}>
                    <Button size="sm">Reservar</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoomsSection;
