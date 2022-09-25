function login() {
  const id = document.querySelector("#id");
  const pw = document.querySelector("#pw");
  const username = id.value;
  if (id.value === "" || pw.value === "") {
    alert("아이디 혹은 비밀번호를 입력해주세요.");
  } else {
    greeting.innerText = `어서오너라 ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
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
    location.href = "login.html";
  }
}
