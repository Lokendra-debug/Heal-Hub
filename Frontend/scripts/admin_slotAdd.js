const url = `https://colorful-ant-neckerchief.cyclic.app/`;
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};
let token = localStorage.getItem("token");
let refreshToken = localStorage.getItem("refreshToken");
// async function fetch_Slot() {
//   let req = await fetch(`${url}beverage`);
//   let res = await req.json();
//   let Slot_details = document.querySelector(".sales-details");
//   let SlotData = res;
//   console.log(SlotData);
//   Slot_details.innerHTML = SlotData.map((el) => {
//     return `<div class="card">
//         <div class="img"><img src="${el.image1}" ></div>
//         <div>
//         <p><span class="name">Slot ID:- </span><span class="ans-id">${el.id}</span></p>
//             <p><span class="name">Name:- </span><span class="ans-name">${el.name}</span></p>
//             <p><span class="name">Brand:- </span> ${el.brand}</p>
//             <p><span class="name">Gender:- </span> ${el.gender}</p>
//             <p><span class="name">Size:- </span>${el.size}</p>
//             <p><span class="name">Price:- </span>₹${el.price}</p>
//         </div>
//     </div>`;
//   }).join("");
// }
// fetch_Slot();
// let noOfSlotAdded =
//   JSON.parse(localStorage.getItem("noOfSlotAddedcount")) || 1;

//console.log(addSlotForm);

///adding the Slots

let addEmail = document.getElementById("addEmail");
let addSlotTime = document.getElementById("addSlotTime");
let addSlotForm = document.querySelector("form");

async function addSlot() {
  try {
    let obj = {
      email: addEmail.value,
      slotTime: addSlotTime.value,
    };

    let register_request = await fetch(`${url}/appointment/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accessToken: `${token}`,
        refreshToken: `${refreshToken}`,
      },
      body: JSON.stringify(obj),
    });

    console.log(register_request);
    // noOfSlotAdded++;
    // localStorage.setItem("noOfSlotAddedcount", JSON.stringify(noOfSlotAdded));
    // console.log(noOfSlotAdded);
  } catch (error) {
    console.log(error);
  }
}

addSlotForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addSlot();
  alert("Slot is added to inventory");
  //fetch_Slot();
  location.reload();
});
// let admin_name = document.getElementById("admin_name");
// let login_name = JSON.parse(localStorage.getItem("login_name")) || [];
// admin_name.innerText = login_name;
// console.log(login_name);
