import React from 'react'

const Settings = ({setVoice}) => {

  

  return (
    <div className='flex flex-col w-[300px] justify-between bg-transparent border items-center rounded-md py-8 shadow-2xl'>
      <h3 className='text-white text-[40px] font-semibold'>Settings</h3>
      <p className='text-white text-[20px]'>Voice Genre :</p>
      <div className='flex flex-row gap-4 text-white' 
        onChange={(event) => setVoice(prev => ({...prev,genre : event.target.value}))} >
          <label htmlFor='male'>Male</label>
          <input type="radio" id="male" name="genre" value='male' />
          <label htmlFor="female">Female</label>
          <input type="radio" id='female' name='genre' value='female' />
      </div>
      <p className='text-white'>Language:</p>
      <div className='flex flex-row gap-4 text-white'
        onChange={(event) => setVoice(prev => ({...prev,language : event.target.value}))}>
        <label htmlFor="spanish">Spanish</label>
        <input type="radio" id='spanish' name='language' value='spanish' />
        <label htmlFor="english">English</label>
        <input type="radio" id='english' name='language' value='english'/>
      </div>
      

      
    </div>
  )
}

export default Settings
