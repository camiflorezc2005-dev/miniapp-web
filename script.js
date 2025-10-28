window.addEventListener("load", () => {
  alert("💪 ¡Bienvenido a PowerFit! Tu entrenamiento comienza hoy.");
  console.log("Bienvenido a PowerFit - ¡Energía y disciplina!");
});

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Gracias por contactarnos, nos comunicaremos pronto contigo.");

     form.reset();
  });
}
