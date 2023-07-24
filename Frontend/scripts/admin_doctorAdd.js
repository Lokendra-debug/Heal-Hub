const url = `https://colorful-ant-neckerchief.cyclic.app`;
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
// fetchDoctorsData(url);
async function fetchDoctorsData(url) {
  try {
    const response = await fetch(`${url}/doctors/getAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accessToken: `${token}`,
        refreshToken: `${refreshToken}`,
      },
    });

    const doctorsData = await response.json();
    console.log(doctorsData);

    return doctorsData;
  } catch (error) {
    console.error("Error fetching doctors data:", error.message);
    return [];
  }
}

console.log(token, refreshToken);

//   let req = await fetch(`${url}/doctor/getAll`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       accessToken: `${accessToken}`,
//       rerefreshToken: `${refreshToken}`,
//     },
//   });
//   let res = await req.json();
//   let Doctor_details = document.querySelector(".sales-details");
//   let DoctorData = res;
//   console.log(DoctorData);
//   Doctor_details.innerHTML = DoctorData.map((el) => {
//     return `<div class="card">
//         <div class="img"><img src="${el.avatar}" ></div>
//         <div>
//         <p>
//             <p><span class="name">Name:- </span><span class="ans-name">${el.name}</span></p>
//             <p><span class="name">email:- </span> ${el.email}</p>
//             <p><span class="name">contact:- </span>${el.contact}</p>
//             <p><span class="name">specialties:- </span>₹${el.specialties}</p>
//         </div>
//     </div>`;
//   }).join("");
// }
// fetch_Doctor();
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

displayDoctorsData();

async function displayDoctorsData() {
  const doctorsContainer = document.getElementById("doctorsContainer");
  doctorsContainer.innerHTML = "<p>Loading...</p>";

  const doctorsData = await fetchDoctorsData(url);

  if (doctorsData.length === 0) {
    doctorsContainer.innerHTML = "<p>No doctors data available.</p>";
    return;
  }

  doctorsContainer.innerHTML = "";
  doctorsData.forEach((doctor) => {
    console.log(doctor);
    const card = createDoctorCard(doctor);
    doctorsContainer.appendChild(card);
  });
}
function createDoctorCard(doctor) {
  const card = document.createElement("div");
  card.classList.add("doctor-card");

  const image = document.createElement("img");
  image.classList.add("doctor-image");
  image.src = doctor.avatar;
  image.alt = doctor.name;
  card.appendChild(image);

  const details = document.createElement("div");
  details.classList.add("doctor-details");

  const name = document.createElement("div");
  name.classList.add("doctor-name");
  name.textContent = doctor.name;
  details.appendChild(name);

  const email = document.createElement("div");
  email.classList.add("doctor-email");
  email.textContent = `Email: ${doctor.email}`;
  details.appendChild(email);

  const contact = document.createElement("div");
  contact.classList.add("doctor-contact");
  contact.textContent = `Contact: ${doctor.contact}`;
  details.appendChild(contact);

  const specialties = document.createElement("div");
  specialties.classList.add("doctor-specialties");
  specialties.textContent = `Specialty: ${doctor.specialties.join(", ")}`;
  details.appendChild(specialties);

  card.appendChild(details);

  return card;
}

addDoctorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoctor();
  alert("Doctor is added to inventory");
  //fetch_Doctor();
  location.reload();
});

async function addDoctor() {
  try {
    let obj = {
      avatar: addAvatar.value,
      name: addName.value,
      email: addEmail.value,
      contact: addContact.value,
      speciality: addSpeciality.value,
    };
    console.log(obj);
    let register_request = await fetch(`${url}/doctors/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accessToken: `${token}`,
        refreshToken: `${refreshToken}`,
      },
      body: JSON.stringify(obj),
    });

    console.log(register_request);
    // noOfDoctorAdded++;
    // localStorage.setItem(
    //   "noOfDoctorAddedcount",
    //   JSON.stringify(noOfDoctorAdded)
    // );
    console.log(noOfDoctorAdded);
  } catch (error) {
    console.log(error);
  }
}
// let admin_name = document.getElementById("admin_name");
// let login_name = JSON.parse(localStorage.getItem("login_name")) || [];
// admin_name.innerText = login_name;
// console.log(login_name);
