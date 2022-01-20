import * as React from "react"

const ColorRed = ({children})  => 
    <p 
        style={{
            color:`red`,
            fontFamily:`CocoSharp Trial`,
            fontWeight:`400`,
            fontSize: `18px`,
            width:`90%`,
        }}>
        {children}             
    </p>

export default ColorRed