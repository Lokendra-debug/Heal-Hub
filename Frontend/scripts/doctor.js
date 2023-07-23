// Function to fetch doctors' data from the server

let url = "http://localhost/doctors/getAll"

async function fetchDoctorsData() {
    try {
      const response = await fetch('/doctors');
      const doctorsData = await response.json();
      return doctorsData;
    } catch (error) {
      console.error('Error fetching doctors data:', error.message);
      return [];
    }
  }
  
  // Function to create a doctor card and display the data
  function createDoctorCard(doctor) {
    const card = document.createElement('div');
    card.classList.add('doctor-card');
  
    const image = document.createElement('img');
    image.classList.add('doctor-image');
    image.src = doctor.image;
    image.alt = doctor.name;
    card.appendChild(image);
  
    const name = document.createElement('div');
    name.classList.add('doctor-name');
    name.textContent = doctor.name;
    card.appendChild(name);
  
    const email = document.createElement('div');
    email.classList.add('doctor-email');
    email.textContent = `Email: ${doctor.email}`;
    card.appendChild(email);
  
    const contact = document.createElement('div');
    contact.classList.add('doctor-contact');
    contact.textContent = `Contact: ${doctor.contact}`;
    card.appendChild(contact);
  
    const specialties = document.createElement('div');
    specialties.classList.add('doctor-specialties');
    specialties.textContent = `Specialties: ${doctor.specialties.join(', ')}`;
    card.appendChild(specialties);
  
    return card;
  }
  
  // Function to display doctors' data on the page
  async function displayDoctorsData() {
    const doctorsContainer = document.getElementById('doctorsContainer');
    doctorsContainer.innerHTML = '<p>Loading...</p>';
  
    const doctorsData = await fetchDoctorsData();
  
    if (doctorsData.length === 0) {
      doctorsContainer.innerHTML = '<p>No doctors data available.</p>';
      return;
    }
  
    doctorsContainer.innerHTML = '';
    doctorsData.forEach(doctor => {
      const card = createDoctorCard(doctor);
      doctorsContainer.appendChild(card);
    });
  }
  
  // Call the function to display doctors' data on page load
  document.addEventListener('DOMContentLoaded', () => {
    displayDoctorsData();
  });
  