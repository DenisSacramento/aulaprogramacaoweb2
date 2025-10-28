// ===============================
// MENU RESPONSIVO (MOBILE)
// ===============================
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
}

// Fecha o menu quando o usuário clicar em um link (mobile)
document.addEventListener("click", function (event) {
  const navMenu = document.getElementById("navMenu");
  const menuToggle = document.querySelector(".menu-toggle");

  if (
    navMenu.classList.contains("show") &&
    !menuToggle.contains(event.target) &&
    !navMenu.contains(event.target)
  ) {
    navMenu.classList.remove("show");
  }
});

// ===============================
// DESTACAR LINK ATIVO NO MENU
// ===============================
window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ===============================
// ROLAGEM SUAVE (opcional)
// ===============================
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

// ===============================
// VALIDAÇÃO SIMPLES DO FORMULÁRIO (cadastro.html)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".volunteer-form");
  if (!form) return; // Se não estiver na página de cadastro, sai da função

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o envio automático

    const nome = form.querySelector('input[name="nome"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const telefone = form.querySelector('input[name="telefone"]').value.trim();
    const area = form.querySelector('select[name="area"]').value;

    if (!nome || !email || !telefone || !area) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // Simulação de envio (você pode conectar com back-end depois)
    alert(`Obrigado, ${nome}! Seu cadastro foi enviado com sucesso!`);
    form.reset();
  });
});
