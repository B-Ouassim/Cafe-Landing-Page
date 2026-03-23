const Footer = () => {
  return (
    <footer id="Contact" className="bg-[#1a1a1a] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="col-span-2">
          <h4 className="text-4xl font-black italic uppercase mb-6">Roast <span className="text-[#8d6e63]">& Brew</span></h4>
          <p className="text-zinc-400 max-w-sm font-medium">Your neighborhood spot for premium caffeine and handcrafted vibes since 2011.</p>
        </div>
        <div>
          <h5 className="font-black uppercase text-xs tracking-widest text-[#8d6e63] mb-6">Hours</h5>
          <p className="text-sm font-bold">Mon - Fri: 7am - 8pm</p>
          <p className="text-sm font-bold">Sat - Sun: 8am - 9pm</p>
        </div>
        <div>
          <h5 className="font-black uppercase text-xs tracking-widest text-[#8d6e63] mb-6">Follow Us</h5>
          <div className="flex gap-4">
            {['IG', 'FB', 'TW'].map(s => <span key={s} className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center font-bold text-xs hover:bg-white hover:text-black transition-all cursor-pointer">{s}</span>)}
          </div>
        </div>
      </div>
      <p className="text-center text-[10px] font-bold uppercase tracking-widest mt-10 text-zinc-600">© 2026 Roast & Brew Co. All rights reserved.</p>
    </footer>
  );
};
export default Footer;