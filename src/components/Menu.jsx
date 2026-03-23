import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

const Menu = () => {
const categories = [
    { title: "Specialty Brews", items: "8 Items", img: img1, color: "bg-[#e3d5ca]" },
    { title: "Handmade Pastries", items: "12 Items", img: img2, color: "bg-[#d5bdaf]" },
    { title: "Cold Infusions", items: "5 Items", img: img3, color: "bg-[#f5ebe0]" }
  ];

  return (
    <section id="Menu" className="py-32 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-8xl font-black italic uppercase leading-none tracking-tighter">
            Our <span className="text-[#8d6e63]">Curation.</span>
          </h2>
          <p className="max-w-xs text-zinc-500 font-medium text-sm border-l-2 border-[#8d6e63] pl-6 mt-6 md:mt-0">
            A precise selection of beans roasted in-house and pastries baked at dawn.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {categories.map((cat, i) => (
            <div key={i} className={`group relative w-full ${cat.color} rounded-[2rem] p-10 flex flex-col md:flex-row justify-between items-center overflow-hidden transition-all duration-700 hover:rounded-[4rem] cursor-pointer`}>
              <span className="absolute left-10 top-1/2 -translate-y-1/2 text-[10vw] font-black uppercase italic opacity-0 group-hover:opacity-5 transition-all duration-700 pointer-events-none">
                {cat.title}
              </span>
              
              <div className="relative z-10 flex flex-col">
                <span className="font-bold uppercase text-[10px] tracking-[0.3em] text-[#4a2c2a] mb-2">{cat.items}</span>
                <h3 className="text-4xl md:text-6xl font-black italic uppercase group-hover:translate-x-4 transition-transform duration-500">{cat.title}</h3>
              </div>

              <div className="relative w-64 h-64 md:w-80 md:h-80 transition-all duration-700 group-hover:scale-125 group-hover:-rotate-12 group-hover:translate-x-10">
                <img src={cat.img} className="w-full h-full object-contain drop-shadow-2xl" alt={cat.title} />
              </div>
              
              <div className="w-20 h-20 rounded-full border border-[#4a2c2a]/20 flex items-center justify-center group-hover:bg-[#4a2c2a] group-hover:text-white transition-all duration-500">
                <span className="text-3xl">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Menu;