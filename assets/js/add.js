import { adding } from "./api.js";

const uName = document.querySelector(".userName");
const uRate = document.querySelector(".userRate");
const uRole = document.querySelector(".userRole");
const addBtn = document.querySelector(".sbmtBtn");
addBtn.addEventListener("click", async (e) => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}/${month}/${year}`;
  let object = {
    user: uName.value,
    role: uRole.value,
    rate: uRate.value,
    addTime: currentDate,
  };
  e.preventDefault();

  if (object.user && object.role && object.rate) {
    await adding(object);
    window.location.href = "home.html";
  } else {
    alert("Please fill all the fields");
  }
});
