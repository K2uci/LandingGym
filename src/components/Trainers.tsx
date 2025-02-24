export default function Trainers() {
  return (
    <section id="entrenadores" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gym-blue-900 dark:text-white">Nuestros Entrenadores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1597347343908-2937e7dcc560?auto=format&fit=crop&q=80" alt="Carlos Rodríguez" className="w-48 h-48 mx-auto object-cover rounded-full mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Carlos Rodríguez</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Especialista en musculación y nutrición deportiva</p>
            <ul className="text-sm text-gray-500 dark:text-gray-400">
              <li>✓ 8 años de experiencia</li>
              <li>✓ Certificación NSCA</li>
              <li>✓ Especialidad en hipertrofia</li>
            </ul>
          </div>
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80" alt="Ana Martínez" className="w-48 h-48 mx-auto object-cover rounded-full mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Ana Martínez</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Experta en pérdida de peso y fitness funcional</p>
            <ul className="text-sm text-gray-500 dark:text-gray-400">
              <li>✓ 6 años de experiencia</li>
              <li>✓ Certificación ACE</li>
              <li>✓ Especialidad en HIIT</li>
            </ul>
          </div>
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80" alt="Miguel Torres" className="w-48 h-48 mx-auto object-cover rounded-full mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Miguel Torres</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Instructor de CrossFit y preparación física</p>
            <ul className="text-sm text-gray-500 dark:text-gray-400">
              <li>✓ 5 años de experiencia</li>
              <li>✓ CrossFit Level 2</li>
              <li>✓ Especialidad en fuerza</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}