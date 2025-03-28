import React, { useState, useEffect } from 'react';
import Main from './Components/Main';
import Settings from './Components/Settings';
import Header from './Components/Header';
import styles from './styles';
import ParticlesBg from 'particles-bg'
import './App.css'

function App() {
  const [audioURL, setAudioURL] = useState('');
  const [input, setInput] = useState("");
  const [voice, setVoice] = useState({genre: "",language: ""});
  const [menuActive,setMenuActive] = useState (true);

  useEffect(() => {
    console.log(voice);
  },[voice]); 

  const voiceSettings = {
      female: {
        spanish: "es-LA_SofiaV3Voice",
        english: "en-US_LisaV3Voice"
      },
      male: {
        spanish: "es-ES_EnriqueV3Voice",
        english: "en-US_KevinV3Voice"
      }
    }
    
   
  

  function handleVoice(voice) {
    if (voice.genre === 'male') {
       return voice.language === 'spanish' ?  voiceSettings.male.spanish : voiceSettings.male.english;
    } else if (voice.genre === 'female') {
      return voice.language === 'spanish' ? voiceSettings.female.spanish : voiceSettings.female.english;
    
  } }
 
  const handleSynthesize = () => {
    
    let settings = handleVoice(voice);
    fetch(process.env.REACT_APP_API_URL,{
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        input: input,
        voice: settings
      })
    }) // Reemplaza con la URL de tu servidor
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const audioBlob = URL.createObjectURL(blob);
        setAudioURL(audioBlob);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='App'>
      <ParticlesBg color="#ffffff" num={100} type="circle" bg={true} />
       <Header 
        setMenuActive={setMenuActive}
      />
       <div className='w-full h-[100vh] flex items-center justify-center flex-col
    gap-20 pt-0'>
      <div className='flex flex-row w-full justify-center gap-10'>
      <Main 
        setInput={setInput}
        handleSynthesize={handleSynthesize}
        audioURL={audioURL}
      />
      {menuActive && <Settings setVoice={setVoice} />}
       
      </div>
     
     
     
    </div>
  </div>

   
  );
}


export default App;
