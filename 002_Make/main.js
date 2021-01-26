var btnNew = document.getElementById("btnAdd"); //버튼연결
btnNew.onclick = addNewItem; //onclick이벤트 추가, addNewItem 함수 call

function addNewItem() {
  // 함수생성
  var listItem = document.createElement(`li`); //li 태그 생성 이벤트를 listItem 변수에 담기
  listItem.innerHTML = "Hi"; // li 태그 안에 innerHtml 메소드로 문자열 입력

  var list = document.getElementById("todolist");
  list.appendChild(listItem); //appenChild 메소드로 listItem 닫기
}
