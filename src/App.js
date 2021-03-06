import avatar from './assets/avatar.png';
import instagram from './assets/instagram.png';
import linkdin from './assets/linkdin.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';
import github from './assets/github.png';
import youtube from './assets/youtube.png';
import medium from './assets/medium.png';
import website from './assets/website.png';

function App() {
  return (
    <div class="mx-20 mt-6 mx-auto mb-5 max-w-sm flex-col rounded-3xl border-4 border-t-8 border-gray-900 bg-emerald-50 px-4 py-6 text-black shadow-2xl">
  <div class="text-center">
    <img class="rounded-full" alt="profile pic" src={avatar} />

    <p class="pt-2 text-lg font-medium">@karan-ksrk</p>
    <p class="text-sm font-extrabold text-gray-900">Full time developer part time awkward teenager</p>
  </div>
  <div class="my-3 grid grid-cols-5 items-center gap-4 px-4 ">

    <a href="https://twitter.com/karanksrk" target="_blank" rel="noopener" >
    <button class="fixed sticky h-12 w-12 transform animate-pulse rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
      <img class="w-12 rounded-full" alt="profile pic" src={twitter} />
    </button>
    </a>

    <a href="https://github.com/karan-ksrk" target="_blank" rel="noopener">
      <button class="fixed sticky h-12 w-12 transform animate-pulse rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
        <img class="w-12 rounded-full" alt="profile pic" src={github} />
      </button>
    </a>

    <a href="https://www.instagram.com/karan_ksrk/" target="_blank" rel="noopener">
    <button class="fixed sticky h-12 w-12 transform animate-pulse rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
      <img class="w-12 rounded-full" alt="profile pic" src={instagram} />
    </button>
        </a>

    <a href="https://www.linkedin.com/in/karan-ksrk/" target="_blank" rel="noopener">
    <button class="fixed sticky h-12 w-12 transform animate-pulse rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
      <img class="w-12 rounded-full" alt="profile pic" src={linkdin} />
    </button>
    </a>

    <a href="https://www.facebook.com/ksrk47/" target="_blank" rel="noopener">
    <button class="fixed sticky h-12 w-12 transform animate-pulse rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
      <img class="w-12 rounded-full" alt="profile pic" src={facebook} />
    </button>
    </a>
  </div>

  <a href="https://www.youtube.com/channel/UC3jlv75GpZ8v-Hk-2JyzryQ" target="_blank" rel="noopener">
    <div class="my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 border-black px-4 shadow-xl">
      <div class="flex items-center">
        <img alt="photo" class="w-10 rounded-full" src={youtube} />
        <div class="ml-2">
          <div class="text-xs font-semibold">Check out my youtube channel</div>
          <div class="flex text-xs font-light text-gray-600">
            youtube.com<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
    <div class="my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 border-black px-4 shadow-xl">
      <div class="flex items-center">
        <img alt="photo" class="w-10 rounded-full" src={medium} />
        <div class="ml-2">
          <div class="text-xs font-semibold">Check out my blogs</div>
          <div class="flex text-xs font-light text-gray-600">
            medium.com<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </a>

  <a href="https://ksrk47.xyz/" target="_blank" rel="noopener">
    <div class="my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 border-black px-4 shadow-xl">
      <div class="flex items-center">
        <img alt="photo" class="w-10 rounded-full" src={website} />
        <div class="ml-2">
          <div class="text-xs font-semibold">My Website</div>
          <div class="flex text-xs font-light text-gray-600">
            ksrk47.xyz<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </a>

  <div class="text-center font-extrabold text-black">&copy; karan-ksrk</div>
</div>
  );
}

export default App;
