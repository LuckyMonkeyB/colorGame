import { useState } from "react";

export default function ColorForm() {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

        const couleur = `rgb(${red}, ${green}, ${blue})`
        console.log(couleur);
    }

    return <form onSubmit={handleSubmit}>

        <div
            className="w-52 h-52 mx-auto my-5"
            style={{
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }}
        >
        </div>

        <input

            type="range"
            value={red}
            min={0}
            max={255}
            onChange={(event) => setRed(Number(event.target.value))}

        />

        <p> Rouge : {red}</p>

        <input

            type="range"
            value={green}
            min={0}
            max={255}
            onChange={(event) => setGreen(Number(event.target.value))}
        />
        <p> Vert : {green}</p>

        <input
            type="range"
            value={blue}
            min={0}
            max={255}
            onChange={(event) => setBlue(Number(event.target.value))}
        />
        <p>Bleu : {blue}</p>

        <button type="submit">
            Valider
        </button>





    </form>


}