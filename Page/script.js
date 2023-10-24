document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
  
    // Fonction pour mettre en surbrillance le lien actif
    function highlightNavLink() {
      let scrollPosition = window.scrollY;
  
      sections.forEach(function (section, index) {
        const top = section.offsetTop;
        const height = section.clientHeight;
  
        if (scrollPosition >= top && scrollPosition < top + height) {
          navLinks.forEach(function (link) {
            link.classList.remove("active-link");
          });
          navLinks[index].classList.add("active-link");
        }
      });
    }
  
    // Écoutez l'événement "scroll" pour mettre à jour la surbrillance
    window.addEventListener("scroll", highlightNavLink);
  
    // Écoutez les clics sur les liens de la navbar
    navLinks.forEach(function (link, index) {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        window.scrollTo({ top: sections[index].offsetTop, behavior: "smooth" });
      });
    });
  
    // Appelez la fonction pour mettre en surbrillance initialement le lien actif
    highlightNavLink();
  });
  