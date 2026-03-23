import { useState } from "react";

const Navbar = () => {
  const links = ['Home', 'Menu', 'Our Story','Our Journey', 'Contact'];
  const [active, setActive] = useState('Home');
  return (
    <nav className="fixed top-0 w-[95%] left-1/2 -translate-x-1/2 z-[100] mt-4 px-8 py-3 flex justify-between items-center bg-white/70 backdrop-blur-md rounded-full shadow-sm border border-white/20">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-[#4a2c2a] rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-black text-lg italic">B</span>
        </div>
        <span className="font-black text-xl tracking-tighter uppercase italic text-zinc-900">
          Roast <span className="text-[#8d6e63]">& Brew</span>
        </span>
      </div>

      <div className="hidden lg:flex space-x-10 font-bold text-[11px] uppercase tracking-widest text-zinc-600">
        {links.map((item) => (
          <a onClick={()=>setActive(item)} key={item} href={`#${item.replace(' ', '')}`} className={`hover:text-[#8d6e63] transition-all relative group ${active === item ? 'text-[#8d6e63]' : ''}`}>
            {item}
            <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-[#8d6e63] transition-all group-hover:w-full ${active === item ? 'w-full' : ''}`}></span>
          </a>
        ))}
      </div>

      <button className="bg-zinc-900 text-white px-7 py-2.5 rounded-full font-black text-[10px] uppercase tracking-[0.15em] hover:bg-[#4a2c2a] transition-all">
        Order Now
      </button>
    </nav>
  );
};
export default Navbar; 