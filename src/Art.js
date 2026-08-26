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

import art1 from './imgfiles/1HoSOmoriStargazingUnfinished.png'
import art2 from './imgfiles/1PetuniaPlushie.png'
import art3 from './imgfiles/2LobotomyRegretNFragmentsSunny.png'
import art4 from './imgfiles/2LobotomyGreenStemAlterationAubrey.png'
import art5 from './imgfiles/2LobotomyGrinderMk4Kel.png'
import art6 from './imgfiles/2LobotomyNoiseNWingbeatBasil.png'
import art7 from './imgfiles/3AttemptatAnatomy.png'
import art8 from './imgfiles/3RespiteFromRealityUnfinished.png'
import art9 from './imgfiles/LobotomyEGOGreenStemAubreyFB.png'
import art10 from './imgfiles/LobotomyEGORegretSunnyFB.png'

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

  <title>Art</title>
  <link rel="stylesheet" href="whatever.css" />
  <div id="header">
    <img src={headergif} />
  </div>





  <div id="maincontent">
    <h1>Art!</h1>
    <p>Bunch of art stuff I drew</p>
    <img src={art1} />
    <p>House Of Spiders + Ryoshu x Omori (unfinished)</p>
    <img src={art2} />
    <p>Petunia Plushie</p>
    <img src={art3} />
    <p>Lobotomy E.G.O:: Regret and Fragments from Somewhere Sunny</p>
    <img src={art4} />
    <p>Lobotomy E.G.O:: Green Stem [Alteration] Aubrey</p>
    <img src={art5} />
    <p>Lobotomy E.G.O:: Grinder Mk4 Kel</p>
    <img src={art6} />
    <p>Lobotomy E.G.O:: Noise and Wingbeat Basil (Unfinished)</p>
    <img src={art7} />
    <p>Attempt at 3AttemptatAnatomy</p>
    <img src={art8} />
    <p>(OC) Volatile E.G.O:: Respite From Reality (Unfinished)</p>
    <img src={art9} />
    <p>Lobotomy E.G.O:: Green Stem Aubrey body (Unfinished)</p>
    <img src={art10} />
    <p>Lobotomy E.G.O:: Regret and Fragments from Somewhere Sunny body (Unfinished)</p>
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