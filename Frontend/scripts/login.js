let login = document.getElementById("loginbtn");
login.addEventListener("click", async (e) => {
  e.preventDefault();

  const payload = {
    email: document.getElementById("Email").value,
    password: document.getElementById("Password").value,
  };


  try {
    let url = "http://localhost:4000/users/login";

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
    } else {
        alert('Invalid credentials')
    }
    window.location.href = "../index.html";
    
  } catch (error) {
    console.log(error.message);
  }
});


