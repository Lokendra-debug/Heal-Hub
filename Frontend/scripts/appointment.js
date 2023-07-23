const url="https://colorful-ant-neckerchief.cyclic.app/"

async function fetchDoctorDetails(email) {
    try {
        const response = await fetch(`${url}+appointment/getAll/${email}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching doctor details:", error);
        return null;
    }
}


function renderDoctorDetails(doctor) {
    const doctorDetailsDiv = document.getElementById("doctorDetails");
    if (!doctor) {
        doctorDetailsDiv.innerHTML = "<h2>Doctor details not found</h2>";
        return;
    }

    const { name, email, image, contact, specialties } = doctor;
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
    const doctorEmail = localStorage.getItem("doctorEmail");
    const doctorDetails = await fetchDoctorDetails(doctorEmail);
    renderDoctorDetails(doctorDetails);
    fetchAndRenderDoctorAvailability(doctorEmail);
});