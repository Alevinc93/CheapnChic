
import React from "react";

const prodotti = [
  {
    id: 1,
    titolo: "Maglietta Streetwear",
    prezzo: "€8,99",
    immagine: "https://ae01.alicdn.com/kf/SOMEIMAGE.jpg",
    link: "https://www.aliexpress.com/item/10050012345678.html"
  },
  {
    id: 2,
    titolo: "Felpa Oversize",
    prezzo: "€14,99",
    immagine: "https://ae01.alicdn.com/kf/ANOTHERIMAGE.jpg",
    link: "https://www.aliexpress.com/item/10050012345679.html"
  }
];

function App() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {prodotti.map((prodotto) => (
        <a href={prodotto.link} target="_blank" key={prodotto.id} className="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
          <img src={prodotto.immagine} alt={prodotto.titolo} className="w-full h-40 object-cover rounded mb-2" />
          <h4 className="font-medium text-base">{prodotto.titolo}</h4>
          <p className="text-sm text-gray-600">{prodotto.prezzo}</p>
        </a>
      ))}
    </div>
  );
}

export default App;
