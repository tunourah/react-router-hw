import './App.css';
import Containercard from './components/Containercard';

function App() {
  return (
    <>
    <div className='bg-gradient-to-r from-indigo-400 to-purple-600 h-screen flex flex-col items-center text-center justify-center overflow-hidden'>
      <h1 className='text-5xl text-white font-bold mb-6 drop-shadow-lg'>
        Choose Your Art Background
      </h1>
      <p className='text-center text-white p-4 max-w-md'>
        Click on a card below to change the background art style. Explore various styles to find the perfect match for your mood and creativity!
      </p>
      
      <div className='border-4 border-white rounded-lg p-4 shadow-lg animate-border'>
        <Containercard />
      </div>
    </div>
  </>
  );
}

export default App;
