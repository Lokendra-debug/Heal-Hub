
const onSignup = document.getElementById("Signupbtn");
onSignup.addEventListener("click", async (e) => {
  e.preventDefault();

  const payload = {
    name: document.getElementById("name").value,
    email: document.getElementById("Email").value,
    password: document.getElementById("Password").value,
  };

  console.log(payload);

  try {
    let url = "http://localhost:4000/users/register";

    let responce = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let res = await responce.json();
    console.log("res", res);
    localStorage.setItem("name", (payload.name));
    alert(`${payload.email} has successfully register`);
    window.location.href = "../views/login.html";
  } catch (error) {
    console.log(error.message);
  }
});