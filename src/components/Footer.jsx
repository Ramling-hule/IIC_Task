import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-black text-center text-zinc-500 text-sm border-t border-zinc-900">
      <p className="mb-4">© 2026 CYBERFEST. CODE THE FUTURE.</p>
      <div className="flex justify-center gap-6">
        <a href="#" className="hover:text-green-400 transition-colors">Instagram</a>
        <a href="#" className="hover:text-green-400 transition-colors">Discord</a>
        <a href="#" className="hover:text-green-400 transition-colors">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;