function addNewItem(list, itemText) {
  // 함수생성
  var listItem = document.createElement(`li`); //li 태그 생성 이벤트를 listItem 변수에 담기
  listItem.innerText = itemText; // input 태그로부터 들어온 값 넣어주기

  //   var list = document.getElementById("todolist");
  list.appendChild(listItem); //appenChild 메소드로 listItem 닫기
}
var btnNew = document.getElementById("btnAdd"); //버튼연결
// btnNew.onclick = addNewItem; //onclick이벤트 추가, addNewItem 함수 call
btnNew.onclick = function () {
  var inputText = document.getElementById("inputText");
  var itemText = inputText.value;

  if (!itemText || itemText === "" || itemText === "") return false; //blank 방지
  addNewItem(document.getElementById("todolist"), itemText);
};
