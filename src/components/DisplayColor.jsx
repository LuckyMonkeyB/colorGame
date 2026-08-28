import { useState } from "react"

// Color display de base, violet proche de la reference image
  function DisplayColor() {
    const [randomColor, setRandomColor] = useState({
      r: 125,
      g: 91,
      b: 210,
    })

  // Function qui genere 3 valeurs aleatoires entre 0 et 255. 
  function generateRandomColor() {
    const newRandomColor = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    }

    setRandomColor(newRandomColor)
  }

  return (
    <section className="w-full max-w-[450px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">
        Couleur à deviner
      </h2>

      {/* Le gros carré : */}
      <div
        style={{
          backgroundColor: `rgb(${randomColor.r}, ${randomColor.g}, ${randomColor.b})`,
        }}
        className="aspect-4/3 w-full rounded-2xl"
      />

      <button
        onClick={generateRandomColor}
        className="mt-5 flex w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700 transition hover:bg-slate-100"
      >

        <span className="text-center leading-5 font-semibold cursor-pointer">
          Cliquez ici pour générer une nouvelle couleur ! 
        </span>
      </button>
    </section>
  )
}

export default DisplayColor