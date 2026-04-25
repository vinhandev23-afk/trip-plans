const fs = require('fs');

const loadImg = (primary, fallback) => {
  const f = fs.existsSync(primary) ? primary : (fallback || null);
  if (!f || !fs.existsSync(f)) return '';
  return 'data:image/jpeg;base64,' + fs.readFileSync(f).toString('base64');
};

// Try real images first, fall back to existing
const I = {
  cover:   loadImg('real/01-cover.jpg',        'lh-beach-boats.jpg'),
  beach:   loadImg('real/02-beach-aerial.jpg', 'lh-paradise.jpg'),
  boats:   loadImg('real/03-fishing-boats.jpg','vn-coast.jpg'),
  sunset:  loadImg('real/04-sunset-city.jpg',  'lh-sunset.jpg'),
  rocky:   loadImg('real/05-rocky-beach.jpg',  'vn-beach.jpg'),
  market:  loadImg('real/06-fish-market.jpg',  'vn-seafood.jpg'),
  road:    loadImg('real/07-road.jpg',         'lh-waves.jpg'),
  // supporting
  resort:  loadImg('vn-resort.jpg',            'resort-pool.jpg'),
  bbq:     loadImg('vn-bbq.jpg',               'seafood-bbq.jpg'),
  sunrise: loadImg('vn-sunrise.jpg',           'sunrise.jpg'),
  food:    loadImg('vn-food.jpg',              'seafood-market.jpg'),
};

Object.entries(I).forEach(([k,v]) => console.log(k.padEnd(8), v ? Math.round(v.length/1024)+'KB' : 'MISSING'));

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8"/>
<title>Company Trip Long Hải 2026</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700;800&display=swap');

@page { size: A4; margin: 0; }
*,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }

:root {
  --ink:     #0c0f14;
  --ink2:    #1c2433;
  --sand:    #f5f0e8;
  --warm:    #ede8df;
  --gold:    #b8936a;
  --gold2:   #d4b08a;
  --teal:    #1b5e6e;
  --teal-lt: #cde8ed;
  --muted:   #7a8190;
  --line:    #ddd8cf;
  --white:   #ffffff;
}

body {
  font-family:'Inter',-apple-system,sans-serif;
  background:var(--white);
  color:var(--ink);
  -webkit-print-color-adjust:exact;
  print-color-adjust:exact;
}

/* ── PAGE ── */
.page {
  width:210mm; height:297mm;
  overflow:hidden; page-break-after:always;
  display:flex; flex-direction:column;
  position:relative;
}
.page:last-child { page-break-after:auto; }

/* ════════════════════════════════════
   COVER – full bleed, giant serif
════════════════════════════════════ */
.cover-bg {
  position:absolute; inset:0;
  background-size:cover; background-position:center 45%;
}
.cover-grad {
  position:absolute; inset:0;
  background:
    linear-gradient(to bottom, rgba(8,10,16,.52) 0%, transparent 30%),
    linear-gradient(to top,    rgba(8,10,16,.9) 0%, rgba(8,10,16,.45) 45%, transparent 65%),
    linear-gradient(110deg,    rgba(8,10,16,.4) 0%, transparent 55%);
}
.cover-z {
  position:relative; z-index:2;
  display:flex; flex-direction:column; height:100%;
  padding:14mm 16mm 12mm;
}

/* top bar */
.cv-top { display:flex; align-items:center; justify-content:space-between; }
.cv-brand {
  font-size:7pt; font-weight:700; letter-spacing:3.5px;
  text-transform:uppercase; color:rgba(255,255,255,.4);
  display:flex; align-items:center; gap:10px;
}
.cv-brand-div { width:1px; height:18px; background:rgba(255,255,255,.18); }
.cv-brand-sub { font-weight:300; letter-spacing:1px; font-size:7.5pt; color:rgba(255,255,255,.35); text-transform:none; }
.cv-label {
  font-size:7pt; font-weight:600; letter-spacing:2px;
  text-transform:uppercase; color:rgba(212,176,138,.85);
  border:1px solid rgba(212,176,138,.35); padding:5px 14px;
}

/* main headline */
.cv-mid { flex:1; display:flex; flex-direction:column; justify-content:flex-end; padding-bottom:11mm; }
.cv-eyebrow { display:flex; align-items:center; gap:10px; margin-bottom:12px; }
.cv-rule { width:28px; height:1px; background:var(--gold2); }
.cv-eyebrow-txt {
  font-size:7.5pt; font-weight:500; letter-spacing:3px;
  text-transform:uppercase; color:var(--gold2);
}
.cv-h1 {
  font-family:'Cormorant Garamond',Georgia,serif;
  font-size:86pt; font-weight:300; color:#fff;
  line-height:.85; letter-spacing:-4px;
}
.cv-h1 em { font-style:italic; color:rgba(212,176,138,.9); }
.cv-line {
  display:flex; align-items:center; gap:16px; margin-top:20px; margin-bottom:28px;
}
.cv-line-rule { flex:1; height:.5px; background:rgba(255,255,255,.15); max-width:120px; }
.cv-tagline {
  font-size:8pt; font-weight:300; color:rgba(255,255,255,.5);
  letter-spacing:4px; text-transform:uppercase;
}

/* stats */
.cv-stats { display:flex; border-top:.5px solid rgba(255,255,255,.12); padding-top:16px; }
.cv-stat { flex:1; padding-right:18px; border-right:.5px solid rgba(255,255,255,.1); margin-right:18px; }
.cv-stat:last-child { border:none; margin:0; padding:0; }
.cv-stat-n {
  font-family:'Cormorant Garamond',serif; font-size:22pt;
  font-weight:500; color:#fff; line-height:1; margin-bottom:3px;
}
.cv-stat-l { font-size:6.5pt; font-weight:500; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,.3); }

/* footer strip */
.cv-foot {
  border-top:.5px solid rgba(255,255,255,.08); padding-top:11px;
  display:flex; align-items:center; justify-content:space-between;
}
.cv-foot-l { font-size:7pt; color:rgba(255,255,255,.22); letter-spacing:.8px; }
.cv-foot-r { display:flex; gap:7px; }
.cv-tag { font-size:6.5pt; color:rgba(255,255,255,.28); border:.5px solid rgba(255,255,255,.1); padding:3px 10px; letter-spacing:1px; }

/* ════════════════════════════════════
   INNER PAGE CHROME
════════════════════════════════════ */
.rh {
  height:9mm; flex-shrink:0; padding:0 15mm;
  display:flex; align-items:center; justify-content:space-between;
  border-bottom:.5px solid var(--line);
}
.rh-l { font-size:6.5pt; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--muted); }
.rh-r { font-size:6.5pt; color:var(--muted); display:flex; align-items:center; gap:6px; }
.rh-sep { width:3px; height:3px; border-radius:50%; background:var(--gold); }

.rf {
  height:8mm; flex-shrink:0; padding:0 15mm;
  display:flex; align-items:center; justify-content:space-between;
  border-top:.5px solid var(--line); margin-top:auto;
}
.rf-l,.rf-r { font-size:6pt; color:var(--muted); }

.body { flex:1; overflow:hidden; display:flex; flex-direction:column; }

/* ════════════════════════════════════
   HERO IMAGE STRIP
════════════════════════════════════ */
.hero { position:relative; overflow:hidden; flex-shrink:0; }
.hero img { width:100%; height:100%; object-fit:cover; display:block; }
.hero-ov {
  position:absolute; inset:0;
  background:linear-gradient(180deg, rgba(8,10,16,.06) 0%, rgba(8,10,16,.75) 82%);
}
.hero-txt { position:absolute; inset:0; padding:0 15mm 16px; display:flex; flex-direction:column; justify-content:flex-end; }
.day-label {
  display:inline-block; width:fit-content;
  font-size:6.5pt; font-weight:700; letter-spacing:2.5px; text-transform:uppercase;
  background:var(--gold); color:#fff; padding:4px 14px; margin-bottom:9px;
}
.day-label.alt { background:var(--teal); }
.hero-ttl {
  font-family:'Cormorant Garamond',serif; font-size:32pt;
  font-weight:400; color:#fff; line-height:1.0; letter-spacing:-.5px;
}
.hero-sub { font-size:7.5pt; font-weight:300; color:rgba(255,255,255,.52); letter-spacing:2.5px; text-transform:uppercase; margin-top:6px; }

/* ════════════════════════════════════
   OVERVIEW PAGE — split
════════════════════════════════════ */
.split { display:flex; flex:1; overflow:hidden; }
.split-photo { overflow:hidden; flex-shrink:0; position:relative; }
.split-photo img { width:100%; height:100%; object-fit:cover; display:block; }
.split-content { display:flex; flex-direction:column; justify-content:center; }

/* large display label */
.disp-label {
  font-size:6pt; font-weight:800; letter-spacing:3.5px;
  text-transform:uppercase; color:var(--gold); margin-bottom:5px;
}
.disp-title {
  font-family:'Cormorant Garamond',serif; font-size:26pt;
  font-weight:400; color:var(--ink); line-height:1.05; letter-spacing:-.3px;
}
.disp-rule { width:32px; height:1.5px; background:var(--gold); margin:12px 0; }
.disp-body { font-size:8.5pt; font-weight:300; color:var(--muted); line-height:1.8; }

/* info table */
.info-table { width:100%; border-collapse:collapse; margin-top:14px; }
.info-table tr { border-bottom:.5px solid var(--line); }
.info-table tr:last-child { border-bottom:none; }
.info-table td { padding:7px 0; font-size:8pt; vertical-align:top; }
.info-table td:first-child { font-size:6.5pt; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--muted); width:35%; padding-right:8px; padding-top:9px; }
.info-table td:last-child { font-size:9pt; font-weight:600; color:var(--ink); }

/* ════════════════════════════════════
   STATS BLOCK
════════════════════════════════════ */
.stats-row { display:flex; margin-top:16px; padding-top:16px; border-top:.5px solid var(--line); }
.sc { flex:1; border-right:.5px solid var(--line); padding-right:14px; margin-right:14px; }
.sc:last-child { border:none; margin:0; padding:0; }
.sc-n {
  font-family:'Cormorant Garamond',serif; font-size:20pt;
  font-weight:600; color:var(--teal); line-height:1;
}
.sc-l { font-size:6pt; font-weight:700; letter-spacing:1.2px; text-transform:uppercase; color:var(--muted); margin-top:2px; }
.sc-s { font-size:5.5pt; color:var(--line); margin-top:1px; }

/* ════════════════════════════════════
   ITINERARY — inspired by "UPCOMING TRAIL ADVENTURES" list
════════════════════════════════════ */
.iti-area { padding:10px 15mm 0; }

/* Section heading like "UPCOMING TRAIL ADVENTURES" */
.iti-heading {
  display:flex; align-items:baseline; gap:12px;
  margin-bottom:12px; padding-bottom:8px;
  border-bottom:1.5px solid var(--ink);
}
.iti-heading-main {
  font-family:'Cormorant Garamond',serif; font-size:18pt;
  font-weight:500; color:var(--ink); line-height:1; letter-spacing:-.2px;
}
.iti-heading-sub {
  font-size:7pt; font-weight:600; letter-spacing:2px;
  text-transform:uppercase; color:var(--muted);
}

/* Each row like a trail event row: TIME | TITLE | TYPE | desc */
.iti-row {
  display:grid;
  grid-template-columns: 58px 8px 1fr auto;
  gap:0 10px;
  padding:9px 0;
  border-bottom:.5px solid var(--line);
  align-items:start;
  page-break-inside:avoid;
}
.iti-row:last-child { border-bottom:none; }

.iti-time {
  font-size:7.5pt; font-weight:700; color:var(--gold);
  line-height:1.2; white-space:nowrap; padding-top:1px;
  text-align:right;
}
.iti-dot-col { display:flex; flex-direction:column; align-items:center; padding-top:5px; }
.iti-dot { width:6px; height:6px; border-radius:50%; border:1.5px solid var(--gold); background:var(--white); flex-shrink:0; }
.iti-dot.alt { border-color:var(--teal); }
.iti-dot.dark { border-color:var(--ink); background:var(--ink); }
.iti-dot.faint { border-color:var(--line); background:var(--warm); }
.iti-vline { flex:1; width:1px; background:var(--line); margin-top:4px; min-height:14px; }

.iti-content {}
.iti-title { font-size:9.5pt; font-weight:700; color:var(--ink); margin-bottom:3px; line-height:1.25; }
.iti-desc { font-size:7.5pt; font-weight:300; color:var(--muted); line-height:1.6; margin-bottom:4px; }
.iti-tags { display:flex; flex-wrap:wrap; gap:3px; }
.itag { font-size:6pt; font-weight:600; color:var(--muted); background:var(--warm); border:.5px solid var(--line); padding:2px 7px; letter-spacing:.3px; }

.iti-type {
  font-size:6pt; font-weight:700; letter-spacing:1.2px;
  text-transform:uppercase; padding:3px 9px; white-space:nowrap;
  border:.5px solid; align-self:start; margin-top:1px;
}
.type-move  { color:var(--teal); border-color:var(--teal-lt); background:var(--teal-lt); }
.type-food  { color:#9f1239; border-color:#ffe4e6; background:#fff1f2; }
.type-rest  { color:#166534; border-color:#dcfce7; background:#f0fdf4; }
.type-photo { color:#92400e; border-color:#fef3c7; background:#fffbeb; }
.type-free  { color:var(--teal); border-color:var(--teal-lt); background:var(--teal-lt); }
.type-night { color:#6b21a8; border-color:#f3e8ff; background:#faf5ff; }
.type-opt   { color:var(--muted); border-color:var(--line); background:var(--warm); }

/* ════════════════════════════════════
   OPTION CARDS — 2 col
════════════════════════════════════ */
.opts { display:grid; grid-template-columns:1fr 1fr; gap:7px; margin:4px 0 2px; }
.opt { border:.5px solid var(--line); padding:10px 12px; background:var(--white); }
.opt-letter {
  font-family:'Cormorant Garamond',serif; font-size:22pt;
  font-weight:600; color:var(--gold); line-height:1; float:left;
  margin-right:9px; margin-top:-2px;
}
.opt-lbl { font-size:5.5pt; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--muted); display:block; margin-bottom:1px; }
.opt-ttl { font-size:8.5pt; font-weight:700; color:var(--ink); display:block; margin-bottom:6px; clear:left; }
.opt-ul { list-style:none; display:flex; flex-direction:column; gap:3px; }
.opt-ul li { font-size:7.5pt; color:var(--muted); display:flex; gap:6px; line-height:1.4; }
.opt-ul li::before { content:'—'; color:var(--gold2); font-size:7pt; flex-shrink:0; }

/* ════════════════════════════════════
   PHOTO MOSAIC STRIP
════════════════════════════════════ */
.mosaic { display:grid; gap:3px; flex-shrink:0; }
.mosaic.c3 { grid-template-columns:2fr 1fr 1fr; }
.mosaic.c2 { grid-template-columns:3fr 2fr; }
.mosaic-item { overflow:hidden; position:relative; }
.mosaic-item img { width:100%; height:100%; object-fit:cover; display:block; }
.mosaic-cap {
  position:absolute; bottom:0; left:0; right:0;
  background:linear-gradient(transparent, rgba(0,0,0,.52));
  padding:12px 8px 5px;
  font-size:5.5pt; font-weight:700; letter-spacing:1.2px;
  text-transform:uppercase; color:rgba(255,255,255,.82);
}

/* ════════════════════════════════════
   ROLE CARDS — inspired by clean "info card" style
════════════════════════════════════ */
.roles { display:grid; grid-template-columns:repeat(4,1fr); gap:7px; margin-top:12px; }
.role { background:var(--sand); padding:13px 11px 11px; border-top:1.5px solid var(--gold); page-break-inside:avoid; }
.role-tag { font-size:5.5pt; font-weight:800; letter-spacing:2px; text-transform:uppercase; color:var(--gold); margin-bottom:6px; }
.role-title { font-size:9pt; font-weight:700; color:var(--ink); margin-bottom:5px; line-height:1.2; }
.role-desc { font-size:7pt; color:var(--muted); line-height:1.6; }

/* ════════════════════════════════════
   CHECKLIST — structured data table style
════════════════════════════════════ */
.checks { display:grid; grid-template-columns:repeat(3,1fr); gap:7px; margin-top:10px; }
.check-col { }
.check-hd { font-size:7.5pt; font-weight:700; color:var(--ink); padding:6px 0; border-bottom:1px solid var(--line); margin-bottom:7px; }
.check-ul { list-style:none; display:flex; flex-direction:column; gap:5px; }
.check-ul li { font-size:7pt; color:#4a4a4a; display:flex; align-items:center; gap:7px; line-height:1.3; }
.cb { width:10px; height:10px; border:.75px solid var(--line); background:white; flex-shrink:0; }

/* ════════════════════════════════════
   FLOW SUMMARY — dark cards, trail schedule style
════════════════════════════════════ */
.flow { display:grid; grid-template-columns:1fr 1fr; gap:7px; margin-top:10px; }
.fbox { padding:14px 14px; }
.fb1 { background:var(--ink2); }
.fb2 { background:var(--teal); }
.fb-eyebrow { font-size:6pt; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:var(--gold2); margin-bottom:6px; }
.fb-title {
  font-family:'Cormorant Garamond',serif; font-size:16pt;
  font-weight:400; color:white; margin-bottom:12px; line-height:1.05;
}
.fs { display:flex; align-items:center; gap:8px; padding:5px 0; border-bottom:.5px solid rgba(255,255,255,.07); }
.fs:last-child { border:none; }
.fs-time { font-size:7pt; font-weight:700; color:var(--gold2); width:38px; flex-shrink:0; text-align:right; }
.fs-sep { width:.5px; height:12px; background:rgba(255,255,255,.15); flex-shrink:0; }
.fs-txt { flex:1; font-size:7.5pt; color:rgba(255,255,255,.72); line-height:1.3; }
.fs-type { font-size:6pt; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:rgba(255,255,255,.28); }

/* ════════════════════════════════════
   UTILITIES
════════════════════════════════════ */
.gold-rule { height:.5px; background:linear-gradient(90deg, var(--gold), transparent); margin:12px 0; }
.heavy-rule { height:1.5px; background:var(--ink); margin:14px 0; }
.pad { padding:0 15mm; }
.pad-t { padding-top:11px; }
</style>
</head>
<body>


<!-- ═══════════════════════ PAGE 1 · COVER ═══════════════════════ -->
<div class="page">
  <div class="cover-bg" style="background-image:url('${I.cover}');"></div>
  <div class="cover-grad"></div>
  <div class="cover-z">

    <div class="cv-top">
      <div class="cv-brand">
        <span>Company Trip</span>
        <div class="cv-brand-div"></div>
        <span class="cv-brand-sub">Long Hải · Bà Rịa – Vũng Tàu</span>
      </div>
      <div class="cv-label">2026 Edition</div>
    </div>

    <div class="cv-mid">
      <div class="cv-eyebrow">
        <div class="cv-rule"></div>
        <span class="cv-eyebrow-txt">Hành trình nghỉ dưỡng & gắn kết đội nhóm</span>
      </div>
      <div class="cv-h1">Long<br/><em>Hải</em></div>
      <div class="cv-line">
        <div class="cv-line-rule"></div>
        <div class="cv-tagline">2 Ngày · 1 Đêm · ~20 Thành viên</div>
      </div>
      <div class="cv-stats">
        <div class="cv-stat">
          <div class="cv-stat-n">20</div>
          <div class="cv-stat-l">Thành viên</div>
        </div>
        <div class="cv-stat">
          <div class="cv-stat-n">120km</div>
          <div class="cv-stat-l">Từ Sài Gòn</div>
        </div>
        <div class="cv-stat">
          <div class="cv-stat-n">2N1Đ</div>
          <div class="cv-stat-l">Hành trình</div>
        </div>
        <div class="cv-stat">
          <div class="cv-stat-n">BR–VT</div>
          <div class="cv-stat-l">Tỉnh thành</div>
        </div>
      </div>
    </div>

    <div class="cv-foot">
      <span class="cv-foot-l">Khởi hành: Quận 9, TP.HCM &nbsp;·&nbsp; Xe bus 29 chỗ &nbsp;·&nbsp; Cao tốc Long Thành – Dầu Giây</span>
      <div class="cv-foot-r">
        <span class="cv-tag">Nghỉ dưỡng</span>
        <span class="cv-tag">Team Building</span>
        <span class="cv-tag">BBQ Night</span>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════════════════ PAGE 2 · OVERVIEW ═══════════════════════ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r"><span>Tổng quan chuyến đi</span><span class="rh-sep"></span><span>02</span></div>
  </div>
  <div class="body">
    <div class="split">
      <div class="split-photo" style="width:44%;">
        <img src="${I.beach}" alt="Long Hải" style="object-position:center 50%;"/>
      </div>
      <div class="split-content" style="padding:14mm 15mm 14mm 12mm;">
        <div class="disp-label">Trip Overview</div>
        <div class="disp-title">Thông tin<br/>chuyến đi</div>
        <div class="disp-rule"></div>
        <div class="disp-body">
          Long Hải — dải bờ biển hoang sơ thuộc Bà Rịa–Vũng Tàu, chỉ ~120km từ Sài Gòn qua cao tốc Long Thành–Dầu Giây. Nước biển trong, sóng nhẹ, hải sản tươi ngon và không gian yên tĩnh — lý tưởng để cả team xả stress và gắn kết sau những tháng làm việc bận rộn.
        </div>

        <table class="info-table">
          <tr><td>Số lượng</td><td>~20 người</td></tr>
          <tr><td>Phương tiện</td><td>Xe bus 29 chỗ</td></tr>
          <tr><td>Xuất phát</td><td>Quận 9, TP.HCM — 07:00</td></tr>
          <tr><td>Điểm đến</td><td>Long Hải, Bà Rịa – Vũng Tàu</td></tr>
          <tr><td>Khoảng cách</td><td>~120 km · ~2.5 giờ lăn bánh</td></tr>
          <tr><td>Lưu trú</td><td>Homestay ven biển · Hồ bơi · BBQ</td></tr>
        </table>

        <div class="disp-label" style="margin-top:14px;">Dữ liệu xu hướng 2026</div>
        <div class="stats-row">
          <div class="sc">
            <div class="sc-n">+47%</div>
            <div class="sc-l">Du khách tăng</div>
            <div class="sc-s">Tổng cục Du lịch VN</div>
          </div>
          <div class="sc">
            <div class="sc-n">42M</div>
            <div class="sc-l">#LongHai TikTok</div>
            <div class="sc-s">TikTok Travel 2026</div>
          </div>
          <div class="sc">
            <div class="sc-n">4.8</div>
            <div class="sc-l">Google Maps Rating</div>
            <div class="sc-s">2026 average</div>
          </div>
          <div class="sc">
            <div class="sc-n">94%</div>
            <div class="sc-l">NV hài lòng sau trip</div>
            <div class="sc-s">Gallup Workplace 2026</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="rf">
    <div class="rf-l">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-r">Confidential · Company Trip 2026</div>
  </div>
</div>


<!-- ═══════════════════════ PAGE 3 · DAY 1 MORNING ═══════════════════════ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r"><span>Lịch trình · Ngày 1</span><span class="rh-sep"></span><span>03</span></div>
  </div>
  <div class="body">
    <div class="hero" style="height:64mm;">
      <img src="${I.rocky}" alt="Cung đường ven biển Long Hải" style="object-position:center 50%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-label">Day 01</div>
        <div class="hero-ttl">Roadtrip &<br/>Trải nghiệm</div>
        <div class="hero-sub">Khởi hành · Đèo Nước Ngọt · Hải sản Phước Hải · BBQ đêm biển</div>
      </div>
    </div>

    <div class="iti-area">
      <div class="iti-heading">
        <div class="iti-heading-main">Lịch trình chi tiết</div>
        <div class="iti-heading-sub">Ngày 01 · Buổi sáng & Trưa</div>
      </div>

      <div class="iti-row">
        <div class="iti-time">07:00<br/>09:30</div>
        <div class="iti-dot-col"><div class="iti-dot"></div><div class="iti-vline"></div></div>
        <div class="iti-content">
          <div class="iti-title">Xuất phát từ Quận 9 — Hành trình bắt đầu</div>
          <div class="iti-desc">Xe bus 29 chỗ lăn bánh đúng giờ. Route qua cao tốc Long Thành–Dầu Giây rồi rẽ vào QL-51 về BR-VT. Hành trình ~120km, khoảng 2.5 giờ. Tranh thủ ăn sáng trên xe hoặc dừng nghỉ nhẹ tại trạm dịch vụ.</div>
          <div class="iti-tags">
            <span class="itag">~120 km</span>
            <span class="itag">Cao tốc Long Thành–Dầu Giây</span>
            <span class="itag">Xe bus 29 chỗ</span>
          </div>
        </div>
        <div class="iti-type type-move">Di chuyển</div>
      </div>

      <div class="iti-row">
        <div class="iti-time">09:30<br/>10:30</div>
        <div class="iti-dot-col"><div class="iti-dot"></div><div class="iti-vline"></div></div>
        <div class="iti-content">
          <div class="iti-title">Check-in Đèo Nước Ngọt — Tầm nhìn panorama biển</div>
          <div class="iti-desc">Đèo Nước Ngọt trên QL-55 là điểm dừng check-in nổi tiếng nhất tuyến Long Hải. Từ trên đèo nhìn xuống toàn cảnh vùng biển BR-VT trải dài theo đường chân trời. Cả đoàn dừng xe chụp ảnh nhóm, hít gió biển và cảm nhận không khí kỳ nghỉ thực sự bắt đầu.</div>
          <div class="iti-tags">
            <span class="itag">Đèo Nước Ngọt · QL-55</span>
            <span class="itag">Trending 2026 · 15M TikTok views</span>
          </div>
        </div>
        <div class="iti-type type-photo">Check-in</div>
      </div>

      <div class="iti-row">
        <div class="iti-time">10:45<br/>11:30</div>
        <div class="iti-dot-col"><div class="iti-dot"></div><div class="iti-vline"></div></div>
        <div class="iti-content">
          <div class="iti-title">Check-in Homestay — Khám phá nơi trú ngụ 2N1Đ</div>
          <div class="iti-desc">Nhận phòng, gửi hành lý và dành 10 phút khám phá khuôn viên. Confirm khu BBQ, hồ bơi và lối xuống bãi biển riêng. Leader briefing nhanh lịch trình và phân công vai trò cho cả team trước khi ra ngoài ăn trưa.</div>
          <div class="iti-tags">
            <span class="itag">Hồ bơi ngoài trời</span>
            <span class="itag">Khu BBQ riêng</span>
            <span class="itag">Bãi biển riêng</span>
          </div>
        </div>
        <div class="iti-type type-rest">Homestay</div>
      </div>

      <div class="iti-row">
        <div class="iti-time">11:30<br/>13:30</div>
        <div class="iti-dot-col"><div class="iti-dot"></div></div>
        <div class="iti-content">
          <div class="iti-title">Bữa trưa hải sản tươi sống tại Phước Hải</div>
          <div class="iti-desc">Di chuyển vài phút xuống làng chài Phước Hải — nơi ngư dân ra khơi từ sáng sớm và cập bến trước trưa. Nhà hàng ven biển mộc mạc, hải sản được đưa thẳng từ thuyền vào bếp. Giá thực dân, chất lượng không thua nhà hàng thành phố.</div>
          <div class="iti-tags">
            <span class="itag">Tôm hùm nướng muối ớt</span>
            <span class="itag">Mực một nắng sa tế</span>
            <span class="itag">Lẩu cá biển nấu me</span>
            <span class="itag">Ghẹ hấp sả</span>
          </div>
        </div>
        <div class="iti-type type-food">Ăn trưa</div>
      </div>

    </div>
  </div>
  <div class="rf">
    <div class="rf-l">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-r">Confidential · Company Trip 2026</div>
  </div>
</div>


<!-- ═══════════════════════ PAGE 4 · DAY 1 AFTERNOON & NIGHT ═══════════════════════ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r"><span>Lịch trình · Ngày 1 — tiếp theo</span><span class="rh-sep"></span><span>04</span></div>
  </div>
  <div class="body">

    <div class="mosaic c3" style="height:34mm;">
      <div class="mosaic-item">
        <img src="${I.boats}" alt="Thuyền chài Phước Hải" style="object-position:center 40%;"/>
        <div class="mosaic-cap">Làng chài Phước Hải</div>
      </div>
      <div class="mosaic-item">
        <img src="${I.market}" alt="Chợ hải sản Long Hải"/>
        <div class="mosaic-cap">Chợ Long Hải</div>
      </div>
      <div class="mosaic-item">
        <img src="${I.bbq}" alt="BBQ hải sản đêm biển" style="object-position:center 60%;"/>
        <div class="mosaic-cap">BBQ đêm biển</div>
      </div>
    </div>

    <div class="iti-area" style="padding-top:8px;">
      <div class="iti-heading">
        <div class="iti-heading-main">Lịch trình chi tiết</div>
        <div class="iti-heading-sub">Ngày 01 · Buổi chiều & Tối</div>
      </div>

      <div class="iti-row">
        <div class="iti-time">13:30<br/>17:00</div>
        <div class="iti-dot-col"><div class="iti-dot"></div><div class="iti-vline" style="min-height:56px;"></div></div>
        <div class="iti-content">
          <div class="iti-title">Tự do — Mỗi người chọn cách nghỉ ngơi riêng</div>
          <div class="opts">
            <div class="opt">
              <span class="opt-letter">A</span>
              <span class="opt-lbl">Chill Mode</span>
              <span class="opt-ttl">Nghỉ dưỡng tại Homestay</span>
              <ul class="opt-ul">
                <li>Ngủ trưa, thư giãn hoàn toàn</li>
                <li>Tắm hồ bơi, nằm ghế bãi biển</li>
                <li>Chill nhạc, đọc sách, chụp ảnh sân vườn</li>
              </ul>
            </div>
            <div class="opt">
              <span class="opt-letter">B</span>
              <span class="opt-lbl">Explorer Mode</span>
              <span class="opt-ttl">Khám phá Phước Hải bằng xe máy</span>
              <ul class="opt-ul">
                <li>Thuê xe — đi theo nhóm tối thiểu 3 người</li>
                <li>Hồ Sở Bông · Bờ kè Lộc An</li>
                <li>Quảng trường Phước Hải · Cafe view biển</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="iti-type type-free">Tự do</div>
      </div>

      <div class="iti-row">
        <div class="iti-time">16:30<br/>17:30</div>
        <div class="iti-dot-col"><div class="iti-dot"></div><div class="iti-vline"></div></div>
        <div class="iti-content">
          <div class="iti-title">Tập trung — Đi chợ Long Hải mua nguyên liệu BBQ</div>
          <div class="iti-desc">Cả đoàn tập trung, cùng đi chợ chọn hải sản tươi cho bữa BBQ tối. Chiến thuật tối ưu: nhờ tiểu thương làm sạch, chặt sẵn và ướp gia vị tại chỗ — muối ớt / sa tế / mỡ hành. Về đến homestay chỉ việc bắc bếp nướng ngay, vừa tiết kiệm thời gian vừa giữ nguyên hương vị tươi nhất.</div>
          <div class="iti-tags">
            <span class="itag">Tôm sú · Tôm càng xanh</span>
            <span class="itag">Mực ống · Mực lá</span>
            <span class="itag">Sò điệp · Sò huyết</span>
            <span class="itag">Nhờ ướp sẵn tại chợ</span>
          </div>
        </div>
        <div class="iti-type type-food">Cả team</div>
      </div>

      <div class="iti-row">
        <div class="iti-time">18:30<br/>23:30</div>
        <div class="iti-dot-col"><div class="iti-dot" style="border-color:#6b21a8;"></div></div>
        <div class="iti-content">
          <div class="iti-title">BBQ Night — Tiệc nướng hải sản, Karaoke & Party Games</div>
          <div class="iti-desc">Bữa tiệc dưới bầu trời đêm biển với mùi hải sản nướng trên than hồng, tiếng nhạc vang xa, tiếng cười hòa quyện vào gió biển. Sau ăn chuyển sang karaoke tập thể và mini games — khoảnh khắc kết nối thật sự, không thể tìm thấy ở văn phòng. Food Lead điều phối bếp nướng, Game Lead điều phối chương trình.</div>
          <div class="iti-tags">
            <span class="itag">Karaoke tập thể</span>
            <span class="itag">Đoán bài hát theo giai điệu</span>
            <span class="itag">Truth or Dare</span>
            <span class="itag">Drinking games</span>
            <span class="itag">Loa bluetooth</span>
          </div>
        </div>
        <div class="iti-type type-night">BBQ Night</div>
      </div>

    </div>
  </div>
  <div class="rf">
    <div class="rf-l">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-r">Confidential · Company Trip 2026</div>
  </div>
</div>


<!-- ═══════════════════════ PAGE 5 · DAY 2 ═══════════════════════ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r"><span>Lịch trình · Ngày 2</span><span class="rh-sep"></span><span>05</span></div>
  </div>
  <div class="body">
    <div class="hero" style="height:64mm;">
      <img src="${I.sunset}" alt="Biển Long Hải bình minh" style="object-position:center 40%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-label alt">Day 02</div>
        <div class="hero-ttl">Biển sáng &<br/>Về nhà</div>
        <div class="hero-sub">Bình minh · Team Building · Cafe · Tâm linh · Lên đường</div>
      </div>
    </div>

    <div class="iti-area">
      <div class="iti-heading">
        <div class="iti-heading-main">Lịch trình chi tiết</div>
        <div class="iti-heading-sub">Ngày 02 · Sáng sớm đến trưa</div>
      </div>

      <div class="iti-row">
        <div class="iti-time">05:30<br/>06:30</div>
        <div class="iti-dot-col"><div class="iti-dot alt"></div><div class="iti-vline"></div></div>
        <div class="iti-content">
          <div class="iti-title">Bình minh trên biển — Khoảnh khắc không thể bỏ lỡ</div>
          <div class="iti-desc">5:30 sáng, Long Hải yên tĩnh đến lạ thường. Mặt trời nhú lên từ đường chân trời, nhuộm bầu trời sắc cam và hồng — cảnh tượng khiến ai cũng muốn giơ máy ảnh. Tắm biển buổi sáng sóng nhẹ, nước trong, mát lành hoàn toàn khác với tắm trưa hay chiều.</div>
        </div>
        <div class="iti-type type-rest" style="background:var(--teal-lt);color:var(--teal);border-color:var(--teal-lt);">Sáng sớm</div>
      </div>

      <div class="iti-row">
        <div class="iti-time">06:30<br/>07:30</div>
        <div class="iti-dot-col"><div class="iti-dot alt"></div><div class="iti-vline"></div></div>
        <div class="iti-content">
          <div class="iti-title">Team Building bãi biển — Vui, kết nối, đáng nhớ</div>
          <div class="iti-desc">Bãi cát trắng và bầu trời sáng sớm là sân khấu lý tưởng nhất cho team building. Game Lead chia team, phát lệnh và điều phối 3 vòng thi: ném bóng biển, chạy tiếp sức trên cát, và kéo co — đội thua tự chọn hình phạt vui. Tinh thần sảng khoái, năng lượng cao nhất trong chuyến đi.</div>
          <div class="iti-tags">
            <span class="itag">Ném bóng biển</span>
            <span class="itag">Chạy tiếp sức trên cát</span>
            <span class="itag">Kéo co · Đội thua lội biển</span>
          </div>
        </div>
        <div class="iti-type type-rest" style="background:var(--teal-lt);color:var(--teal);border-color:var(--teal-lt);">Team Building</div>
      </div>

      <div class="iti-row">
        <div class="iti-time">07:30<br/>08:30</div>
        <div class="iti-dot-col"><div class="iti-dot alt"></div><div class="iti-vline"></div></div>
        <div class="iti-content">
          <div class="iti-title">Ăn sáng địa phương & Dọn đồ check-out</div>
          <div class="iti-desc">Bữa sáng với những món đặc trưng của vùng biển BR-VT: bún cá nước me chua ngọt, bánh mì ốp la ăn kèm pate địa phương, hoặc hủ tiếu biển nấu xương cá thơm ngọt. Sau đó dọn phòng, gom đồ cá nhân, check-out homestay đúng giờ quy định.</div>
        </div>
        <div class="iti-type type-food">Ăn sáng</div>
      </div>

      <div class="iti-row">
        <div class="iti-time">08:30<br/>09:30</div>
        <div class="iti-dot-col"><div class="iti-dot alt"></div><div class="iti-vline"></div></div>
        <div class="iti-content">
          <div class="iti-title">Cafe view biển — Khoảng lặng trước khi về</div>
          <div class="iti-desc">Ghé một trong những quán cafe trending 2026 tại Long Hải — kiến trúc mộc, view biển mở, cà phê phin Việt và nước dừa tươi chặt tại chỗ. Chụp ảnh lưu niệm cuối chuyến, nhâm nhi, trao đổi cảm nhận và nạp năng lượng trước hành trình về.</div>
        </div>
        <div class="iti-type type-photo">Cafe</div>
      </div>

      <div class="iti-row">
        <div class="iti-time">09:30<br/>10:30</div>
        <div class="iti-dot-col"><div class="iti-dot faint"></div><div class="iti-vline"></div></div>
        <div class="iti-content">
          <div class="iti-title">Cầu bình an — Chùa/Nhà thờ địa phương <span style="font-size:7pt;font-weight:400;color:var(--muted);">(Tùy chọn)</span></div>
          <div class="iti-desc">Một số chùa và nhà thờ nhỏ mộc mạc nằm trong làng Long Hải, nơi người dân địa phương cầu nguyện bình an trước mỗi chuyến ra khơi. Dành cho những ai muốn dừng lại một chút — không ép buộc, hoàn toàn tự nguyện.</div>
        </div>
        <div class="iti-type type-opt">Tùy chọn</div>
      </div>

      <div class="iti-row">
        <div class="iti-time">10:30<br/>13:30</div>
        <div class="iti-dot-col"><div class="iti-dot dark"></div></div>
        <div class="iti-content">
          <div class="iti-title">Lên đường — Về Sài Gòn, mang theo kỷ niệm</div>
          <div class="iti-desc">Xe lăn bánh theo route: Long Hải → Bà Rịa → QL-51 → Cao tốc Long Thành → Quận 9. ~2.5 giờ — lúc này mọi người có thể ngả lưng ngủ bù, nghe nhạc, hoặc nhìn ra cửa sổ ngắm cung đường ven biển lần cuối trước khi về lại thành phố.</div>
          <div class="iti-tags">
            <span class="itag">Long Hải → Quận 9</span>
            <span class="itag">~120 km · ~2.5 giờ</span>
            <span class="itag">Cao tốc Long Thành–Dầu Giây</span>
          </div>
        </div>
        <div class="iti-type" style="color:var(--ink);border-color:var(--line);background:var(--warm);">Về nhà</div>
      </div>

    </div>
  </div>
  <div class="rf">
    <div class="rf-l">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-r">Confidential · Company Trip 2026</div>
  </div>
</div>


<!-- ═══════════════════════ PAGE 6 · TEAM + CHECKLIST + SUMMARY ═══════════════════════ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r"><span>Phân công & Chuẩn bị</span><span class="rh-sep"></span><span>06</span></div>
  </div>
  <div class="body" style="padding:9mm 15mm 0; overflow:hidden;">

    <!-- banner strip -->
    <div class="mosaic c3" style="height:30mm; margin:0 -15mm;">
      <div class="mosaic-item">
        <img src="${I.cover}" alt="Long Hải bãi biển" style="object-position:center 30%;"/>
        <div class="mosaic-cap">Long Hải · BR-VT</div>
      </div>
      <div class="mosaic-item">
        <img src="${I.food}" alt="Hải sản tươi"/>
        <div class="mosaic-cap">Hải sản tươi sống</div>
      </div>
      <div class="mosaic-item">
        <img src="${I.sunrise}" alt="Bình minh biển"/>
        <div class="mosaic-cap">Bình minh biển</div>
      </div>
    </div>

    <div style="height:.5px; background:var(--line); margin:11px 0 9px;"></div>

    <!-- roles -->
    <div class="disp-label">Team Roles</div>
    <div class="roles">
      <div class="role">
        <div class="role-tag">Leader</div>
        <div class="role-title">Quản lý chuyến đi</div>
        <div class="role-desc">Quản lý toàn bộ timeline, điều phối lịch trình, xử lý phát sinh tại chỗ. Liên lạc homestay và đơn vị cung cấp xe bus.</div>
      </div>
      <div class="role">
        <div class="role-tag">Food Lead</div>
        <div class="role-title">Phụ trách ẩm thực</div>
        <div class="role-desc">Chủ động mua sắm hải sản tại chợ, giám sát ướp đồ, chuẩn bị bếp than và đảm bảo BBQ diễn ra suôn sẻ.</div>
      </div>
      <div class="role">
        <div class="role-tag">Game Lead</div>
        <div class="role-title">Tổ chức hoạt động</div>
        <div class="role-desc">Chuẩn bị kịch bản games, dẫn dắt team building buổi sáng và điều hành karaoke, mini games đêm BBQ.</div>
      </div>
      <div class="role">
        <div class="role-tag">Media</div>
        <div class="role-title">Ghi lại kỷ niệm</div>
        <div class="role-desc">Chụp ảnh và quay video xuyên suốt chuyến đi. Xuất reels và highlight sau chuyến để chia sẻ nội bộ team.</div>
      </div>
    </div>

    <div style="height:1px; background:var(--ink); margin:11px 0 8px;"></div>

    <!-- checklist -->
    <div class="disp-label">Checklist</div>
    <div class="checks">
      <div class="check-col">
        <div class="check-hd">Đồ cá nhân</div>
        <ul class="check-ul">
          <li><span class="cb"></span>Quần áo tắm biển (2 bộ)</li>
          <li><span class="cb"></span>Kem chống nắng SPF 50+</li>
          <li><span class="cb"></span>Kính mát · Nón bảo hiểm</li>
          <li><span class="cb"></span>Dép xỏ ngón · Dép lê</li>
          <li><span class="cb"></span>Thuốc say xe · Thuốc cá nhân</li>
          <li><span class="cb"></span>Sạc + pin dự phòng</li>
          <li><span class="cb"></span>CCCD / Giấy tờ tùy thân</li>
        </ul>
      </div>
      <div class="check-col">
        <div class="check-hd">Đồ BBQ & Tiệc chung</div>
        <ul class="check-ul">
          <li><span class="cb"></span>Loa bluetooth (2 cái)</li>
          <li><span class="cb"></span>Than hoa + bếp nướng</li>
          <li><span class="cb"></span>Thùng đá + đá cây đủ dùng</li>
          <li><span class="cb"></span>Tăm · Giấy ăn · Đĩa dùng 1 lần</li>
          <li><span class="cb"></span>Nước ngọt · Bia dự trữ đủ cho cả đoàn</li>
          <li><span class="cb"></span>Kẹp nướng · Găng tay bếp</li>
          <li><span class="cb"></span>Túi rác (giữ vệ sinh chung)</li>
        </ul>
      </div>
      <div class="check-col">
        <div class="check-hd">Logistics & Vận hành</div>
        <ul class="check-ul">
          <li><span class="cb"></span>Book xe bus 29 chỗ · Confirm giờ đón</li>
          <li><span class="cb"></span>Confirm homestay có khu BBQ</li>
          <li><span class="cb"></span>Liên hệ sẵn điểm thuê xe máy</li>
          <li><span class="cb"></span>Lập quỹ chung · Minh bạch chi phí</li>
          <li><span class="cb"></span>Group chat · Gửi lịch trình trước</li>
          <li><span class="cb"></span>Phân công phòng trước ngày đi</li>
          <li><span class="cb"></span>Chuẩn bị danh sách bài karaoke</li>
        </ul>
      </div>
    </div>

    <div style="height:.5px; background:var(--line); margin:10px 0 8px;"></div>

    <!-- flow summary -->
    <div class="disp-label">Trip Summary</div>
    <div class="flow">
      <div class="fbox fb1">
        <div class="fb-eyebrow">Day 01 · Roadtrip & Trải nghiệm</div>
        <div class="fb-title">Ngày đầu hành trình</div>
        <div class="fs"><span class="fs-time">07:00</span><span class="fs-sep"></span><span class="fs-txt">Xuất phát từ Quận 9, TP.HCM</span><span class="fs-type">Di chuyển</span></div>
        <div class="fs"><span class="fs-time">09:30</span><span class="fs-sep"></span><span class="fs-txt">Check-in Đèo Nước Ngọt · Panorama biển</span><span class="fs-type">Check-in</span></div>
        <div class="fs"><span class="fs-time">10:45</span><span class="fs-sep"></span><span class="fs-txt">Check-in Homestay Long Hải</span><span class="fs-type">Homestay</span></div>
        <div class="fs"><span class="fs-time">11:30</span><span class="fs-sep"></span><span class="fs-txt">Hải sản tươi tại làng chài Phước Hải</span><span class="fs-type">Ăn trưa</span></div>
        <div class="fs"><span class="fs-time">13:30</span><span class="fs-sep"></span><span class="fs-txt">Tự do: Nghỉ dưỡng hoặc Khám phá xe máy</span><span class="fs-type">Tự do</span></div>
        <div class="fs"><span class="fs-time">16:30</span><span class="fs-sep"></span><span class="fs-txt">Mua hải sản tại Chợ Long Hải</span><span class="fs-type">Cả team</span></div>
        <div class="fs"><span class="fs-time">18:30</span><span class="fs-sep"></span><span class="fs-txt">BBQ Night · Karaoke · Party Games</span><span class="fs-type">BBQ</span></div>
      </div>
      <div class="fbox fb2">
        <div class="fb-eyebrow">Day 02 · Biển sáng & Về nhà</div>
        <div class="fb-title">Ngày cuối hành trình</div>
        <div class="fs"><span class="fs-time">05:30</span><span class="fs-sep"></span><span class="fs-txt">Bình minh & Tắm biển buổi sáng</span><span class="fs-type">Biển</span></div>
        <div class="fs"><span class="fs-time">06:30</span><span class="fs-sep"></span><span class="fs-txt">Team Building trên bãi cát</span><span class="fs-type">Games</span></div>
        <div class="fs"><span class="fs-time">07:30</span><span class="fs-sep"></span><span class="fs-txt">Ăn sáng địa phương + Check-out</span><span class="fs-type">Ăn sáng</span></div>
        <div class="fs"><span class="fs-time">08:30</span><span class="fs-sep"></span><span class="fs-txt">Cafe view biển trending 2026</span><span class="fs-type">Cafe</span></div>
        <div class="fs"><span class="fs-time">09:30</span><span class="fs-sep"></span><span class="fs-txt">Cầu bình an — Tùy chọn</span><span class="fs-type">Optional</span></div>
        <div class="fs"><span class="fs-time">10:30</span><span class="fs-sep"></span><span class="fs-txt">Lên đường về Sài Gòn</span><span class="fs-type">Về nhà</span></div>
        <div class="fs"><span class="fs-time">13:30</span><span class="fs-sep"></span><span class="fs-txt">Về đến Quận 9 · Kết thúc hành trình</span><span class="fs-type">Xong</span></div>
      </div>
    </div>

  </div>
  <div class="rf">
    <div class="rf-l">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-r">Confidential · Company Trip 2026</div>
  </div>
</div>


</body>
</html>`;

fs.writeFileSync('/Users/nhantv5/company-trip-longhai-2026.html', html);
console.log('Done. HTML:', Math.round(fs.statSync('/Users/nhantv5/company-trip-longhai-2026.html').size/1024)+'KB');
