// Function to fetch doctors' data from the server

  url = "https://colorful-ant-neckerchief.cyclic.app"
  token = localStorage.getItem('token');
  refreshToken = localStorage.getItem('refreshToken');

    async function fetchDoctorsData(url, token) {
        try {
          if (!token || !refreshToken) {
            // User is not logged in, handle the situation (e.g., redirect to login page)
            alert("User is not logged in. Redirecting to login page...");
            window.location.href = "../views/login.html"
            return [];
        }
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
  
    const details = document.createElement('div');
    details.classList.add('doctor-details');
  
    const name = document.createElement('div');
    name.classList.add('doctor-name');
    name.textContent = doctor.name;
    details.appendChild(name);
  
    const email = document.createElement('div');
    email.classList.add('doctor-email');
    email.textContent = `Email: ${doctor.email}`;
    details.appendChild(email);
  
    const contact = document.createElement('div');
    contact.classList.add('doctor-contact');
    contact.textContent = `Contact: ${doctor.contact}`;
    details.appendChild(contact);
  
    const specialties = document.createElement('div');
    specialties.classList.add('doctor-specialties');
    specialties.textContent = `Specialty: ${doctor.specialties.join(', ')}`;
    details.appendChild(specialties);
  
    card.appendChild(details);
  
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('doctor-button-container');
  
    const button = document.createElement('button');
    button.classList.add('doctor-button');
    button.textContent = 'Book Appointment';
    buttonContainer.appendChild(button);
  
    card.appendChild(buttonContainer);
    
    button.addEventListener('click', () => {
        localStorage.setItem("doctorEmail", `${doctor.email}`)
        window.location.href = "../views/appointment.html";; // Redirect to slot.html with doctor's ID as a parameter
    });
    
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
  