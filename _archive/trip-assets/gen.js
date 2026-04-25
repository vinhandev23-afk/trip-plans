const fs = require('fs');
const imgs = JSON.parse(fs.readFileSync('b64.json'));

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8"/>
<title>Company Trip Long Hải 2026</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

@page { size: A4; margin: 0; }
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --ink:    #0f1117;
  --ink2:   #1e2330;
  --warm:   #f5f0e8;
  --gold:   #c8a96e;
  --gold2:  #e8d5a3;
  --mist:   #8a8f9e;
  --smoke:  #f2f0ec;
  --white:  #ffffff;
  --line:   #ddd9d0;
  --teal:   #1a5f6b;
  --rust:   #b5471e;
}

body {
  font-family: 'Inter', Helvetica, sans-serif;
  background: var(--white);
  color: var(--ink);
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

/* ══ PAGE WRAPPER ══ */
.page {
  width: 210mm;
  height: 297mm;
  position: relative;
  overflow: hidden;
  page-break-after: always;
  display: flex;
  flex-direction: column;
}
.page:last-child { page-break-after: auto; }

/* ══ COVER ══ */
.cover-photo {
  position: absolute;
  inset: 0;
  background-image: url('${imgs['cover-beach']}');
  background-size: cover;
  background-position: center 60%;
}
.cover-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(10,12,20,0.72) 0%,
    rgba(10,12,20,0.4) 50%,
    rgba(10,12,20,0.85) 100%
  );
}
.cover-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 18mm 18mm 14mm;
}
.cover-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cover-logo-text {
  font-family: 'Inter', sans-serif;
  font-size: 7.5pt;
  font-weight: 700;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
}
.cover-logo-divider {
  width: 1px;
  height: 28px;
  background: rgba(255,255,255,0.2);
  margin: 0 14px;
}
.cover-logo-sub {
  font-family: 'Inter', sans-serif;
  font-size: 7pt;
  color: rgba(255,255,255,0.35);
  letter-spacing: 1.5px;
}
.cover-year-pill {
  border: 1px solid rgba(200,169,110,0.5);
  color: var(--gold2);
  padding: 5px 16px;
  font-size: 7.5pt;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.cover-mid {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 14mm;
}
.cover-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.cover-line-accent {
  width: 36px;
  height: 1px;
  background: var(--gold);
}
.cover-eyebrow-text {
  font-size: 8pt;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
}
.cover-h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 72pt;
  font-weight: 300;
  color: var(--white);
  line-height: 0.92;
  letter-spacing: -2px;
  margin-bottom: 8px;
}
.cover-h1 em {
  font-style: italic;
  color: var(--gold2);
}
.cover-tagline {
  font-size: 9.5pt;
  font-weight: 300;
  color: rgba(255,255,255,0.65);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: 18px;
  margin-bottom: 32px;
}
.cover-stats-row {
  display: flex;
  gap: 0;
  border-top: 1px solid rgba(255,255,255,0.12);
  padding-top: 20px;
}
.cover-stat {
  flex: 1;
  padding-right: 24px;
  border-right: 1px solid rgba(255,255,255,0.12);
  margin-right: 24px;
}
.cover-stat:last-child { border-right: none; margin-right: 0; padding-right: 0; }
.cover-stat-n {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26pt;
  font-weight: 500;
  color: var(--white);
  line-height: 1;
  margin-bottom: 4px;
}
.cover-stat-l {
  font-size: 7pt;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}
.cover-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cover-bottom-left {
  font-size: 7.5pt;
  color: rgba(255,255,255,0.3);
  letter-spacing: 0.8px;
}
.cover-bottom-right {
  display: flex;
  gap: 10px;
}
.cover-tag-sm {
  font-size: 7pt;
  color: rgba(255,255,255,0.35);
  border: 1px solid rgba(255,255,255,0.12);
  padding: 3px 11px;
  letter-spacing: 1px;
}

/* ══ INNER PAGE LAYOUT ══ */
.inner-page {
  width: 210mm;
  height: 297mm;
  overflow: hidden;
  page-break-after: always;
  display: flex;
  flex-direction: column;
}
.inner-page:last-child { page-break-after: auto; }

/* ── Running header ── */
.running-head {
  height: 10mm;
  padding: 0 18mm;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid var(--line);
  flex-shrink: 0;
}
.rh-left {
  font-size: 6.5pt;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--mist);
}
.rh-right {
  font-size: 6.5pt;
  color: var(--mist);
  letter-spacing: 1px;
}
.rh-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--gold);
  display: inline-block;
  margin: 0 8px;
  vertical-align: middle;
}

/* ── Content area ── */
.content-area {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ── Running footer ── */
.running-foot {
  height: 8mm;
  padding: 0 18mm;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.5px solid var(--line);
  flex-shrink: 0;
}
.rf-left { font-size: 6.5pt; color: var(--mist); }
.rf-right { font-size: 6.5pt; color: var(--mist); letter-spacing: 0.5px; }

/* ══ HERO IMAGE STRIP ══ */
.hero-strip {
  height: 68mm;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.hero-strip-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.hero-strip-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15,17,23,0.15) 0%, rgba(15,17,23,0.7) 80%);
}
.hero-strip-content {
  position: absolute;
  inset: 0;
  padding: 0 18mm 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.day-chip {
  display: inline-block;
  background: var(--gold);
  color: var(--ink);
  font-size: 7pt;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  padding: 4px 14px;
  margin-bottom: 10px;
  width: fit-content;
}
.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 32pt;
  font-weight: 400;
  color: var(--white);
  line-height: 1.05;
  letter-spacing: -0.5px;
}
.hero-sub {
  font-size: 8pt;
  font-weight: 300;
  color: rgba(255,255,255,0.6);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 6px;
}

/* ══ SECTION HEADER (inline) ══ */
.section-label {
  font-size: 6.5pt;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 5px;
}
.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22pt;
  font-weight: 400;
  color: var(--ink);
  line-height: 1.1;
  letter-spacing: -0.3px;
}
.section-body {
  font-size: 8.5pt;
  color: var(--mist);
  line-height: 1.75;
  font-weight: 300;
}

/* ══ OVERVIEW SPLIT ══ */
.split-two {
  display: flex;
  flex: 1;
  overflow: hidden;
}
.split-img-col {
  width: 48%;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
}
.split-img-col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.split-text-col {
  flex: 1;
  padding: 14mm 18mm 14mm 12mm;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

/* ── Info pills grid ── */
.info-pills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 16px 0;
}
.info-pill {
  background: var(--smoke);
  border-left: 2.5px solid var(--gold);
  padding: 9px 12px;
}
.info-pill-label {
  font-size: 6.5pt;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--mist);
  margin-bottom: 2px;
}
.info-pill-val {
  font-size: 9.5pt;
  font-weight: 600;
  color: var(--ink);
}

/* ── Stat row ── */
.stat-strip {
  display: flex;
  margin-top: 10px;
  border-top: 1px solid var(--line);
  padding-top: 12px;
  gap: 0;
}
.stat-cell {
  flex: 1;
  border-right: 1px solid var(--line);
  padding-right: 14px;
  margin-right: 14px;
  text-align: left;
}
.stat-cell:last-child { border-right: none; margin-right: 0; }
.stat-n {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18pt;
  font-weight: 600;
  color: var(--teal);
  line-height: 1;
}
.stat-l {
  font-size: 6.5pt;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--mist);
  margin-top: 2px;
}
.stat-s {
  font-size: 6pt;
  color: var(--line);
  margin-top: 1px;
}

/* ══ TIMELINE ══ */
.tl-area {
  flex: 1;
  padding: 10px 18mm 0;
  overflow: hidden;
}
.tl-item {
  display: flex;
  gap: 14px;
  margin-bottom: 10px;
  page-break-inside: avoid;
}
.tl-spine {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 56px;
}
.tl-time-str {
  font-size: 7pt;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.3;
  white-space: nowrap;
}
.tl-connector {
  flex: 1;
  width: 1px;
  background: var(--line);
  margin-top: 6px;
  min-height: 20px;
}
.tl-node {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 2px solid var(--gold);
  background: var(--white);
  flex-shrink: 0;
  margin-top: 3px;
}
.tl-body {
  flex: 1;
  padding-bottom: 10px;
}
.tl-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}
.tl-ttl {
  font-size: 9.5pt;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.2;
  flex: 1;
}
.tl-type {
  font-size: 6pt;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 2px 8px;
  flex-shrink: 0;
}
.type-move   { background: #e8f0fe; color: #1a56db; }
.type-photo  { background: #fef9e7; color: #b7791f; }
.type-food   { background: #fef0ec; color: #b5471e; }
.type-rest   { background: #f0fdf4; color: #15803d; }
.type-free   { background: #f0f9ff; color: #0e7490; }
.type-night  { background: #fdf4ff; color: #7e22ce; }
.type-opt    { background: var(--smoke); color: var(--mist); }

.tl-desc {
  font-size: 8pt;
  color: var(--mist);
  line-height: 1.6;
  font-weight: 300;
  margin-bottom: 5px;
}
.tl-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.chip {
  font-size: 6.5pt;
  font-weight: 500;
  color: var(--mist);
  background: var(--smoke);
  border: 0.5px solid var(--line);
  padding: 2px 8px;
}

/* ══ OPTION SPLIT ══ */
.opt-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 5px 0;
}
.opt-box {
  border: 0.5px solid var(--line);
  background: var(--smoke);
  padding: 10px 12px;
}
.opt-head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}
.opt-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16pt;
  font-weight: 600;
  color: var(--gold);
  line-height: 1;
}
.opt-title-wrap {}
.opt-label-sm {
  font-size: 6pt;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--mist);
}
.opt-ttl {
  font-size: 8.5pt;
  font-weight: 600;
  color: var(--ink);
}
.opt-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.opt-list li {
  font-size: 7.5pt;
  color: var(--mist);
  display: flex;
  align-items: flex-start;
  gap: 6px;
  line-height: 1.4;
}
.opt-list li::before {
  content: '—';
  color: var(--gold);
  flex-shrink: 0;
  font-size: 7pt;
}

/* ══ IMAGE STRIP (3-col) ══ */
.photo-strip {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4px;
  height: 38mm;
  flex-shrink: 0;
}
.photo-strip-item {
  overflow: hidden;
  position: relative;
}
.photo-strip-item img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
}
.photo-cap {
  position: absolute;
  bottom: 6px; left: 8px;
  font-size: 6pt;
  font-weight: 600;
  color: rgba(255,255,255,0.8);
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: 0 1px 4px rgba(0,0,0,0.6);
}

/* ══ ROLES GRID ══ */
.roles-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 16px;
}
.role-card {
  background: var(--smoke);
  padding: 14px 12px;
  border-bottom: 2px solid var(--gold);
  page-break-inside: avoid;
}
.role-icon { font-size: 18pt; margin-bottom: 8px; display: block; }
.role-name {
  font-size: 6.5pt;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 3px;
}
.role-title {
  font-size: 9pt;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 5px;
}
.role-desc { font-size: 7.5pt; color: var(--mist); line-height: 1.5; }

/* ══ CHECKLIST ══ */
.check-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 14px;
}
.check-card {
  background: var(--smoke);
  padding: 12px 14px;
  page-break-inside: avoid;
}
.check-card-ttl {
  font-size: 8pt;
  font-weight: 700;
  color: var(--ink);
  border-bottom: 1px solid var(--line);
  padding-bottom: 6px;
  margin-bottom: 8px;
}
.check-list { list-style: none; display: flex; flex-direction: column; gap: 5px; }
.check-list li {
  font-size: 7.5pt;
  color: #555;
  display: flex;
  align-items: center;
  gap: 7px;
  line-height: 1.3;
}
.cb {
  width: 11px; height: 11px;
  border: 1px solid var(--line);
  background: white;
  flex-shrink: 0;
}

/* ══ FLOW SUMMARY ══ */
.flow-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 14px;
}
.flow-box {
  padding: 16px 16px;
  page-break-inside: avoid;
}
.flow-box-dark { background: var(--ink2); }
.flow-box-teal { background: var(--teal); }
.flow-day-eyebrow {
  font-size: 6.5pt;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 6px;
}
.flow-day-ttl {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16pt;
  font-weight: 400;
  color: white;
  margin-bottom: 14px;
  line-height: 1.1;
}
.flow-step {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5.5px 0;
  border-bottom: 0.5px solid rgba(255,255,255,0.07);
}
.flow-step:last-child { border-bottom: none; }
.fs-icon { font-size: 9pt; width: 18px; text-align: center; flex-shrink: 0; }
.fs-text { flex: 1; font-size: 7.5pt; color: rgba(255,255,255,0.72); line-height: 1.3; }
.fs-time { font-size: 6.5pt; color: rgba(255,255,255,0.3); white-space: nowrap; font-weight: 600; }

/* ══ DECORATIVE ══ */
.gold-rule { height: 1px; background: var(--gold); opacity: 0.35; margin: 14px 0; }
.thin-rule { height: 0.5px; background: var(--line); margin: 10px 0; }

/* ══ TREND ROW ══ */
.trend-row {
  display: flex;
  gap: 0;
  border: 0.5px solid var(--line);
  margin-top: 16px;
}
.trend-cell {
  flex: 1;
  padding: 14px 12px;
  border-right: 0.5px solid var(--line);
  text-align: center;
}
.trend-cell:last-child { border-right: none; }
.trend-icon-lg { font-size: 16pt; margin-bottom: 6px; display: block; }
.trend-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18pt;
  font-weight: 600;
  color: var(--teal);
  line-height: 1;
  margin-bottom: 3px;
}
.trend-lbl { font-size: 7pt; color: var(--mist); line-height: 1.4; }
.trend-src { font-size: 6pt; color: var(--line); margin-top: 3px; }

</style>
</head>
<body>

<!-- ═══════════ COVER PAGE ═══════════ -->
<div class="page">
  <div class="cover-photo"></div>
  <div class="cover-overlay"></div>
  <div class="cover-content">

    <div class="cover-top">
      <div style="display:flex;align-items:center;">
        <span class="cover-logo-text">Company Trip</span>
        <div class="cover-logo-divider"></div>
        <span class="cover-logo-sub">Long Hải · Bà Rịa – Vũng Tàu</span>
      </div>
      <div class="cover-year-pill">2026 Edition</div>
    </div>

    <div class="cover-mid">
      <div class="cover-eyebrow">
        <div class="cover-line-accent"></div>
        <span class="cover-eyebrow-text">Hành trình nghỉ dưỡng & Gắn kết</span>
      </div>
      <div class="cover-h1">Long<br/><em>Hải</em></div>
      <div class="cover-tagline">2 Ngày · 1 Đêm · ~20 Người · Bà Rịa – Vũng Tàu</div>
      <div class="cover-stats-row">
        <div class="cover-stat">
          <div class="cover-stat-n">20</div>
          <div class="cover-stat-l">Thành viên</div>
        </div>
        <div class="cover-stat">
          <div class="cover-stat-n">120km</div>
          <div class="cover-stat-l">Từ Sài Gòn</div>
        </div>
        <div class="cover-stat">
          <div class="cover-stat-n">2N1Đ</div>
          <div class="cover-stat-l">Hành trình</div>
        </div>
        <div class="cover-stat">
          <div class="cover-stat-n">∞</div>
          <div class="cover-stat-l">Kỷ niệm</div>
        </div>
      </div>
    </div>

    <div class="cover-bottom">
      <span class="cover-bottom-left">Quận 9, TP.HCM → Long Hải, BR-VT · Xe bus 29 chỗ</span>
      <div class="cover-bottom-right">
        <span class="cover-tag-sm">Nghỉ dưỡng</span>
        <span class="cover-tag-sm">Team Building</span>
        <span class="cover-tag-sm">BBQ Night</span>
      </div>
    </div>

  </div>
</div>


<!-- ═══════════ PAGE 2 · OVERVIEW ═══════════ -->
<div class="inner-page">
  <div class="running-head">
    <div class="rh-left">Company Trip Long Hải 2026</div>
    <div class="rh-right">Tổng quan<span class="rh-dot"></span>02</div>
  </div>

  <div class="content-area">
    <div class="split-two">
      <div class="split-img-col">
        <img src="${imgs['resort-pool']}" alt="Resort" style="object-position:center center;"/>
      </div>
      <div class="split-text-col">
        <div class="section-label">Trip Overview</div>
        <div class="section-title">Thông tin<br/>chuyến đi</div>
        <div class="thin-rule"></div>
        <div class="section-body">
          Chuyến hành trình nghỉ dưỡng và team building 2 ngày 1 đêm tại Long Hải — bãi biển hoang sơ đẹp nhất cách Sài Gòn chỉ ~120km, di chuyển qua cao tốc Long Thành.
        </div>
        <div class="info-pills">
          <div class="info-pill">
            <div class="info-pill-label">Số lượng</div>
            <div class="info-pill-val">~20 người</div>
          </div>
          <div class="info-pill">
            <div class="info-pill-label">Phương tiện</div>
            <div class="info-pill-val">Xe bus 29 chỗ</div>
          </div>
          <div class="info-pill">
            <div class="info-pill-label">Xuất phát</div>
            <div class="info-pill-val">Quận 9, TP.HCM</div>
          </div>
          <div class="info-pill">
            <div class="info-pill-label">Điểm đến</div>
            <div class="info-pill-val">Long Hải, BR-VT</div>
          </div>
          <div class="info-pill">
            <div class="info-pill-label">Khoảng cách</div>
            <div class="info-pill-val">~120 km</div>
          </div>
          <div class="info-pill">
            <div class="info-pill-label">Di chuyển</div>
            <div class="info-pill-val">~2.5 giờ</div>
          </div>
        </div>

        <div class="section-label" style="margin-top:14px;">Trending 2026</div>
        <div class="stat-strip">
          <div class="stat-cell">
            <div class="stat-n">+47%</div>
            <div class="stat-l">Du khách tăng</div>
            <div class="stat-s">Tổng cục DL 2026</div>
          </div>
          <div class="stat-cell">
            <div class="stat-n">42M</div>
            <div class="stat-l">#LongHai TikTok</div>
            <div class="stat-s">TikTok Travel</div>
          </div>
          <div class="stat-cell">
            <div class="stat-n">4.8★</div>
            <div class="stat-l">Google Maps</div>
            <div class="stat-s">2026 rating</div>
          </div>
          <div class="stat-cell">
            <div class="stat-n">94%</div>
            <div class="stat-l">NV hài lòng</div>
            <div class="stat-s">Gallup 2026</div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="running-foot">
    <div class="rf-left">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-right">Confidential · Company Trip 2026</div>
  </div>
</div>


<!-- ═══════════ PAGE 3 · DAY 1 MORNING ═══════════ -->
<div class="inner-page">
  <div class="running-head">
    <div class="rh-left">Company Trip Long Hải 2026</div>
    <div class="rh-right">Lịch trình — Ngày 1<span class="rh-dot"></span>03</div>
  </div>

  <div class="content-area">

    <div class="hero-strip">
      <img class="hero-strip-img" src="${imgs['mountain-road']}" alt="Đèo Nước Ngọt" style="object-position:center 40%;"/>
      <div class="hero-strip-overlay"></div>
      <div class="hero-strip-content">
        <div class="day-chip">Day 01</div>
        <div class="hero-title">Roadtrip &<br/>Trải nghiệm</div>
        <div class="hero-sub">Khởi hành · Đèo Nước Ngọt · Hải sản Phước Hải · BBQ đêm biển</div>
      </div>
    </div>

    <div class="tl-area" style="padding-top:12px;">

      <div class="tl-item">
        <div class="tl-spine">
          <div class="tl-time-str">07:00<br/>09:30</div>
          <div class="tl-connector"></div>
        </div>
        <div style="padding-top:3px;margin-right:10px;"><div class="tl-node"></div></div>
        <div class="tl-body">
          <div class="tl-header">
            <div class="tl-ttl">🚐 Khởi hành từ Quận 9</div>
            <span class="tl-type type-move">Di chuyển</span>
          </div>
          <div class="tl-desc">Tập trung điểm hẹn, xuất phát đúng giờ. Route: Q9 → Cao tốc Long Thành → BR-VT → Long Hải. Dừng nghỉ nhẹ trên đường nếu cần.</div>
          <div class="tl-chips">
            <span class="chip">~120 km</span>
            <span class="chip">Cao tốc Long Thành</span>
            <span class="chip">Xe bus 29 chỗ</span>
          </div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-spine">
          <div class="tl-time-str">09:30<br/>10:30</div>
          <div class="tl-connector"></div>
        </div>
        <div style="padding-top:3px;margin-right:10px;"><div class="tl-node"></div></div>
        <div class="tl-body">
          <div class="tl-header">
            <div class="tl-ttl">📸 Check-in Đèo Nước Ngọt</div>
            <span class="tl-type type-photo">Check-in</span>
          </div>
          <div class="tl-desc">Điểm check-in nổi tiếng với view panorama biển xanh và núi rừng. Chụp ảnh nhóm, ngắm cảnh. Trending TikTok 2026 với hơn 15M views.</div>
          <div class="tl-chips">
            <span class="chip">📍 Đèo Nước Ngọt</span>
            <span class="chip">View panorama</span>
            <span class="chip">15M TikTok views</span>
          </div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-spine">
          <div class="tl-time-str">10:45<br/>11:30</div>
          <div class="tl-connector"></div>
        </div>
        <div style="padding-top:3px;margin-right:10px;"><div class="tl-node"></div></div>
        <div class="tl-body">
          <div class="tl-header">
            <div class="tl-ttl">🏡 Check-in Homestay</div>
            <span class="tl-type type-rest">Homestay</span>
          </div>
          <div class="tl-desc">Nhận phòng, gửi hành lý. Khám phá tiện ích: hồ bơi, khu BBQ, bãi biển riêng. Phân công phòng và briefing lịch trình.</div>
          <div class="tl-chips">
            <span class="chip">Hồ bơi</span>
            <span class="chip">Khu BBQ</span>
            <span class="chip">Bãi biển riêng</span>
          </div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-spine">
          <div class="tl-time-str">11:30<br/>13:30</div>
          <div class="tl-connector"></div>
        </div>
        <div style="padding-top:3px;margin-right:10px;"><div class="tl-node"></div></div>
        <div class="tl-body">
          <div class="tl-header">
            <div class="tl-ttl">🍽️ Ăn trưa hải sản tại Phước Hải</div>
            <span class="tl-type type-food">Ăn trưa</span>
          </div>
          <div class="tl-desc">Di chuyển xuống Phước Hải thưởng thức hải sản tươi sống. Ngư dân bắt ngay trong ngày, giá bình dân, không khí chợ biển đặc sắc.</div>
          <div class="tl-chips">
            <span class="chip">🦐 Tôm hùm</span>
            <span class="chip">🦑 Mực nướng</span>
            <span class="chip">🐟 Lẩu cá biển</span>
            <span class="chip">Phước Hải</span>
          </div>
        </div>
      </div>

    </div>

  </div>

  <div class="running-foot">
    <div class="rf-left">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-right">Confidential · Company Trip 2026</div>
  </div>
</div>


<!-- ═══════════ PAGE 4 · DAY 1 AFTERNOON + EVENING ═══════════ -->
<div class="inner-page">
  <div class="running-head">
    <div class="rh-left">Company Trip Long Hải 2026</div>
    <div class="rh-right">Lịch trình — Ngày 1 (tt)<span class="rh-dot"></span>04</div>
  </div>

  <div class="content-area">

    <!-- photo strip -->
    <div class="photo-strip">
      <div class="photo-strip-item">
        <img src="${imgs['motorbike']}" alt="Xe máy Phước Hải"/>
        <span class="photo-cap">Khám phá Phước Hải</span>
      </div>
      <div class="photo-strip-item">
        <img src="${imgs['seafood-market']}" alt="Chợ hải sản"/>
        <span class="photo-cap">Chợ Long Hải</span>
      </div>
      <div class="photo-strip-item">
        <img src="${imgs['seafood-bbq']}" alt="BBQ hải sản"/>
        <span class="photo-cap">BBQ Đêm biển</span>
      </div>
    </div>

    <div class="tl-area" style="padding-top:10px;">

      <div class="tl-item">
        <div class="tl-spine">
          <div class="tl-time-str">13:30<br/>17:00</div>
          <div class="tl-connector"></div>
        </div>
        <div style="padding-top:3px;margin-right:10px;"><div class="tl-node"></div></div>
        <div class="tl-body">
          <div class="tl-header">
            <div class="tl-ttl">🔀 Tách team — Tự do lựa chọn</div>
            <span class="tl-type type-free">Tự do</span>
          </div>
          <div class="opt-row">
            <div class="opt-box">
              <div class="opt-head">
                <div class="opt-num">A</div>
                <div class="opt-title-wrap">
                  <div class="opt-label-sm">Option · Chill</div>
                  <div class="opt-ttl">Nghỉ dưỡng tại Homestay</div>
                </div>
              </div>
              <ul class="opt-list">
                <li>Ngủ trưa, thư giãn hoàn toàn</li>
                <li>Tắm hồ bơi, nằm võng chill</li>
                <li>Nghe nhạc, đọc sách</li>
              </ul>
            </div>
            <div class="opt-box">
              <div class="opt-head">
                <div class="opt-num">B</div>
                <div class="opt-title-wrap">
                  <div class="opt-label-sm">Option · Phiêu</div>
                  <div class="opt-ttl">Khám phá Phước Hải xe máy</div>
                </div>
              </div>
              <ul class="opt-list">
                <li>Thuê xe máy tại Long Hải</li>
                <li>Hồ Sở Bông · Bờ kè Lộc An</li>
                <li>Quảng trường Phước Hải</li>
                <li>Cafe ven biển</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-spine">
          <div class="tl-time-str">16:30<br/>17:30</div>
          <div class="tl-connector"></div>
        </div>
        <div style="padding-top:3px;margin-right:10px;"><div class="tl-node"></div></div>
        <div class="tl-body">
          <div class="tl-header">
            <div class="tl-ttl">🛒 Tập trung — Mua hải sản Chợ Long Hải</div>
            <span class="tl-type type-food">Cả team</span>
          </div>
          <div class="tl-desc">Toàn team tập trung, đi chợ mua nguyên liệu BBQ. <strong>Khuyến nghị:</strong> nhờ người bán làm sạch và ướp sẵn — về chỉ cần nướng ngay, tiết kiệm thời gian.</div>
          <div class="tl-chips">
            <span class="chip">Tôm · Mực · Sò · Cá</span>
            <span class="chip">Rau + Đồ nướng</span>
            <span class="chip">⭐ Nhờ ướp sẵn</span>
          </div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-spine">
          <div class="tl-time-str">18:30<br/>23:30</div>
          <div class="tl-connector"></div>
        </div>
        <div style="padding-top:3px;margin-right:10px;"><div class="tl-node" style="border-color:#7e22ce;"></div></div>
        <div class="tl-body">
          <div class="tl-header">
            <div class="tl-ttl">🔥 BBQ Night + Karaoke + Party Games</div>
            <span class="tl-type type-night">BBQ Night</span>
          </div>
          <div class="tl-desc">Đêm BBQ dưới ánh trăng biển. Ăn uống, hát hò và mini games kết nối cả team. Đây là khoảnh khắc đáng nhớ nhất của chuyến đi.</div>
          <div class="tl-chips">
            <span class="chip">🎤 Karaoke</span>
            <span class="chip">🎵 Đoán bài hát</span>
            <span class="chip">🎲 Truth or Dare</span>
            <span class="chip">🍺 Drinking games</span>
            <span class="chip">🔊 Loa bluetooth</span>
          </div>
        </div>
      </div>

    </div>

  </div>

  <div class="running-foot">
    <div class="rf-left">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-right">Confidential · Company Trip 2026</div>
  </div>
</div>


<!-- ═══════════ PAGE 5 · DAY 2 ═══════════ -->
<div class="inner-page">
  <div class="running-head">
    <div class="rh-left">Company Trip Long Hải 2026</div>
    <div class="rh-right">Lịch trình — Ngày 2<span class="rh-dot"></span>05</div>
  </div>

  <div class="content-area">

    <div class="hero-strip">
      <img class="hero-strip-img" src="${imgs['sunrise']}" alt="Bình minh biển"/>
      <div class="hero-strip-overlay"></div>
      <div class="hero-strip-content">
        <div class="day-chip" style="background:var(--teal);color:white;">Day 02</div>
        <div class="hero-title">Biển sáng &<br/>Về nhà</div>
        <div class="hero-sub">Bình minh · Team Building · Cafe · Tâm linh · Lên đường</div>
      </div>
    </div>

    <div class="tl-area" style="padding-top:12px;">

      <div class="tl-item">
        <div class="tl-spine">
          <div class="tl-time-str">05:30<br/>06:30</div>
          <div class="tl-connector"></div>
        </div>
        <div style="padding-top:3px;margin-right:10px;"><div class="tl-node" style="border-color:var(--teal);"></div></div>
        <div class="tl-body">
          <div class="tl-header">
            <div class="tl-ttl">🌅 Tắm biển & Ngắm bình minh</div>
            <span class="tl-type type-rest" style="background:#e0f2fe;color:var(--teal);">Buổi sáng</span>
          </div>
          <div class="tl-desc">Dậy sớm đón bình minh — khoảnh khắc biển đẹp nhất trong ngày. Tắm biển buổi sáng mát mẻ, chụp ảnh check-in, hít thở không khí trong lành.</div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-spine">
          <div class="tl-time-str">06:30<br/>07:30</div>
          <div class="tl-connector"></div>
        </div>
        <div style="padding-top:3px;margin-right:10px;"><div class="tl-node" style="border-color:var(--teal);"></div></div>
        <div class="tl-body">
          <div class="tl-header">
            <div class="tl-ttl">🏖️ Team Building trên bãi biển</div>
            <span class="tl-type type-rest" style="background:#e0f2fe;color:var(--teal);">Team Building</span>
          </div>
          <div class="tl-desc">Các hoạt động gắn kết trên bãi cát. Chia team, thi đấu vui vẻ, tăng kết nối nội bộ. Đội thắng được quyền chọn chỗ ngồi ăn sáng!</div>
          <div class="tl-chips">
            <span class="chip">🏐 Ném bóng biển</span>
            <span class="chip">🏃 Chạy tiếp sức</span>
            <span class="chip">💪 Kéo co</span>
          </div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-spine">
          <div class="tl-time-str">07:30<br/>08:30</div>
          <div class="tl-connector"></div>
        </div>
        <div style="padding-top:3px;margin-right:10px;"><div class="tl-node" style="border-color:var(--teal);"></div></div>
        <div class="tl-body">
          <div class="tl-header">
            <div class="tl-ttl">🍜 Ăn sáng + Dọn đồ Check-out</div>
            <span class="tl-type type-food">Ăn sáng</span>
          </div>
          <div class="tl-desc">Ăn sáng địa phương: bún cá, bánh mì, hủ tiếu biển. Dọn phòng, gom đồ, check-out homestay đúng giờ.</div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-spine">
          <div class="tl-time-str">08:30<br/>09:30</div>
          <div class="tl-connector"></div>
        </div>
        <div style="padding-top:3px;margin-right:10px;"><div class="tl-node" style="border-color:var(--teal);"></div></div>
        <div class="tl-body">
          <div class="tl-header">
            <div class="tl-ttl">☕ Cafe Check-in View biển</div>
            <span class="tl-type type-photo">Cafe</span>
          </div>
          <div class="tl-desc">Ghé quán cafe view biển trending 2026 — uống cà phê phin, chụp ảnh lưu niệm, nạp năng lượng trước chuyến về Sài Gòn.</div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-spine">
          <div class="tl-time-str">09:30<br/>10:30</div>
          <div class="tl-connector"></div>
        </div>
        <div style="padding-top:3px;margin-right:10px;"><div class="tl-node" style="border-color:var(--line);background:var(--smoke);"></div></div>
        <div class="tl-body">
          <div class="tl-header">
            <div class="tl-ttl">🙏 Cầu bình an — Nhà thờ / Chùa</div>
            <span class="tl-type type-opt">Optional</span>
          </div>
          <div class="tl-desc">Dành cho ai muốn ghé thăm. Cầu nguyện bình an, sức khỏe, may mắn cho cả team năm 2026. Hoàn toàn tự nguyện, không ép buộc.</div>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-spine">
          <div class="tl-time-str">10:30<br/>13:30</div>
        </div>
        <div style="padding-top:3px;margin-right:10px;"><div class="tl-node" style="border-color:var(--ink);background:var(--ink);"></div></div>
        <div class="tl-body">
          <div class="tl-header">
            <div class="tl-ttl">🚐 Lên đường về Sài Gòn</div>
            <span class="tl-type" style="background:var(--smoke);color:var(--ink);">Về nhà</span>
          </div>
          <div class="tl-desc">Route: Long Hải → Bà Rịa → Cao tốc Long Thành → Quận 9. Ngủ trên xe, ôn lại kỷ niệm 2 ngày vừa qua.</div>
          <div class="tl-chips">
            <span class="chip">Long Hải → Q9</span>
            <span class="chip">~2.5 giờ</span>
            <span class="chip">Cao tốc Long Thành</span>
          </div>
        </div>
      </div>

    </div>

  </div>

  <div class="running-foot">
    <div class="rf-left">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-right">Confidential · Company Trip 2026</div>
  </div>
</div>


<!-- ═══════════ PAGE 6 · TEAM + CHECKLIST + FLOW ═══════════ -->
<div class="inner-page" style="page-break-after:auto;">
  <div class="running-head">
    <div class="rh-left">Company Trip Long Hải 2026</div>
    <div class="rh-right">Phân công & Chuẩn bị<span class="rh-dot"></span>06</div>
  </div>

  <div class="content-area" style="padding:10mm 18mm 0;">

    <!-- Photo strip top -->
    <div class="photo-strip" style="margin:0 -18mm;height:32mm;">
      <div class="photo-strip-item">
        <img src="${imgs['team-beach']}" alt="Team Building"/>
        <span class="photo-cap">Team Building · Bãi biển</span>
      </div>
      <div class="photo-strip-item">
        <img src="${imgs['cafe']}" alt="Cafe biển"/>
        <span class="photo-cap">Cafe View Biển</span>
      </div>
      <div class="photo-strip-item">
        <img src="${imgs['cover-beach']}" alt="Biển Long Hải"/>
        <span class="photo-cap">Long Hải · BR-VT</span>
      </div>
    </div>

    <div class="gold-rule" style="margin:14px 0 10px;"></div>

    <div class="section-label">Team Roles</div>
    <div class="section-title">Phân công công việc</div>

    <div class="roles-grid">
      <div class="role-card">
        <span class="role-icon">👑</span>
        <div class="role-name">Leader</div>
        <div class="role-title">Quản lý chuyến đi</div>
        <div class="role-desc">Quản lý timeline, điều phối lịch trình, xử lý phát sinh, liên lạc homestay & xe bus.</div>
      </div>
      <div class="role-card">
        <span class="role-icon">🍖</span>
        <div class="role-name">Food Lead</div>
        <div class="role-title">Phụ trách BBQ</div>
        <div class="role-desc">Mua hải sản, ướp đồ, quản lý bếp than, đảm bảo đồ ăn ngon đầy đủ cho cả team.</div>
      </div>
      <div class="role-card">
        <span class="role-icon">🎯</span>
        <div class="role-name">Game Lead</div>
        <div class="role-title">Tổ chức Game</div>
        <div class="role-desc">Chuẩn bị và dẫn dắt mini games team building, karaoke và đêm BBQ vui vẻ.</div>
      </div>
      <div class="role-card">
        <span class="role-icon">📸</span>
        <div class="role-name">Media</div>
        <div class="role-title">Ghi lại kỷ niệm</div>
        <div class="role-desc">Chụp ảnh, quay video, làm reels và highlight cho chuyến đi. Lưu giữ kỷ niệm đẹp.</div>
      </div>
    </div>

    <div class="gold-rule" style="margin:12px 0;"></div>

    <div class="section-label">Checklist</div>
    <div class="section-title">Chuẩn bị trước chuyến đi</div>

    <div class="check-grid">
      <div class="check-card">
        <div class="check-card-ttl">🎒 Đồ cá nhân</div>
        <ul class="check-list">
          <li><span class="cb"></span>Quần áo tắm biển</li>
          <li><span class="cb"></span>Kem chống nắng SPF 50+</li>
          <li><span class="cb"></span>Kính mát, nón bảo hiểm</li>
          <li><span class="cb"></span>Dép xỏ ngón, dép lê</li>
          <li><span class="cb"></span>Thuốc say xe, cá nhân</li>
          <li><span class="cb"></span>Sạc + pin dự phòng</li>
          <li><span class="cb"></span>CCCD / Giấy tờ tùy thân</li>
        </ul>
      </div>
      <div class="check-card">
        <div class="check-card-ttl">🍖 Đồ BBQ chung</div>
        <ul class="check-list">
          <li><span class="cb"></span>Loa bluetooth</li>
          <li><span class="cb"></span>Than hoa + bếp nướng</li>
          <li><span class="cb"></span>Nước đá đủ dùng</li>
          <li><span class="cb"></span>Tăm, giấy ăn, đĩa nhựa</li>
          <li><span class="cb"></span>Nước ngọt, bia dự trữ</li>
          <li><span class="cb"></span>Kẹp nướng, găng tay bếp</li>
          <li><span class="cb"></span>Túi đựng rác</li>
        </ul>
      </div>
      <div class="check-card">
        <div class="check-card-ttl">🚐 Logistics</div>
        <ul class="check-list">
          <li><span class="cb"></span>Confirm xe bus, giờ đón</li>
          <li><span class="cb"></span>Confirm homestay có BBQ</li>
          <li><span class="cb"></span>Confirm hồ bơi hoạt động</li>
          <li><span class="cb"></span>Liên hệ thuê xe máy</li>
          <li><span class="cb"></span>Quỹ nhóm & chia chi phí</li>
          <li><span class="cb"></span>Group chat thông báo</li>
          <li><span class="cb"></span>Phân công phòng trước</li>
        </ul>
      </div>
    </div>

    <div class="gold-rule" style="margin:12px 0;"></div>

    <div class="section-label">Summary</div>
    <div class="section-title">Flow tổng kết 2N1Đ</div>

    <div class="flow-cols">
      <div class="flow-box flow-box-dark">
        <div class="flow-day-eyebrow">Day 01 · Roadtrip & Trải nghiệm</div>
        <div class="flow-day-ttl">Ngày đầu hành trình 🌊</div>
        <div class="flow-step"><span class="fs-icon">🚐</span><span class="fs-text">Xuất phát từ Quận 9</span><span class="fs-time">07:00</span></div>
        <div class="flow-step"><span class="fs-icon">📸</span><span class="fs-text">Check-in Đèo Nước Ngọt</span><span class="fs-time">09:30</span></div>
        <div class="flow-step"><span class="fs-icon">🏡</span><span class="fs-text">Check-in Homestay</span><span class="fs-time">10:45</span></div>
        <div class="flow-step"><span class="fs-icon">🍽️</span><span class="fs-text">Ăn trưa hải sản Phước Hải</span><span class="fs-time">11:30</span></div>
        <div class="flow-step"><span class="fs-icon">🔀</span><span class="fs-text">Tách team tự do</span><span class="fs-time">13:30</span></div>
        <div class="flow-step"><span class="fs-icon">🛒</span><span class="fs-text">Mua hải sản Chợ Long Hải</span><span class="fs-time">16:30</span></div>
        <div class="flow-step"><span class="fs-icon">🔥</span><span class="fs-text">BBQ + Karaoke + Game đêm</span><span class="fs-time">18:30</span></div>
      </div>
      <div class="flow-box flow-box-teal">
        <div class="flow-day-eyebrow">Day 02 · Biển sáng & Về nhà</div>
        <div class="flow-day-ttl">Ngày cuối hành trình 🌅</div>
        <div class="flow-step"><span class="fs-icon">🌅</span><span class="fs-text">Bình minh & Tắm biển</span><span class="fs-time">05:30</span></div>
        <div class="flow-step"><span class="fs-icon">🏖️</span><span class="fs-text">Team Building trên biển</span><span class="fs-time">06:30</span></div>
        <div class="flow-step"><span class="fs-icon">🍜</span><span class="fs-text">Ăn sáng + Check-out</span><span class="fs-time">07:30</span></div>
        <div class="flow-step"><span class="fs-icon">☕</span><span class="fs-text">Cafe check-in view biển</span><span class="fs-time">08:30</span></div>
        <div class="flow-step"><span class="fs-icon">🙏</span><span class="fs-text">Cầu bình an (Optional)</span><span class="fs-time">09:30</span></div>
        <div class="flow-step"><span class="fs-icon">🚐</span><span class="fs-text">Lên đường về Sài Gòn</span><span class="fs-time">10:30</span></div>
        <div class="flow-step"><span class="fs-icon">🏠</span><span class="fs-text">Về đến Quận 9 an toàn</span><span class="fs-time">13:30</span></div>
      </div>
    </div>

  </div>

  <div class="running-foot">
    <div class="rf-left">Bà Rịa – Vũng Tàu, Việt Nam</div>
    <div class="rf-right">Confidential · Company Trip 2026</div>
  </div>
</div>

</body>
</html>`;

fs.writeFileSync('/Users/nhantv5/company-trip-longhai-2026.html', html);
console.log('HTML written:', Math.round(fs.statSync('/Users/nhantv5/company-trip-longhai-2026.html').size/1024)+'KB');
