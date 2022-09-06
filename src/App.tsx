import { faContactCard, faEnvelope, faPaperPlane, faTowerCell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NavBar from './Component/NavBar/NavBar';
import Pages from './Pages/Pages.rout';


function App() {
  return (

    <div className='h-screen overflow-x-hidden scroll-smooth overflow-y-visible ' id="page-container">
      <div className='sticky top-0 w-full z-40'>
        <NavBar />
      </div>
      <div className='overflow-hidden h-fit'>
        <Pages />
        <footer className='bg-primary w-full text-colorid4e749ecb justify-center items-center flex flex-col py-12'>
          <div className='flex flex-col text-center items-center font-bold text-3xl'>
            <FontAwesomeIcon icon={faTowerCell} className="h-10" />
            aleeert
          </div>

          <div className=' grid grid-cols-2 md:grid-cols-4 items-center w-fit justify-center mt-10 space-x-14 space-y-2'>
            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
              <FontAwesomeIcon icon={faPaperPlane} className="h-6" />
              <span>
                Telegram
              </span>
            </div>

            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
              <FontAwesomeIcon icon={faPaperPlane} className="h-6" />
              <span>
                Telegram
              </span>
            </div>

            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
              <FontAwesomeIcon icon={faEnvelope} className="h-6" />
              <span>
                Email
              </span>
            </div>

            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
              <FontAwesomeIcon icon={faContactCard} className="h-6" />
              <span>
                About
              </span>
            </div>
          </div>
          <div className='flex flex-col  w-full justify-center mt-10 md:flex-row items-center  '>
            <span className='max-w-lg text-center text-xs items-center flex w-full'>
              DISCLAIMER: Aleeert is not a broker/dealer and has no fiduciary relationship or obligation to you in connection with any trades or other decisions or activities effected by you using Aleeert Services. All order requests are sended automatically to cryptocurrency exchange, based on the parameters of your trading command, and you are solely responsible for determining whether any investment, investment strategy or related transaction is appropriate for you according to your personal investment objectives, financial circumstances and risk tolerance, and you shall be solely responsible for any loss or liability therefrom.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
