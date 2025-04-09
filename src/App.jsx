import React from "react";

const prodotti = [
  {
    id: 1,
    titolo: "Maglietta Streetwear",
    prezzo: "€8,99",
    immagine: "https://ae01.alicdn.com/kf/HTB1.jpg",
    link: "https://www.aliexpress.com/item/10050012345678.html"
  },
  {
    id: 2,
    titolo: "Felpa Oversize",
    prezzo: "€13,50",
    immagine: "https://ae01.alicdn.com/kf/HTB2.jpg",
    link: "https://www.aliexpress.com/item/10050098765432.html"
  }
];

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cheap&Chic 👕</h1>
      <div className="grid grid-cols-2 gap-4">
        {prodotti.map((prodotto) => (
          <a
            key={prodotto.id}
            href={prodotto.link}
            target="_blank"
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={prodotto.immagine}
              alt={prodotto.titolo}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h4 className="text-base font-medium">{prodotto.titolo}</h4>
            <p className="text-sm text-gray-600">{prodotto.prezzo}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
