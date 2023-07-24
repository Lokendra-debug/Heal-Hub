const url="https://colorful-ant-neckerchief.cyclic.app/"

function validateForm(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    localStorage.setItem("userEmail", email);

    if (!email || !password) {
        alert('Please fill in all fields.');
        return false;
    }

    var data = {
        email: email,
        password: password
    };
    fetch(`${url}users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
        
        if (responseData.success) {
            localStorage.setItem("accesstoken", responseData.accessToken);
            localStorage.setItem("rerefreshtoken", responseData.rerefreshToken);
            alert('Login successful!');
            window.location.href="admin.html";
        } else {
            alert('Login failed. Please check your credentials.');
        }

        
        
    })
    .catch(error => {
        console.error('Error:', error);
    });

    return true;
}


var loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', validateForm);