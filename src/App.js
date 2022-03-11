import "./App.css";
import logo from "./assests/logo.jpg";
import Discord from "./assests/Discord-Logo-Black.svg";
import hero from "./assests/heroEmpty.png";
import live from "./assests/live.png";
import Moment from "react-moment";
import { useState, useEffect } from "react";
import patten1 from "./assests/patten01.png";
import explain from "./assests/explain.png";
import ufo from "./assests/UFO.png";
import id from "./assests/id.png";
import planet from './assests/planet.png';
import computer from './assests/computer.png';

function App() {
  const [time, setTime] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="bg-gradient-to-b from-white to-stone-500">
      <nav>
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              {/* <!-- logo --> */}
              <div>
                <a
                  href="#"
                  class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img src={logo} alt="" className="w-32" />
                </a>
              </div>

              {/* <!-- primary nav --> */}
              <div class="hidden md:flex items-center space-x-1">
                {/* <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">
                    Features
                  </a>
                  <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">
                    Pricing
                  </a> */}
              </div>
            </div>

            {/* <!-- secondary nav --> */}
            <div class="hidden md:flex items-center space-x-3">
              <a href="">
                <svg
                  class="h-8 w-8 text-green-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="">
                <svg
                  class="h-8 w-8 text-green-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="">
                <svg
                  className="w-8 h-8 fill-green-200"
                  width="71"
                  height="55"
                  viewBox="0 0 71 55"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="71" height="55" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>

            {/* <!-- mobile button goes here --> */}
            <div class="md:hidden flex items-center">
              <button class="mobile-menu-button" onClick={()=>setOpen(!open)}>
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- mobile menu --> */}
        {open ? (
          <div class="mobile-menu mx-3 md:hidden">
              <a href="">
              <div className="flex">

                <svg
                  class="h-8 w-8 text-green-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <p className="mx-3 text-green-300">Instagram</p>
                </div>
              </a>
              <a href="">
                <div className="flex">
                <svg
                  class="h-8 w-8 text-green-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
                <p className="mx-3 text-green-300">Twitter</p>

                </div>
               
              </a>
              <a href="">
              <div className="flex">

                <svg
                  className="w-8 h-8 fill-green-200"
                  width="71"
                  height="55"
                  viewBox="0 0 71 55"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="71" height="55" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="mx-3 text-green-300">Discord</p>
                </div>

              </a>          </div>
        ) : (
          <div class="mobile-menu hidden md:hidden">
            <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
              Features
            </a>
            <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
              Pricing
            </a>
          </div>
        )}
      </nav>

      {/* <!-- content goes here --> */}
      <div class="py-16 text-center">
        <img src={hero} alt="" className="max-w-120" />
        {/* <h2 class="font-extrabold text-4xl">Navbars in Tailwind!</h2> */}
      </div>
      {/* <!-- live studio --> */}
      <div>
        <h2 class="font-extrabold text-3xl text-white py-4 ml-8">
          Innovation department
        </h2>

        <div className="flex">
          <h2 class="font-extrabold text-4xl py-4 ml-8">ＬＩＶＥ</h2>
          <div className="flex items-center space-x-3">
            <svg
              className="w-8 h-8 "
              viewBox="0 0 100 100"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>
        </div>

        <h2 class="font-extrabold text-2xl ml-8">
          <Moment format="YYYY/MM/DD hh:mm:ss">{time}</Moment>
        </h2>
      </div>
      <div class="py-16 text-center 	">
        {/* <div className="bg-[url('./assests/live.png')] bg-origin-border bg-center bg-cover relative flex flex-col md:ring-1 ring-white/10 ring-inset max-w-5xl mx-auto h-[46rem] md:h-[50rem] md:rounded-md overflow-hidden">
          <img src={computer} className="absolute left-0 bottom-20 h-[20rem]"/>
        </div> */}
        <img src={live} alt="" className="max-w-120" />

        {/* <h2 class="font-extrabold text-4xl">Navbars in Tailwind!</h2> */}
      </div>

      {/* <!-- concept --> */}

      <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Story
            </h1>
            <div class="mx-auto mb-4  lg:mx-0 w-1/2 pt-3 border-b-4 border-black opacity-25"></div>

            <p className="mt-6 mb-8 text-lg sm:mb-12">
              這世界正在崩解，跳脫了原本的想像，你
              以為的迪士尼樂園只是一個幻想，實際上
              根本沒有那麼美好，只需加點調味料或是
              變因，就能像連鎖反應一樣毀了這場童話
              但也可能異常的美好，童話之所以給小朋
              友看，是因為它沒有過多的社會色彩，我
              們也因此可以逃離現實，讓我們嘗試在裡
              面添加一些色彩，創造出只屬於大人的格
              林童話吧!只要能遠離現實，不管去哪個 世界，都是童話故事。
            </p>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={ufo}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      <div class="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-center font-extrabold text-6xl">Explain</h1>
        <div className="flex justify-center">
          <div class="mx-auto mb-4  lg:mx-0 w-1/2 pt-3 border-b-4 border-black opacity-25"></div>
        </div>
        <img src={explain} className="h-88 w-full" alt="" />
        {/* <div className="w-48 h-48 bg-gray-400 "></div> */}
      </div>
    </div>
  );
}

export default App;
