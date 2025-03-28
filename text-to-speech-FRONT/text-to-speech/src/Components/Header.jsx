import React, {useState} from 'react'
import { settings, logo } from '../assets'
import styles from '../styles'

const Header = ({setMenuActive}) => {
  const [clicked, setClicked] = useState(true);

  return (
    <div className={`flex w-full h-[80px] bg-transparent justify-between mt-0 items-center px-5 shadow-lg`}>
      <div className='flex flex-row w-[300px] items-center gap-6'>
        <img src={logo} alt="logo" className='w-[60px] h-[60px]'/>
        <h2 className='text-[30px] text-white  rounded-md'>Text-to-Speech</h2>
      </div>
      <div className='flex flex-row w-1/5 items-center gap-6'>
      <h3 className='text-[20px] text-white font-semibold  rounded-md '>Settings </h3>
      <div className={`flex  w-[70px] h-[37px] border bg-transparent rounded-full ${clicked ? 'flex-row' : 'flex-row-reverse'}`}>
        <button className={`w-[35px] h-[35px] ${clicked ? 'bg-white' : 'bg-transparent'} rounded-full ${clicked ? 'text-blue-500' : 'text-white'} font-bold text-center text-[12px]`}
        onClick={() => {
          setClicked(prev => !prev);
          setMenuActive(prev => !prev);
          }}>{clicked ? "ON" : "OFF"}</button>
      </div>
      {/* <img src={settings} alt="menu" className='w-[50px] h-[50px] cursor-pointer'
       onClick={()=>setMenuActive(prevStat => !prevStat)} /> */}
      </div>
        
    </div>
  )
}

export default Header
