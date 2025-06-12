import { Button } from '@/components/ui/button';

const CTASection = () => {
  const openLobbyWidget = () => {
    if (window.ldrs) {
      window.ldrs.open();
    } else {
      console.error('Lobby Date Range Selector no está disponible');
    }
  };

  return (
    <section className="py-20 bg-hotel-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold mb-6">
          ¿Listo para una experiencia inolvidable en Casa Concha?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Reserve ahora y disfrute de tarifas especiales en nuestras habitaciones de lujo y acceso exclusivo a nuestro spa. Una experiencia que recordará para siempre.
        </p>
        <Button
          size="lg"
          className="bg-hotel-gold hover:bg-hotel-gold/90 text-white transition-colors duration-200"
          onClick={openLobbyWidget}
          aria-label="Reservar ahora en Casa Concha"
        >
          Reservar Ahora
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
// This component is a Call to Action section for the Casa Concha hotel website.
// It encourages users to book a stay and provides a button that opens the booking widget.
// The section is styled with a background color and includes a title, description, and a button.
// The button triggers the `openLobbyWidget` function, which checks if the Lobby Date Range Selector is available and opens it if so.
// The section is responsive and uses Tailwind CSS classes for styling.
// The text is designed to be engaging and persuasive, inviting users to take action and book their stay.