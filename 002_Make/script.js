const button = document.getElementById("button");
const input = document.getElementById("input");
const list = document.getElementById("list");
button.addEventListener("click", clickBtn);

var cnt = 1;

function clickBtn() {
  const temp = document.createElement("li");
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li" + cnt);
  temp.innerHTML = input.value;
  temp.innerHTML +=
    "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove(" +
    cnt +
    ")'>삭제</button>";
  list.appendChild(temp);
  cnt++;
}
function remove(cnt) {
  const li = document.getElementById("li" + cnt);
  list.removeChild(li);
}
