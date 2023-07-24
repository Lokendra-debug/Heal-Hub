const url = "https://colorful-ant-neckerchief.cyclic.app";
let token = localStorage.getItem("token") || null;
let refreshToken = localStorage.getItem("refreshToken") || null;

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

function renderDoctorDetails(doctor) {
  const doctorDetailsDiv = document.getElementById("doctorDetails");
  if (!doctor) {
    doctorDetailsDiv.innerHTML = "<h2>Doctor details not found</h2>";
    return;
  }
  console.log(doctor[0]);
  const { name, email, image, contact, specialties } = doctor[0];
  doctorDetailsDiv.innerHTML = `
        <h2>${name}</h2>
        <img class="avatar" src="${image}" alt="Doctor Avatar">
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Specialties:</strong> ${specialties.join(", ")}</p>
    `;
}

async function fetchAndRenderDoctorAvailability(email) {
  const doctorAvailabilityDiv = document.getElementById("doctorAvailability");
}

document.addEventListener("DOMContentLoaded", async () => {
  const doctorEmail = localStorage.getItem("doctorEmail") || "drbhai@gmail.com";
  const doctorDetails = await fetchDoctorDetails(doctorEmail);
  renderDoctorDetails(doctorDetails);
  fetchAndRenderDoctorAvailability(doctorEmail);
});
