const url = `https://colorful-ant-neckerchief.cyclic.app`;
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};

let accessToken = JSON.parse(localStorage.getItem("accessToken")) || [];
let rerefreshToken = JSON.parse(localStorage.getItem("rerefreshToken")) || [];
async function fetch_Doctor() {
  let req = await fetch(`${url}/doctor/getAll`);
  let res = await req.json();
  let Doctor_details = document.querySelector(".sales-details");
  let DoctorData = res;
  console.log(DoctorData);
  Doctor_details.innerHTML = DoctorData.map((el) => {
    return `<div class="card">
        <div class="img"><img src="${el.image1}" ></div>
        <div>
        <p><span class="name">Doctor ID:- </span><span class="ans-id">${el.id}</span></p>
            <p><span class="name">Name:- </span><span class="ans-name">${el.name}</span></p>
            <p><span class="name">Brand:- </span> ${el.brand}</p>
            <p><span class="name">Gender:- </span> ${el.gender}</p>
            <p><span class="name">Size:- </span>${el.size}</p>
            <p><span class="name">Price:- </span>₹${el.price}</p>
        </div>
    </div>`;
  }).join("");
}
fetch_Doctor();
let noOfDoctorAdded =
  JSON.parse(localStorage.getItem("noOfDoctorAddedcount")) || 1;

//console.log(addDoctorForm);

///adding the Doctors

let addAvatar = document.getElementById("addAvatar");
let addName = document.getElementById("addName");
let addEmail = document.getElementById("addEmail");
let addContact = document.getElementById("addContact");
let addSpeciality = document.getElementById("addSpeciality");
let addDoctorForm = document.querySelector("form");

async function addDoctor() {
  try {
    let obj = {
      avatar: addAvatar.value,
      name: addName.value,
      email: addEmail.value,
      contact: addContact.value,
      speciality: addSpeciality.value,
    };

    let register_request = await fetch(`${url}/doctor/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    console.log(register_request);
    noOfDoctorAdded++;
    localStorage.setItem(
      "noOfDoctorAddedcount",
      JSON.stringify(noOfDoctorAdded)
    );
    console.log(noOfDoctorAdded);
  } catch (error) {
    console.log(error);
  }
}

addDoctorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoctor();
  alert("Doctor is added to inventory");
  //fetch_Doctor();
  location.reload();
});
// let admin_name = document.getElementById("admin_name");
// let login_name = JSON.parse(localStorage.getItem("login_name")) || [];
// admin_name.innerText = login_name;
// console.log(login_name);
