const InstagramSection = () => {
  const posts = [
    "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop",
    "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <section id="OurJourney" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-[#8d6e63] font-bold uppercase tracking-[0.4em] text-[10px]">Follow Our Journey</span>
        <h2 className="text-5xl md:text-7xl font-black italic uppercase mt-4 mb-2">
          #Brewing<span className="text-zinc-300 font-light italic">Vibes</span>
        </h2>
        <p className="text-zinc-400 font-medium">Join our community @CoffeeRoastery</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-2 md:px-10">
        {posts.map((img, i) => (
          <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-zinc-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
            <img 
              src={img} 
              alt={`Social Post ${i + 1}`} 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
               <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
                 <span className="text-white text-3xl">♥</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;