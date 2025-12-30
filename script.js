// Register
function register() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if (!name || !email || !password) {
    alert("Fadlan buuxi dhammaan meelaha");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Register guul ayuu ku dhammaaday");
  window.location.href = "login.html";
}

// Login
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const savedEmail = localStorage.getItem("userEmail");
  const savedPassword = localStorage.getItem("userPassword");

  if (email === savedEmail && password === savedPassword) {
    alert("Login guul leh");
    window.location.href = "index.html";
  } else {
    alert("Email ama Password qalad ah");
  }
}

// Contact form
document.getElementById("contactForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Fariinta waa la diray, mahadsanid!");
});
