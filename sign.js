function sign() {
  const id = document.querySelector("#id");
  const pw = document.querySelector("#pw");
  const confirm_pw = document.querySelector("#confirm_pw");
  const userid = id.value;
  const userpw = pw.value;

  if (id.value === "" || pw.value === "" || confirm_pw.value === "") {
    alert("아이디 혹은 패스워드를 입력해주세요");
  } else if (pw.value !== confirm_pw.value) {
    alert("비밀번호가 동일하지 않습니다.");
  } else if (sessionStorage.getItem(userid) !== null) {
    alert("이미 등록된 아이디 입니다.");
  } else {
    sessionStorage.setItem(userid, userpw);
    alert("회원가입 성공!");
    location.href = "login.html";
  }
  function back() {
    history.back();
  }
}
