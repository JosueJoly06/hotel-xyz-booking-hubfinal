import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SpaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Relájate en Nuestro Jacuzzi Comunal</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Vive momentos de tranquilidad y bienestar en nuestra zona comunal con jacuzzi. 
              Ideal para descansar y compartir en un espacio cómodo, moderno y natural.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-hotel-gold rounded-full mr-3"></div>
                <span>Jacuzzi amplio con agua temperada</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-hotel-gold rounded-full mr-3"></div>
                <span>Zona al aire libre rodeada de vegetación</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-hotel-gold rounded-full mr-3"></div>
                <span>Espacio común perfecto para relajarse o socializar</span>
              </li>
            </ul>
            <Link to="/rooms">
              <Button className="bg-hotel-gold hover:bg-hotel-gold/90 text-white">
                Ver Habitaciones
              </Button>
            </Link>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/c75b64b7-2101-41ef-a9a1-897c655596de.png"
              alt="Zona comunal con jacuzzi en Casa Concha"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-hotel-gold text-white px-3 py-1 rounded-md font-medium">
              Jacuzzi Comunal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;
