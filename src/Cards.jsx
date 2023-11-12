import React from "react"
import Card from "./Card"
import Data from "./Data"

export default function Cards(){
    const cards = Data.map(item=>{
        return(
            <Card 
                item={item}
            />
        )
    })
    return(
        <div className="cards">
            {cards}
        </div>
    )
}