export default function Footer() {
  return (
    <footer className="bg-gym-blue-900 dark:bg-gray-800 text-white py-12 mt-20 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">K2's GYM</h3>
            <p className="text-gray-300">
              Tu gimnasio de confianza para alcanzar tus metas fitness.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horarios</h3>
            <ul className="text-gray-300">
              <li>Lunes a Viernes: 6:00 AM - 10:00 PM</li>
              <li>Sábados: 8:00 AM - 8:00 PM</li>
              <li>Domingos: 9:00 AM - 2:00 PM</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="text-gray-300">
              <li>📍 Av. Ejercito Nacional 253, Granada, Miguel Hidalgo</li>
              <li>📞 (55) 5523-4789</li>
              <li>✉️ info@k2sgym.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} K2's GYM. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}