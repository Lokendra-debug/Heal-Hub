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
let username = (localStorage.getItem("name"));
console.log(username)
let name1 = username;
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

    // Add event listener to the "Sign Out" button
    let signout_btn = document.getElementById("sign_out_btn");
    if (signout_btn != null) {
      signout_btn.addEventListener("click", signout);
    }
}

//signout
let token = (localStorage.getItem('token'));
let refreshToken = localStorage.getItem('refreshToken');

let url = "https://colorful-ant-neckerchief.cyclic.app/users/logout"
function signout() {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
       'accessToken' : `${token}`,
       'refreshToken': `${refreshToken}`
    },
  })
  .then(response => {
    if (response.ok) {
      localStorage.removeItem("name");
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      window.location.href = './index.html'; 
    } else {
      console.error('Logout failed:', response.statusText);
    }
  })
  .catch(error => {
    console.error('Logout failed:', error);
  });
}

