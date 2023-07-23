// Function to fetch doctors' data from the server

  url = "https://colorful-ant-neckerchief.cyclic.app"
  token = localStorage.getItem('token');
  refreshToken = localStorage.getItem('refreshToken');

    async function fetchDoctorsData(url, token) {
        try {
        const response = await fetch(`${url}/doctors/getAll`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "accessToken": `${token}`,
            "refreshToken": `${refreshToken}`
        },
        });
        
        const doctorsData = await response.json();
        console.log(doctorsData);
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
    image.src = doctor.avatar;
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

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('doctor-button-container');
  
    const button = document.createElement('button');
    button.classList.add('doctor-button');
    button.textContent = 'Book Appointment';
    buttonContainer.appendChild(button);
    
    button.addEventListener('click', () => {
        localStorage.setItem("doctorEmail", `${doctor.email}`)
        window.location.href = "../views/appointment.html";; // Redirect to slot.html with doctor's ID as a parameter
    });
    card.appendChild(buttonContainer);
    
    return card;
  }
  
  // Function to display doctors' data on the page
  async function displayDoctorsData() {
    const doctorsContainer = document.getElementById('doctorsContainer');
    doctorsContainer.innerHTML = '<p>Loading...</p>';
  
    const doctorsData = await fetchDoctorsData(url, token);
  
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
  