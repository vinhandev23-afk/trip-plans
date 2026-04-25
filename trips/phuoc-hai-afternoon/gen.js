const fs = require('fs');
const path = require('path');

function imgB64(filename) {
  const ext = path.extname(filename).slice(1).replace('jpg', 'jpeg');
  const data = fs.readFileSync(path.join(__dirname, 'images', filename));
  return `data:image/${ext};base64,${data.toString('base64')}`;
}

const heroB    = imgB64('hero-bien.jpg');
const locAnB   = imgB64('bo-ke-loc-an.jpg');
const phuocHaiB = imgB64('bo-ke-phuoc-hai.jpg');
const cafeB    = imgB64('cafe-view-bien.jpg');
const hoSoBongB = imgB64('ho-so-bong.jpg');
const langChaiB = imgB64('lang-chai.jpg');

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>Chiều xe máy Phước Hải</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #0d1117;
    font-family: 'Inter', sans-serif;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 32px 16px;
  }

  .card {
    width: 640px;
    background: #111820;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 32px 80px rgba(0,0,0,0.7);
  }

  /* HERO */
  .hero {
    position: relative;
    height: 340px;
    overflow: hidden;
  }
  .hero img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
  }
  .hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0.1) 0%,
      rgba(0,0,0,0.35) 50%,
      rgba(13,18,23,0.92) 100%
    );
  }
  .hero-content {
    position: absolute;
    bottom: 28px; left: 32px; right: 32px;
  }
  .badge {
    display: inline-block;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.22);
    color: #e8dcc8;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 100px;
    margin-bottom: 10px;
    backdrop-filter: blur(8px);
  }
  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    line-height: 1.05;
    letter-spacing: -0.5px;
  }
  .hero-title span { color: #f0c97a; }
  .hero-sub {
    font-size: 13px;
    color: rgba(255,255,255,0.62);
    margin-top: 8px;
    letter-spacing: 0.3px;
  }

  /* META ROW */
  .meta-row {
    display: flex;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .meta-item {
    flex: 1;
    padding: 16px 20px;
    border-right: 1px solid rgba(255,255,255,0.07);
    text-align: center;
  }
  .meta-item:last-child { border-right: none; }
  .meta-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin-bottom: 4px;
  }
  .meta-value {
    font-size: 14px;
    font-weight: 600;
    color: #f0c97a;
  }

  /* TIMELINE */
  .section {
    padding: 24px 32px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .section-title {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin-bottom: 18px;
  }
  .timeline { display: flex; flex-direction: column; }
  .tl-item {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    padding: 13px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .tl-item:last-child { border-bottom: none; padding-bottom: 0; }
  .tl-time {
    flex-shrink: 0;
    width: 52px;
    font-size: 12px;
    font-weight: 600;
    color: #f0c97a;
    padding-top: 2px;
    font-variant-numeric: tabular-nums;
  }
  .tl-dot {
    flex-shrink: 0;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #f0c97a;
    margin-top: 5px;
    box-shadow: 0 0 8px rgba(240,201,122,0.5);
  }
  .tl-dot.dim { background: rgba(255,255,255,0.2); box-shadow: none; }
  .tl-body { flex: 1; }
  .tl-name {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 3px;
  }
  .tl-desc {
    font-size: 12px;
    color: rgba(255,255,255,0.5);
    line-height: 1.5;
  }
  .tl-tip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin-top: 6px;
    background: rgba(240,201,122,0.1);
    border: 1px solid rgba(240,201,122,0.2);
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 11px;
    color: #f0c97a;
  }

  /* PHOTO GRID */
  .photo-grid {
    padding: 24px 32px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .grid-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 140px 140px;
    gap: 6px;
    border-radius: 12px;
    overflow: hidden;
  }
  .grid-img { position: relative; overflow: hidden; }
  .grid-img.large {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
  }
  .grid-img img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
  }
  .grid-label {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.75));
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    padding: 16px 10px 8px;
    letter-spacing: 0.3px;
  }

  /* TIPS */
  .tips-row {
    display: flex;
    gap: 10px;
    padding: 18px 32px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    flex-wrap: wrap;
  }
  .tip-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 100px;
    padding: 7px 14px;
    font-size: 11.5px;
    color: rgba(255,255,255,0.7);
  }

  /* FOOTER */
  .footer {
    padding: 20px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer-left {
    font-size: 11px;
    color: rgba(255,255,255,0.25);
    line-height: 1.6;
  }
  .vote-box { display: flex; gap: 8px; }
  .vote-btn {
    padding: 9px 20px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 600;
    border: none;
  }
  .vote-yes { background: #f0c97a; color: #111; }
  .vote-no { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.55); }
</style>
</head>
<body>
<div class="card">

  <div class="hero">
    <img src="${heroB}" alt="Biển Phước Hải" />
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="badge">Buổi chiều xe máy</div>
      <div class="hero-title">Chiều <span>Phước Hải</span></div>
      <div class="hero-sub">Long Hải · Bà Rịa–Vũng Tàu &nbsp;·&nbsp; 13:30 → 16:30</div>
    </div>
  </div>

  <div class="meta-row">
    <div class="meta-item">
      <div class="meta-label">Thời gian</div>
      <div class="meta-value">3 tiếng</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">Phương tiện</div>
      <div class="meta-value">Xe máy</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">Cung đường</div>
      <div class="meta-value">~25 km</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">Nắng</div>
      <div class="meta-value">Dịu dần</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Lịch trình</div>
    <div class="timeline">

      <div class="tl-item">
        <div class="tl-time">13:30</div>
        <div class="tl-dot"></div>
        <div class="tl-body">
          <div class="tl-name">Xuất phát từ Villa</div>
          <div class="tl-desc">Đi sớm, tránh nằm phơi nắng lúc đỉnh điểm</div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-time">13:45</div>
        <div class="tl-dot"></div>
        <div class="tl-body">
          <div class="tl-name">Hồ Sở Bông</div>
          <div class="tl-desc">Hồ nước ngọt ven núi Minh Đạm, cây xanh mát, bóng râm tự nhiên, không khí trong lành</div>
          <div class="tl-tip">45 phút · dạo bộ ven hồ, check-in, chill</div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-time">14:30</div>
        <div class="tl-dot"></div>
        <div class="tl-body">
          <div class="tl-name">Bờ kè Lộc An</div>
          <div class="tl-desc">Kè đá dài 1km ven biển, gió biển mát, ngắm thuyền cá neo đậu, cảnh hoang sơ</div>
          <div class="tl-tip">40 phút · cảnh đẹp, ít đông, nhiều góc chụp</div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-time">15:15</div>
        <div class="tl-dot"></div>
        <div class="tl-body">
          <div class="tl-name">Cafe view biển Phước Hải</div>
          <div class="tl-desc">Ngồi mái che, order đồ uống, chờ ánh nắng vàng dịu — đẹp nhất khoảng 15:30</div>
          <div class="tl-tip">45 phút · Chờ-iu Chill hoặc Lan Rừng Coffee</div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-time">16:00</div>
        <div class="tl-dot"></div>
        <div class="tl-body">
          <div class="tl-name">Làng chài Phước Hải</div>
          <div class="tl-desc">Nắng vàng nhạt, dạo bến cá, chụp ảnh tàu thuyền thúng, lưới phơi, quảng trường</div>
          <div class="tl-tip">25 phút · giờ vàng chụp ảnh đẹp nhất</div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-time">16:30</div>
        <div class="tl-dot dim"></div>
        <div class="tl-body">
          <div class="tl-name">Về villa</div>
          <div class="tl-desc">Kịp tắm rửa trước BBQ buổi tối</div>
        </div>
      </div>

    </div>
  </div>

  <div class="photo-grid">
    <div class="section-title">Các điểm đến</div>
    <div class="grid-wrap">
      <div class="grid-img large">
        <img src="${locAnB}" alt="Bờ kè Lộc An" />
        <div class="grid-label">Bờ kè Lộc An</div>
      </div>
      <div class="grid-img">
        <img src="${hoSoBongB}" alt="Hồ Sở Bông" />
        <div class="grid-label">Hồ Sở Bông</div>
      </div>
      <div class="grid-img">
        <img src="${phuocHaiB}" alt="Bờ kè Phước Hải" />
        <div class="grid-label">Bờ kè Phước Hải</div>
      </div>
      <div class="grid-img">
        <img src="${cafeB}" alt="Cafe view biển" />
        <div class="grid-label">Cafe view biển</div>
      </div>
      <div class="grid-img">
        <img src="${langChaiB}" alt="Làng chài" />
        <div class="grid-label">Làng chài Phước Hải</div>
      </div>
    </div>
  </div>

  <div class="tips-row">
    <div class="tip-chip">👕 Áo chống nắng dài tay</div>
    <div class="tip-chip">⛽ Đổ đầy bình trước</div>
    <div class="tip-chip">🌬️ Đường ven biển có gió mát</div>
    <div class="tip-chip">📸 Đẹp nhất sau 15:30</div>
  </div>

  <div class="footer">
    <div class="footer-left">
      Xuất phát từ Villa Long Hải<br>
      Thứ Bảy, 11/4/2026
    </div>
    <div class="vote-box">
      <button class="vote-btn vote-yes">✓ Đi thôi</button>
      <button class="vote-btn vote-no">✗ Pass</button>
    </div>
  </div>

</div>
</body>
</html>`;

const outPath = `${__dirname}/output/poster.html`;
fs.writeFileSync(outPath, html);
console.log('Generated:', outPath);
console.log('Size:', (html.length / 1024 / 1024).toFixed(2), 'MB');
