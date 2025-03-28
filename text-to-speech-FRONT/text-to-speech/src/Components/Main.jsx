import React from 'react'

const Main = ({handleSynthesize,audioURL,setInput}) => {
  return (
    <div>
      <div className='flex flex-col w-full h-full gap-8 items-center justify-center shadow-xl bg-transparent rounded-lg'>
      <textarea type='text' placeholder='Put text in here/Introduce el texto aqui' className='w-full h-[150px] bg-transparent text-white font-semibold font-[Inter
      text-[20px] rounded-xl' onChange={(event) => setInput(event.target.value)} />
      <button onClick={handleSynthesize} className='w-full py-3 text-white rounded-full bg-slate-900'>Sintetizar Audio</button>
       <audio controls src={audioURL} className='w-full ' />
      </div>
    </div>
  )
}

export default Main
