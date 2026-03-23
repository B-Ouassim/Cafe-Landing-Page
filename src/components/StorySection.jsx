const StorySection = () => {
  const steps = [
    { 
      num: "01", 
      label: "Source", 
      desc: "Directly from Ethiopia's highlands.", 
      img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      num: "02", 
      label: "Roast", 
      desc: "Small batches, infinite flavor.", 
      img: "https://images.pexels.com/photos/894612/pexels-photo-894612.jpeg?auto=compress&cs=tinysrgb&w=800" 
    },
    { 
      num: "03", 
      label: "Pour", 
      desc: "Precision at 94°C for the soul.", 
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop" 
    }
  ];

  return (
    <section id="OurStory" className="py-20 px-4 md:px-10 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto h-[60vh] md:h-[75vh] flex flex-col md:flex-row overflow-hidden rounded-[3rem] shadow-2xl bg-black">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="relative flex-1 group border-b md:border-b-0 md:border-r border-white/10 overflow-hidden transition-all duration-1000 hover:flex-[1.5] cursor-pointer"
          >
            <div className="absolute inset-0 opacity-50 group-hover:opacity-80 transition-opacity duration-700">
              <img 
                src={step.img} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                alt={step.label}
              />
            </div>
            

            <div className="relative h-full flex flex-col justify-between p-8 md:p-12 z-10">
              <span className="text-5xl md:text-6xl font-black italic text-transparent stroke-text opacity-40">
                {step.num}
              </span>
              
              <div>
                <h4 className="text-3xl md:text-5xl font-black italic uppercase text-white mb-3 group-hover:text-[#d5bdaf] transition-colors tracking-tighter">
                  {step.label}
                </h4>
                <p className="text-white/70 text-sm md:text-base font-medium max-w-[180px] opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-700 leading-tight">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StorySection;