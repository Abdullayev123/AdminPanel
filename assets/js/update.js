import { getByID, userUpdate } from "./api.js";
const uName = document.querySelector(".userName");
const uRate = document.querySelector(".userRate");
const uRole = document.querySelector(".userRole");
const updtBtn = document.querySelector(".sbmtBtn");
const id = window.location.hash.slice(1);
console.log(id);
async function fillForm() {
  const data = await getByID(id);
  uName.value = data.user;
  uRole.value = data.role;
  uRate.value = data.rate;
}
fillForm();
updtBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  await userUpdate(id, {
    user: uName.value,
    role: uRole.value,
    rate: uRate.value,
  });
  window.location.href = "home.html";
});
