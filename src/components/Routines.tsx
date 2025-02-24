export default function Routines() {
  return (
    <section id="rutinas" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gym-blue-900 dark:text-white">Nuestras Rutinas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80" alt="Pérdida de peso" className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 dark:text-white">Pérdida de Peso</h3>
              <p className="text-gray-600 dark:text-gray-300">Programa intensivo de 12 semanas para quemar grasa y tonificar el cuerpo. Incluye plan nutricional personalizado.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
            <img src="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&q=80" alt="Ganancia muscular" className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 dark:text-white">Ganancia Muscular</h3>
              <p className="text-gray-600 dark:text-gray-300">Rutina de 16 semanas enfocada en hipertrofia muscular con énfasis en ejercicios compuestos y nutrición específica.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
            <img src="https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&q=80" alt="Resistencia" className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 dark:text-white">Resistencia</h3>
              <p className="text-gray-600 dark:text-gray-300">Programa de 8 semanas para mejorar tu resistencia cardiovascular y muscular. Ideal para preparación de eventos deportivos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}