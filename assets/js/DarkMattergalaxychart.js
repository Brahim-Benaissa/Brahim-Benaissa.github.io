<script>
  // === Galaxy Background (Stars + Halo) ===
  const galaxyCanvas = document.getElementById("galaxyCanvas");
  const gctx = galaxyCanvas.getContext("2d");

  function resizeCanvas() {
    galaxyCanvas.width = galaxyCanvas.clientWidth;
    galaxyCanvas.height = galaxyCanvas.clientHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const stars = [];
  const STAR_COUNT = 400;
  for (let i = 0; i < STAR_COUNT; i++) {
    const r = Math.random() * 100;
    const angle = Math.random() * 2 * Math.PI;
    stars.push({
      x: 0.5 + (r / 200) * Math.cos(angle),
      y: 0.5 + (r / 200) * Math.sin(angle),
      brightness: Math.random() * 0.8 + 0.2
    });
  }

  function drawGalaxy(dmFactor = 0) {
    const w = galaxyCanvas.width;
    const h = galaxyCanvas.height;
    const cx = w / 2;
    const cy = h / 2;
    gctx.clearRect(0, 0, w, h);

    // Dark matter halo glow (radius grows up to 5×)
    const maxHalo = w * 0.2 * (1 + 4 * dmFactor);
    const gradient = gctx.createRadialGradient(cx, cy, 0, cx, cy, maxHalo);
    gradient.addColorStop(0, `rgba(0, 180, 255, ${0.1 + 0.25 * dmFactor})`);
    gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);
    gctx.fillStyle = gradient;
    gctx.fillRect(0, 0, w, h);

    // Visible galaxy stars
    for (const s of stars) {
      const x = s.x * w;
      const y = s.y * h;
      gctx.beginPath();
      gctx.arc(x, y, 1.2, 0, 2 * Math.PI);
      gctx.fillStyle = `rgba(255, 230, 180, ${s.brightness})`;
      gctx.fill();
    }
  }

  // === Rotation Curve Chart ===
  const r_values = [1,2,3,4,5,6,7,8,9,10];
  const observed_base = [1,1,1,1,1,1,1,1,1,1];
  const expected_base = [1,0.71,0.58,0.5,0.45,0.41,0.38,0.35,0.33,0.32];

  const ctx = document.getElementById('chartCanvas').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: r_values,
      datasets: [
        {
          label: 'Observed Velocity (Flat Curve)',
          data: observed_base,
          borderColor: '#ff4b4b',
          borderWidth: 3,
          pointRadius: 0,
          tension: 0.35
        },
        {
          label: 'Expected Velocity (Dark Matter Factor)',
          data: expected_base,
          borderColor: '#00b4d8',
          borderWidth: 3,
          pointRadius: 0,
          tension: 0.35
        }
      ]
    },
    options: {
      animation: { duration: 800, easing: 'easeOutQuart' },
      plugins: {
        legend: { position: 'bottom', labels: { color:'#eee' } },
        title: {
          display: true,
          text: 'Galaxy Rotation Velocity vs Radius',
          color: '#fff',
          font: { size: 16 }
        }
      },
      scales: {
        x: { title:{display:true,text:'Radius (arbitrary units)',color:'#aaa'}, grid:{color:'rgba(255,255,255,0.1)'}, ticks:{color:'#ccc'} },
        y: { title:{display:true,text:'Velocity (arbitrary units)',color:'#aaa'}, min:0,max:1.2, grid:{color:'rgba(255,255,255,0.1)'}, ticks:{color:'#ccc'} }
      }
    }
  });

  // === Interactivity ===
  const slider = document.getElementById('dmSlider');
  const dmValue = document.getElementById('dmValue');
  const caption = document.getElementById('caption');

  slider.addEventListener('input', () => {
    const dm = parseFloat(slider.value);
    dmValue.textContent = `Dark Matter Factor: ${dm.toFixed(2)}`;
    const updated = expected_base.map((v,i)=>(1-dm)*v + dm*observed_base[i]);
    chart.data.datasets[1].data = updated;
    chart.update();
    drawGalaxy(dm);

    // Update explanatory caption
    if (dm < 0.3) caption.textContent = "Classical Newtonian motion → rotation speed falls with distance.";
    else if (dm < 0.7) caption.textContent = "Adding dark matter flattens the curve, keeping stars moving faster.";
    else caption.textContent = "With full dark matter effect → rotation curve remains flat, and the halo extends far beyond visible stars.";
  });

  drawGalaxy(0);
</script>
