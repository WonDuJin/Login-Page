function login() {
  const id = document.querySelector("#id");
  const pw = document.querySelector("#pw");
  if (id.value === "" || pw.value === "") {
    alert("아이디 혹은 비밀번호를 입력해주세요.");
  } else if (
    sessionStorage.getItem(id.value) === null ||
    sessionStorage.getItem(id.value) !== pw.value
  ) {
    alert("아이디 혹은 비밀번호를 확인해주세요");
  } else if (sessionStorage.getItem(id.value) === pw.value) {
    location.href = "mainpage.html";
  }
}
