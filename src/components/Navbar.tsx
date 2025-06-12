import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const location = useLocation();

  const shouldAutoHide = location.pathname !== "/book-now" && isLargeScreen;

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ocultamiento al hacer scroll
  useEffect(() => {
    if (!shouldAutoHide) {
      setHideOnScroll(false);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setHideOnScroll(true); // Hacia abajo
        } else {
          setHideOnScroll(false); // Hacia arriba
        }
        setLastScrollY(currentScrollY);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, shouldAutoHide]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      role="navigation"
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out bg-white/90 backdrop-blur-md shadow-sm",
        hideOnScroll ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 text-hotel-blue font-serif text-2xl font-bold">
            Hotel Casa <span className="text-hotel-gold">Santa Cruz</span>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:block">
            <nav className="ml-10 flex items-center space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/rooms">Rooms</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <Link to="/book-now">
                <Button className="bg-hotel-gold hover:bg-hotel-gold/90 text-white">Book Now</Button>
              </Link>
            </nav>
          </div>

          {/* Botón Móvil */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-hotel-blue hover:text-hotel-gold"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white shadow-md">
          <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/rooms" onClick={() => setMobileMenuOpen(false)}>Rooms</MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
          <div className="pt-2">
            <Link to="/book-now" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-hotel-gold hover:bg-hotel-gold/90 text-white">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => (
  <Link
    to={to}
    className="font-medium text-hotel-blue hover:text-hotel-gold transition-colors duration-200"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  children,
  to,
  onClick,
}: {
  children: React.ReactNode;
  to: string;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md text-base font-medium text-hotel-blue hover:text-hotel-gold hover:bg-gray-50 transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
