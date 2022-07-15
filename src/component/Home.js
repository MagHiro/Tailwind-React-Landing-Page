import React from "react";
import Hero from './../assets/hero.png';
import Card from './Card';
import Feature from "./Feature";
import Product from "./Product";
import Footer from './Footer';

export default function Home() {
  return (
    <div className="container max-w-6xl mx-auto px-1">
      <div className="bg-blue-200 h-[820px] md:h-[820px] lg:h-[570px] opacity-20 absolute z-1 bg-cover left-0 right-0"></div>
      <div className="px-5 pt-16 z-50 relative flex flex-col-reverse gap-20 md:flex-row lg:flex-row lg:space-y-0 lg:pt-36 lg:flex lg:justify-between">
        <h1 className="text-left font-bold tracking-wide text-6xl leading-snug">
          Find Your Best <br/> Smart <span className="text-primary">Real</span>
          <br /> <span className="text-primary">Estate</span>
        </h1>
        <img alt="fotoHero" className="w-full sm:w-4/5 md:w-1/2 lg:w-1/2 h-64 drop-shadow-2xl"src={Hero}/>
      </div>
      <div className="text-gray-400 px-5 py-12 lg:px-20 z-50 text-center relative">
        <p>*Designed and created by Experienced Architecture</p>
      </div>
      <Card/>
      <Feature />
      <Product />
      <Footer />
    </div>
  );
}
