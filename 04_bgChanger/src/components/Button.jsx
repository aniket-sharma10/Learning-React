
import React from "react";

function Button({color, onclick}){
    
    return(
        <button onClick={() => onclick(color)} className="px-4 py-2 pointer rounded-full text-lg" style={{background: color}}>{color}</button>
    )
}

export default Button;