
const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center font-bold mb-12">Lo que dicen nuestros huéspedes</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">María González</h4>
                <div className="flex text-hotel-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">"La mejor experiencia hotelera que he tenido. Las habitaciones son espectaculares y el servicio fue impecable."</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Carlos Rodríguez</h4>
                <div className="flex text-hotel-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">"Mi familia y yo disfrutamos mucho nuestra estancia. Las instalaciones son de primera calidad y el personal muy amable."</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Ana Martínez</h4>
                <div className="flex text-hotel-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">"Una experiencia inolvidable. La ubicación es perfecta y las vistas desde la habitación son espectaculares."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
