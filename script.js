let peringatanTab = 0;
let timerInterval;

function mulaiUjian() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('ujian').style.display = 'block';
  mulaiTimer(5 * 60); // 5 menit
  window.addEventListener('blur', deteksiTabPindah);
}

function mulaiTimer(durasi) {
  let waktu = durasi;
  timerInterval = setInterval(() => {
    let menit = String(Math.floor(waktu / 60)).padStart(2,'0');
    let detik = String(waktu % 60).padStart(2,'0');
    document.getElementById('waktu').textContent = `${menit}:${detik}`;
    if (--waktu < 0) {
      kirimJawaban();
    }
  }, 1000);
}

function deteksiTabPindah() {
  peringatanTab++;
  alert(`⚠️ Jangan pindah tab! (${peringatanTab}x)`);
  if (peringatanTab >= 3) {
    alert('Ujian otomatis dikumpulkan karena kecurangan.');
    kirimJawaban();
  }
}

function kirimJawaban() {
  clearInterval(timerInterval);
  const data = new FormData(document.getElementById('soalForm'));
  let hasil = [];
  for (let [key, val] of data.entries()) {
    hasil.push(`${key}: ${val}`);
  }
  alert("Jawaban terkumpul:\n" + hasil.join("\n"));
  // TODO: kirim ke server via fetch()
}
