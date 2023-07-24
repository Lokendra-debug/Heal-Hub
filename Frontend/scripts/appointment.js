const url = "https://colorful-ant-neckerchief.cyclic.app";
let token = localStorage.getItem("token") || null;
let refreshToken = localStorage.getItem("refreshToken") || null;
let userEmail = localStorage.getItem("userEmail") || null;
let doctorEmail = localStorage.getItem("doctorEmail") || null;

async function fetchDoctorDetails(email) {
  try {
    console.log(email);
    console.log(token);
    console.log(refreshToken);
    const response = await fetch(`${url}/doctors/getOne?email=${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accessToken: `${token}`,
        rerefreshToken: `${refreshToken}`,
      },
    });
    let data = await response.json();
    // let data = JSON.parse(data2)
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("Error fetching doctor details:", error);
    return null;
  }
}
async function fetchAndRenderDoctorAvailability(email) {
  let response = await fetch(`${url}/availabilitySlot/get?email=${email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accessToken: `${token}`,
      refreshToken: `${refreshToken}`,
    },
  });
  let data = await response.json();
  console.log("data", data);
  return data;
}
function renderDoctorDetails(doctor) {
  const doctorDetailsDiv = document.getElementById("doctorDetails");
  if (!doctor) {
    doctorDetailsDiv.innerHTML = "<h2>Doctor details not found</h2>";
    return;
  }
  console.log(doctor[0]);
  const { name, email, avatar, contact, specialties } = doctor[0];
  doctorDetailsDiv.innerHTML = `
        <h2>${name}</h2>
        <img class="avatar" src="${avatar}" alt="Doctor Avatar">
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Specialties:</strong> ${specialties.join(", ")}</p>
    `;
}
function renderSlotDetils(Slot) {
  const doctorAvailabilityDiv = document.getElementById("doctorAvailability");
  if (!Slot) {
    doctorAvailabilityDiv.innerHTML = "<h2>Slots details not found</h2>";
    return;
  }
  console.log(Slot);
  Slot.forEach((element) => {
    let div = document.createElement("div");
    let DateHere = document.createElement("h3");
    let hour = document.createElement("h3");
    const date = new Date(element.startTime);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();

    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;

    div.innerText =
      formattedDate + "   Time" + date.getUTCHours() + ":00 O'clock";

    div.addEventListener("click", () => {
      let appointmentData = {
        user: userEmail,
        doctor: doctorEmail,
        startTime: element.startTime,
      };
      apointmentBookConfirm(appointmentData);
    });
    console.log(element, div);
    doctorAvailabilityDiv.append(div);
  });
}

async function apointmentBookConfirm(data) {
  try {
    console.log(data);

    const response = await fetch(`${url}/appointment/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accessToken: `${token}`,
        rerefreshToken: `${refreshToken}`,
      },
      body: JSON.stringify(data),
    });

    console.log("response for appointment confirm", response);
    alert("Your appoitment with doctor is confirmed");
    return response;
  } catch (error) {
    console.log("Error fetching doctor details:", error);
    return null;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const doctorEmail = localStorage.getItem("doctorEmail") || "drbhai@gmail.com";
  const doctorDetails = await fetchDoctorDetails(doctorEmail);
  renderDoctorDetails(doctorDetails);
  let Slot = await fetchAndRenderDoctorAvailability(doctorEmail);
  renderSlotDetils(Slot);
});
