/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';

const Compiler = ( {sampleCodev, valorHint, valorPreExerciseCode, valorSCT, valorSolution} ) => {
    useEffect(() => {
        window.initAddedDCLightExercises()
    }, [])    
    return (
    <div data-datacamp-exercise data-lang="python" id='t'>
        {valorPreExerciseCode && <code data-type="pre-exercise-code">{valorPreExerciseCode}</code>}
        <code data-type="sample-code">{sampleCodev}</code>
        {valorSolution && <code data-type="solution">{valorSolution}</code>}
        {valorSCT && <code data-type="sct">{valorSCT}</code>}
        {valorHint && <div  data-type="hint" >{valorHint}</div>}
        
    </div>
)}

export default Compiler