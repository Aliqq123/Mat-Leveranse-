// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm && document.getElementById("loginEmail")) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const res = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data.user));

      // redirect till home
      window.location.href = "/FrontEnd/Home-log-in/home.html";
    } else {
      alert(data.message);
    }
  });
}

// SIGNUP
if (loginForm && document.getElementById("loginUsername")) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const email = document.getElementById("loginEmail").value;
    const phone = document.getElementById("loginPhoneNumber").value;
    const password = document.getElementById("loginPassword").value;

    const res = await fetch("/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, phone, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data.user));

      // redirect till user page
      window.location.href = "/FrontEnd/user/user.html";
    } else {
      alert(data.message || "Error");
    }
  });
}