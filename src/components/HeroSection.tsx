"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const HeroSection = () => {
  // Desplazarse a la sección de habitaciones
  const scrollToRooms = () => {
    const section = document.getElementById("rooms-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      // Cierra el menú móvil si está abierto (si manejas uno global)
      window.dispatchEvent(new Event("close-mobile-menu"));
    }
  };

  // Reservar con widget externo
  const openLobbyWidget = () => {
    if (typeof window !== "undefined" && (window as any).ldrs) {
      (window as any).ldrs.open();
    } else {
      console.error("Lobby Date Range Selector no está disponible");
    }
  };

  // Asegura scroll suave en navegadores que no lo tengan por defecto
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center" aria-label="Sección de bienvenida">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/c75b64b7-2101-41ef-a9a1-897c655596de.png')"
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl text-white animate-fade-in text-center md:text-left">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Bienvenidos a <br />
            <span className="text-hotel-gold">Hotel Casa Santa Cruz</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Disfrute de un confort excepcional y un servicio de clase mundial.
            Su escapada soñada le espera en nuestro exclusivo hotel spa.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button
              size="lg"
              className="bg-hotel-gold hover:bg-hotel-gold/90 text-white font-medium"
              onClick={openLobbyWidget}
              aria-label="Reservar ahora en Hotel Casa Santa Cruz"
            >
              Reservar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/20"
              onClick={scrollToRooms}
              aria-label="Explorar habitaciones de Hotel Casa Santa Cruz"
            >
              Explorar Habitaciones
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
