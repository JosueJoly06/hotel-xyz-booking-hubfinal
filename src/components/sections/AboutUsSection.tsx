import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { hotelInfo } from "@/lib/data";

const AboutUsSection = () => {
  const exteriorImages = [
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682369/9-_U4C9534_qjv1ka.jpg",
      alt: "Fachada principal de Casa Concha"
    },
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682369/8-_U4C9508_kzwaps.jpg",
      alt: "Vista exterior de Casa Concha"
    },
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682368/7-_U4C9507_ojkoig.jpg",
      alt: "Arquitectura desde el jardín"
    },
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682368/6-_U4C9506_cxiz84.jpg",
      alt: "Entrada al hotel al atardecer"
    }
  ];

  const interiorImages = [
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682367/5-_U4C9501_htueit.jpg",
      alt: "Lobby principal"
    },
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682366/4-_U4C9499_djdpnc.jpg",
      alt: "Recepción elegante"
    },
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682365/3-_U4C9496_n0iofw.jpg",
      alt: "Sala de estar con detalles decorativos"
    },
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682365/2-_U4C9474_rtga0y.jpg",
      alt: "Habitación premium"
    },
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682364/14-_U4C9564_cbjdjv.jpg",
      alt: "Detalles arquitectónicos interiores"
    },
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682364/13-_U4C9563_ypnozc.jpg",
      alt: "Comedor interior"
    },
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682362/12-_U4C9555_cptloj.jpg",
      alt: "Sala de lectura"
    },
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682361/11-_U4C9542_ndvgju.jpg",
      alt: "Pasillo interior"
    },
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682361/10-_U4C9538_dbff2o.jpg",
      alt: "Vista desde el balcón interior"
    },
    {
      src: "https://res.cloudinary.com/dmmnflrj5/image/upload/v1749682361/1-_U4C9472_qknm9t.jpg",
      alt: "Decoración interior"
    }
  ];

  const renderImageSlider = (images: typeof exteriorImages) => (
    <div className="flex gap-4 overflow-x-auto py-4">
      {images.map((img, i) => (
        <div key={i} className="min-w-[240px] flex-shrink-0">
          <img
            src={img.src}
            alt={img.alt}
            className="rounded-xl shadow-md w-full h-48 object-cover"
          />
          <p className="mt-2 text-sm text-center text-gray-600">{img.alt}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-6">Conócenos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {hotelInfo.description}
          </p>
        </div>

        {/* Accordions para imágenes */}
        <Accordion type="multiple" className="mb-12">
          <AccordionItem value="exterior">
            <AccordionTrigger className="text-lg font-semibold">
              Imágenes del Exterior
            </AccordionTrigger>
            <AccordionContent>
              {renderImageSlider(exteriorImages)}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="interior">
            <AccordionTrigger className="text-lg font-semibold">
              Imágenes del Interior
            </AccordionTrigger>
            <AccordionContent>
              {renderImageSlider(interiorImages)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            ),
            title: "Arquitectura Única",
            description: "Nuestro diseño arquitectónico combina modernidad con elementos tradicionales, creando espacios únicos y memorables."
          }, {
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            ),
            title: "Ubicación Privilegiada",
            description: "Estratégicamente ubicados en el centro de la ciudad, con fácil acceso a las principales atracciones y servicios."
          }, {
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            ),
            title: "Experiencia Personalizada",
            description: "Nos dedicamos a crear experiencias únicas y personalizadas para cada uno de nuestros huéspedes."
          }].map((item, index) => (
            <div className="text-center" key={index}>
              <div className="w-16 h-16 bg-hotel-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
