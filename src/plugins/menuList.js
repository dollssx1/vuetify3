class Menu {
  constructor(title, text, btn, to) {
    this.title = title;
    this.text = text;
    this.btn = btn;
    this.to = to;
  }
}

const makeMenu = (title, text, btn, to) => {
  new Menu(title, text, btn, to);
};

let menus = [
  makeMenu(
    "그리드 시스템",
    "기본구성 화면 continer row cols 등등",
    "그리드로 이동",
    "/LayOut"
  ),
  makeMenu("버튼", "버튼 타입, 색상, 종류", "버튼으로 이동", "/Buttons"),
];
export default menus;
