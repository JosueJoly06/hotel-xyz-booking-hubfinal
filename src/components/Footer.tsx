import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hotelInfo } from "@/lib/data";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscription feature coming soon!");
  };

  return (
    <footer className="bg-hotel-blue text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-serif text-2xl font-bold mb-4">
              Hotel Casa <span className="text-hotel-gold">Santa Cruz</span>
            </h2>
            <p className="text-gray-300 mb-6">
              {hotelInfo.description}
            </p>
            <div className="flex space-x-4">
              {/* Social icons */}
              {/* ... (unchanged) */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-hotel-gold transition-colors">Home</Link></li>
              <li><Link to="/rooms" className="text-gray-300 hover:text-hotel-gold transition-colors">Rooms</Link></li>
              <li><Link to="/book-now" className="text-gray-300 hover:text-hotel-gold transition-colors">Book Now</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-hotel-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-hotel-gold mr-2 mt-0.5" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotelInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-hotel-gold transition-colors"
                >
                  {hotelInfo.address}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-hotel-gold mr-2" />
                <a href={`tel:${hotelInfo.phone}`} className="text-gray-300 hover:text-hotel-gold transition-colors">
                  {hotelInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-hotel-gold mr-2" />
                <a href={`mailto:${hotelInfo.email}`} className="text-gray-300 hover:text-hotel-gold transition-colors">
                  {hotelInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for special deals and updates.</p>
            <form className="space-y-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md text-gray-900 placeholder:opacity-70 focus:ring-2 focus:ring-hotel-gold"
                required
              />
              <Button type="submit" className="w-full bg-hotel-gold hover:bg-hotel-gold/90 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p lang="en">&copy; {new Date().getFullYear()} Hotel Casa Santa Cruz. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

