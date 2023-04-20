import React from 'react';
import blackimg from '../images/apple logo.png';
import whiteimg from '../images/white logo.png'
import './Gridsix.css'

const Gridsix = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-3 p-4 gap-3'>
    {/* first gtrid start */}
        <div className='flex flex-col h-[600px] grida justify-start items-center'>
            <div className='flex items-center mt-4'>
                <img className='w-10' src={blackimg}></img>
                <h3 className='text-[40px] font-semibold'>Trade In</h3>
            </div>
            <p className='text-[25px] text-centre'>An easy way to upgrade and save.</p>
            <p className='text-blue-500 font-semibold text-[15px] '>See what your device is worth > </p>
        </div>
    {/* first grid end */}
    {/* second grid start */}
        <div className='flex flex-col h-[600px] pb-8 gridb justify-end items-center'>
            <div className='flex items-center gap-1 mt-4'>
                <img className='w-10' src={whiteimg}></img>
                <h3 className='text-[40px] text-white font-semibold'>Trade In</h3>
            </div>
            <p className='text-[25px] text-white text-centre'>Apple Worldwide Developers Conference  
            </p><b></b>
            <p className='text-[25px] text-white text-centre'>Join us online June 5-9
            </p>
            <p className='text-blue-500 font-semibold text-[15px] '>Learn More > </p>
        </div>
        {/* second grid end */}
        {/* third grid start */}
        <div className='flex flex-col h-[600px] gridc justify-start items-center'>
            <div className='flex items-center mt-4'>
                <h3 className='text-[40px] font-semibold'>iPad</h3>
            </div>
            <p className='text-[25px] text-centre'>
              Lovable. Drawable. Magical.
            </p>
            <div className='flex  gap-8'>
            <p className='text-blue-500 font-semibold text-[15px] '>Learn More > </p>
            <p className='text-blue-500 font-semibold text-[15px] '>Buy > </p>
            </div>
        </div>
        {/* third grid end */}
        {/* fourth grid start */}
        <div className='flex flex-col h-[600px] gridd justify-start items-center'>
            <div className='flex items-center mt-4'>
                <h3 className='text-[40px] text-white font-semibold'>MacBook Pro</h3>
            </div>
            <p className='text-[25px] text-white  text-centre'>
              Supercharged by M2 Pro and M2 Max
            </p>
            <div className='flex  gap-8'>
            <p className='text-blue-500 font-semibold text-[15px] '>Learn More > </p>
            <p className='text-blue-500 font-semibold text-[15px] '>Buy > </p>
            </div>
        </div>
        {/* fourth grid end */}
        {/* fifth grid start */}
        <div className='flex flex-col h-[600px] gride justify-start items-center'>
            <div className='flex items-center mt-4'>
                <h3 className='text-[50px] text-white font-semibold'>HomePod</h3>
            </div>
            <p className='text-[25px] text-white  text-centre'>
              Profound Sound
            </p>
            <div className='flex  gap-8'>
            <p className='text-blue-500 font-semibold text-[15px] '>Learn More > </p>
            <p className='text-blue-500 font-semibold text-[15px] '>Buy > </p>
            </div>
        </div>
        {/* sixth grid start */}
        <div className='flex flex-col h-[600px] gridf justify-start items-center'>
            <div className='flex items-center gap-1 mt-4'>
                <img src={blackimg} className='w-9'></img>
                <h3 className='text-[40px] font-semibold'>Card</h3>
            </div>
            <div className="justify-center items-center">
            <p className='text-[25px]   text-centre'>
              Get up to 3 % Daily Cash back
            </p>
            <p className='text-[25px] pl-[60px] text-centre'>
              with every purchase.
            </p>
            </div>
            <div className='flex  gap-8'>
            <p className='text-blue-500 font-semibold text-[15px] '>Learn More > </p>
            <p className='text-blue-500 font-semibold text-[15px] '>Buy > </p>
            </div>
        </div>
        {/* grid six end */}
</div>
  )
}

export default Gridsix ;