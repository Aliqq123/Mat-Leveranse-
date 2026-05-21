//denna koden är för att gömma admin ikonen från användare. 


document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));
  
    const adminLink = document.getElementById("nav-admin-link");
  
    if (!user || user.role !== "admin") {
      adminLink?.remove();
    }
  });