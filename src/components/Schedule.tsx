export default function Schedule() {
  return (
    <section id="horarios" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gym-blue-900 dark:text-white">Horarios de Clases</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-colors duration-200">
            <thead className="bg-gym-blue-600 text-white">
              <tr>
                <th className="py-4 px-6 text-left">Hora</th>
                <th className="py-4 px-6">Lunes</th>
                <th className="py-4 px-6">Martes</th>
                <th className="py-4 px-6">Miércoles</th>
                <th className="py-4 px-6">Jueves</th>
                <th className="py-4 px-6">Viernes</th>
              </tr>
            </thead>
            <tbody className="dark:text-gray-300">
              <tr className="border-b dark:border-gray-600">
                <td className="py-4 px-6 font-semibold">7:00</td>
                <td className="py-4 px-6 text-center">Spinning</td>
                <td className="py-4 px-6 text-center">CrossFit</td>
                <td className="py-4 px-6 text-center">Yoga</td>
                <td className="py-4 px-6 text-center">HIIT</td>
                <td className="py-4 px-6 text-center">Body Pump</td>
              </tr>
              <tr className="border-b dark:border-gray-600">
                <td className="py-4 px-6 font-semibold">9:00</td>
                <td className="py-4 px-6 text-center">Yoga</td>
                <td className="py-4 px-6 text-center">Pilates</td>
                <td className="py-4 px-6 text-center">Zumba</td>
                <td className="py-4 px-6 text-center">Boxing</td>
                <td className="py-4 px-6 text-center">Funcional</td>
              </tr>
              <tr className="border-b dark:border-gray-600">
                <td className="py-4 px-6 font-semibold">11:00</td>
                <td className="py-4 px-6 text-center">HIIT</td>
                <td className="py-4 px-6 text-center">Body Combat</td>
                <td className="py-4 px-6 text-center">Spinning</td>
                <td className="py-4 px-6 text-center">CrossFit</td>
                <td className="py-4 px-6 text-center">Yoga</td>
              </tr>
              <tr className="border-b dark:border-gray-600">
                <td className="py-4 px-6 font-semibold">17:00</td>
                <td className="py-4 px-6 text-center">CrossFit</td>
                <td className="py-4 px-6 text-center">Zumba</td>
                <td className="py-4 px-6 text-center">Body Pump</td>
                <td className="py-4 px-6 text-center">Pilates</td>
                <td className="py-4 px-6 text-center">HIIT</td>
              </tr>
              <tr className="border-b dark:border-gray-600">
                <td className="py-4 px-6 font-semibold">19:00</td>
                <td className="py-4 px-6 text-center">Boxing</td>
                <td className="py-4 px-6 text-center">HIIT</td>
                <td className="py-4 px-6 text-center">Funcional</td>
                <td className="py-4 px-6 text-center">Spinning</td>
                <td className="py-4 px-6 text-center">CrossFit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}