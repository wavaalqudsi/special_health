// BMI Kalkulator
function hitungBMI() {
        const tinggi = parseFloat(document.getElementById("tinggi").value) / 100;
        const berat = parseFloat(document.getElementById("berat").value);

        if (isNaN(tinggi) || isNaN(berat) || tinggi <= 0 || berat <= 0) {
          alert("Mohon masukkan angka tinggi dan berat yang valid!");
          return;
        }

        const bmi = (berat / (tinggi * tinggi)).toFixed(1);
        let kategori = "";
        let tips = "";
        let barColor = "";

        if (bmi < 18.5) {
          kategori = "Kekurangan berat badan";
          tips = "Perbanyak asupan bergizi dan kalori sehat.";
          barColor = "#4b9cd3";
        } else if (bmi < 25) {
          kategori = "Normal";
          tips = "Pertahankan pola makan & olahraga teratur!";
          barColor = "#3cb371";
        } else if (bmi < 30) {
          kategori = "Kelebihan berat badan";
          tips = "Kurangi kalori & tingkatkan aktivitas fisik.";
          barColor = "#f1c40f";
        } else {
          kategori = "Obesitas";
          tips = "Konsultasikan ke profesional kesehatan.";
          barColor = "#e74c3c";
        }

        document.getElementById("nilaiBMI").innerText = "BMI: " + bmi;
        document.getElementById("kategoriBMI").innerText = "Kategori: " + kategori;
        document.getElementById("kategoriBMI").style.color = barColor;
        document.getElementById("tips").innerText = tips;

        const bar = document.getElementById("barIndicator");
        const maxBMI = 40;
        const barWidth = Math.min(100, (bmi / maxBMI) * 100);
        bar.style.width = barWidth + "%";
        bar.style.background = barColor;
      }

// Monitor Air Minum
  // 🔹 Fungsi slider air
      const slider = document.getElementById("slider");
      const water = document.getElementById("water");
      const persen = document.getElementById("persen");

      slider.addEventListener("input", () => {
        const value = slider.value;
        const percent = Math.min((value / 2000) * 100, 100);
        water.style.height = percent + "%";
        persen.textContent = Math.round(percent) + "%";
      });

      // 🔹 Fungsi burger menu
      const burger = document.querySelector(".burger");
      const navLinks = document.querySelector(".nav-links");

      burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        burger.classList.toggle("toggle");
      }); 