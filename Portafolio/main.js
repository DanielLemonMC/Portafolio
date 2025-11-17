// --- Variables principales ---
const servicios = document.querySelectorAll(".servicio");
const galeria = document.querySelector(".galeria");
 
// --- Crear dos imágenes superpuestas para el efecto crossfade ---
const img1 = document.createElement("img");
const img2 = document.createElement("img");
img1.src = "img/marca/1.jpg";
img1.classList.add("active");
galeria.appendChild(img1);
galeria.appendChild(img2);
 
// --- Configuración de imágenes por categoría ---
const imagenes = {
  marca: ["img/marca/1.jpg", "img/marca/2.png", "img/marca/3.png", "img/marca/4.png"],
  visual: ["img/visual/1.jpg", "img/visual/2.jpg", "img/visual/3.jpg", "img/visual/4.jpg"],
  audiovisual: ["img/audiovisual/1.png", "img/audiovisual/2.png", "img/audiovisual/3.png", "img/audiovisual/4.png"],
  web: ["img/web/1.png", "img/web/2.png", "img/web/3.png", "img/web/4.png"]
};
 
// --- Función para cambiar imagen con fade ---
function cambiarImagen(src) {
  const activo = galeria.querySelector(".active");
  const inactivo = activo === img1 ? img2 : img1;
 
  inactivo.src = src;
  inactivo.classList.add("active");
  activo.classList.remove("active");
}
 
// --- Función para reproducir slideshow del hover ---
function iniciarGaleria(tipo) {
  let index = 0;
  cambiarImagen(imagenes[tipo][index]);
  return setInterval(() => {
    index = (index + 1) % imagenes[tipo].length;
    cambiarImagen(imagenes[tipo][index]);
  }, 1200); // cambia cada 1.2 segundos
}
 
// --- Hover dinámico ---
servicios.forEach(servicio => {
  let intervalo;
  servicio.addEventListener("mouseenter", () => {
    const tipo = servicio.getAttribute("data-img");
    intervalo = iniciarGaleria(tipo);
  });
 
  servicio.addEventListener("mouseleave", () => {
    clearInterval(intervalo);
    cambiarImagen("img/marca/1.jpg"); // vuelve a imagen principal
  });
});