function submitJawaban() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');

  if (!q1 || !q2) {
    alert("Harap jawab semua soal!");
    return;
  }

  let skor = 0;
  if (q1.value === "4") skor++;
  if (q2.value === "Jakarta") skor++;

  alert("Skor Anda: " + skor + "/2");
}

// Anti-cheat dasar: deteksi pindah tab
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    alert("Anda meninggalkan tab ujian! Harap kembali ke ujian.");
  }
});
