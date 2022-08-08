// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name){
    cats.pop()

}
function destructivelyRemoveFirstCat(name){
    cats.shift()

}
function appendCat(name){
    let newCat=[...cats,"Broom"]
    return newCat

}
function prependCat(name){
    let newCat=["Arnold",...cats]
    return newCat

}
function removeLastCat(name){
    let newCat=[...cats]
    newCat.pop()
    return newCat

}
function removeFirstCat(name){
    let newCat=[...cats]
    newCat.shift()
    return newCat


}

// destructivelyAppendCat()
// function destructivelyPrependCat(){
//     cats.shift('Bob','Milo', 'Otis', 'Garfield','Ralph')
// }
// destructivelyPrependCat()