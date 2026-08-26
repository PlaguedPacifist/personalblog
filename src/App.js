
import rantinggif from './imgfiles/rantingbtngif.gif'
import headergif from './imgfiles/header.gif'
import artgif from './imgfiles/artgif.gif'
import writinggif from './imgfiles/writinggif.gif'
import websitesgif from './imgfiles/websitegif.gif'
import socialsgif from './imgfiles/socialsgif.gif'
import guestbookgif from './imgfiles/guestbookgif.gif'
import homegif from './imgfiles/homegif.gif'

import forgetmenot1 from './imgfiles/forgetmenot1.png'
import forgetmenot2 from './imgfiles/forgetmenot2.png'
import gardenias from './imgfiles/gardenia1.png'
import petunias from './imgfiles/petunia1.png'

import Wave from 'react-wavify'
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home'
import Art from './Art'
import Writing from './Writing'
import Websites from './Websites'
import Ranting from './Ranting'
import Socials from './Socials'
import Guestbook from './Guestbook'

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/Home" element={<Home />}/>
  <Route path="/Art" element={<Art />}/>
  <Route path="/Writing" element={<Writing />}/>
  <Route path="/Ranting" element={<Ranting />}/>
  <Route path="/Websites" element={<Websites />}/>
  <Route path="/Socials" element={<Socials />}/>
  <Route path="/Guestbook" element={<Guestbook />}/>
</Routes>
</BrowserRouter>
  <link rel="stylesheet" href="index.css" />
  <div id="header">
    <img src={headergif} />
  </div>







  <div id="sidetabs">
    <div id="tabs">
      <a href="Home">
        <img src={homegif} />
      </a>
    </div>
    <div id="tabs">
      <a href="Art">
        <img src={artgif} />
      </a>
    </div>
    <div id="tabs">
      <a href="Writing">
        <img src={writinggif} />
      </a>
    </div>
    <div id="tabs">
      <a href="Websites">
        <img src={websitesgif} />
      </a>
    </div>
    <div id="tabs">
      <a href="Ranting">
        <img src={rantinggif} />
      </a>
    </div>
    <div id="tabs">
      <a href="Socials">
        <img src={socialsgif} />
      </a>
    </div>
    <div id="tabs">
      <a href="Guestbook">
        <img src={guestbookgif} />
      </a>
    </div>
  </div>
  <div id="waves">
    <Wave fill='#9461ed85'
        paused={false}
        style={{ 
          display:'flex'


         }}
        options={{
          height: 0,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
  </div>
  
<div id="forgetmenot1">
  <img src={forgetmenot1} />
</div>
<div id="forgetmenot2">
  <img src={forgetmenot2} />
</div>
<div id="gardenia">
  <img src={gardenias} />
</div>
<div id="petunias">
  <img src={petunias} />
</div>

</>

  );
}
export default App;
// ad