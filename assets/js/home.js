import { getAll, userDelete, userUpdate } from "./api.js";
const tableBody = document.querySelector("tbody");
const myFtch = getAll();

myFtch.then((x) => {
  x.forEach((el) => {
    let usrrole = el.role === "true" ? "Admin" : "User";
    const tr = document.createElement("tr");
    tr.innerHTML += `
    
        <td class="id id_p">${el.UID}</td>
        <td class="userName">${el.user}</td>
        <td class="role">
          <span class="${usrrole.toLowerCase()}">${usrrole}</span>
        </td>
        <td class="rate">${el.rate}</td>  
        <td>${el.addTime}</td>
        <td class="centered_text">
          <a href="#" class="delete">DELETE</a> /
          <a href="update.html#${el.UID}" class="update">UPDATE</a>
        </td>
    
    `;
    tableBody.appendChild(tr);
  });

  const dltBtn = document.querySelectorAll(".delete");
  dltBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const userId = e.target.closest("tr").querySelector(".id_p").textContent;
      userDelete(userId);
      e.target.closest("tr").remove();
    });
  });
});
