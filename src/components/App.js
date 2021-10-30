import { heroIcon } from './IconUtils'

function App() {
  return (
    <div className="flex justify-center items-center bg-gray-800 h-screen">
      <button className="bg-green-600 text-white font-bold p-3 rounded-md shadow-lg flex space-x-2"><span>Blank Project</span> {heroIcon}</button>
    </div>
  )
}

export default App
