import React, { useState } from 'react'

export const ColorGame = () => {

    const [targetColor, setTagetColor] = useState(null);
    const [userColor, setUserColor] = useState(null);
    const [error, setError] = useState(null)

    // récup la couleur générée par DisplayColor
    const handleColor = (newColor) => {
        setTargetColor(newColor);
    }

    // récup proposition user ou erreur
    const handleGuess = (color, validationError) => {
        if(valitationError){
            setError(validationError);
            setUserColor(null);
            return;
        }
        
        setError(null);
        setUserColor(color);

    }
    

    return (
        <>
            <div>
                {/* Le parent colorGame récupère via props la couleur générée de façon random dans le component DisplayColor*/}
                {/* <DisplayColor onColorGenerated={handleColor}/> */}

                {/* Le parent colorGame récupère deux valeurs le userColor => r, g, b des inputs et les éventuelles erreurs */}
                {/* <ColorForm onSubmitGuess={handleGuess}/> */}
            </div>

            {/* Le parent colorGame passe au component result la couleur random à deviner en rgb, la couleur du user en regb, les erreurs */}
            {/* <Result targetColor={targetColor} userColor={userColor} error={error}/> */}
        </>
    )
}
