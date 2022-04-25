import { text, setText} from "./page1.js"


export function showText(){
    //Change text to something else
    setText("This has been changed")
    document.getElementById("text").innerText = text
}