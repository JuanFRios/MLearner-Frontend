/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';

const Compiler = ( {sampleCodev} ) => {
    const sct = `          test_object("a")
    test_function("print")
    success_msg("Genial!")`
    useEffect(() => {
        window.initAddedDCLightExercises()
    }, [])    
    return (
    <div data-datacamp-exercise data-lang="python" id='t'>
        <code data-type="pre-exercise-code">
          # no pec
        </code>
        <code data-type="sample-code">{sampleCodev}</code>
        {/* <code data-type="solution">{sampleCodev}</code> */}
        <code data-type="sct">{sct}</code>
        <div  data-type="hint" >
            Use the assignment operator (<code>=</code>) to create the variable <code>a</code>.
        </div>
        
    </div>
)}

export default Compiler