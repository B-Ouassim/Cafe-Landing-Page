import img4 from "../img/img4.png"


const Hero = () => {
  return (
    <section id="Home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#faf9f6]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
        <h1 className="text-[16vw] font-black text-zinc-200/40 uppercase italic leading-none select-none">
          Morning Roast
        </h1>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="relative group cursor-pointer">
          <img 
            src={img4} 
            alt="Main Coffee" 
            className="w-[350px] md:w-[550px] drop-shadow-[0_35px_35px_rgba(74,44,42,0.3)] animate-pizza-float "
          />
          <div className="absolute -top-5 -right-5 w-24 h-24 bg-[#8d6e63] rounded-full flex items-center justify-center border-4 border-[#faf9f6] rotate-12 animate-bounce">
              <span className="text-white font-black text-[10px] uppercase text-center leading-none">Freshly<br/>Roasted</span>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-6xl md:text-8xl font-black italic uppercase text-zinc-900 tracking-tighter leading-[0.9]">
            Wake Up <br/> <span className="text-[#8d6e63]">Your Soul.</span>
          </h2>
          <p className="mt-6 text-zinc-500 font-medium max-w-md mx-auto">
            Ethically sourced beans, roasted in-house, and crafted by baristas who care about every drop.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
             <button className="  bg-[#4a2c2a]  text-white hover:bg-white hover:text-black px-10 py-4 rounded-full font-bold uppercase text-sm shadow-xl hover:scale-105 transition-all">
                <a className="cursor-pointer" href="#Menu">The Menu</a>
             </button>
             <button className=" border-2 border-zinc-900 text-zinc-900 px-10 py-4 rounded-full font-bold uppercase text-sm hover:bg-[#4a2c2a] hover:text-white transition-all">
                <a className="cursor-pointer" href="#OurStory">Our Story</a>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;