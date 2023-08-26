import avatar from './assets/avatar.png';
import instagram from './assets/instagram.png';
import linkdin from './assets/linkdin.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';
import github from './assets/github.png';
import youtube from './assets/youtube.png';
import medium from './assets/medium.png';
import website from './assets/website.png';
import { useRive, useStateMachineInput } from 'rive-react';
import character from './assets/character.riv';
import React from "react";
const STATE_MACHINE_NAME = 'State Machine 1';

function App() {

  const { rive, RiveComponent } = useRive({
    src: character,
    autoplay: true,
    animations: "hair-color"
  })



  return (
    <div className="mx-20 mt-6 mx-auto mb-5 max-w-sm flex-col rounded-3xl border-4 border-t-8 border-gray-900 bg-emerald-50 px-4 py-6 text-black shadow-2xl">
      <div className="text-center">
        {/* <img className="rounded-xl" alt="profile pic" src={avatar} /> */}
        <RiveComponent alt="profile pic" style={{ width: '-400px', height: '400px', }} />

        <p className="pt-2 text-lg font-medium">@karan-ksrk</p>
        <p className="text-sm font-extrabold text-gray-900">Full time developer part time awkward teenager</p>
      </div>
      <div className="my-3 grid grid-cols-5 items-center gap-4 px-4 ">

        <a href="https://twitter.com/karanksrk" target="_blank" rel="noopener" >
          <button className="fixed sticky h-12 w-12 transform animate-pulse hover:animate-bounce rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
            <img className="w-12 rounded-full" alt="profile pic" src={twitter} />
          </button>
        </a>

        <a href="https://github.com/karan-ksrk" target="_blank" rel="noopener">
          <button className="fixed sticky h-12 w-12 transform animate-pulse hover:animate-bounce rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
            <img className="w-12 rounded-full" alt="profile pic" src={github} />
          </button>
        </a>

        <a href="https://www.instagram.com/karan_ksrk/" target="_blank" rel="noopener">
          <button className="fixed sticky h-12 w-12 transform animate-pulse  hover:animate-bounce rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
            <img className="w-12 rounded-full" alt="profile pic" src={instagram} />
          </button>
        </a>

        <a href="https://www.linkedin.com/in/karan-ksrk/" target="_blank" rel="noopener">
          <button className="fixed sticky h-12 w-12 transform animate-pulse hover:animate-bounce rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
            <img className="w-12 rounded-full" alt="profile pic" src={linkdin} />
          </button>
        </a>

        <a href="https://www.facebook.com/ksrk47/" target="_blank" rel="noopener">
          <button className="fixed sticky h-12 w-12 transform animate-pulse  hover:animate-bounce rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
            <img className="w-12 rounded-full" alt="profile pic" src={facebook} />
          </button>
        </a>
      </div>
      <a href="https://dev.softbeaker.in" target="_blank" rel="noopener">
        <div className="my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 border-black px-4 shadow-xl">
          <div className="flex items-center">
            <img alt="photo" className="w-20 rounded-full" src={website} />
            <div className="ml-2">
              <div className="text-xs font-semibold">Check out my Website</div>
              <div className="flex text-xs font-light text-gray-600">
              dev.softbeaker.in<svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </a>

      <a href="https://www.youtube.com/channel/UC3jlv75GpZ8v-Hk-2JyzryQ" target="_blank" rel="noopener">
        <div className="my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 border-black px-4 shadow-xl">
          <div className="flex items-center">
            <img alt="photo" className="w-10 rounded-full" src={youtube} />
            <div className="ml-2">
              <div className="text-xs font-semibold">Check out my youtube channel</div>
              <div className="flex text-xs font-light text-gray-600">
                youtube.com<svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </a>

      <a href="https://medium.com/@ksrk" target="_blank" rel="noopener">
        <div className="my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 border-black px-4 shadow-xl">
          <div className="flex items-center">
            <img alt="photo" className="w-10 rounded-full" src={medium} />
            <div className="ml-2">
              <div className="text-xs font-semibold">Check out my blogs</div>
              <div className="flex text-xs font-light text-gray-600">
                medium.com<svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </a>

      

      <div className="text-center font-extrabold text-black">&copy; karan-ksrk</div>
    </div>
  );
}

export default App;
