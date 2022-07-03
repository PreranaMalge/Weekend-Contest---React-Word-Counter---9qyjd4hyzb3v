import React, { useEffect, useState }  from "react";
 const Counter =()=>{
    const [word,setWord] = useState(0);
    const [char,setChar] = useState(0);

    const updateWordCount = (event)=>{
        setWord(event.target.value);
     }

     const updateCharCount =(event)=>{
        setChar(event.target.value);
     }
    
     useEffect(()=>{
        //console.log("useEffect triggered");
     })

     return(
        <>
             <label for="textarea">Input</label>
          <input type="textarea" style={{fontSize:"16px"}}/>
    
            <div id='word-counter'></div>
            <div id='char-counter'></div>
    
             <input type="number" id='char-limit-input' minLength="50" onChange={updateWordCount} value={word}/>
            <input type="slider" id="fontSize-input" minLength="16px" maxLength="32px" onChange={updateCharCount} value={char}/>
        </>
     )
     
 }
 
 export default Counter;
 
 
 