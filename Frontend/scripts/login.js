let login = document.getElementById("loginbtn");
login.addEventListener("click", async (e) => {
  e.preventDefault();

  const payload = {
    email: document.getElementById("Email").value,
    password: document.getElementById("Password").value,
  };


  try {
    let url = "https://colorful-ant-neckerchief.cyclic.app/users/login";

    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let res = await response.json();
    // console.log("res", res.accessToken);
    //   document.getElementById("from").reset()
    localStorage.setItem("token", res.accessToken);
    localStorage.setItem("refreshToken", res.rerefreshToken);
    if(response.ok) {
        alert(`${payload.email} Successfully login`)
        window.location.href = "../views/doctors.html";
    } else {
        alert('Invalid credentials')
    }
    
  } catch (error) {
    console.log(error.message);
  }
});


