const JoinSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#8d6e63] p-16 md:p-24 text-white flex flex-col justify-center items-start group overflow-hidden relative">
         <h3 className="text-5xl font-black italic uppercase mb-6">Open a <br/> Roastery</h3>
         <p className="text-orange-100 mb-8 max-w-sm font-medium">Join our global community of coffee lovers and entrepreneurs.</p>
         <button className="bg-white text-[#4a2c2a] px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-zinc-900 hover:text-white transition-all">
            Inquire Now
         </button>
      </div>

      <div className="bg-zinc-950 p-16 md:p-24 text-white flex flex-col justify-center items-start">
         <h3 className="text-5xl font-black italic uppercase mb-6">Join Our <br/> Baristas</h3>
         <p className="text-zinc-400 mb-8 max-w-sm font-medium">We’re looking for passionate souls who understand the art of the brew.</p>
         <button className="border-2 border-white text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
            Apply Today
         </button>
      </div>
    </section>
  );
};
export default JoinSection;
