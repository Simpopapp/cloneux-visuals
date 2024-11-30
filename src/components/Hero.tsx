import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="bg-hero bg-cover bg-center min-h-[600px] flex items-center justify-center text-center relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-3xl px-4 relative z-10">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-2 text-gold">Sr. Oliveira</h1>
        <p className="text-2xl mb-1 text-white font-light tracking-wider">BARBEARIA</p>
        <p className="text-xl mb-8 text-gray-300">Premium grooming for the modern gentleman</p>
        <Button className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3 rounded transition-colors">
          Book Now
        </Button>
      </div>
    </div>
  );
};