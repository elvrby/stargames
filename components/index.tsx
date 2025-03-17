"use client";

import React from 'react';
import Image from 'next/image';
import MobileComponent from './addons/mobileheader';
import NewProductComponent from './addons/newproduct';

const IndexComponent: React.FC = () =>{
    return(
      <main className='block lg:flex'>
        {/* Desktop Header Navigasi */}
        <header className='w-2/7 h-screen p-2 text-zinc-500 font-bold hidden lg:block'>
          <div className='bg-zinc-900 w-full p-5 pt-2 pb-2 pl-2 block justify-between rounded-lg'>
            <ul className='w-full p-4 pt-2 flex'><li><a className='w-full flex items-center textniconH' href="">
            <svg className='w-7 mr-2 fill-zinc-500 textniconH' baseProfile="tiny" version="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3  c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768  C18.184,8.34,12,3,12,3z"/></svg>
            Home</a></li></ul>
            <ul className='w-full p-4 pb-2 flex'><li><a className='w-full flex items-center textniconH' href="">
            <svg className='w-7 mr-2 fill-zinc-500 textniconH' version="1.1" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="m344.5 298c15-23.6 23.8-51.6 23.8-81.7 0-84.1-68.1-152.3-152.1-152.3-84.1 0-152.2 68.2-152.2 152.3s68.1 152.3 152.1 152.3c30.5 0 58.9-9 82.7-24.4l6.9-4.8 108.6 108.6 33.7-34.3-108.5-108.6 5-7.1zm-43.1-166.8c22.7 22.7 35.2 52.9 35.2 85s-12.5 62.3-35.2 85-52.9 35.2-85 35.2-62.3-12.5-85-35.2-35.2-52.9-35.2-85 12.5-62.3 35.2-85 52.9-35.2 85-35.2 62.3 12.5 85 35.2z"/></svg>
            Search</a></li></ul>
          </div>

          <div className='bg-zinc-900 w-full p-5 pt-2 pb-2 pl-2 mt-5 block justify-between rounded-lg'>
            <div className='pl-2'>

              <div className='w-full pl-2'>
                <ul><li className='w-full flex items-center textniconH'><svg className='w-7 items-center flex mr-2 fill-zinc-500 textniconH' height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><path d="M8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm32-8H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-2 18H18v-4h20v4zm-8 8H18v-4h12v4zm8-16H18v-4h20v4z"/></svg>Categories</li></ul>
              </div>

              <div className='mt-2 p-0 text-white'>
                <div>
                  <ul className='w-full p-2 boxH'><li className='w-full flex items-center'><Image className='rounded-sm' src={"/IMG/GTAV.png"} alt="" width={40} height={40}></Image>
                  <a className='ml-4 text-lg block w-full' href="">Games <span className='text-sm block text-zinc-500 font-semibold'>Top Games</span></a></li></ul>
                </div>
                <div>
                  <ul className='w-full p-2 boxH'><li className='w-full flex items-center'><Image className='rounded-sm' src={"/IMG/MSOffice.png"} alt="" width={40} height={40}></Image>
                  <a className='ml-4 text-lg block w-full' href="">Applications <span className='text-sm block text-zinc-500 font-semibold'>Top Apps For Your Work</span></a></li></ul>
                </div>
              </div>

            </div>
          </div>
        </header>

        {/* Mobile Header */}
        <div>
          <MobileComponent></MobileComponent>
        </div>
        

        {/*       Main Konten        */}
        <div className='w-full lg:m-2 mt-4 bg-zinc-900 rounded-tl-2xl'>
          <div className='p-6'>
            <div className='mb-5'>
              <Image className='w-full rounded-lg lg:rounded-2xl' src={"/IMG/NexGames-Banner.png"} alt='' width={2000} height={1000}></Image>
            </div>

            {/* Top Game & Apps */}
            <div>
              <h2 className='text-3xl font-bold'>Top Games & Apps</h2>
              <span className='text-sm'>Our Recommendations For You</span>
            </div>

            <div className='w-full block lg:flex mt-5 justify-between'>

              <div className='lg:w-2/8 h-80 bg-zinc-800 rounded-2xl m-2 mb-5 lg:mb-2 shadowH'>
                {/* Border Image */}
                <div className='w-full h-40 relative'>
                  <Image className='rounded-t-2xl' src="/IMG/GTAV-1.jpg" alt="Gambar GTAV" fill style={{ objectFit: "cover", objectPosition: "center" }}/>
                </div>
                <div className='p-3'>
                  <div className='w-full flex items-center justify-between'>
                    <svg className='fill-zinc-500 w-6' height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xmlns="http://www.w3.org/2000/svg"><g><path d="M3.765,46.362l19.836,2.873V30.257H3.765V46.362z M3.765,27.546h19.836V8.566L3.765,11.439V27.546z M26.312,49.628   l26.616,3.855V30.257H26.312V49.628z M26.312,8.172v19.374h26.616V4.319L26.312,8.172z"/></g></svg>
                    <span className='text-xs bg-red-800 pl-3 pr-3 rounded-lg'>Trends</span>
                  </div>
                  <div>
                    <h2 className='font-bold text-xl'>Grand Theft Auto V</h2>
                    <div className='w-full flex'>
                    <span className="text-xs" style={{ wordSpacing: "0.5rem" }}>
                      Action Story RPG
                    </span>
                    </div>
                    
                  </div>
                </div>
                
              </div>

              <div className='lg:w-2/8 h-80 bg-zinc-800 rounded-2xl m-2 mb-5 lg:mb-2 shadowH'>
                {/* Border Image */}
                <div className='w-full h-40 relative'>
                  <Image className='rounded-t-2xl' src="/IMG/EldenRing-1.png" alt="Gambar GTAV" fill style={{ objectFit: "cover", objectPosition: "center" }}/>
                </div>
                <div className='p-3'>
                  <div className='w-full flex items-center justify-between'>
                    <svg className='fill-zinc-500 w-6' height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xmlns="http://www.w3.org/2000/svg"><g><path d="M3.765,46.362l19.836,2.873V30.257H3.765V46.362z M3.765,27.546h19.836V8.566L3.765,11.439V27.546z M26.312,49.628   l26.616,3.855V30.257H26.312V49.628z M26.312,8.172v19.374h26.616V4.319L26.312,8.172z"/></g></svg>
                    <span className='text-xs bg-red-800 pl-3 pr-3 rounded-lg'>Trends</span>
                  </div>
                  <div>
                    <h2 className='font-bold text-xl'>Elden Ring: NIGHTREIN</h2>
                    <div className='w-full flex'>
                    <span className="text-xs" style={{ wordSpacing: "0.5rem" }}>
                      Action Exploration RPG
                    </span>
                    </div>
                    
                  </div>
                </div>
                
              </div>

              <div className='lg:w-2/8 h-80 bg-zinc-800 rounded-2xl m-2 mb-5 lg:mb-2 shadowH'>
                {/* Border Image */}
                <div className='w-full h-40 relative'>
                  <Image className='rounded-t-2xl' src="/IMG/MSOffice-1.jpg" alt="Gambar GTAV" fill style={{ objectFit: "cover", objectPosition: "center" }}/>
                </div>
                <div className='p-3'>
                  <div className='w-full flex items-center justify-between'>
                    <svg className='fill-zinc-500 w-6' height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xmlns="http://www.w3.org/2000/svg"><g><path d="M3.765,46.362l19.836,2.873V30.257H3.765V46.362z M3.765,27.546h19.836V8.566L3.765,11.439V27.546z M26.312,49.628   l26.616,3.855V30.257H26.312V49.628z M26.312,8.172v19.374h26.616V4.319L26.312,8.172z"/></g></svg>
                    <span className='text-xs bg-red-800 pl-3 pr-3 rounded-lg'>Trends</span>
                  </div>
                  <div>
                    <h2 className='font-bold text-xl'>Microsoft Office</h2>
                    <div className='w-full flex'>
                    <span className="text-xs" style={{ wordSpacing: "0.5rem" }}>
                      Applications
                    </span>
                    </div>
                    
                  </div>
                </div>
                
              </div>

              <div className='lg:w-2/8 h-80 bg-zinc-800 rounded-2xl m-2 mb-5 lg:mb-2 shadowH'>
                {/* Border Image */}
                <div className='w-full h-40 relative'>
                  <Image className='rounded-t-2xl' src="/IMG/AdobeCC-1.jpg" alt="Gambar GTAV" fill style={{ objectFit: "cover", objectPosition: "center" }}/>
                </div>
                <div className='p-3'>
                  <div className='w-full flex items-center justify-between'>
                    <svg className='fill-zinc-500 w-6' height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xmlns="http://www.w3.org/2000/svg"><g><path d="M3.765,46.362l19.836,2.873V30.257H3.765V46.362z M3.765,27.546h19.836V8.566L3.765,11.439V27.546z M26.312,49.628   l26.616,3.855V30.257H26.312V49.628z M26.312,8.172v19.374h26.616V4.319L26.312,8.172z"/></g></svg>
                    <span className='text-xs bg-red-800 pl-3 pr-3 rounded-lg'>Trends</span>
                  </div>
                  <div>
                    <h2 className='font-bold text-xl'>Adobe Creative Clouds</h2>
                    <div className='w-full flex'>
                    <span className="text-xs" style={{ wordSpacing: "0.5rem" }}>
                      Applications
                    </span>
                    </div>
                    
                  </div>
                </div>
                
              </div>

            </div>

            <div>
              <NewProductComponent></NewProductComponent>
            </div>


          </div>
        </div>

      </main>
    )
    
}
export default IndexComponent;