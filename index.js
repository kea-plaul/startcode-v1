import { renderTemplate, setActive, showPage } from "./utils.js"





function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id
  renderTemplate(id)  //This setups the HTML for the page
  switch (id) {
    //Here you can execute JavaScript for the selected page
    case "page-1": {
      break
    }
    case "page-2": {
      break
    }
    case "page-3": {
      break
    }
  }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("page-1") //Set the default page to render




