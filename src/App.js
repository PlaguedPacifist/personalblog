
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

import Home from './App'
import Art from './App'
import Writing from './App'
import Websites from './App'
import Ranting from './App'
import Socials from './App'
import Guestbook from './App'

function App() {
  return (
<>

  <title>Homepage</title>
  <link rel="stylesheet" href="whatever.css" />
  <div id="header">
    <img src={headergif} />
  </div>


// ad


  <div id="maincontent">
    <h1>About Me!</h1>
    <p>17| Bi/Pan | He/Him or any pronouns you prefer | 🇵🇭 |
☀️💡|🚦💚💛♥️|🌙🧠📖⏰<br></br>
i like omori, hermitcraft+life series, and project moon!
trying out art, writing, and coding!!!<br></br>
you can call me Plagued/Plagy/Petunia or whatever funny nickname you have</p>
    <p>I basically just do whatever i'll be honest i draw, write, read, coding and play games for my hobbies!!!
<br></br> like to talk to people lots though only to people i already know y'know
I might also be a fair bit too attached and stuff blehnpx (i really dont mean to though so i'm very sorry if i'm being a bother sometimes, its ok to tell me off, seriously)
</p>
<p>I'm free whenever for whoever! just look through my socials and talk to me about stuff!</p>
  </div>




  <div id="sidetabs">
    <div id="tabs">
      <a href="Home.js">
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