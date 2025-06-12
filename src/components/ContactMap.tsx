import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { hotelInfo } from "@/lib/data";

interface ContactMapProps {
  lat?: number;
  lng?: number;
}

const ContactMap = ({ lat = 40.7128, lng = -74.0060 }: ContactMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");
  const [inputToken, setInputToken] = useState<string>("");
  const [hasError, setHasError] = useState(false);

  // Cargar token almacenado
  useEffect(() => {
    const savedToken = localStorage.getItem("mapboxToken");
    if (savedToken?.startsWith("pk.")) {
      setMapboxToken(savedToken);
    }
  }, []);

  // Inicializar mapa
  useEffect(() => {
    if (!mapboxToken || !mapContainer.current || map.current || hasError) return;

    try {
      mapboxgl.accessToken = mapboxToken;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lng, lat],
        zoom: 14,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      new mapboxgl.Marker({ color: "#1a365d" })
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup().setHTML(`<h3>${hotelInfo.name}</h3><p>${hotelInfo.address}</p>`)
        )
        .addTo(map.current);

      map.current.on("error", (e) => {
        console.error("Mapbox error:", e.error);
        setHasError(true);
      });
    } catch (err) {
      console.error("Error inicializando el mapa:", err);
      setHasError(true);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [lat, lng, mapboxToken, hasError]);

  const handleTokenSubmit = () => {
    if (!inputToken.startsWith("pk.")) {
      alert("Token inválido. Debe comenzar con 'pk.'.");
      return;
    }

    localStorage.setItem("mapboxToken", inputToken);
    setMapboxToken(inputToken);
    setHasError(false);
  };

  const resetToken = () => {
    localStorage.removeItem("mapboxToken");
    setMapboxToken("");
    setInputToken("");
    setHasError(false);
  };

  return (
    <div className="w-full">
      {!mapboxToken || hasError ? (
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-3">
            {hasError ? "Error al cargar el mapa" : "Configuración del Mapa"}
          </h3>

          {hasError ? (
            <>
              <p className="mb-4 text-red-600 font-medium">
                No se pudo cargar el mapa. Verifique que el token sea válido y que esté conectado a
                internet.
              </p>
              <button
                onClick={resetToken}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mb-4"
              >
                Reingresar Token
              </button>
            </>
          ) : (
            <>
              <p className="mb-3">Ingrese su token público de Mapbox para activar el mapa:</p>
              <input
                type="text"
                className="w-full p-2 mb-3 border rounded"
                placeholder="pk.eyJ1Ijo..."
                value={inputToken}
                onChange={(e) => setInputToken(e.target.value)}
              />
              <button
                onClick={handleTokenSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
              >
                Guardar Token y Mostrar Mapa
              </button>
            </>
          )}

          <p className="text-sm text-gray-500 mt-4">
            Obtenga su token público en{" "}
            <a
              href="https://account.mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              mapbox.com
            </a>
          </p>
        </div>
      ) : (
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <div ref={mapContainer} className="w-full h-full" />
        </div>
      )}
    </div>
  );
};

export default ContactMap;
