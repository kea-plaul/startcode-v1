import { renderTemplate, setActive, showPage } from "./utils.js"
import { setupHandeler } from "./js-for-pages/page1.js"
import { showText } from "./js-for-pages/page2.js"
import { load} from "./js-for-pages/page3.js"





function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id
  renderTemplate(id)  //This setups the HTML for the page
  switch (id) {
    //Here you can execute JavaScript for the selected page
    case "page-1": {
      setupHandeler
      break
    }
    case "page-2": {
      showText
      break
    }
    case "page-3": {
      load
      break
    }
  }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("page-1") //Set the default page to render




