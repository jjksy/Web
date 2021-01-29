// function addNewItem(list, itemText) {
//   // 함수생성
//   var listItem = document.createElement(`li`); //li 태그 생성 이벤트를 listItem 변수에 담기
//   listItem.innerText = itemText; // input 태그로부터 들어온 값 넣어주기

//   //   var list = document.getElementById("todolist");
//   list.appendChild(listItem); //appenChild 메소드로 listItem 닫기
// }
// var btnNew = document.getElementById("btnAdd"); //버튼연결
// // btnNew.onclick = addNewItem; //onclick이벤트 추가, addNewItem 함수 call
// btnNew.onclick = function () {
//   var inputText = document.getElementById("inputText");
//   var itemText = inputText.value;

//   if (!itemText || itemText === "" || itemText === "") return false; //blank 방지
//   addNewItem(document.getElementById("todolist"), itemText);
// };
function addNewItem(list, itemText) {
  var listItem = document.createElement("li"); //li 태그 생성 이벤트를 listItem 변수에 담기
  listItem.innerText = itemText; // input 태그로부터 들어온 값 넣어주기
  list.appendChild(listItem); //appenChild 메소드로 listItem 닫기
}
//enter를 입력하면 list up 되기때문에 button 삭제

var inputText = document.getElementById("inputText");
inputText.focus(); //자동으로 input 태그로 커서 위치시키기

inputText.onkeyup = function (event) {
  if (event.which === 13) {
    //enter == 13
    var itemText = inputText.value;
    if (!itemText || itemText === "" || itemText === "") return false; //blank 방지
    addNewItem(document.getElementById("todolist"), itemText);
    inputText.focus();
    inputText.select();
    //focus, select >> 다시 focus 잡고(enter이후 동작하기 때문) 그 영역 선택(블록으로)
  }
};
