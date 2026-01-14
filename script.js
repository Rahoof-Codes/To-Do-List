var input = document.getElementById("inp")
var ol = document.getElementById("list")
function add() {
  var listItem = document.createElement("li")
  listItem.innerHTML = input.value + "<button onclick='deleteItem(event)'>Delete</button>"
  ol.append(listItem)
  
  
  
}
function deleteItem(event) {
     event.target.parentElement.remove()
}