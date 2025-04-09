import React from "react";

const Header = () => {
  return (
    <header className="flex items-center gap-3 p-4 shadow bg-white">
      <img src="/immagini/logo.png" alt="Logo CheapnChic" className="w-12 h-12 rounded-full" />
      <h1 className="text-3xl font-bold text-pink-600">CheapnChic</h1>
    </header>
  );
};

export default Header;

