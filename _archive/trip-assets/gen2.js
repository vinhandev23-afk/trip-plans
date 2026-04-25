const fs = require('fs');

// Load all images as base64
const loadImg = (file) => {
  try {
    const data = fs.readFileSync(file);
    return 'data:image/jpeg;base64,' + data.toString('base64');
  } catch(e) { return ''; }
};

const I = {
  cover:    loadImg('vn-beach2.jpg'),     // tropical beach wide
  road:     loadImg('vn-road.jpg'),       // scenic coastal road
  resort:   loadImg('vn-resort.jpg'),     // resort pool
  seafood:  loadImg('vn-seafood.jpg'),    // seafood dish
  food:     loadImg('vn-food.jpg'),       // food spread
  coast:    loadImg('vn-coast.jpg'),      // coastal view
  sunrise:  loadImg('vn-sunrise.jpg'),    // beach sunrise
  bbq:      loadImg('vn-bbq.jpg'),        // grilled food
  moto:     loadImg('vn-moto.jpg'),       // motorbike
  beach:    loadImg('vn-beach.jpg'),      // beach
};

console.log('Images loaded:');
Object.entries(I).forEach(([k,v]) => console.log(' ', k, Math.round(v.length/1024)+'KB'));

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8"/>
<title>Company Trip Long Hải 2026</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap');

@page { size: A4; margin: 0; }
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --ink:     #0d1117;
  --ink2:    #1b2230;
  --warm:    #f6f1e9;
  --gold:    #b8976a;
  --gold-lt: #e8d9c0;
  --mist:    #7a8090;
  --smoke:   #f3f1ed;
  --line:    #e2ddd5;
  --white:   #ffffff;
  --teal:    #1a5f6b;
  --teal-lt: #d4eef2;
}

body {
  font-family: 'Inter', -apple-system, sans-serif;
  background: var(--white);
  color: var(--ink);
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

/* ─── PAGE SHELL ─── */
.page {
  width: 210mm;
  height: 297mm;
  overflow: hidden;
  page-break-after: always;
  display: flex;
  flex-direction: column;
  position: relative;
}
.page:last-child { page-break-after: auto; }

/* ─── COVER ─── */
.cover-bg {
  position: absolute; inset: 0;
  background-size: cover;
  background-position: center 55%;
}
.cover-vignette {
  position: absolute; inset: 0;
  background:
    linear-gradient(to bottom, rgba(5,8,15,0.55) 0%, transparent 35%),
    linear-gradient(to top,    rgba(5,8,15,0.88) 0%, rgba(5,8,15,0.4) 45%, transparent 70%),
    linear-gradient(to right,  rgba(5,8,15,0.3) 0%, transparent 60%);
}
.cover-z { position: relative; z-index: 2; display: flex; flex-direction: column; height: 100%; padding: 15mm 18mm 13mm; }

.c-topbar { display: flex; align-items: center; justify-content: space-between; }
.c-brand {
  display: flex; align-items: center; gap: 10px;
  font-size: 7pt; font-weight: 700; letter-spacing: 3px;
  text-transform: uppercase; color: rgba(255,255,255,0.45);
}
.c-brand-sep { width: 1px; height: 22px; background: rgba(255,255,255,0.18); }
.c-badge {
  font-size: 7pt; font-weight: 600; letter-spacing: 2px;
  text-transform: uppercase; color: var(--gold-lt);
  border: 1px solid rgba(184,151,106,0.45);
  padding: 5px 15px;
}

.c-mid { flex: 1; display: flex; flex-direction: column; justify-content: flex-end; padding-bottom: 13mm; }
.c-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
.c-rule { width: 32px; height: 1px; background: var(--gold); }
.c-eyebrow-text {
  font-size: 7.5pt; font-weight: 500; letter-spacing: 3px;
  text-transform: uppercase; color: var(--gold);
}

.c-h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 78pt; font-weight: 300; color: #fff;
  line-height: 0.88; letter-spacing: -3px;
}
.c-h1 em { font-style: italic; color: var(--gold-lt); }
.c-tagline {
  font-size: 9pt; font-weight: 300; color: rgba(255,255,255,0.55);
  letter-spacing: 3.5px; text-transform: uppercase;
  margin-top: 18px; margin-bottom: 30px;
}

.c-stats {
  display: flex; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 18px; gap: 0;
}
.c-stat { flex: 1; padding-right: 20px; border-right: 1px solid rgba(255,255,255,0.1); margin-right: 20px; }
.c-stat:last-child { border-right: none; margin-right: 0; padding-right: 0; }
.c-stat-n {
  font-family: 'Cormorant Garamond', serif; font-size: 24pt;
  font-weight: 500; color: #fff; line-height: 1; margin-bottom: 3px;
}
.c-stat-l { font-size: 6.5pt; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.35); }

.c-foot { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 12px; display: flex; align-items: center; justify-content: space-between; }
.c-foot-l { font-size: 7pt; color: rgba(255,255,255,0.25); letter-spacing: 0.8px; }
.c-foot-r { display: flex; gap: 8px; }
.c-tag { font-size: 6.5pt; color: rgba(255,255,255,0.3); border: 1px solid rgba(255,255,255,0.1); padding: 3px 10px; letter-spacing: 1px; }

/* ─── INNER CHROME ─── */
.rhead {
  height: 9.5mm; flex-shrink: 0; padding: 0 18mm;
  display: flex; align-items: center; justify-content: space-between;
  border-bottom: 0.5px solid var(--line);
}
.rh-l { font-size: 6.5pt; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--mist); }
.rh-r { font-size: 6.5pt; color: var(--mist); display: flex; align-items: center; gap: 6px; }
.rh-dot { width: 3px; height: 3px; border-radius: 50%; background: var(--gold); display: inline-block; }

.rfoot {
  height: 8mm; flex-shrink: 0; padding: 0 18mm;
  display: flex; align-items: center; justify-content: space-between;
  border-top: 0.5px solid var(--line); margin-top: auto;
}
.rf-l { font-size: 6pt; color: var(--mist); }
.rf-r { font-size: 6pt; color: var(--mist); }

.body-area { flex: 1; overflow: hidden; display: flex; flex-direction: column; }

/* ─── HERO STRIP ─── */
.hero {
  flex-shrink: 0; position: relative; overflow: hidden;
}
.hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
.hero-ov {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(5,8,15,0.08) 0%, rgba(5,8,15,0.72) 85%);
}
.hero-txt { position: absolute; inset: 0; padding: 0 18mm 16px; display: flex; flex-direction: column; justify-content: flex-end; }
.day-chip {
  display: inline-block; width: fit-content;
  font-size: 6.5pt; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;
  background: var(--gold); color: var(--ink); padding: 4px 14px; margin-bottom: 8px;
}
.day-chip.teal { background: var(--teal); color: white; }
.hero-ttl {
  font-family: 'Cormorant Garamond', serif; font-size: 30pt;
  font-weight: 400; color: #fff; line-height: 1.05; letter-spacing: -0.3px;
}
.hero-sub { font-size: 7.5pt; font-weight: 300; color: rgba(255,255,255,0.55); letter-spacing: 2.5px; text-transform: uppercase; margin-top: 6px; }

/* ─── SECTION LABELS ─── */
.slabel { font-size: 6.5pt; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; }
.stitle {
  font-family: 'Cormorant Garamond', serif; font-size: 22pt;
  font-weight: 400; color: var(--ink); line-height: 1.1; letter-spacing: -0.3px;
}
.sbody { font-size: 8.5pt; font-weight: 300; color: var(--mist); line-height: 1.8; }

/* ─── SPLIT LAYOUT ─── */
.split { display: flex; flex: 1; overflow: hidden; }
.split-img { position: relative; overflow: hidden; flex-shrink: 0; }
.split-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.split-txt { display: flex; flex-direction: column; justify-content: center; }

/* ─── INFO PILLS ─── */
.ipills { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; margin: 14px 0; }
.ipill { background: var(--smoke); border-left: 2px solid var(--gold); padding: 8px 10px; }
.ipill-lbl { font-size: 6pt; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--mist); margin-bottom: 2px; }
.ipill-val { font-size: 9pt; font-weight: 600; color: var(--ink); }

/* ─── STATS STRIP ─── */
.sstrip { display: flex; border-top: 1px solid var(--line); padding-top: 12px; margin-top: 12px; }
.scell { flex: 1; border-right: 1px solid var(--line); padding-right: 12px; margin-right: 12px; }
.scell:last-child { border: none; margin: 0; }
.scell-n { font-family: 'Cormorant Garamond', serif; font-size: 17pt; font-weight: 600; color: var(--teal); line-height: 1; }
.scell-l { font-size: 6pt; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: var(--mist); margin-top: 2px; }
.scell-s { font-size: 5.5pt; color: var(--line); margin-top: 1px; }

/* ─── TIMELINE ─── */
.tl { padding: 10px 18mm 4px; display: flex; flex-direction: column; }
.tli { display: flex; gap: 12px; margin-bottom: 9px; page-break-inside: avoid; }

.tl-spine { width: 52px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; }
.tl-t { font-size: 7pt; font-weight: 700; color: var(--gold); text-align: center; line-height: 1.25; white-space: nowrap; }
.tl-line { flex: 1; width: 1px; background: var(--line); margin-top: 5px; min-height: 16px; }

.tl-dot-wrap { flex-shrink: 0; padding-top: 3px; margin-right: 8px; }
.tl-dot { width: 8px; height: 8px; border-radius: 50%; border: 1.5px solid var(--gold); background: var(--white); }
.tl-dot.teal { border-color: var(--teal); }
.tl-dot.dark { border-color: var(--ink); background: var(--ink); }

.tl-card { flex: 1; background: var(--smoke); border: 0.5px solid var(--line); padding: 10px 13px; }
.tl-ch { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 4px; }
.tl-ct { font-size: 9.5pt; font-weight: 600; color: var(--ink); flex: 1; line-height: 1.25; }
.tl-badge { font-size: 6pt; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 2px 7px; white-space: nowrap; flex-shrink: 0; }
.b-move  { background: #e8f0fe; color: #1a56db; }
.b-photo { background: #fef9e7; color: #92400e; }
.b-food  { background: #fff1f2; color: #9f1239; }
.b-rest  { background: #f0fdf4; color: #166534; }
.b-free  { background: #f0f9ff; color: #0e7490; }
.b-night { background: #faf5ff; color: #6b21a8; }
.b-opt   { background: var(--smoke); color: var(--mist); }

.tl-desc { font-size: 7.5pt; font-weight: 300; color: var(--mist); line-height: 1.65; margin-bottom: 6px; }
.chips { display: flex; flex-wrap: wrap; gap: 4px; }
.chip { font-size: 6.5pt; color: var(--mist); background: var(--white); border: 0.5px solid var(--line); padding: 2px 7px; }

/* ─── OPTIONS ─── */
.opts { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; margin: 4px 0; }
.opt { border: 0.5px solid var(--line); background: var(--white); padding: 10px 12px; }
.opt-hd { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 7px; }
.opt-n { font-family: 'Cormorant Garamond', serif; font-size: 18pt; font-weight: 600; color: var(--gold); line-height: 1; flex-shrink: 0; }
.opt-lbl { font-size: 5.5pt; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--mist); margin-bottom: 2px; }
.opt-ttl { font-size: 8.5pt; font-weight: 600; color: var(--ink); }
.opt-ul { list-style: none; display: flex; flex-direction: column; gap: 3px; }
.opt-ul li { font-size: 7.5pt; color: var(--mist); display: flex; gap: 5px; line-height: 1.4; }
.opt-ul li::before { content: '—'; color: var(--gold-lt); font-size: 7pt; flex-shrink: 0; }

/* ─── PHOTO STRIP ─── */
.pstrip { display: grid; gap: 3px; flex-shrink: 0; }
.pstrip.col3 { grid-template-columns: 2fr 1fr 1fr; }
.pstrip.col2 { grid-template-columns: 1fr 1fr; }
.pstrip-item { overflow: hidden; position: relative; }
.pstrip-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
.pcap {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.55));
  padding: 10px 8px 5px;
  font-size: 6pt; font-weight: 600; color: rgba(255,255,255,0.85);
  letter-spacing: 1px; text-transform: uppercase;
}

/* ─── ROLES ─── */
.rgrid { display: grid; grid-template-columns: repeat(4,1fr); gap: 7px; margin-top: 14px; }
.rc { background: var(--smoke); border-bottom: 1.5px solid var(--gold); padding: 12px 11px; page-break-inside: avoid; }
.rc-icon { font-size: 18pt; margin-bottom: 7px; display: block; }
.rc-role { font-size: 6pt; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 2px; }
.rc-title { font-size: 9pt; font-weight: 600; color: var(--ink); margin-bottom: 4px; }
.rc-desc { font-size: 7pt; color: var(--mist); line-height: 1.55; }

/* ─── CHECKLIST ─── */
.cgrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 7px; margin-top: 12px; }
.cc { background: var(--smoke); padding: 10px 12px; page-break-inside: avoid; }
.cc-title { font-size: 8pt; font-weight: 700; color: var(--ink); border-bottom: 1px solid var(--line); padding-bottom: 5px; margin-bottom: 7px; }
.clist { list-style: none; display: flex; flex-direction: column; gap: 5px; }
.clist li { font-size: 7pt; color: #555; display: flex; align-items: center; gap: 6px; line-height: 1.3; }
.cbox { width: 10px; height: 10px; border: 1px solid var(--line); background: white; flex-shrink: 0; }

/* ─── FLOW ─── */
.fcols { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; margin-top: 12px; }
.fbox { padding: 14px 15px; page-break-inside: avoid; }
.fb-dark { background: var(--ink2); }
.fb-teal { background: var(--teal); }
.fb-day { font-size: 6pt; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); margin-bottom: 5px; }
.fb-title { font-family: 'Cormorant Garamond', serif; font-size: 15pt; font-weight: 400; color: white; margin-bottom: 12px; line-height: 1.1; }
.fstep { display: flex; align-items: center; gap: 7px; padding: 5px 0; border-bottom: 0.5px solid rgba(255,255,255,0.07); }
.fstep:last-child { border: none; }
.fs-i { font-size: 9.5pt; width: 18px; text-align: center; flex-shrink: 0; }
.fs-t { flex: 1; font-size: 7.5pt; color: rgba(255,255,255,0.7); line-height: 1.3; }
.fs-tm { font-size: 6.5pt; color: rgba(255,255,255,0.28); white-space: nowrap; font-weight: 600; }

/* ─── UTILITIES ─── */
.grule { height: 1px; background: var(--gold); opacity: 0.3; margin: 12px 0; }
.lrule { height: 0.5px; background: var(--line); margin: 8px 0; }
.pad { padding: 0 18mm; }
.pad-top { padding-top: 12px; }
</style>
</head>
<body>

<!-- ══════════ COVER ══════════ -->
<div class="page">
  <div class="cover-bg" style="background-image:url('${I.cover}');"></div>
  <div class="cover-vignette"></div>
  <div class="cover-z">

    <div class="c-topbar">
      <div class="c-brand">
        <span>Company Trip</span>
        <div class="c-brand-sep"></div>
        <span style="font-weight:300;letter-spacing:1.5px;text-transform:none;font-size:7.5pt;">Long Hải · Bà Rịa – Vũng Tàu</span>
      </div>
      <div class="c-badge">2026 Edition</div>
    </div>

    <div class="c-mid">
      <div class="c-eyebrow">
        <div class="c-rule"></div>
        <span class="c-eyebrow-text">Hành trình nghỉ dưỡng & gắn kết đội nhóm</span>
      </div>
      <div class="c-h1">Long<br/><em>Hải</em></div>
      <div class="c-tagline">2 Ngày · 1 Đêm · ~20 Thành viên · Bà Rịa – Vũng Tàu</div>
      <div class="c-stats">
        <div class="c-stat">
          <div class="c-stat-n">20</div>
          <div class="c-stat-l">Thành viên</div>
        </div>
        <div class="c-stat">
          <div class="c-stat-n">120km</div>
          <div class="c-stat-l">Từ Sài Gòn</div>
        </div>
        <div class="c-stat">
          <div class="c-stat-n">2N1Đ</div>
          <div class="c-stat-l">Hành trình</div>
        </div>
        <div class="c-stat">
          <div class="c-stat-n">∞</div>
          <div class="c-stat-l">Kỷ niệm</div>
        </div>
      </div>
    </div>

    <div class="c-foot">
      <span class="c-foot-l">Khởi hành: Quận 9, TP.HCM &nbsp;·&nbsp; Xe bus 29 chỗ &nbsp;·&nbsp; Cao tốc Long Thành – Dầu Giây</span>
      <div class="c-foot-r">
        <span class="c-tag">Nghỉ dưỡng</span>
        <span class="c-tag">Team Building</span>
        <span class="c-tag">BBQ Night</span>
      </div>
    </div>

  </div>
</div>


<!-- ══════════ PAGE 2 · OVERVIEW ══════════ -->
<div class="page">
  <div class="rhead">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r"><span>Tổng quan chuyến đi</span><span class="rh-dot"></span><span>02</span></div>
  </div>

  <div class="body-area">
    <div class="split">
      <div class="split-img" style="width:46%;">
        <img src="${I.resort}" alt="Resort Long Hải" style="object-position:center center;"/>
      </div>
      <div class="split-txt" style="padding:14mm 18mm 14mm 13mm;">
        <div class="slabel">Trip Overview</div>
        <div class="stitle">Thông tin<br/>chuyến đi</div>
        <div class="lrule"></div>
        <div class="sbody">
          Long Hải — dải bờ biển hoang sơ thuộc tỉnh Bà Rịa–Vũng Tàu, chỉ cách trung tâm Sài Gòn ~120km qua cao tốc Long Thành–Dầu Giây. Nước biển trong xanh, sóng nhẹ, hải sản tươi ngon và không khí yên tĩnh làm nên sức hút đặc biệt của vùng đất này.
        </div>

        <div class="ipills">
          <div class="ipill">
            <div class="ipill-lbl">Số lượng</div>
            <div class="ipill-val">~20 người</div>
          </div>
          <div class="ipill">
            <div class="ipill-lbl">Phương tiện</div>
            <div class="ipill-val">Xe bus 29 chỗ</div>
          </div>
          <div class="ipill">
            <div class="ipill-lbl">Xuất phát</div>
            <div class="ipill-val">Quận 9, TP.HCM</div>
          </div>
          <div class="ipill">
            <div class="ipill-lbl">Điểm đến</div>
            <div class="ipill-val">Long Hải, BR-VT</div>
          </div>
          <div class="ipill">
            <div class="ipill-lbl">Khoảng cách</div>
            <div class="ipill-val">~120 km</div>
          </div>
          <div class="ipill">
            <div class="ipill-lbl">Thời gian lăn bánh</div>
            <div class="ipill-val">~2.5 giờ</div>
          </div>
        </div>

        <div class="slabel" style="margin-top:10px;">Dữ liệu xu hướng 2026</div>
        <div class="sstrip">
          <div class="scell">
            <div class="scell-n">+47%</div>
            <div class="scell-l">Du khách tăng</div>
            <div class="scell-s">Tổng cục Du lịch VN</div>
          </div>
          <div class="scell">
            <div class="scell-n">42M</div>
            <div class="scell-l">#LongHai TikTok</div>
            <div class="scell-s">TikTok Travel 2026</div>
          </div>
          <div class="scell">
            <div class="scell-n">4.8★</div>
            <div class="scell-l">Google Maps</div>
            <div class="scell-s">Rating trung bình</div>
          </div>
          <div class="scell">
            <div class="scell-n">94%</div>
            <div class="scell-l">NV hài lòng</div>
            <div class="scell-s">Gallup Workplace 2026</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rfoot">
    <div class="rf-l">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-r">Confidential &nbsp;·&nbsp; Company Trip 2026</div>
  </div>
</div>


<!-- ══════════ PAGE 3 · DAY 1 MORNING ══════════ -->
<div class="page">
  <div class="rhead">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r"><span>Lịch trình — Ngày 1</span><span class="rh-dot"></span><span>03</span></div>
  </div>

  <div class="body-area">
    <div class="hero" style="height:66mm;">
      <img src="${I.road}" alt="Cung đường ven biển" style="object-position:center 45%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip">Day 01</div>
        <div class="hero-ttl">Roadtrip &<br/>Trải nghiệm</div>
        <div class="hero-sub">Khởi hành · Đèo Nước Ngọt · Hải sản Phước Hải · BBQ đêm biển</div>
      </div>
    </div>

    <div class="tl">

      <div class="tli">
        <div class="tl-spine"><div class="tl-t">07:00<br/>09:30</div><div class="tl-line"></div></div>
        <div class="tl-dot-wrap"><div class="tl-dot"></div></div>
        <div class="tl-card">
          <div class="tl-ch">
            <div class="tl-ct">🚐 Xuất phát từ Quận 9 — Hành trình bắt đầu</div>
            <span class="tl-badge b-move">Di chuyển</span>
          </div>
          <div class="tl-desc">Xe bus 29 chỗ lăn bánh đúng giờ, hành trình qua cao tốc Long Thành–Dầu Giây rồi rẽ về BR-VT. Cung đường ~120km đẹp dọc biển, đi khoảng 2.5 tiếng. Tranh thủ ăn sáng trên xe hoặc dừng nghỉ nhẹ tại trạm dịch vụ.</div>
          <div class="chips">
            <span class="chip">~120 km</span>
            <span class="chip">Cao tốc Long Thành–Dầu Giây</span>
            <span class="chip">Xe bus 29 chỗ</span>
          </div>
        </div>
      </div>

      <div class="tli">
        <div class="tl-spine"><div class="tl-t">09:30<br/>10:30</div><div class="tl-line"></div></div>
        <div class="tl-dot-wrap"><div class="tl-dot"></div></div>
        <div class="tl-card">
          <div class="tl-ch">
            <div class="tl-ct">📸 Check-in Đèo Nước Ngọt — View biển đỉnh nhất tuyến đường</div>
            <span class="tl-badge b-photo">Check-in</span>
          </div>
          <div class="tl-desc">Đèo Nước Ngọt nằm trên tuyến Quốc lộ 55, nơi cả đoàn dừng xe để ngắm toàn cảnh vùng biển BR-VT từ trên cao. Góc chụp ảnh nhóm hoàn hảo, gió biển mát, trời xanh trong. Trending TikTok Travel 2026 với 15M lượt xem.</div>
          <div class="chips">
            <span class="chip">📍 Đèo Nước Ngọt, QL-55</span>
            <span class="chip">View panorama biển xanh</span>
            <span class="chip">15M+ TikTok views</span>
          </div>
        </div>
      </div>

      <div class="tli">
        <div class="tl-spine"><div class="tl-t">10:45<br/>11:30</div><div class="tl-line"></div></div>
        <div class="tl-dot-wrap"><div class="tl-dot"></div></div>
        <div class="tl-card">
          <div class="tl-ch">
            <div class="tl-ct">🏡 Check-in Homestay — Nơi trú ngụ 2 ngày 1 đêm</div>
            <span class="tl-badge b-rest">Homestay</span>
          </div>
          <div class="tl-desc">Nhận phòng, gửi hành lý. Dành 10 phút khám phá khuôn viên: hồ bơi ngoài trời, khu BBQ, sân vườn và lối ra biển riêng. Phân công phòng và Leader briefing nhanh lịch trình chi tiết cho cả team.</div>
          <div class="chips">
            <span class="chip">Hồ bơi ngoài trời</span>
            <span class="chip">Khu BBQ riêng</span>
            <span class="chip">Bãi biển riêng</span>
          </div>
        </div>
      </div>

      <div class="tli">
        <div class="tl-spine"><div class="tl-t">11:30<br/>13:30</div></div>
        <div class="tl-dot-wrap"><div class="tl-dot"></div></div>
        <div class="tl-card">
          <div class="tl-ch">
            <div class="tl-ct">🍽️ Bữa trưa hải sản tươi sống tại Phước Hải</div>
            <span class="tl-badge b-food">Ăn trưa</span>
          </div>
          <div class="tl-desc">Di chuyển vài phút xuống làng chài Phước Hải — nơi ngư dân ra khơi từ sáng sớm và mang hải sản vào bờ ngay trong ngày. Nhà hàng mộc mạc, giá thực, chất lượng không thua gì nhà hàng cao cấp trong TP.HCM.</div>
          <div class="chips">
            <span class="chip">🦐 Tôm hùm nướng muối ớt</span>
            <span class="chip">🦑 Mực một nắng nướng sa tế</span>
            <span class="chip">🐟 Lẩu cá biển nấu me</span>
            <span class="chip">🦀 Ghẹ hấp sả</span>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="rfoot">
    <div class="rf-l">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-r">Confidential &nbsp;·&nbsp; Company Trip 2026</div>
  </div>
</div>


<!-- ══════════ PAGE 4 · DAY 1 AFTERNOON & EVENING ══════════ -->
<div class="page">
  <div class="rhead">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r"><span>Lịch trình — Ngày 1 (tiếp theo)</span><span class="rh-dot"></span><span>04</span></div>
  </div>

  <div class="body-area">
    <!-- Photo strip -->
    <div class="pstrip col3" style="height:36mm; margin: 0;">
      <div class="pstrip-item">
        <img src="${I.moto}" alt="Khám phá Phước Hải"/>
        <div class="pcap">Khám phá ven biển Phước Hải</div>
      </div>
      <div class="pstrip-item">
        <img src="${I.seafood}" alt="Hải sản tươi chợ Long Hải"/>
        <div class="pcap">Chợ hải sản Long Hải</div>
      </div>
      <div class="pstrip-item">
        <img src="${I.bbq}" alt="BBQ hải sản đêm biển"/>
        <div class="pcap">BBQ đêm biển</div>
      </div>
    </div>

    <div class="tl" style="padding-top:10px;">

      <div class="tli">
        <div class="tl-spine"><div class="tl-t">13:30<br/>17:00</div><div class="tl-line"></div></div>
        <div class="tl-dot-wrap"><div class="tl-dot"></div></div>
        <div class="tl-card">
          <div class="tl-ch">
            <div class="tl-ct">🔀 Tách team — Mỗi người chọn cách tận hưởng riêng</div>
            <span class="tl-badge b-free">Tự do</span>
          </div>
          <div class="opts">
            <div class="opt">
              <div class="opt-hd">
                <div class="opt-n">A</div>
                <div>
                  <div class="opt-lbl">Chill Mode</div>
                  <div class="opt-ttl">Nghỉ dưỡng tại Homestay</div>
                </div>
              </div>
              <ul class="opt-ul">
                <li>Ngủ trưa, thư giãn hoàn toàn</li>
                <li>Tắm hồ bơi, nằm ghế bãi biển</li>
                <li>Chill nhạc, đọc sách</li>
                <li>Chụp ảnh khuôn viên homestay</li>
              </ul>
            </div>
            <div class="opt">
              <div class="opt-hd">
                <div class="opt-n">B</div>
                <div>
                  <div class="opt-lbl">Explorer Mode</div>
                  <div class="opt-ttl">Khám phá Phước Hải bằng xe máy</div>
                </div>
              </div>
              <ul class="opt-ul">
                <li>Thuê xe máy, đi theo nhóm ≥3 người</li>
                <li>Hồ Sở Bông — mặt hồ phẳng lặng</li>
                <li>Bờ kè Lộc An — hoàng hôn đẹp</li>
                <li>Quảng trường Phước Hải · Cafe biển</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="tli">
        <div class="tl-spine"><div class="tl-t">16:30<br/>17:30</div><div class="tl-line"></div></div>
        <div class="tl-dot-wrap"><div class="tl-dot"></div></div>
        <div class="tl-card">
          <div class="tl-ch">
            <div class="tl-ct">🛒 Tập trung — Đi chợ Long Hải mua nguyên liệu BBQ</div>
            <span class="tl-badge b-food">Cả team</span>
          </div>
          <div class="tl-desc">Cả đoàn tập trung về chợ Long Hải để chọn hải sản tươi cho bữa BBQ tối. <strong>Mẹo:</strong> nhờ tiểu thương làm sạch, chặt sẵn và ướp gia vị tại chỗ (muối ớt / sa tế / mỡ hành). Về chỉ cần bắc bếp nướng ngay — tiết kiệm thời gian, giữ được hương vị tươi nhất.</div>
          <div class="chips">
            <span class="chip">🦐 Tôm sú, tôm càng xanh</span>
            <span class="chip">🦑 Mực ống, mực lá</span>
            <span class="chip">🦀 Sò điệp, sò huyết</span>
            <span class="chip">⭐ Nhờ ướp sẵn tại chợ</span>
          </div>
        </div>
      </div>

      <div class="tli">
        <div class="tl-spine"><div class="tl-t">18:30<br/>23:30</div></div>
        <div class="tl-dot-wrap"><div class="tl-dot" style="border-color:#6b21a8;"></div></div>
        <div class="tl-card">
          <div class="tl-ch">
            <div class="tl-ct">🔥 BBQ Night — Tiệc nướng hải sản, Karaoke & Party Games</div>
            <span class="tl-badge b-night">BBQ Night</span>
          </div>
          <div class="tl-desc">Bữa tiệc dưới bầu trời đêm biển — mùi hải sản nướng trên than hồng, tiếng nhạc vang xa, tiếng cười hòa quyện. Sau ăn chuyển sang karaoke tập thể và mini games. Đây là khoảnh khắc kết nối thật sự của cả team.</div>
          <div class="chips">
            <span class="chip">🎤 Karaoke tập thể</span>
            <span class="chip">🎵 Đoán bài hát theo giai điệu</span>
            <span class="chip">🎲 Truth or Dare</span>
            <span class="chip">🍺 Drinking game vui vẻ</span>
            <span class="chip">🔊 Loa bluetooth</span>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="rfoot">
    <div class="rf-l">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-r">Confidential &nbsp;·&nbsp; Company Trip 2026</div>
  </div>
</div>


<!-- ══════════ PAGE 5 · DAY 2 ══════════ -->
<div class="page">
  <div class="rhead">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r"><span>Lịch trình — Ngày 2</span><span class="rh-dot"></span><span>05</span></div>
  </div>

  <div class="body-area">
    <div class="hero" style="height:66mm;">
      <img src="${I.sunrise}" alt="Bình minh Long Hải" style="object-position:center 40%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip teal">Day 02</div>
        <div class="hero-ttl">Biển sáng &<br/>Về nhà</div>
        <div class="hero-sub">Bình minh · Team Building · Cafe · Tâm linh · Lên đường</div>
      </div>
    </div>

    <div class="tl">

      <div class="tli">
        <div class="tl-spine"><div class="tl-t">05:30<br/>06:30</div><div class="tl-line"></div></div>
        <div class="tl-dot-wrap"><div class="tl-dot teal"></div></div>
        <div class="tl-card">
          <div class="tl-ch">
            <div class="tl-ct">🌅 Bình minh trên biển — Khoảnh khắc không thể bỏ lỡ</div>
            <span class="tl-badge b-rest" style="background:var(--teal-lt);color:var(--teal);">Buổi sáng</span>
          </div>
          <div class="tl-desc">5:30 sáng, biển Long Hải yên tĩnh đến lạ thường. Mặt trời nhú lên từ đường chân trời, nhuộm cả bầu trời sắc cam và hồng — cảnh tượng khiến ai cũng muốn cầm máy ảnh. Tắm biển buổi sáng cực thích vì sóng nhẹ và nước mát trong vắt.</div>
        </div>
      </div>

      <div class="tli">
        <div class="tl-spine"><div class="tl-t">06:30<br/>07:30</div><div class="tl-line"></div></div>
        <div class="tl-dot-wrap"><div class="tl-dot teal"></div></div>
        <div class="tl-card">
          <div class="tl-ch">
            <div class="tl-ct">🏖️ Team Building trên bãi biển — Vui, kết nối, đáng nhớ</div>
            <span class="tl-badge b-rest" style="background:var(--teal-lt);color:var(--teal);">Team Building</span>
          </div>
          <div class="tl-desc">Bầu không khí buổi sáng mát mẻ cùng bãi cát trắng là sân khấu lý tưởng cho team building. Game Lead chia team, phát lệnh và điều phối. Đội nào thua tự chọn hình phạt vui. Tinh thần sảng khoái, tăng kết nối nội bộ trước khi lên đường.</div>
          <div class="chips">
            <span class="chip">🏐 Ném bóng biển</span>
            <span class="chip">🏃 Chạy tiếp sức trên cát</span>
            <span class="chip">💪 Kéo co — đội thua lội biển</span>
          </div>
        </div>
      </div>

      <div class="tli">
        <div class="tl-spine"><div class="tl-t">07:30<br/>08:30</div><div class="tl-line"></div></div>
        <div class="tl-dot-wrap"><div class="tl-dot teal"></div></div>
        <div class="tl-card">
          <div class="tl-ch">
            <div class="tl-ct">🍜 Ăn sáng địa phương & Dọn đồ check-out</div>
            <span class="tl-badge b-food">Ăn sáng</span>
          </div>
          <div class="tl-desc">Bữa sáng với các món đặc trưng của vùng biển: bún cá chế nước me chua ngọt, bánh mì ốp la, hoặc hủ tiếu biển nấu xương cá. Sau đó dọn phòng, gom đồ cá nhân, check-out đúng giờ quy định của homestay.</div>
        </div>
      </div>

      <div class="tli">
        <div class="tl-spine"><div class="tl-t">08:30<br/>09:30</div><div class="tl-line"></div></div>
        <div class="tl-dot-wrap"><div class="tl-dot teal"></div></div>
        <div class="tl-card">
          <div class="tl-ch">
            <div class="tl-ct">☕ Cafe view biển — Khoảng lặng trước chuyến về</div>
            <span class="tl-badge b-photo">Cafe</span>
          </div>
          <div class="tl-desc">Ghé một trong những quán cafe trending 2026 tại Long Hải — kiến trúc mộc, view biển mở, phục vụ cà phê phin Việt và nước dừa tươi. Chụp ảnh lưu niệm cuối chuyến, thư giãn và nạp lại năng lượng trước hành trình về.</div>
        </div>
      </div>

      <div class="tli">
        <div class="tl-spine"><div class="tl-t">09:30<br/>10:30</div><div class="tl-line"></div></div>
        <div class="tl-dot-wrap"><div class="tl-dot" style="border-color:var(--line);background:var(--smoke);"></div></div>
        <div class="tl-card" style="border-style:dashed;background:var(--white);">
          <div class="tl-ch">
            <div class="tl-ct">🙏 Cầu bình an — Chùa/Nhà thờ địa phương</div>
            <span class="tl-badge b-opt">Không bắt buộc</span>
          </div>
          <div class="tl-desc">Hoạt động tùy chọn dành cho những ai muốn. Một số chùa và nhà thờ nhỏ mộc mạc, bình yên nằm trong làng Long Hải — nơi người dân địa phương cầu nguyện bình an trước mỗi chuyến ra khơi. Không ép buộc, hoàn toàn tự nguyện.</div>
        </div>
      </div>

      <div class="tli">
        <div class="tl-spine"><div class="tl-t">10:30<br/>13:30</div></div>
        <div class="tl-dot-wrap"><div class="tl-dot dark"></div></div>
        <div class="tl-card">
          <div class="tl-ch">
            <div class="tl-ct">🚐 Lên đường — Về Sài Gòn, mang theo kỷ niệm</div>
            <span class="tl-badge" style="background:var(--smoke);color:var(--ink);">Về nhà</span>
          </div>
          <div class="tl-desc">Xe lăn bánh theo route: Long Hải → Bà Rịa → Cao tốc Long Thành → Quận 9. Đây là lúc mọi người ngả lưng, nghe nhạc, hoặc đơn giản nhắm mắt ngủ bù sau đêm BBQ — mang theo đầy ắp kỷ niệm của 2 ngày 1 đêm tuyệt vời.</div>
          <div class="chips">
            <span class="chip">Long Hải → Quận 9</span>
            <span class="chip">~120 km · ~2.5 giờ</span>
            <span class="chip">Cao tốc Long Thành–Dầu Giây</span>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="rfoot">
    <div class="rf-l">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-r">Confidential &nbsp;·&nbsp; Company Trip 2026</div>
  </div>
</div>


<!-- ══════════ PAGE 6 · TEAM + CHECKLIST + SUMMARY ══════════ -->
<div class="page">
  <div class="rhead">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r"><span>Phân công & Chuẩn bị</span><span class="rh-dot"></span><span>06</span></div>
  </div>

  <div class="body-area" style="padding:10mm 18mm 0; overflow:hidden;">

    <!-- 3-photo banner -->
    <div class="pstrip col3" style="height:34mm; margin: 0 -18mm;">
      <div class="pstrip-item">
        <img src="${I.beach}" alt="Bãi biển Long Hải"/>
        <div class="pcap">Bãi biển Long Hải</div>
      </div>
      <div class="pstrip-item">
        <img src="${I.food}" alt="Hải sản tươi ngon"/>
        <div class="pcap">Hải sản tươi địa phương</div>
      </div>
      <div class="pstrip-item">
        <img src="${I.coast}" alt="Cung đường ven biển"/>
        <div class="pcap">Cung đường ven biển</div>
      </div>
    </div>

    <div class="grule" style="margin:13px 0 10px;"></div>

    <div class="slabel">Team Roles</div>
    <div class="stitle" style="font-size:18pt;">Phân công công việc</div>

    <div class="rgrid">
      <div class="rc">
        <span class="rc-icon">👑</span>
        <div class="rc-role">Leader</div>
        <div class="rc-title">Quản lý chuyến đi</div>
        <div class="rc-desc">Quản lý toàn bộ timeline, điều phối lịch trình, xử lý phát sinh tại chỗ, liên lạc homestay và đơn vị xe bus.</div>
      </div>
      <div class="rc">
        <span class="rc-icon">🍖</span>
        <div class="rc-role">Food Lead</div>
        <div class="rc-title">Phụ trách ẩm thực</div>
        <div class="rc-desc">Chủ động mua sắm hải sản tại chợ, giám sát ướp đồ, chuẩn bị bếp than và đảm bảo BBQ diễn ra suôn sẻ.</div>
      </div>
      <div class="rc">
        <span class="rc-icon">🎯</span>
        <div class="rc-role">Game Lead</div>
        <div class="rc-title">Tổ chức hoạt động</div>
        <div class="rc-desc">Chuẩn bị kịch bản games, dẫn dắt team building buổi sáng, điều hành karaoke và mini games đêm BBQ.</div>
      </div>
      <div class="rc">
        <span class="rc-icon">📸</span>
        <div class="rc-role">Media</div>
        <div class="rc-title">Ghi lại kỷ niệm</div>
        <div class="rc-desc">Chụp ảnh và quay video xuyên suốt chuyến đi. Xuất reels/highlight sau chuyến để chia sẻ nội bộ.</div>
      </div>
    </div>

    <div class="grule" style="margin:11px 0;"></div>

    <div class="slabel">Checklist</div>
    <div class="stitle" style="font-size:18pt;">Chuẩn bị trước khi đi</div>

    <div class="cgrid">
      <div class="cc">
        <div class="cc-title">🎒 Đồ cá nhân</div>
        <ul class="clist">
          <li><span class="cbox"></span>Quần áo tắm biển (2 bộ)</li>
          <li><span class="cbox"></span>Kem chống nắng SPF 50+</li>
          <li><span class="cbox"></span>Kính mát, nón bảo hiểm</li>
          <li><span class="cbox"></span>Dép xỏ ngón, dép lê</li>
          <li><span class="cbox"></span>Thuốc say xe, thuốc cá nhân</li>
          <li><span class="cbox"></span>Sạc + pin dự phòng</li>
          <li><span class="cbox"></span>CCCD / Giấy tờ tùy thân</li>
        </ul>
      </div>
      <div class="cc">
        <div class="cc-title">🍖 Đồ BBQ & Tiệc</div>
        <ul class="clist">
          <li><span class="cbox"></span>Loa bluetooth (2 cái)</li>
          <li><span class="cbox"></span>Than hoa + bếp nướng</li>
          <li><span class="cbox"></span>Thùng đá + đá cây</li>
          <li><span class="cbox"></span>Tăm, giấy ăn, đĩa dùng 1 lần</li>
          <li><span class="cbox"></span>Nước ngọt, bia dự trữ đủ</li>
          <li><span class="cbox"></span>Kẹp nướng, găng tay bếp</li>
          <li><span class="cbox"></span>Túi rác (giữ vệ sinh chung)</li>
        </ul>
      </div>
      <div class="cc">
        <div class="cc-title">🚐 Logistics & Vận hành</div>
        <ul class="clist">
          <li><span class="cbox"></span>Book xe bus 29 chỗ, confirm giờ</li>
          <li><span class="cbox"></span>Confirm homestay có khu BBQ</li>
          <li><span class="cbox"></span>Liên hệ sẵn điểm thuê xe máy</li>
          <li><span class="cbox"></span>Lập quỹ chung, minh bạch chi phí</li>
          <li><span class="cbox"></span>Group chat, gửi lịch trình trước</li>
          <li><span class="cbox"></span>Phân công phòng trước ngày đi</li>
          <li><span class="cbox"></span>Chuẩn bị danh sách bài karaoke</li>
        </ul>
      </div>
    </div>

    <div class="grule" style="margin:10px 0;"></div>

    <div class="slabel">Trip Summary</div>
    <div class="stitle" style="font-size:16pt;">Flow tổng kết 2N1Đ</div>

    <div class="fcols">
      <div class="fbox fb-dark">
        <div class="fb-day">Day 01 · Roadtrip & Trải nghiệm</div>
        <div class="fb-title">Ngày đầu hành trình 🌊</div>
        <div class="fstep"><span class="fs-i">🚐</span><span class="fs-t">Xuất phát từ Quận 9</span><span class="fs-tm">07:00</span></div>
        <div class="fstep"><span class="fs-i">📸</span><span class="fs-t">Check-in Đèo Nước Ngọt</span><span class="fs-tm">09:30</span></div>
        <div class="fstep"><span class="fs-i">🏡</span><span class="fs-t">Check-in Homestay Long Hải</span><span class="fs-tm">10:45</span></div>
        <div class="fstep"><span class="fs-i">🍽️</span><span class="fs-t">Hải sản tươi tại Phước Hải</span><span class="fs-tm">11:30</span></div>
        <div class="fstep"><span class="fs-i">🔀</span><span class="fs-t">Tự do: Chill hoặc Khám phá xe máy</span><span class="fs-tm">13:30</span></div>
        <div class="fstep"><span class="fs-i">🛒</span><span class="fs-t">Mua hải sản tại Chợ Long Hải</span><span class="fs-tm">16:30</span></div>
        <div class="fstep"><span class="fs-i">🔥</span><span class="fs-t">BBQ · Karaoke · Party Games</span><span class="fs-tm">18:30</span></div>
      </div>
      <div class="fbox fb-teal">
        <div class="fb-day">Day 02 · Biển sáng & Về nhà</div>
        <div class="fb-title">Ngày cuối hành trình 🌅</div>
        <div class="fstep"><span class="fs-i">🌅</span><span class="fs-t">Bình minh & Tắm biển buổi sáng</span><span class="fs-tm">05:30</span></div>
        <div class="fstep"><span class="fs-i">🏖️</span><span class="fs-t">Team Building trên bãi cát</span><span class="fs-tm">06:30</span></div>
        <div class="fstep"><span class="fs-i">🍜</span><span class="fs-t">Ăn sáng địa phương + Check-out</span><span class="fs-tm">07:30</span></div>
        <div class="fstep"><span class="fs-i">☕</span><span class="fs-t">Cafe view biển trending 2026</span><span class="fs-tm">08:30</span></div>
        <div class="fstep"><span class="fs-i">🙏</span><span class="fs-t">Cầu bình an — Tùy chọn</span><span class="fs-tm">09:30</span></div>
        <div class="fstep"><span class="fs-i">🚐</span><span class="fs-t">Lên đường về Sài Gòn</span><span class="fs-tm">10:30</span></div>
        <div class="fstep"><span class="fs-i">🏠</span><span class="fs-t">Về đến Quận 9, kết thúc hành trình</span><span class="fs-tm">13:30</span></div>
      </div>
    </div>

  </div>

  <div class="rfoot">
    <div class="rf-l">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-r">Confidential &nbsp;·&nbsp; Company Trip 2026</div>
  </div>
</div>

</body>
</html>`;

fs.writeFileSync('/Users/nhantv5/company-trip-longhai-2026.html', html);
const size = fs.statSync('/Users/nhantv5/company-trip-longhai-2026.html').size;
console.log('Done. HTML size:', Math.round(size/1024)+'KB');
