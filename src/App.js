
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
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { Homefunc } from './Home'
import { Artfunc } from './Art'
import { Writingfunc } from './Writing'
import { Websitesfunc } from './Websites'
import { Rantingfunc } from './Ranting'
import { Socialsfunc } from './Socials'
import { Guestbookfunc } from './Guestbook'


function App() {
  return (
<>
  <link rel="stylesheet" href="index.css" />
  <div id="header">
    <img src={headergif} />
  </div>
<BrowserRouter>
<nav>
  <div id="sidetabs">
    <div id="tabs">
      <Link to="#/Home">
        <img src={homegif} />
      </Link>
    </div>
    <div id="tabs">
      <Link to="#/Art">
        <img src={artgif} />
      </Link>
    </div>
    <div id="tabs">
      <Link to="#/Writing">
        <img src={writinggif} />
      </Link>
    </div>
    <div id="tabs">
      <Link to="#/Websites">
        <img src={websitesgif} />
      </Link>
    </div>
    <div id="tabs">
      <Link to="#/Ranting">
        <img src={rantinggif} />
      </Link>
    </div>
    <div id="tabs">
      <Link to="#/Socials">
        <img src={socialsgif} />
      </Link>
    </div>
    <div id="tabs">
        <Link to="#/Guestbook">
        <img src={guestbookgif} />
      </Link>
    </div>
  </div>
  </nav>

<Routes>
  <Route path="/Home" element={<Homefunc />}/>
  <Route path="/Art" element={<Artfunc />}/>
  <Route path="/Writing" element={<Writingfunc />}/>
  <Route path="/Ranting" element={<Rantingfunc />}/>
  <Route path="/Websites" element={<Websitesfunc />}/>
  <Route path="/Socials" element={<Socialsfunc />}/>
  <Route path="/Guestbook" element={<Guestbookfunc />}/>
</Routes>
</BrowserRouter>

  
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