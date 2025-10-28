window.addEventListener("load", () => {
  alert("💪 ¡Bienvenido a PowerFit Gym! Tu entrenamiento comienza hoy.");
  console.log("Bienvenido a PowerFit Gym - ¡Energía y disciplina!");
});


const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    alert("Gracias por contactarnos 💥 Nos comunicaremos pronto contigo.");


    form.reset();
  });
}