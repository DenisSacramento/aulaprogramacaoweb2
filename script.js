// ===============================
// MENU RESPONSIVO (MOBILE)
// ===============================
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
}

// Fecha o menu quando o usuário clicar fora (mobile)
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
// ROLAGEM SUAVE
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
// FORMULÁRIO DE CADASTRO
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("volunteerForm");
  if (!form) return;

  const cpfInput = form.querySelector("#cpf");
  const telInput = form.querySelector("#telefone");
  const cepInput = form.querySelector("#cep");

  // Função para aplicar máscara
  function maskInput(input, maskType) {
    input.addEventListener("input", () => {
      let value = input.value.replace(/\D/g, ""); // remove tudo que não é número

      if (maskType === "cpf") {
        value = value
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      }

      if (maskType === "telefone") {
        value = value
          .replace(/^(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
      }

      if (maskType === "cep") {
        value = value.replace(/^(\d{5})(\d)/, "$1-$2");
      }

      input.value = value;
    });
  }

  // Aplicar máscaras
  maskInput(cpfInput, "cpf");
  maskInput(telInput, "telefone");
  maskInput(cepInput, "cep");

  // Validação simples e envio
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const cpf = form.cpf.value.trim();
    const cep = form.cep.value.trim();

    if (!nome || !email || !telefone || !cpf || !cep) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // Mostra mensagem de sucesso
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.add("show");
    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });

    // Limpa formulário após 2 segundos
    setTimeout(() => form.reset(), 2000);
    setTimeout(() => successMessage.classList.remove("show"), 3000);
  });
});
