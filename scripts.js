const dummyUser = {
  username: "admin",
  password: "123456"
};

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === dummyUser.username && password === dummyUser.password) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "home.html";
  } else {
    document.getElementById("error-msg").innerText = "Username atau password salah!";
  }
}
