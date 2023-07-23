var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });



//display username
let username = JSON.parse(localStorage.getItem("credentials"));
console.log(username)
let name1 = username[0].name;
if (name1 != null) {
  change_info();
}

function change_info() {
  let info = document.getElementById("navbar_info");
  info.innerHTML = null;

  let div1 = document.createElement("div");
  let p1 = document.createElement("p");
  p1.id = "user_name";
  p1.innerText = "Hi " + name1;
  div1.append(p1);


  let div2 = document.createElement("div");
  let p3 = document.createElement("p");
  p3.innerText = "Sign Out";
  p3.id = "sign_out_btn";
  div2.append(p3);


  info.append(div1, div2);
}

//signout
let signout_btn = document.getElementById("sign_out_btn");

function signout() {
  localStorage.removeItem("credentials");
  window.location.href = "/";
}
if (signout_btn != null) {
  signout_btn.addEventListener("click", signout);
}