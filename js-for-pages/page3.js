import { paginator } from "./paginate.js"
const SIZE = 4   //Page Size
const TOTAL = 3  //Should come from the backend
const SERVER_URL = "http://localhost:8080/"
const ENDPOINT = `${SERVER_URL}api/cars/pageable`
 
export async function load(curPage) {
 
  const cars = await fetch(`${ENDPOINT}?size=${SIZE}&page=${curPage - 1}`)
    .then(res => res.json())
 
  document.getElementById("car_data").innerHTML = JSON.stringify(cars)
 
  //REDRAW PAGINATION
  paginator({
    target: document.getElementById("pagination_control"),
    total: TOTAL,
    current: curPage,
    click: load
  })
}
