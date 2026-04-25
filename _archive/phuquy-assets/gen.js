const fs = require('fs');
const path = require('path');
const D = __dirname + '/';

const loadImg = (f, mime) => {
  const p = f.startsWith('/') ? f : D + f;
  if (!fs.existsSync(p) || fs.statSync(p).size < 100) return '';
  const m = mime || (f.endsWith('.png') ? 'image/png' : f.endsWith('.webp') ? 'image/webp' : 'image/jpeg');
  return 'data:'+m+';base64,' + fs.readFileSync(p).toString('base64');
};

const I = {
  // Unsplash base
  cover:     loadImg('cover-island.jpg'),
  rocky:     loadImg('rocky-coast.jpg'),
  turquoise: loadImg('turquoise-beach.jpg'),
  sunset:    loadImg('sunset-rocks.jpg'),
  seafood:   loadImg('seafood-spread.jpg'),
  coral:     loadImg('coral-snorkel.jpg'),
  lighthouse:loadImg('lighthouse.jpg'),
  boats:     loadImg('fishing-boats.jpg'),
  vnbeach:   loadImg('vietnam-beach.jpg'),
  sunrise:   loadImg('sunrise-ocean.jpg'),
  bbq:       loadImg('bbq-seafood.jpg'),
  aerial:    loadImg('island-aerial.jpg'),
  cliff:     loadImg('ocean-cliff.jpg'),
  cafe:      loadImg('cafe-ocean.jpg'),
  stars:     loadImg('starry-beach.jpg'),
  coral2:    loadImg('snorkel-coral2.jpg'),
  road:      loadImg('vn-coast-road.jpg'),
  // Real Phú Quý images (user added)
  pqWindmill: loadImg('Cánh-đồng-quạt-gió-phú-quý-ivivu-1.jpg'),
  pqCrab:     loadImg('Cua-Huynh-De-phú-quý-ivivu.jpg'),
  pqHonTranh: loadImg('Hòn-Tranh-phú-quý-ivivu.jpg'),
  pqHonDen:   loadImg('Hòn-Đen-phú-quý-ivivu.jpg'),
  pqFishPond: loadImg('Hồ-cá-Làng-Dương-Phú-Quý-ivivu.jpg'),
  pqBeach21:  loadImg('dao-phu-quy-ivivu-21.jpg'),
  pqBeach8:   loadImg('dao-phu-quy-ivivu-8.jpg'),
  pqOdau3:    loadImg('dao-phu-quy-o-dau-3.jpeg'),
  pqOdau4:    loadImg('dao-phu-quy-o-dau-4.jpeg'),
  pqOdau8:    loadImg('dao-phu-quy-o-dau-8.jpeg'),
  pqOverview: loadImg('du-lich-dao-phu-quy-ivivu.jpg'),
  pqBeach24:  loadImg('du-lich-dao-phu-quy-ivivu24.jpg'),
  pqCoast:    loadImg('du-lịch-Phú-Quý-ivivu-1.jpg'),
};

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8"/>
<title>Phú Quý Island Trip 2026</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700;800&display=swap');
@page{size:A4;margin:0;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --ink:#0c0f14;--ink2:#1c2433;--sand:#f5f0e8;--warm:#ede8df;
  --gold:#b8936a;--gold2:#d4b08a;--teal:#0e7490;--teal2:#155e75;--teal-lt:#cffafe;
  --coral:#e11d48;--muted:#7a8190;--line:#ddd8cf;--white:#ffffff;
}
body{font-family:'Inter',-apple-system,sans-serif;background:var(--white);color:var(--ink);-webkit-print-color-adjust:exact;print-color-adjust:exact;}
.page{width:210mm;height:297mm;overflow:hidden;page-break-after:always;display:flex;flex-direction:column;position:relative;}
.page:last-child{page-break-after:auto;}

/* COVER */
.cv-bg{position:absolute;inset:0;background-size:cover;background-position:center 40%;}
.cv-grad{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(5,8,14,.45) 0%,transparent 30%),linear-gradient(to top,rgba(5,8,14,.92) 0%,rgba(5,8,14,.5) 38%,transparent 65%),linear-gradient(110deg,rgba(5,8,14,.3) 0%,transparent 50%);}
.cv-z{position:relative;z-index:2;display:flex;flex-direction:column;height:100%;padding:14mm 17mm 12mm;}
.cv-top{display:flex;align-items:center;justify-content:space-between;}
.cv-brand{font-size:7pt;font-weight:700;letter-spacing:3.5px;text-transform:uppercase;color:rgba(255,255,255,.4);display:flex;align-items:center;gap:10px;}
.cv-sep{width:1px;height:18px;background:rgba(255,255,255,.18);}
.cv-brand-sub{font-weight:300;letter-spacing:1px;font-size:7.5pt;color:rgba(255,255,255,.32);text-transform:none;}
.cv-badge{font-size:7pt;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(14,116,144,.9);border:1px solid rgba(14,116,144,.5);padding:5px 14px;background:rgba(207,250,254,.12);}
.cv-mid{flex:1;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:12mm;}
.cv-ey{display:flex;align-items:center;gap:10px;margin-bottom:12px;}
.cv-ey-rule{width:28px;height:1px;background:var(--teal-lt);}
.cv-ey-txt{font-size:7.5pt;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:rgba(207,250,254,.8);}
.cv-h1{font-family:'Cormorant Garamond',Georgia,serif;font-size:92pt;font-weight:300;color:#fff;line-height:.82;letter-spacing:-4px;}
.cv-h1 em{font-style:italic;color:rgba(14,180,210,.85);}
.cv-sub{display:flex;align-items:center;gap:14px;margin-top:18px;margin-bottom:26px;}
.cv-sub-rule{width:90px;height:.5px;background:rgba(255,255,255,.18);}
.cv-sub-txt{font-size:8pt;font-weight:300;color:rgba(255,255,255,.48);letter-spacing:4px;text-transform:uppercase;}
.cv-stats{display:flex;border-top:.5px solid rgba(255,255,255,.12);padding-top:15px;}
.cv-st{flex:1;padding-right:18px;border-right:.5px solid rgba(255,255,255,.1);margin-right:18px;}
.cv-st:last-child{border:none;margin:0;padding:0;}
.cv-st-n{font-family:'Cormorant Garamond',serif;font-size:22pt;font-weight:500;color:#fff;line-height:1;margin-bottom:3px;}
.cv-st-l{font-size:6.5pt;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.3);}
.cv-foot{border-top:.5px solid rgba(255,255,255,.08);padding-top:11px;display:flex;align-items:center;justify-content:space-between;}
.cv-foot-l{font-size:7pt;color:rgba(255,255,255,.22);letter-spacing:.8px;}
.cv-foot-r{display:flex;gap:7px;}
.cv-tag{font-size:6.5pt;color:rgba(255,255,255,.28);border:.5px solid rgba(255,255,255,.1);padding:3px 10px;letter-spacing:1px;}

/* CHROME */
.rh{height:9mm;flex-shrink:0;padding:0 15mm;display:flex;align-items:center;justify-content:space-between;border-bottom:.5px solid var(--line);}
.rh-l{font-size:6.5pt;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted);}
.rh-r{font-size:6.5pt;color:var(--muted);display:flex;align-items:center;gap:6px;}
.rh-dot{width:3px;height:3px;border-radius:50%;background:var(--teal);display:inline-block;}
.rf{height:8mm;flex-shrink:0;padding:0 15mm;display:flex;align-items:center;justify-content:space-between;border-top:.5px solid var(--line);margin-top:auto;}
.rf-l,.rf-r{font-size:6pt;color:var(--muted);}
.body{flex:1;overflow:hidden;display:flex;flex-direction:column;}

/* HERO */
.hero{position:relative;overflow:hidden;flex-shrink:0;}
.hero img{width:100%;height:100%;object-fit:cover;display:block;}
.hero-ov{position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,8,14,.05) 0%,rgba(5,8,14,.75) 82%);}
.hero-txt{position:absolute;inset:0;padding:0 15mm 16px;display:flex;flex-direction:column;justify-content:flex-end;}
.day-chip{display:inline-block;width:fit-content;font-size:6.5pt;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;background:var(--teal);color:#fff;padding:4px 14px;margin-bottom:8px;}
.day-chip.alt{background:var(--coral);}
.day-chip.gold{background:var(--gold);}
.hero-ttl{font-family:'Cormorant Garamond',serif;font-size:30pt;font-weight:400;color:#fff;line-height:1.02;letter-spacing:-.5px;}
.hero-sub{font-size:7.5pt;font-weight:300;color:rgba(255,255,255,.52);letter-spacing:2.5px;text-transform:uppercase;margin-top:6px;}

/* SPLIT */
.split{display:flex;flex:1;overflow:hidden;}
.sp-img{overflow:hidden;flex-shrink:0;position:relative;}
.sp-img img{width:100%;height:100%;object-fit:cover;display:block;}
.sp-txt{display:flex;flex-direction:column;justify-content:center;}
.dlabel{font-size:6pt;font-weight:800;letter-spacing:3.5px;text-transform:uppercase;color:var(--teal);margin-bottom:5px;}
.dtitle{font-family:'Cormorant Garamond',serif;font-size:25pt;font-weight:400;color:var(--ink);line-height:1.05;letter-spacing:-.3px;}
.drule{width:30px;height:1.5px;background:var(--teal);margin:11px 0;}
.dbody{font-size:8.5pt;font-weight:300;color:var(--muted);line-height:1.8;}

/* INFO TABLE */
.info-tbl{width:100%;border-collapse:collapse;margin-top:13px;}
.info-tbl tr{border-bottom:.5px solid var(--line);}
.info-tbl tr:last-child{border:none;}
.info-tbl td{padding:7px 0;font-size:8pt;vertical-align:middle;}
.info-tbl td:first-child{font-size:6pt;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);width:34%;padding-right:8px;}
.info-tbl td:last-child{font-size:9pt;font-weight:600;color:var(--ink);}

/* STATS */
.srow{display:flex;margin-top:14px;padding-top:14px;border-top:.5px solid var(--line);}
.sc{flex:1;border-right:.5px solid var(--line);padding-right:12px;margin-right:12px;}
.sc:last-child{border:none;margin:0;padding:0;}
.sc-n{font-family:'Cormorant Garamond',serif;font-size:19pt;font-weight:600;color:var(--teal);line-height:1;}
.sc-l{font-size:6pt;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);margin-top:2px;}

/* ITINERARY */
.iti{padding:10px 15mm 0;}
.iti-head{display:flex;align-items:baseline;gap:12px;margin-bottom:10px;padding-bottom:8px;border-bottom:1.5px solid var(--ink);}
.iti-head-main{font-family:'Cormorant Garamond',serif;font-size:17pt;font-weight:500;color:var(--ink);line-height:1;letter-spacing:-.2px;}
.iti-head-sub{font-size:7pt;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--muted);}

.irow{display:grid;grid-template-columns:52px 8px 1fr auto;gap:0 10px;padding:7px 0;border-bottom:.5px solid var(--line);align-items:start;page-break-inside:avoid;}
.irow:last-child{border:none;}
.itime{font-size:7pt;font-weight:700;color:var(--teal);line-height:1.25;white-space:nowrap;text-align:right;padding-top:2px;}
.idot-col{display:flex;flex-direction:column;align-items:center;padding-top:5px;}
.idot{width:7px;height:7px;border-radius:50%;border:1.5px solid var(--teal);background:var(--white);flex-shrink:0;}
.idot.gold{border-color:var(--gold);}
.idot.dark{border-color:var(--ink);background:var(--ink);}
.idot.coral{border-color:var(--coral);background:var(--coral);}
.ivline{flex:1;width:1px;background:var(--line);margin-top:4px;min-height:12px;}
.ittl{font-size:9pt;font-weight:700;color:var(--ink);margin-bottom:2px;line-height:1.25;}
.idesc{font-size:7.5pt;font-weight:300;color:var(--muted);line-height:1.6;margin-bottom:4px;}
.itags{display:flex;flex-wrap:wrap;gap:3px;}
.itag{font-size:6pt;font-weight:600;color:var(--muted);background:var(--warm);border:.5px solid var(--line);padding:2px 7px;}
.itype{font-size:6pt;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;padding:3px 9px;white-space:nowrap;border:.5px solid;align-self:start;margin-top:2px;}
.tm{color:var(--teal);border-color:var(--teal-lt);background:var(--teal-lt);}
.tf{color:#9f1239;border-color:#ffe4e6;background:#fff1f2;}
.tr{color:#166534;border-color:#dcfce7;background:#f0fdf4;}
.tp{color:#92400e;border-color:#fef3c7;background:#fffbeb;}
.tn{color:#6b21a8;border-color:#f3e8ff;background:#faf5ff;}
.to{color:var(--muted);border-color:var(--line);background:var(--warm);}

/* MOSAIC */
.mos{display:grid;gap:3px;flex-shrink:0;}
.mos.c3{grid-template-columns:2fr 1fr 1fr;}
.mos.c2{grid-template-columns:3fr 2fr;}
.mos.c4{grid-template-columns:1fr 1fr 1fr 1fr;}
.mi{overflow:hidden;position:relative;}
.mi img{width:100%;height:100%;object-fit:cover;display:block;}
.mcap{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.55));padding:12px 8px 5px;font-size:5.5pt;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,.85);}

/* FOOD CARDS */
.fgrid{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:8px;padding:0 15mm;}
.fc{border:.5px solid var(--line);padding:10px 12px;background:var(--white);page-break-inside:avoid;}
.fc-num{font-family:'Cormorant Garamond',serif;font-size:18pt;font-weight:600;color:var(--teal);line-height:1;float:left;margin-right:8px;margin-top:-2px;}
.fc-lbl{font-size:5.5pt;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:1px;}
.fc-name{font-size:8.5pt;font-weight:700;color:var(--ink);display:block;margin-bottom:4px;clear:left;}
.fc-desc{font-size:7pt;color:var(--muted);line-height:1.55;}
.fc-price{font-size:6.5pt;font-weight:700;color:var(--teal);margin-top:4px;display:block;}

/* BUDGET */
.btbl{width:100%;border-collapse:collapse;margin-top:8px;}
.btbl th{font-size:6pt;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);padding:6px 8px;border-bottom:1.5px solid var(--ink);text-align:left;}
.btbl td{padding:6px 8px;font-size:8pt;border-bottom:.5px solid var(--line);}
.btbl tr:last-child td{border-bottom:1.5px solid var(--ink);font-weight:700;}

/* CHECKLIST */
.cgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;}
.ch-hd{font-size:7.5pt;font-weight:700;color:var(--ink);padding:6px 0;border-bottom:1px solid var(--line);margin-bottom:7px;}
.cul{list-style:none;display:flex;flex-direction:column;gap:4px;}
.cul li{font-size:7pt;color:#4a4a4a;display:flex;align-items:center;gap:7px;line-height:1.3;}
.cb{width:10px;height:10px;border:.75px solid var(--line);background:white;flex-shrink:0;}

.grule{height:.5px;background:linear-gradient(90deg,var(--teal),transparent);margin:10px 0;}
.hrule{height:1.5px;background:var(--ink);margin:12px 0;}

/* FLOW CARDS */
.flow{display:grid;grid-template-columns:1fr 1fr;gap:7px;}
.fb{padding:13px 14px;}
.fb-dark{background:var(--ink2);}
.fb-teal{background:var(--teal2);}
.fb-ey{font-size:6pt;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:rgba(207,250,254,.7);margin-bottom:5px;}
.fb-ttl{font-family:'Cormorant Garamond',serif;font-size:15pt;font-weight:400;color:white;margin-bottom:9px;line-height:1.05;}
.fs{display:flex;align-items:center;gap:7px;padding:4px 0;border-bottom:.5px solid rgba(255,255,255,.07);}
.fs:last-child{border:none;}
.fs-time{font-size:7pt;font-weight:700;color:rgba(207,250,254,.7);width:36px;flex-shrink:0;text-align:right;}
.fs-div{width:.5px;height:11px;background:rgba(255,255,255,.15);flex-shrink:0;}
.fs-txt{flex:1;font-size:7.5pt;color:rgba(255,255,255,.72);line-height:1.3;}
</style>
</head>
<body>

<!-- ══ COVER ══ -->
<div class="page">
  <div class="cv-bg" style="background-image:url('${I.pqHonDen}');"></div>
  <div class="cv-grad"></div>
  <div class="cv-z">
    <div class="cv-top">
      <div class="cv-brand">
        <span>Club Trip</span><div class="cv-sep"></div>
        <span class="cv-brand-sub">Đảo Phú Quý · Bình Thuận</span>
      </div>
      <div class="cv-badge">Tháng 5 / 2026</div>
    </div>
    <div class="cv-mid">
      <div class="cv-ey"><div class="cv-ey-rule"></div><span class="cv-ey-txt">Chụp hình · Lặn san hô · Food tour hải sản</span></div>
      <div class="cv-h1">Phú<br/><em>Quý</em></div>
      <div class="cv-sub"><div class="cv-sub-rule"></div><span class="cv-sub-txt">3 Ngày · 2 Đêm · ~10 Thành viên · Budget &lt; 2.5tr</span></div>
      <div class="cv-stats">
        <div class="cv-st"><div class="cv-st-n">~10</div><div class="cv-st-l">Thành viên CLB</div></div>
        <div class="cv-st"><div class="cv-st-n">120km</div><div class="cv-st-l">Từ Phan Thiết</div></div>
        <div class="cv-st"><div class="cv-st-n">3N2Đ</div><div class="cv-st-l">Hành trình</div></div>
        <div class="cv-st"><div class="cv-st-n">8–10/5</div><div class="cv-st-l">Ngày đề xuất</div></div>
      </div>
    </div>
    <div class="cv-foot">
      <span class="cv-foot-l">HCM → Phan Thiết (limousine) → Tàu cao tốc Superdong → Đảo Phú Quý</span>
      <div class="cv-foot-r">
        <span class="cv-tag">Photography</span><span class="cv-tag">Snorkeling</span><span class="cv-tag">Food Tour</span>
      </div>
    </div>
  </div>
</div>


<!-- ══ PAGE 2 · OVERVIEW ══ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Club Trip Phú Quý 2026</div>
    <div class="rh-r">Tổng quan <span class="rh-dot"></span> 02</div>
  </div>
  <div class="body">
    <div class="split">
      <div class="sp-img" style="width:45%;">
        <img src="${I.pqCoast}" alt="Phú Quý" style="object-position:center 50%;"/>
      </div>
      <div class="sp-txt" style="padding:13mm 15mm 13mm 12mm;">
        <div class="dlabel">Trip Overview</div>
        <div class="dtitle">Đảo Phú Quý<br/>Viên ngọc Bình Thuận</div>
        <div class="drule"></div>
        <div class="dbody">Phú Quý — hòn đảo 16km² giữa biển Đông, cách Phan Thiết 120km. Nước trong xanh ngọc bích, vách đá volcanic đen hùng vĩ, san hô nguyên sơ và hải sản tươi sống giá rẻ bất ngờ. Năm 2026, Phú Quý được báo Thái Khaosod bình chọn top 10 điểm đến Đông Nam Á. Hành trình lý tưởng cho CLB: chụp hình, lặn biển, food tour và ngắm hoàng hôn trên vách đá.</div>
        <table class="info-tbl">
          <tr><td>Thành viên</td><td>~10 người (CLB)</td></tr>
          <tr><td>Ngày đi</td><td>Thứ 6–CN, 8–10 tháng 5/2026</td></tr>
          <tr><td>Thời tiết</td><td>28–32°C · Nắng đẹp · Biển lặng · Mùa khô</td></tr>
          <tr><td>Di chuyển</td><td>HCM → Phan Thiết (limousine 4h) → Tàu 2.5h</td></tr>
          <tr><td>Trên đảo</td><td>5 xe máy (đi đôi), thuê ~100–150k/ngày</td></tr>
          <tr><td>Phòng</td><td>2–3 phòng homestay · Tách nam/nữ hoặc tự do</td></tr>
        </table>
        <div class="srow">
          <div class="sc"><div class="sc-n">Top 10</div><div class="sc-l">ĐNA 2026 · Khaosod</div></div>
          <div class="sc"><div class="sc-n">30M+</div><div class="sc-l">#PhuQuy TikTok</div></div>
          <div class="sc"><div class="sc-n">4.7★</div><div class="sc-l">Google Maps</div></div>
          <div class="sc"><div class="sc-n">&lt;2.5tr</div><div class="sc-l">Budget/người</div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">Đảo Phú Quý · Bình Thuận</div><div class="rf-r">Club Trip · Tháng 5/2026</div></div>
</div>


<!-- ══ PAGE 3 · DAY 1 ══ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Club Trip Phú Quý 2026</div>
    <div class="rh-r">Day 1 · Thứ Sáu 8/5 <span class="rh-dot"></span> 03</div>
  </div>
  <div class="body">
    <div class="hero" style="height:55mm;">
      <img src="${I.pqOdau4}" alt="Bãi biển Phú Quý" style="object-position:center 60%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip">Day 01 · Thứ Sáu 8/5</div>
        <div class="hero-ttl">Lên đảo &<br/>Sunset vách đá</div>
        <div class="hero-sub">Tàu cao tốc · Bãi Nhỏ · Gành Hang · Sunset · Sea La Vie</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Lịch trình chi tiết</div><div class="iti-head-sub">Day 01 · Lên đảo & Khám phá</div></div>

      <div class="irow">
        <div class="itime">05:30<br/>06:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Dậy sớm — Ra cảng Phan Thiết</div>
          <div class="idesc">Đã đến Phan Thiết từ đêm trước (limousine HCM 21:00 → 01:00). Ăn sáng nhanh gần cảng, xếp hàng lên tàu.</div>
        </div>
        <div class="itype tm">Cảng</div>
      </div>

      <div class="irow">
        <div class="itime">06:00<br/>08:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Tàu Superdong / Hưng Phát → Đảo Phú Quý</div>
          <div class="idesc">~2.5 giờ trên biển. Ngồi tầng trên chụp hình biển khơi, sóng trắng. Nhớ uống thuốc say tàu trước 30 phút. Vé Hưng Phát: 250k/lượt (tiết kiệm nhất).</div>
          <div class="itags"><span class="itag">Superdong: 350k/lượt</span><span class="itag">Hưng Phát: 250k/lượt</span><span class="itag">Book trước 2 tuần</span></div>
        </div>
        <div class="itype tm">Di chuyển</div>
      </div>

      <div class="irow">
        <div class="itime">08:30<br/>09:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Đến cảng Phú Quý — Nhận xe, check-in</div>
          <div class="idesc">Nhận 5 xe máy (đã book trước). Check-in homestay, gửi hành lý. Thay đồ biển, bôi kem chống nắng.</div>
        </div>
        <div class="itype tr">Check-in</div>
      </div>

      <div class="irow">
        <div class="itime">09:30<br/>10:30</div>
        <div class="idot-col"><div class="idot gold"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Food tour #1 — Bún cá sứa Phú Quý</div>
          <div class="idesc">Món chỉ có trên đảo, Sài Gòn không bán. Nước dùng cá tươi trong ngày, sứa giòn sần sật, rau sống đảo. Quán nhỏ trong xóm — hỏi dân local chỉ.</div>
          <div class="itags"><span class="itag">Bún cá sứa</span><span class="itag">Chỉ có ở Phú Quý</span><span class="itag">~30k/tô</span></div>
        </div>
        <div class="itype tf">Food Tour</div>
      </div>

      <div class="irow">
        <div class="itime">10:30<br/>12:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Bãi Nhỏ — Bãi biển đẹp nhất đảo</div>
          <div class="idesc">Nước xanh ngọc bích, cát trắng mịn, ít người. Tắm biển + chụp hình nhóm, candid, wide-angle. Background đá đen + nước xanh = siêu lên hình.</div>
          <div class="itags"><span class="itag">Nước trong xanh ngọc</span><span class="itag">Ít khách du lịch</span><span class="itag">Chụp hình #1</span></div>
        </div>
        <div class="itype tp">Chụp hình</div>
      </div>

      <div class="irow">
        <div class="itime">12:00<br/>14:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Nghỉ trưa tại homestay — Tránh nắng</div>
          <div class="idesc">Nắng gắt 11h–14h. Về phòng nghỉ ngơi, recharge pin cho chiều dài sunset + food tour tối.</div>
        </div>
        <div class="itype to">Nghỉ ngơi</div>
      </div>

      <div class="irow">
        <div class="itime">14:30<br/>15:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Ngọn Hải Đăng Phú Quý — Panorama 360°</div>
          <div class="idesc">Hải đăng cao 18m trên đỉnh núi Cam, 100m trên mực nước biển. Leo bậc thang lên đỉnh → view toàn bộ đảo + biển 360°. Portrait + ảnh nhóm tuyệt đẹp.</div>
          <div class="itags"><span class="itag">Cao 100m so với mực biển</span><span class="itag">View 360° toàn đảo</span><span class="itag">Chụp hình #2</span></div>
        </div>
        <div class="itype tp">Chụp hình</div>
      </div>

      <div class="irow">
        <div class="itime">16:00<br/>18:00</div>
        <div class="idot-col"><div class="idot coral"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Gành Hang — Vách đá volcanic & SUNSET</div>
          <div class="idesc">Highlight #1: vách đá đen volcanic sừng sững, hang đá huyền bí, Hồ Vô Cực phản chiếu trời. Đến sớm 16h khám phá, chọn vị trí — 17h hoàng hôn chiếu qua vách đá: silhouette trên đá đen, ánh cam-hồng rực rỡ. 2–3 người tạo dáng, còn lại chụp từ xa.</div>
          <div class="itags"><span class="itag">Hồ Vô Cực</span><span class="itag">Khe Sung Sướng</span><span class="itag">Sunset silhouette</span><span class="itag">Chụp hình #3</span></div>
        </div>
        <div class="itype" style="color:var(--coral);border-color:#ffe4e6;background:#fff1f2;">Sunset</div>
      </div>

      <div class="irow">
        <div class="itime">18:30<br/>20:30</div>
        <div class="idot-col"><div class="idot gold"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Food tour #2 — Sea La Vie (Trending 2026)</div>
          <div class="idesc">Nhà hàng hot nhất Phú Quý 2026 (667K TikTok likes). View biển, kiến trúc đẹp. Hàu nướng phô mai, cá nướng lá chuối, cocktail biển. 90–200k/món. Không có ở Sài Gòn.</div>
          <div class="itags"><span class="itag">Sea La Vie</span><span class="itag">667K TikTok likes</span><span class="itag">View biển + sunset</span></div>
        </div>
        <div class="itype tf">Food Tour</div>
      </div>

      <div class="irow">
        <div class="itime">20:30<br/>22:00</div>
        <div class="idot-col"><div class="idot"></div></div>
        <div>
          <div class="ittl">Ngắm sao đêm trên biển</div>
          <div class="idesc">Đảo ít đèn → bầu trời sao rực rỡ, có thể thấy Milky Way nếu trời trong. Loa bluetooth, ngồi bãi cát, chill.</div>
        </div>
        <div class="itype tn">Đêm</div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">Đảo Phú Quý · Bình Thuận</div><div class="rf-r">Club Trip · Tháng 5/2026</div></div>
</div>


<!-- ══ PAGE 4 · DAY 2 MORNING ══ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Club Trip Phú Quý 2026</div>
    <div class="rh-r">Day 2 · Thứ Bảy 9/5 <span class="rh-dot"></span> 04</div>
  </div>
  <div class="body">
    <div class="hero" style="height:52mm;">
      <img src="${I.pqOdau3}" alt="Bình minh Phú Quý" style="object-position:center 40%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip alt">Day 02 · Thứ Bảy 9/5</div>
        <div class="hero-ttl">Sunrise · Lặn biển<br/>& Food tour</div>
        <div class="hero-sub">Bãi Doi · Hòn Tranh snorkeling · Bè cá · Ông Già · Say Đảo</div>
      </div>
    </div>

    <div class="mos c4" style="height:28mm;">
      <div class="mi"><img src="${I.pqHonTranh}" alt="Hòn Tranh"/><div class="mcap">Hòn Tranh · Lặn san hô</div></div>
      <div class="mi"><img src="${I.pqCrab}" alt="Cua Huỳnh Đế"/><div class="mcap">Cua Huỳnh Đế Phú Quý</div></div>
      <div class="mi"><img src="${I.pqFishPond}" alt="Hồ cá Làng Dương"/><div class="mcap">Hồ cá Làng Dương</div></div>
      <div class="mi"><img src="${I.pqWindmill}" alt="Cánh đồng quạt gió"/><div class="mcap">Cánh đồng quạt gió</div></div>
    </div>

    <div class="iti" style="padding-top:7px;">
      <div class="iti-head"><div class="iti-head-main">Lịch trình chi tiết</div><div class="iti-head-sub">Day 02 · Sáng sớm đến trưa</div></div>

      <div class="irow">
        <div class="itime">04:45<br/>06:15</div>
        <div class="idot-col"><div class="idot coral"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Sunrise tại Bãi Doi — San hô lộ thiên</div>
          <div class="idesc">Highlight #2: chạy xe ra Bãi Doi lúc thủy triều rút. Mặt trời nhú lên từ biển, san hô đủ sắc lộ ra mặt nước tạo foreground cực chất. Wide-angle + chân trần trên san hô (mang dép).</div>
          <div class="itags"><span class="itag">Thủy triều rút</span><span class="itag">San hô lộ thiên</span><span class="itag">Chụp hình #4</span></div>
        </div>
        <div class="itype" style="color:var(--coral);border-color:#ffe4e6;background:#fff1f2;">Sunrise</div>
      </div>

      <div class="irow">
        <div class="itime">06:15<br/>07:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Cà phê sáng local + Linh Sơn Tự</div>
          <div class="idesc">Cà phê đá ven đường kiểu đảo. Sau đó ghé Linh Sơn Tự — chùa trên đồi cao nhìn ra biển 360°. Tượng Phật nhìn ra đại dương, kiến trúc cổ.</div>
          <div class="itags"><span class="itag">View đỉnh đảo</span><span class="itag">Chụp hình #5</span></div>
        </div>
        <div class="itype tp">Chụp hình</div>
      </div>

      <div class="irow">
        <div class="itime">08:00<br/>08:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Về homestay ăn sáng, chuẩn bị đồ lặn</div>
          <div class="idesc">Mặc đồ bơi sẵn, kem chống nắng chống nước, mang theo khăn.</div>
        </div>
        <div class="itype to">Chuẩn bị</div>
      </div>

      <div class="irow">
        <div class="itime">09:00<br/>11:30</div>
        <div class="idot-col"><div class="idot coral"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">LẶN NGẮM SAN HÔ — Hòn Tranh</div>
          <div class="idesc">Highlight #3: thuê ghe ~15 phút ra đảo nhỏ Hòn Tranh. Snorkeling nước trong thấy đáy 5–6m, san hô nhiều màu rực rỡ, cá đàn bơi quanh. ~180k/người bao ghe + kính lặn + áo phao. Chụp hình dưới nước bằng GoPro.</div>
          <div class="itags"><span class="itag">Hòn Tranh</span><span class="itag">Nước trong 5–6m</span><span class="itag">~180k/người</span><span class="itag">Chụp hình #6</span></div>
        </div>
        <div class="itype" style="color:var(--teal);border-color:var(--teal-lt);background:var(--teal-lt);">Snorkeling</div>
      </div>

      <div class="irow">
        <div class="itime">12:00<br/>13:30</div>
        <div class="idot-col"><div class="idot gold"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Food tour #3 — Bè cá Anh Sáng (Ăn trên bè giữa biển)</div>
          <div class="idesc">Trải nghiệm chỉ có ở đảo: ngồi trên bè cá giữa biển, tự chọn tôm hùm, cua mặt trăng, ốc vú vàng trực tiếp từ lồng dưới nước. Sài Gòn không có. 150–350k/món.</div>
          <div class="itags"><span class="itag">Bè cá giữa biển</span><span class="itag">Tôm hùm · Cua mặt trăng</span><span class="itag">Chỉ có ở Phú Quý</span></div>
        </div>
        <div class="itype tf">Food Tour</div>
      </div>

      <div class="irow">
        <div class="itime">13:30<br/>15:00</div>
        <div class="idot-col"><div class="idot"></div></div>
        <div>
          <div class="ittl">Nghỉ trưa tại homestay</div>
          <div class="idesc">Phơi nắng cả sáng, recharge cho buổi chiều food tour + sunset lần 2.</div>
        </div>
        <div class="itype to">Nghỉ ngơi</div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">Đảo Phú Quý · Bình Thuận</div><div class="rf-r">Club Trip · Tháng 5/2026</div></div>
</div>


<!-- ══ PAGE 5 · DAY 2 AFTERNOON & NIGHT ══ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Club Trip Phú Quý 2026</div>
    <div class="rh-r">Day 2 (tiếp theo) <span class="rh-dot"></span> 05</div>
  </div>
  <div class="body">
    <div class="mos c3" style="height:38mm;">
      <div class="mi"><img src="${I.pqBeach24}" alt="Triều Dương Bay"/><div class="mcap">Triều Dương Bay</div></div>
      <div class="mi"><img src="${I.sunset}" alt="Hoàng hôn biển"/><div class="mcap">Hoàng hôn Phú Quý</div></div>
      <div class="mi"><img src="${I.bbq}" alt="BBQ hải sản"/><div class="mcap">BBQ hải sản đêm</div></div>
    </div>
    <div class="iti" style="padding-top:8px;">
      <div class="iti-head"><div class="iti-head-main">Lịch trình chi tiết</div><div class="iti-head-sub">Day 02 · Buổi chiều & Tối</div></div>

      <div class="irow">
        <div class="itime">15:00<br/>16:00</div>
        <div class="idot-col"><div class="idot gold"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Food tour #4 — Quán Ông Già (Cá nóc xào sả ớt)</div>
          <div class="idesc">Signature: cá nóc xào sả ớt — chỉ dân đảo dám ăn, Sài Gòn cấm bán. Mực nang nướng chao, ốc bàn tay hấp. Bình dân, đậm chất local. 80–200k/món.</div>
          <div class="itags"><span class="itag">Cá nóc · Sài Gòn không bán</span><span class="itag">Mực nang nướng chao</span><span class="itag">Bình dân local</span></div>
        </div>
        <div class="itype tf">Food Tour</div>
      </div>

      <div class="irow">
        <div class="itime">16:30<br/>18:30</div>
        <div class="idot-col"><div class="idot coral"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Triều Dương Bay + Sunset #2 trên bãi dài</div>
          <div class="idesc">Bãi biển dài nhất đảo: sóng nhẹ, hàng dừa, cát mịn. Chụp hình nhóm, silhouette đi bộ ven biển lúc hoàng hôn. Khác Gành Hang: bãi mở, sóng, bình yên.</div>
          <div class="itags"><span class="itag">Bãi dài nhất đảo</span><span class="itag">Dừa + sóng + sunset</span><span class="itag">Chụp hình #7</span></div>
        </div>
        <div class="itype" style="color:var(--coral);border-color:#ffe4e6;background:#fff1f2;">Sunset</div>
      </div>

      <div class="irow">
        <div class="itime">19:00<br/>21:00</div>
        <div class="idot-col"><div class="idot gold"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Food tour #5 — Nhà hàng Say Đảo (BBQ biển đêm)</div>
          <div class="idesc">Trending TikTok 2025–2026. Hải sản nướng cạnh bãi biển: sò điệp mỡ hành, mực nướng sa tế, ghẹ hấp sả. View biển đêm. Bữa tiệc chia tay đảo. Không có ở Sài Gòn.</div>
          <div class="itags"><span class="itag">Say Đảo · Trending TikTok</span><span class="itag">BBQ hải sản ven biển</span><span class="itag">Bữa tối cuối</span></div>
        </div>
        <div class="itype tf">Food Tour</div>
      </div>

      <div class="irow">
        <div class="itime">21:00</div>
        <div class="idot-col"><div class="idot"></div></div>
        <div>
          <div class="ittl">Chợ đêm + Flash photography biển đêm</div>
          <div class="idesc">Mua quà: mắm Phú Quý, khô cá, mực một nắng. Tips ảnh: flash + sóng biển = ảnh nghệ thuật.</div>
        </div>
        <div class="itype tn">Đêm</div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">Đảo Phú Quý · Bình Thuận</div><div class="rf-r">Club Trip · Tháng 5/2026</div></div>
</div>


<!-- ══ PAGE 5 · DAY 3 ══ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Club Trip Phú Quý 2026</div>
    <div class="rh-r">Day 3 · Chủ Nhật 10/5 <span class="rh-dot"></span> 06</div>
  </div>
  <div class="body">
    <div class="hero" style="height:52mm;">
      <img src="${I.pqBeach8}" alt="Biển Phú Quý" style="object-position:center 50%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip gold">Day 03 · Chủ Nhật 10/5</div>
        <div class="hero-ttl">Sáng cuối &<br/>Về đất liền</div>
        <div class="hero-sub">Bình minh · Cháo nhum Cô Bảy · Tàu về Phan Thiết</div>
      </div>
    </div>

    <div class="mos c3" style="height:32mm;">
      <div class="mi"><img src="${I.pqBeach21}" alt="Biển Phú Quý"/><div class="mcap">Biển xanh Phú Quý</div></div>
      <div class="mi"><img src="${I.pqOdau8}" alt="Đảo Phú Quý"/><div class="mcap">Bãi đá hoang sơ</div></div>
      <div class="mi"><img src="${I.pqOverview}" alt="Tổng quan"/><div class="mcap">Đảo Phú Quý từ trên cao</div></div>
    </div>

    <div class="iti" style="padding-top:7px;">
      <div class="iti-head"><div class="iti-head-main">Lịch trình chi tiết</div><div class="iti-head-sub">Day 03 · Sáng cuối & Về</div></div>

      <div class="irow">
        <div class="itime">05:30<br/>06:30</div>
        <div class="idot-col"><div class="idot coral"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Bình minh cuối cùng trên đảo</div>
          <div class="idesc">Ra biển gần homestay, ngắm mặt trời lên lần cuối. Chụp hình tĩnh, cảm nhận sự yên bình của đảo trước khi rời đi. Khoảnh khắc đáng nhớ nhất.</div>
          <div class="itags"><span class="itag">Chụp hình #8 · Lần cuối</span></div>
        </div>
        <div class="itype" style="color:var(--coral);border-color:#ffe4e6;background:#fff1f2;">Sunrise</div>
      </div>

      <div class="irow">
        <div class="itime">06:30<br/>07:30</div>
        <div class="idot-col"><div class="idot gold"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Food tour #6 — Quán Cô Bảy (Cháo nhum + Bánh xèo)</div>
          <div class="idesc">Bữa sáng cuối trên đảo. Cháo nhum (nhím biển) — bổ dưỡng, vị biển đậm đà, chỉ có ở Phú Quý. Bánh xèo đảo giòn tan. Quán bình dân nhất, 30–80k/món.</div>
          <div class="itags"><span class="itag">Cháo nhum · Sài Gòn không có</span><span class="itag">Bánh xèo đảo</span><span class="itag">30–80k/món</span></div>
        </div>
        <div class="itype tf">Food Tour</div>
      </div>

      <div class="irow">
        <div class="itime">07:30<br/>08:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Trả phòng, trả xe máy, ra cảng</div>
          <div class="idesc">Gom đồ, check-out. Trả xe tại cảng hoặc homestay. Mang theo quà đã mua đêm qua.</div>
        </div>
        <div class="itype to">Check-out</div>
      </div>

      <div class="irow">
        <div class="itime">08:00<br/>10:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Tàu về Phan Thiết</div>
          <div class="idesc">Tàu cao tốc 2.5h. Tranh thủ ngủ bù, xem lại ảnh đã chụp.</div>
        </div>
        <div class="itype tm">Di chuyển</div>
      </div>

      <div class="irow">
        <div class="itime">11:00<br/>12:00</div>
        <div class="idot-col"><div class="idot gold"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Ăn trưa Phan Thiết — Bánh canh chả cá</div>
          <div class="idesc">Đặc sản Phan Thiết trước khi lên xe về. Bánh canh chả cá thơm ngọt, bún riêu cua biển.</div>
        </div>
        <div class="itype tf">Ăn trưa</div>
      </div>

      <div class="irow">
        <div class="itime">12:00<br/>16:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Limousine Phan Thiết → HCM</div>
          <div class="idesc">~4 giờ. Ngủ trên xe, về tới HCM khoảng 16:00. Mang theo kỷ niệm, ảnh đẹp, và hương vị biển.</div>
          <div class="itags"><span class="itag">Phan Thiết → HCM</span><span class="itag">~4 giờ</span><span class="itag">Limousine giường nằm</span></div>
        </div>
        <div class="itype" style="color:var(--ink);border-color:var(--line);background:var(--warm);">Về nhà</div>
      </div>
    </div>

    <div style="padding:10px 15mm 0;">
      <div class="grule"></div>
      <div class="dlabel">Tổng kết Food Tour — 6 quán chỉ có ở Phú Quý</div>
      <div class="fgrid" style="padding:0;margin-top:7px;">
        <div class="fc"><span class="fc-num">1</span><span class="fc-lbl">Sáng Day 1</span><span class="fc-name">Bún cá sứa · Quán local</span><div class="fc-desc">Sứa giòn + cá tươi, chỉ Phú Quý</div><span class="fc-price">~30k/tô</span></div>
        <div class="fc"><span class="fc-num">2</span><span class="fc-lbl">Tối Day 1</span><span class="fc-name">Sea La Vie · View biển</span><div class="fc-desc">Trending 667K likes, hàu phô mai</div><span class="fc-price">90–200k/món</span></div>
        <div class="fc"><span class="fc-num">3</span><span class="fc-lbl">Trưa Day 2</span><span class="fc-name">Bè cá Anh Sáng · Trên bè</span><div class="fc-desc">Ăn giữa biển, tự chọn từ lồng</div><span class="fc-price">150–350k/món</span></div>
        <div class="fc"><span class="fc-num">4</span><span class="fc-lbl">Chiều Day 2</span><span class="fc-name">Quán Ông Già · Cá nóc</span><div class="fc-desc">Cá nóc xào sả ớt, SG cấm bán</div><span class="fc-price">80–200k/món</span></div>
        <div class="fc"><span class="fc-num">5</span><span class="fc-lbl">Tối Day 2</span><span class="fc-name">Say Đảo · BBQ biển</span><div class="fc-desc">Trending TikTok, nướng ven biển</div><span class="fc-price">100–250k/món</span></div>
        <div class="fc"><span class="fc-num">6</span><span class="fc-lbl">Sáng Day 3</span><span class="fc-name">Quán Cô Bảy · Cháo nhum</span><div class="fc-desc">Cháo nhím biển, bánh xèo đảo</div><span class="fc-price">30–80k/món</span></div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">Đảo Phú Quý · Bình Thuận</div><div class="rf-r">Club Trip · Tháng 5/2026</div></div>
</div>


<!-- ══ PAGE 6 · BUDGET + CHECKLIST ══ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Club Trip Phú Quý 2026</div>
    <div class="rh-r">Budget & Chuẩn bị <span class="rh-dot"></span> 07</div>
  </div>
  <div class="body" style="padding:9mm 15mm 0;overflow:hidden;">

    <div class="mos c4" style="height:30mm;margin:0 -15mm;">
      <div class="mi"><img src="${I.coral}" alt="Lặn san hô"/><div class="mcap">Lặn san hô</div></div>
      <div class="mi"><img src="${I.coral2}" alt="San hô Hòn Tranh"/><div class="mcap">San hô nguyên sơ</div></div>
      <div class="mi"><img src="${I.seafood}" alt="Hải sản"/><div class="mcap">Hải sản tươi sống</div></div>
      <div class="mi"><img src="${I.stars}" alt="Đêm sao"/><div class="mcap">Đêm sao trên đảo</div></div>
    </div>

    <div class="grule" style="margin:10px 0 8px;"></div>

    <div class="dlabel">Budget chi tiết — Dưới 2.5 triệu/người</div>
    <table class="btbl">
      <tr><th>Hạng mục</th><th>Đơn giá</th><th>Chia 10 người</th></tr>
      <tr><td>Limousine HCM ↔ Phan Thiết (khứ hồi)</td><td>~250k/lượt</td><td><strong>~450k</strong></td></tr>
      <tr><td>Tàu Hưng Phát ↔ Phú Quý (khứ hồi)</td><td>250k/lượt</td><td><strong>~500k</strong></td></tr>
      <tr><td>Homestay 2 đêm (3 phòng chia 10)</td><td>300–400k/phòng/đêm</td><td><strong>~250k</strong></td></tr>
      <tr><td>Xe máy 2 ngày (5 chiếc)</td><td>100–150k/xe/ngày</td><td><strong>~130k</strong></td></tr>
      <tr><td>Ăn uống 3 ngày (6 bữa chính + sáng)</td><td></td><td><strong>~800k</strong></td></tr>
      <tr><td>Lặn san hô Hòn Tranh</td><td>~180k/người</td><td><strong>~180k</strong></td></tr>
      <tr><td style="font-weight:700;">TỔNG</td><td></td><td style="font-weight:700;color:var(--teal);font-size:11pt;">~2.31 triệu</td></tr>
    </table>

    <div class="hrule"></div>

    <div class="dlabel">Ngày đẹp tháng 5/2026</div>
    <div class="flow" style="margin-top:7px;">
      <div class="fb fb-teal">
        <div class="fb-ey">Recommended</div>
        <div class="fb-ttl">T6–CN, 8–10/5</div>
        <div class="fs"><div class="fs-time">Lý do</div><div class="fs-div"></div><div class="fs-txt">Giữa tháng · giá phòng rẻ · biển lặng · tránh lễ 30/4</div></div>
        <div class="fs"><div class="fs-time">Thời tiết</div><div class="fs-div"></div><div class="fs-txt">28–32°C · Nắng · Gió nhẹ · Mùa khô lý tưởng</div></div>
        <div class="fs"><div class="fs-time">Tàu</div><div class="fs-div"></div><div class="fs-txt">Superdong / Hưng Phát · 1–2 chuyến/ngày · 06:00</div></div>
      </div>
      <div class="fb fb-dark">
        <div class="fb-ey">Backup</div>
        <div class="fb-ttl">T6–CN, 15–17/5</div>
        <div class="fs"><div class="fs-time">Lý do</div><div class="fs-div"></div><div class="fs-txt">Vẫn mùa khô · biển trong xanh · ít đông</div></div>
        <div class="fs"><div class="fs-time">Tránh</div><div class="fs-div"></div><div class="fs-txt">1–4/5 (lễ, giá x2) · Cuối tháng (chuyển mùa mưa)</div></div>
        <div class="fs"><div class="fs-time">Hotline</div><div class="fs-div"></div><div class="fs-txt">Superdong: 1900 599 997 · Book trước 2 tuần</div></div>
      </div>
    </div>

    <div class="hrule"></div>

    <div class="dlabel">Checklist chuẩn bị</div>
    <div class="cgrid" style="margin-top:7px;">
      <div>
        <div class="ch-hd">Đồ cá nhân</div>
        <ul class="cul">
          <li><span class="cb"></span>Đồ bơi (2 bộ) · Khăn tắm</li>
          <li><span class="cb"></span>Kem chống nắng SPF 50+</li>
          <li><span class="cb"></span>Kính mát · Nón</li>
          <li><span class="cb"></span>Dép xỏ ngón · Giày leo nhẹ</li>
          <li><span class="cb"></span>Thuốc say tàu (quan trọng!)</li>
          <li><span class="cb"></span>Sạc + pin dự phòng</li>
          <li><span class="cb"></span>CCCD / Giấy tờ tùy thân</li>
        </ul>
      </div>
      <div>
        <div class="ch-hd">Chụp hình & Lặn</div>
        <ul class="cul">
          <li><span class="cb"></span>GoPro / Camera chống nước</li>
          <li><span class="cb"></span>Tripod mini cho nhóm</li>
          <li><span class="cb"></span>Thẻ nhớ dự phòng</li>
          <li><span class="cb"></span>Bao chống nước cho điện thoại</li>
          <li><span class="cb"></span>Drone (nếu có)</li>
          <li><span class="cb"></span>Áo sáng màu chụp biển</li>
          <li><span class="cb"></span>Loa bluetooth</li>
        </ul>
      </div>
      <div>
        <div class="ch-hd">Logistics</div>
        <ul class="cul">
          <li><span class="cb"></span>Book vé tàu khứ hồi trước 2 tuần</li>
          <li><span class="cb"></span>Book limousine HCM ↔ PT</li>
          <li><span class="cb"></span>Book homestay + xe máy</li>
          <li><span class="cb"></span>Lập quỹ chung · Chia chi phí</li>
          <li><span class="cb"></span>Group Zalo · Gửi lịch trình</li>
          <li><span class="cb"></span>Check thời tiết 3 ngày trước</li>
          <li><span class="cb"></span>Mua thuốc say tàu cho cả nhóm</li>
        </ul>
      </div>
    </div>

  </div>
  <div class="rf"><div class="rf-l">Đảo Phú Quý · Bình Thuận</div><div class="rf-r">Club Trip · Tháng 5/2026</div></div>
</div>

</body>
</html>`;

fs.writeFileSync('/Users/nhantv5/phuquy-trip-2026.html', html);
console.log('Done: ' + Math.round(html.length/1024) + 'KB');
