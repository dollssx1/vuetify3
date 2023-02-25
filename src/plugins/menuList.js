class menu {
  constructor(title, text, btn, to) {
    (this.title = title), (this.text = text), (this.btn = btn), (this.to = to);
  }
  makeBtn() {
    console.log(`${this.btn} 생성됨`);
  }
}
const menusList = [
  new menu(
    "그리드 시스템",
    "기본구성 화면 continer row cols 등등",
    "그리드로 이동",
    "/LayOut"
  ),
  new menu("버튼", "튼 타입, 색상, 종류", "버튼으로 이동", "/Buttons"),
];

export default menusList;
