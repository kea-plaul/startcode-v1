export let text = "Not safe yet"

const obj = {a: "item", b: "item2", c: "item3"}

const{a,c} = obj

console.log(a,c)

export function setText(newtxt){
    text = newtxt
}

export function setupHandeler(){
    document.getElementById("btn").onclick = () => {
    text = document.getElementById("text").value
    }
}