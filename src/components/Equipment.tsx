export default function Equipment() {
  return (
    <section id="equipos" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gym-blue-900 dark:text-white">Equipamiento de Primera</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 transition-colors duration-200">
            <img src="https://images.unsplash.com/photo-1638805981949-362f5964521e?auto=format&fit=crop&q=80" alt="Máquinas de peso" className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="font-semibold mb-2 dark:text-white">Máquinas de Peso</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Equipamiento Technogym de última generación para entrenamiento de fuerza.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 transition-colors duration-200">
            <img src="https://images.unsplash.com/photo-1586401100295-7a8096fd231a?auto=format&fit=crop&q=80" alt="Pesas libres" className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="font-semibold mb-2 dark:text-white">Pesas Libres</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Amplia selección de mancuernas y barras para entrenamiento versátil.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 transition-colors duration-200">
            <img src="https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80" alt="Cardio" className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="font-semibold mb-2 dark:text-white">Zona Cardio</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Caminadoras, elípticas y bicicletas con pantallas integradas.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 transition-colors duration-200">
            <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80" alt="Funcional" className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="font-semibold mb-2 dark:text-white">Área Funcional</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Espacio equipado para entrenamiento funcional y CrossFit.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 transition-colors duration-200">
            <img src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80" alt="Yoga" className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="font-semibold mb-2 dark:text-white">Sala de Yoga</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Espacio tranquilo y equipado para clases de yoga y pilates.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 transition-colors duration-200">
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80" alt="Spinning" className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="font-semibold mb-2 dark:text-white">Sala de Spinning</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Bicicletas de spinning profesionales con monitor de rendimiento.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 transition-colors duration-200">
            <img src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80" alt="Boxeo" className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="font-semibold mb-2 dark:text-white">Área de Boxeo</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Ring profesional y sacos de boxeo para entrenamiento de combate.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 transition-colors duration-200">
            <img src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&q=80" alt="Estiramiento" className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="font-semibold mb-2 dark:text-white">Zona de Estiramiento</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Área dedicada para estiramientos y recuperación muscular.</p>
          </div>
        </div>
      </div>
    </section>
  );
}