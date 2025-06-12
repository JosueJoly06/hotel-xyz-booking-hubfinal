
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CommunalKitchenSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img 
              src="/lovable-uploads/78ed258b-2c97-4c55-aa7f-e9773fe79679.png"
              alt="Cocina comunal Casa Concha - Moderna y completamente equipada"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-hotel-blue text-white px-3 py-1 rounded-md font-medium">
              Cocina Comunal
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-serif font-bold mb-6">Cocina Comunal Moderna</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Disfruta de nuestra moderna cocina comunal, totalmente equipada para que puedas 
              preparar tus propias comidas durante tu estancia en Casa Concha.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-hotel-gold rounded-full mr-3"></div>
                <span>Electrodomésticos modernos y de alta calidad</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-hotel-gold rounded-full mr-3"></div>
                <span>Encimeras de granito y gabinetes de madera</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-hotel-gold rounded-full mr-3"></div>
                <span>Iluminación LED y diseño contemporáneo</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-hotel-gold rounded-full mr-3"></div>
                <span>Disponible 24/7 para todos los huéspedes</span>
              </li>
            </ul>
            <Link to="/rooms">
              <Button className="bg-hotel-blue hover:bg-hotel-dark-blue text-white">
                Ver Habitaciones
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunalKitchenSection;
