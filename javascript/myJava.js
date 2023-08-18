var email = document.form.email.value;
var ask = document.form.ask.value;

function isiemail(form) {
  if (email == "" || email.indexOf("@", 0) == -1 || email.indexOf(".") == -1) {
    return false;
    alert("email anda salah atau kosong");
  } else {
    return true;
  }
}
function isiask(form) {
  if (ask == "") {
    return false;
    alert("pertanyaan anda salah atau kosong");
  } else {
    return true;
  }
}
function reset(form) {
  email.reset();
  ask.reset();
}

function askme(form) {
  if (isiemail(form) && isiask(form)) {
    form.submit;
    alert("Email anda telah terkirim");
  } else {
    alert("Terdapat kesalahan");
  }
  reset(form);
}
//toggle menu
const navbarMenu = document.querySelector(".Navbar-Menu");
const hamburger_menu = document.querySelector(".hamburger-menu");
hamburger_menu.onclick = () => {
  navbarMenu.classList.toggle("active");
};
document.addEventListener("click", function (xy) {
  if (!hamburger_menu.contains(xy.target) && !navbarMenu.contains(xy.target)) {
    navbarMenu.classList.remove("active");
  }
});
