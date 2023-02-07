import React from "react";

function Article ( {title, date, preview, minutes}){

// const logoArr =[]
// const coffeeIcon = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEb7ppEHtJ4bjsW65OR9i6EM0m6Yn9k7zGQ&usqp=CAU"></img>

// if(minutes > 30){

//     let coffeeCups = math.floor(minutes/5)
//     for(let i = 0; i < coffeeCups; i++) {
//         logoArr.push((coffeeIcon));
//     }
// }
// else if(minutes > 30) {
    
//     let bentoBoxes = math.floor(minutes/10)
//     for(let i = 0; i < bentoBoxes; i++) {
//         logoArr.push((bentoBoxes));
//     }
// }
    

return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small> // has "January 1, 1970"
        <p>{preview}</p>
        <p><span>{minutes}</span></p>
    </article>
    )


}

export default Article;