/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';

const Compiler = () => {
    console.log('Entra al codigo');
    const sampleCode = `# Create a variable a, equal to 5

# Print out a`;
    const solution = `          # Create a variable a, equal to 5
    a =  5

    # Print out a
    print(a)`;
    const sct = `          test_object("a")
    test_function("print")
    success_msg("Great job!")`
    useEffect(() => {
        window.initAddedDCLightExercises()
    }, [])    
    return (
    <div data-datacamp-exercise data-lang="python" id='t'>
        <code data-type="pre-exercise-code">
          # no pec
        </code>
        <code data-type="sample-code">{sampleCode}</code>
        <code data-type="solution">{solution}</code>
        <code data-type="sct">{sct}</code>
        <div  data-type="hint" >
            Use the assignment operator (<code>=</code>) to create the variable <code>a</code>.
        </div>
        
    </div>
)}

export default Compiler