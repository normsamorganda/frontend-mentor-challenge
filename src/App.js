import './App.css';
import hero from './images/illustration-hero.svg'
import music from './images/icon-music.svg'
function App() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='h-25 w-[400px] rounded-lg bg-white'>
        <div>
          <img className='rounded-t-lg' src={hero}></img>
        </div>
        <div className='flex flex-col text-center'>
          <h1 className='text-3xl font-bold py-6'> Order Summary </h1>
          <p className='w-[300px] mx-auto pb-6 text-gray-400'>You can now listen to millions of songs audiobooks, and podcast on any device anywhere you like!</p>
          <div className='bg-gray-100 flex w-[300px] mx-auto justify-around items-center rounded py-3'>
            <img src={music}></img>
            <div>
              <h3 className='font-bold'>Annual Plan</h3>
              <p className='text-gray-400'>$59.99/Year</p>
            </div>
            <a className='underline text-violet-600 font-bold cursor-pointer'>Change</a>
          </div>

          <button className='w-[300px] bg-blue-600 mx-auto rounded-lg py-2 my-6 text-white font-bold shadow-lg shadow-gray-500/50 hover:bg-blue-500'>Proceed to Payment</button>
          <button className='font-bold text-gray-500 cursor-pointer hover:underline mb-10'>Cancel Order</button>
          
        </div>
      
      </div>
    
    </div>
  );
}

export default App;
