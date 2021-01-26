var btnNew = document.getElementById("btnAdd");
btnNew.onclick = addNewItem;

function addNewItem() {
  var listItem = document.createElement(`li`);
  listItem.innerHTML = "Hi";

  var list = document.getElementById("todolist");
  list.appendChild(listItem);
}
