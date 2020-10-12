import React from 'react';
import './App.css';
import { Layout } from 'antd';
import './sound.css';
import Sound from './Sound';

import audio1 from './sounds/1.wav';
import audio2 from './sounds/2.wav';
import audio3 from './sounds/3.wav';
import audio4 from './sounds/4.wav';
import audio5 from './sounds/5.wav';
import audio6 from './sounds/6.wav';
import audio7 from './sounds/7.mp3';
import audio8 from './sounds/8.wav';
import audio9 from './sounds/9.wav';
import audio10 from './sounds/10.wav';
import audio11 from './sounds/11.mp3';
import audio12 from './sounds/12.wav';
import audio13 from './sounds/13.wav';
import audio14 from './sounds/14.wav';
import audio15 from './sounds/15.aiff';
import audio16 from './sounds/16.wav';


function App() {
  return (
    
//     <div className="body">
//     <div className="main">
//     <div ><Sound audio={audio1}/></div>
//     <div ><Sound audio={audio2}/></div>
//     <div ><Sound audio={audio3}/></div>
//     <div ><Sound audio={audio4}/></div>
//     <div ><Sound audio={audio5}/></div>
//     <div ><Sound audio={audio6}/></div>
//     <div ><Sound audio={audio7}/></div>
//     <div ><Sound audio={audio8}/></div>
//     <div ><Sound audio={audio9}/></div>
//     <div ><Sound audio={audio10}/></div>
//     <div ><Sound audio={audio11}/></div>
//     <div ><Sound audio={audio12}/></div>
//     <div ><Sound audio={audio13}/></div>
//     <div ><Sound audio={audio14}/></div>
//     <div ><Sound audio={audio15}/></div>
//     <div ><Sound audio={audio16}/></div>
//     </div>
// </div>



<div class="frame">
    <div class="border_1">
    <div class="border_2">
      <div class="border_3">
        <div class="hole"></div>
      </div>
    </div>
    </div>
  <div class="bridge_base">
    <div class="bridge"></div>
    <div class="peg peg_1">
      <div class="string"><Sound audio={audio1}/></div>
    </div>
    <div class="peg peg_2">
      <div class="string delay2"><Sound audio={audio2}/></div>
    </div>
    <div class="peg peg_3">
      <div class="string delay3"><Sound audio={audio3}/></div>
    </div>
    <div class="peg peg_4">
      <div class="string delay3"><Sound audio={audio4}/></div>
    </div>
    <div class="peg peg_5">
      <div class="string delay2"><Sound audio={audio5}/></div>
    </div>
    <div class="peg peg_6">
      <div class="string "><Sound audio={audio6}/></div>
    </div>
  </div>

  <div class="jet jet_1">
    <svg class="plane" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
  <path fill="#242E30" fill-rule="evenodd" d="M6 21h8v-3h6c.28-1.243-.054-2.243-1-3-.946-.757-2.28-1.09-4-1l-2-3.5c-.57-1.512-.903-2.679-1-3.5-.097-.821-.43-2.488-1-5l-1-2-1 2c-.558 2.41-.891 4.077-1 5-.109.923-.442 2.09-1 3.5L4 14c-1.35.016-2.35.35-3 1-.65.65-.984 1.65-1 3h6v3z"/>
</svg>
  </div>

  <div class="jet jet_2">
    <svg class="plane delay-2" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
  <path fill="#242E30" fill-rule="evenodd" d="M6 21h8v-3h6c.28-1.243-.054-2.243-1-3-.946-.757-2.28-1.09-4-1l-2-3.5c-.57-1.512-.903-2.679-1-3.5-.097-.821-.43-2.488-1-5l-1-2-1 2c-.558 2.41-.891 4.077-1 5-.109.923-.442 2.09-1 3.5L4 14c-1.35.016-2.35.35-3 1-.65.65-.984 1.65-1 3h6v3z"/>
      
</svg>
  </div>

  <div class="jet jet_3">
    <svg class="plane delay-3 " xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
  <path fill="#242E30" fill-rule="evenodd" d="M6 21h8v-3h6c.28-1.243-.054-2.243-1-3-.946-.757-2.28-1.09-4-1l-2-3.5c-.57-1.512-.903-2.679-1-3.5-.097-.821-.43-2.488-1-5l-1-2-1 2c-.558 2.41-.891 4.077-1 5-.109.923-.442 2.09-1 3.5L4 14c-1.35.016-2.35.35-3 1-.65.65-.984 1.65-1 3h6v3z"/>
</svg>
  </div>

  <div class="jet jet_4">
    <svg class="plane delay-3" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
  <path fill="#242E30" fill-rule="evenodd" d="M6 21h8v-3h6c.28-1.243-.054-2.243-1-3-.946-.757-2.28-1.09-4-1l-2-3.5c-.57-1.512-.903-2.679-1-3.5-.097-.821-.43-2.488-1-5l-1-2-1 2c-.558 2.41-.891 4.077-1 5-.109.923-.442 2.09-1 3.5L4 14c-1.35.016-2.35.35-3 1-.65.65-.984 1.65-1 3h6v3z"/>
</svg>
  </div>

  <div class="jet jet_5 ">
    <svg class="plane delay-2" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
  <path fill="#242E30" fill-rule="evenodd" d="M6 21h8v-3h6c.28-1.243-.054-2.243-1-3-.946-.757-2.28-1.09-4-1l-2-3.5c-.57-1.512-.903-2.679-1-3.5-.097-.821-.43-2.488-1-5l-1-2-1 2c-.558 2.41-.891 4.077-1 5-.109.923-.442 2.09-1 3.5L4 14c-1.35.016-2.35.35-3 1-.65.65-.984 1.65-1 3h6v3z"/>
</svg>
  </div>

  <div class="jet jet_6 ">
    <svg class="plane" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
  <path fill="#242E30" fill-rule="evenodd" d="M6 21h8v-3h6c.28-1.243-.054-2.243-1-3-.946-.757-2.28-1.09-4-1l-2-3.5c-.57-1.512-.903-2.679-1-3.5-.097-.821-.43-2.488-1-5l-1-2-1 2c-.558 2.41-.891 4.077-1 5-.109.923-.442 2.09-1 3.5L4 14c-1.35.016-2.35.35-3 1-.65.65-.984 1.65-1 3h6v3z"/>
</svg>
  </div>


</div>

  );
}

export default App;
