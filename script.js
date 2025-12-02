document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll untuk tombol "Jelajahi Fitur"
  const ctaButton = document.querySelector(".cta-button");

  if (ctaButton) {
    ctaButton.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah perilaku default link

      const targetId = this.getAttribute("href"); // Mendapatkan href (#fitur)
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Scroll ke bagian target dengan animasi halus
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }

  // Tambahkan interaksi lain di sini jika diperlukan
});

const nav = document.querySelector("header nav");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");

  // Ganti ikon burger ↔ close
  const icon = toggle.querySelector("i");
  if (nav.classList.contains("active")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }
});
