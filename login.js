const USER_ID = "userid";
const USER_PW = "userpw";
function login() {
  const id = document.querySelector("#id");
  const pw = document.querySelector("#pw");

  if (id.value === "" || pw.value === "") {
    alert("아이디 혹은 비밀번호를 입력해주세요.");
  } else if (
    id.value !== sessionStorage.getItem(USER_ID) ||
    pw.value !== sessionStorage.getItem(USER_PW)
  ) {
    alert("아이디 혹은 비밀번호를 확인해주세요");
  } else if (
    id.value === sessionStorage.getItem(USER_ID) &&
    pw.value === sessionStorage.getItem(USER_PW)
  ) {
    location.href = "mainpage.html";
  }
}

function back() {
  history.back();
}

function sign() {
  const id = document.querySelector("#id");
  const pw = document.querySelector("#pw");
  const confirm_pw = document.querySelector("#confirm_pw");

  if (id.value === "" || pw.value === "" || confirm_pw.value === "") {
    alert("아이디 혹은 패스워드를 입력해주세요");
  } else if (pw.value !== confirm_pw.value) {
    alert("비밀번호가 동일하지 않습니다.");
  } else {
    const userid = id.value;
    const userpw = pw.value;
    sessionStorage.setItem(USER_ID, userid);
    sessionStorage.setItem(USER_PW, userpw);
    alert("회원가입 성공!");
    location.href = "login.html";
  }
}
