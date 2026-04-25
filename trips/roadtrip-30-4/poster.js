const fs = require('fs');
const path = require('path');

const D = __dirname + '/images/';
const loadAny = (f) => {
  const p = D + f;
  if (!fs.existsSync(p) || fs.statSync(p).size < 100) return '';
  const ext = f.toLowerCase().split('.').pop();
  const mime = ext === 'webp' ? 'image/webp' : ext === 'png' ? 'image/png' : 'image/jpeg';
  return `data:${mime};base64,` + fs.readFileSync(p).toString('base64');
};

const hero   = loadAny('Quy-Nhon-Vnexpress-4396-155296-2039-6570-1617941560.webp');
const img1   = loadAny('co-thach-hero.jpg');
const img2   = loadAny('binh-tien-2.jpg');
const img3   = loadAny('z6223362576777_15a21ef00a73b25851a3972d86795475_20250113104122.jpg');
const img4   = loadAny('adgahjd-1755152740753.jpg');
const img5   = loadAny('1_ve_dep_hoang_so_cua_khu_du_lich_ta_dung_cdc0407440.jpg');
const img6   = loadAny('DJI_0071.jpg');

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>Road Trip 30/4 2026</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    background:#0a0e14;
    font-family:'Inter',sans-serif;
    display:flex; justify-content:center; align-items:flex-start;
    min-height:100vh; padding:32px 16px;
  }
  .card {
    width:640px;
    background:#0d1117;
    border-radius:20px;
    overflow:hidden;
    box-shadow:0 40px 100px rgba(0,0,0,0.8);
  }

  /* ── HERO ── */
  .hero {
    position:relative; height:380px; overflow:hidden;
  }
  .hero img {
    width:100%; height:100%; object-fit:cover; object-position:center 40%;
    display:block;
  }
  .hero-ov {
    position:absolute; inset:0;
    background:linear-gradient(
      160deg,
      rgba(15,10,30,0.25) 0%,
      rgba(20,10,40,0.4) 40%,
      rgba(10,14,20,0.92) 100%
    );
  }
  .hero-content {
    position:absolute; bottom:0; left:0; right:0;
    padding:0 32px 28px;
  }
  .eyebrow {
    display:flex; align-items:center; gap:10px; margin-bottom:10px;
  }
  .eyebrow-line { flex:0 0 28px; height:1px; background:#8b7cf8; }
  .eyebrow-txt {
    font-size:9px; font-weight:700; letter-spacing:3px;
    text-transform:uppercase; color:#a89af8;
  }
  .h1 {
    font-family:'Cormorant Garamond',serif;
    font-size:56px; font-weight:700; color:#fff;
    line-height:0.95; letter-spacing:-1px;
    margin-bottom:10px;
  }
  .h1 em { font-style:italic; color:#f0c97a; }
  .h1 b  { font-style:normal; color:#7be0b4; }
  .route-pill {
    display:inline-flex; align-items:center; gap:6px;
    background:rgba(255,255,255,0.1);
    border:1px solid rgba(255,255,255,0.18);
    backdrop-filter:blur(8px);
    border-radius:100px; padding:5px 14px;
    font-size:10px; color:rgba(255,255,255,0.75);
    letter-spacing:0.5px;
  }
  .dot { width:5px; height:5px; border-radius:50%; background:#f0c97a; flex-shrink:0; }

  /* ── STATS ROW ── */
  .stats {
    display:grid; grid-template-columns:repeat(4,1fr);
    border-bottom:1px solid rgba(255,255,255,0.06);
  }
  .stat {
    padding:14px 0; text-align:center;
    border-right:1px solid rgba(255,255,255,0.06);
  }
  .stat:last-child { border-right:none; }
  .stat-n {
    font-size:18px; font-weight:700;
    color:#f0c97a; line-height:1;
    margin-bottom:3px;
  }
  .stat-l {
    font-size:8px; font-weight:500;
    text-transform:uppercase; letter-spacing:1.5px;
    color:rgba(255,255,255,0.3);
  }

  /* ── HIGHLIGHTS ── */
  .section { padding:20px 28px; border-bottom:1px solid rgba(255,255,255,0.06); }
  .sec-label {
    font-size:8px; font-weight:700; letter-spacing:2.5px;
    text-transform:uppercase; color:rgba(255,255,255,0.3);
    margin-bottom:14px;
  }

  /* Photo grid 3×2 */
  .pgrid {
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows:90px 90px;
    gap:5px; border-radius:10px; overflow:hidden;
  }
  .pgrid-item { position:relative; overflow:hidden; }
  .pgrid-item.large { grid-row:1/3; }
  .pgrid-item img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .3s; }
  .pgrid-cap {
    position:absolute; bottom:0; left:0; right:0;
    background:linear-gradient(transparent,rgba(0,0,0,0.72));
    padding:12px 8px 7px;
    font-size:9px; font-weight:600; color:#fff; letter-spacing:0.3px;
  }

  /* ── DAY CHIPS ── */
  .days { display:flex; flex-direction:column; gap:8px; }
  .day-row {
    display:grid; grid-template-columns:60px 1fr;
    gap:12px; align-items:center;
  }
  .day-num {
    font-family:'Cormorant Garamond',serif;
    font-size:24px; font-weight:600; color:rgba(255,255,255,0.2);
    text-align:right; line-height:1;
  }
  .day-info {}
  .day-title { font-size:11px; font-weight:600; color:#fff; margin-bottom:2px; }
  .day-sub { font-size:9px; color:rgba(255,255,255,0.4); }
  .day-tags { display:flex; gap:4px; margin-top:4px; flex-wrap:wrap; }
  .day-tag {
    font-size:8px; font-weight:600; padding:2px 7px; border-radius:100px;
    background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.45);
  }
  .day-tag.oc { background:rgba(56,189,248,0.12); color:#7dd3fc; }
  .day-tag.gr { background:rgba(74,222,128,0.1); color:#86efac; }
  .day-tag.am { background:rgba(240,201,122,0.12); color:#f0c97a; }

  /* ── FOOTER ── */
  .footer {
    padding:18px 28px;
    display:flex; align-items:center; justify-content:space-between;
  }
  .footer-l { font-size:10px; color:rgba(255,255,255,0.22); line-height:1.6; }
  .btns { display:flex; gap:8px; }
  .btn {
    padding:9px 22px; border-radius:100px;
    font-size:11px; font-weight:700; border:none; cursor:pointer;
  }
  .btn-go { background:#f0c97a; color:#111; }
  .btn-pass { background:rgba(255,255,255,0.07); color:rgba(255,255,255,0.45); }
</style>
</head>
<body>
<div class="card">

  <!-- HERO -->
  <div class="hero">
    <img src="${hero}" alt="Quy Nhơn" />
    <div class="hero-ov"></div>
    <div class="hero-content">
      <div class="eyebrow">
        <div class="eyebrow-line"></div>
        <div class="eyebrow-txt">Road Trip · Xe Máy · 2 Người</div>
      </div>
      <div class="h1">7 Ngày <em>Ven Biển</em><br/>Lên <b>Núi</b> Về</div>
      <div class="route-pill">
        <span class="dot"></span>
        SG → Cổ Thạch → Phan Rang → Quy Nhơn → Nha Trang → Tà Đùng → SG
      </div>
    </div>
  </div>

  <!-- STATS -->
  <div class="stats">
    <div class="stat"><div class="stat-n">7</div><div class="stat-l">Ngày · 6 đêm</div></div>
    <div class="stat"><div class="stat-n">~1.3k</div><div class="stat-l">km tổng</div></div>
    <div class="stat"><div class="stat-n">2</div><div class="stat-l">Người · xe máy</div></div>
    <div class="stat"><div class="stat-n">30/4</div><div class="stat-l">Khởi hành</div></div>
  </div>

  <!-- PHOTO GRID -->
  <div class="section">
    <div class="sec-label">Các điểm nổi bật</div>
    <div class="pgrid">
      <div class="pgrid-item large">
        <img src="${img3}" alt="Kỳ Co" />
        <div class="pgrid-cap">Kỳ Co · Quy Nhơn</div>
      </div>
      <div class="pgrid-item">
        <img src="${img1}" alt="Cổ Thạch" />
        <div class="pgrid-cap">Cổ Thạch · Đá 7 Màu</div>
      </div>
      <div class="pgrid-item">
        <img src="${img2}" alt="Bình Tiên" />
        <div class="pgrid-cap">Biển Bình Tiên</div>
      </div>
      <div class="pgrid-item">
        <img src="${img6}" alt="Đèo Khánh Lê" />
        <div class="pgrid-cap">Đèo Khánh Lê</div>
      </div>
      <div class="pgrid-item">
        <img src="${img5}" alt="Tà Đùng" />
        <div class="pgrid-cap">Hồ Tà Đùng</div>
      </div>
    </div>
  </div>

  <!-- DAY OVERVIEW -->
  <div class="section">
    <div class="sec-label">Lịch trình 7 ngày</div>
    <div class="days">
      <div class="day-row">
        <div class="day-num">01</div>
        <div class="day-info">
          <div class="day-title">SG → Cổ Thạch → Cánh Đồng Muối Cà Ná → Phan Rang</div>
          <div class="day-sub">26/4 · ~310km · QL51 → QL55 ven biển → QL1 Ninh Thuận</div>
          <div class="day-tags"><span class="day-tag oc">QL55 ven biển · Lagi</span><span class="day-tag am">★ Cổ Thạch · đá 7 màu</span><span class="day-tag am">Muối hoàng hôn</span></div>
        </div>
      </div>
      <div class="day-row">
        <div class="day-num">02</div>
        <div class="day-info">
          <div class="day-title">Biển Bình Tiên → Đèo Cổ Mã → Gành Đá Đĩa → Quy Nhơn</div>
          <div class="day-sub">27/4 · ~330km · QL1 bắc → Đèo Cổ Mã (QL1) → QL1D</div>
          <div class="day-tags"><span class="day-tag oc">★ Bình Tiên · hoang sơ</span><span class="day-tag oc">Đèo Cổ Mã · view biển</span><span class="day-tag oc">Gành Đá Đĩa</span></div>
        </div>
      </div>
      <div class="day-row">
        <div class="day-num">03</div>
        <div class="day-info">
          <div class="day-title">Eo Gió · Bán đảo Hải Giang · Quy Nhơn chill</div>
          <div class="day-sub">28/4 · Nghỉ hồi sức · Tối Surf Bar / V Club</div>
          <div class="day-tags"><span class="day-tag oc">★ Eo Gió · vách đá</span><span class="day-tag am">★ Hải Giang</span><span class="day-tag am">Surf Bar</span></div>
        </div>
      </div>
      <div class="day-row">
        <div class="day-num">04</div>
        <div class="day-info">
          <div class="day-title">QL1D ven biển → Bãi Xép → Bích Đầm → Nha Trang</div>
          <div class="day-sub">29/4 · ~220km · Làng chài đảo + Tối Sailing Club</div>
          <div class="day-tags"><span class="day-tag am">★ Bãi Xép · Phú Yên</span><span class="day-tag oc">★ Bích Đầm · đảo NT</span><span class="day-tag am">Sailing Club</span></div>
        </div>
      </div>
      <div class="day-row">
        <div class="day-num">05</div>
        <div class="day-info">
          <div class="day-title">Đèo Khánh Lê → Đà Lạt (ghé ngang) → Hồ Tà Đùng</div>
          <div class="day-sub">30/4 · ~250km · QL27C (140km đèo núi) → QL28B → Tà Đùng</div>
          <div class="day-tags"><span class="day-tag gr">QL27C · Khánh Lê</span><span class="day-tag gr">★ Tà Đùng · Đắk Nông</span></div>
        </div>
      </div>
      <div class="day-row">
        <div class="day-num">06</div>
        <div class="day-info">
          <div class="day-title">Chill Hồ Tà Đùng · Kayak · BBQ + Ngắm sao</div>
          <div class="day-sub">1/5 · Nghỉ giữa rừng · Vịnh Hạ Long Tây Nguyên</div>
          <div class="day-tags"><span class="day-tag gr">Kayak 100k/h</span><span class="day-tag gr">BBQ bên hồ</span><span class="day-tag gr">Ngắm sao</span></div>
        </div>
      </div>
      <div class="day-row">
        <div class="day-num">07</div>
        <div class="day-info">
          <div class="day-title">Tà Đùng → Gia Nghĩa → Đồng Xoài → Bình Dương → SG</div>
          <div class="day-sub">2/5 · ~300km · QL14 → QL13 → Bình Dương → SG · về 15h</div>
          <div class="day-tags"><span class="day-tag">QL14 · Tây Nguyên</span><span class="day-tag">QL13 → BD → SG</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <div class="footer">
    <div class="footer-l">
      Xuất phát 26/4 · Budget ~3.5tr/người<br/>
      Xe máy · 2 người · Lễ 30/4 + 1/5/2026
    </div>
    <div class="btns">
      <button class="btn btn-go">✓ Đi thôi</button>
      <button class="btn btn-pass">✗ Pass</button>
    </div>
  </div>

</div>
</body>
</html>`;

const outPath = __dirname + '/output/poster.html';
fs.writeFileSync(outPath, html);
console.log('Generated:', outPath);
console.log('Size:', (html.length / 1024 / 1024).toFixed(2), 'MB');
