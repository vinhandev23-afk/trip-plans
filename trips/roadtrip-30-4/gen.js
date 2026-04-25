const fs = require('fs');
const D = __dirname + '/';
const load = (f) => {
  const p = D + f;
  if (!fs.existsSync(p) || fs.statSync(p).size < 100) return '';
  return 'data:image/jpeg;base64,' + fs.readFileSync(p).toString('base64');
};

const loadW = (f) => {
  const p = D + f;
  if (!fs.existsSync(p) || fs.statSync(p).size < 100) return '';
  return 'data:image/webp;base64,' + fs.readFileSync(p).toString('base64');
};

const loadAny = (f) => {
  const p = D + f;
  if (!fs.existsSync(p) || fs.statSync(p).size < 100) return '';
  const ext = f.toLowerCase().split('.').pop();
  const mime = ext === 'webp' ? 'image/webp' : ext === 'png' ? 'image/png' : 'image/jpeg';
  return `data:${mime};base64,` + fs.readFileSync(p).toString('base64');
};

const I = {
  coast:    load('coastal-road.jpg'),
  mountain: load('mountain-road.jpg'),
  qnbeach:  load('qn-beach.jpg'),
  dalat:    load('dalat-hills.jpg'),
  nhatrang: load('nhatrang-bay.jpg'),
  seafood:  load('seafood2.jpg'),
  sunset:   load('sunset-coast.jpg'),
  moto:     load('motorcycle.jpg'),
  cafe:     load('cafe-view.jpg'),
  aerial:   load('ocean-aerial.jpg'),
  forest:   load('forest-road.jpg'),
  sunrise:  load('sunrise-sea.jpg'),
  bbq:      load('bbq-night.jpg'),
  cliff:    load('cliff-ocean.jpg'),
  tea:      load('tea-hills.jpg'),
  lake:     load('lake-mist.jpg'),
  rider:    load('moto-rider.jpg'),
  // Real images — fixed paths with images/ prefix
  rQuyNhon:   loadW('images/Quy-Nhon-Vnexpress-4396-155296-2039-6570-1617941560.webp'),
  rQuyNhon2:  loadW('images/dulichQuyNhon-1648878861-3106-1648880222.webp'),
  rNhaTrang:  load('images/280762356-359581132902753-2117815975823559575-n-1225.jpg'),
  rNhaTrang2: load('images/nhattrang3-16721128389061596602579.jpg'),
  rNhaTrang3: load('images/WWbp3Z5y-vinpearl-harbour-nha-trang.jpg'),
  rKyco:      load('images/z6223362576777_15a21ef00a73b25851a3972d86795475_20250113104122.jpg'),
  rBinhDinh:  loadW('images/binh-dinhngam-cung-duong-bien-nghin-ty-nhu-duong-bo-tay-nuoc-mydoan-cong9jpg-edited-1746614485729.webp'),
  rDJI:       load('images/DJI_0071.jpg'),
  rNinhThuan: load('images/duong-ven-bien-ninh-thuan-5.jpg'),
  rBinhThuan: loadW('images/tinh-binh-thuan.webp'),
  rBinhThuan2:load('images/anh-dep-binh-thuan-33.jpg'),
  rAdgahjd:   load('images/adgahjd-1755152740753.jpg'),
  rTaDung:    load('images/1_ve_dep_hoang_so_cua_khu_du_lich_ta_dung_cdc0407440.jpg'),
  rDaLat:     load('images/0829-0623_da-lat.jpg'),
  rDaLat2:    loadW('images/canh-dep-da-lat-1_1688379739.webp'),
  // NEW spots — Cổ Thạch
  rCoThach1:  loadAny('images/co-thach-1.jpg'),
  rCoThach2:  loadAny('images/co-thach-2.jpg'),
  rCoThach3:  loadAny('images/co-thach-3.jpg'),
  rCoThachH:  loadAny('images/co-thach-hero.jpg'),
  // NEW spots — Biển Bình Tiên
  rBinhTien1: loadAny('images/binh-tien-1.jpg'),
  rBinhTien2: loadAny('images/binh-tien-2.jpg'),
  rBinhTien3: loadAny('images/binh-tien-3.jpg'),
  rBinhTien4: loadAny('images/binh-tien-4.jpg'),
  // NEW spots — Cánh đồng muối
  rMuoi1:     loadAny('images/muoi-1.jpg'),
  rMuoi2:     loadAny('images/muoi-2.jpg'),
  rMuoi3:     loadAny('images/muoi-3.jpg'),
  // NEW spots — Sailing Club + Bars Nha Trang
  rSailing1:  loadAny('images/sailing-1.png'),
  rSailing2:  loadAny('images/sailing-2.jpg'),
  rSailing3:  loadAny('images/sailing-3.jpg'),
  // NEW spots — Surf Bar Quy Nhơn
  rSurfbar1:  loadAny('images/surfbar-1.jpg'),
  rSurfbar2:  loadAny('images/surfbar-2.jpg'),
  rSurfbar3:  loadAny('images/surfbar-3.jpg'),
  // NEW spots — Bán đảo Hải Giang
  rHaiGiang1: loadAny('images/hai-giang-1.jpg'),
  rHaiGiang2: loadAny('images/hai-giang-2.jpg'),
  rHaiGiang3: loadAny('images/hai-giang-3.jpg'),
  // NEW spots — Bãi Xép Phú Yên
  rBaiXep1:   loadAny('images/bai-xep-1.jpg'),
  rBaiXep2:   loadAny('images/bai-xep-2.jpg'),
  rBaiXep3:   loadAny('images/bai-xep-3.jpg'),
};

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8"/>
<title>Hành Trình 30/4 · 2026 — Theo Bờ Nam · Vượt Đèo Núi · 7 Ngày 6 Đêm</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700;800&display=swap');
@page{size:A4;margin:0;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --ink:#0c0f14;--ink2:#1c2433;--sand:#f5f0e8;--warm:#ede8df;
  --fire:#dc2626;--fire2:#ef4444;--ocean:#0369a1;--ocean-lt:#e0f2fe;
  --forest:#15803d;--forest-lt:#dcfce7;
  --gold:#b8936a;--gold2:#d4b08a;--muted:#7a8190;--line:#ddd8cf;--white:#ffffff;
}
body{font-family:'Inter',-apple-system,sans-serif;background:var(--white);color:var(--ink);-webkit-print-color-adjust:exact;print-color-adjust:exact;}
.page{width:210mm;height:297mm;overflow:hidden;page-break-after:always;display:flex;flex-direction:column;position:relative;}
.page:last-child{page-break-after:auto;}

.cv-bg{position:absolute;inset:0;background-size:cover;background-position:center 40%;}
.cv-grad{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(5,8,14,.5) 0%,transparent 28%),linear-gradient(to top,rgba(5,8,14,.93) 0%,rgba(5,8,14,.5) 38%,transparent 65%);}
.cv-z{position:relative;z-index:2;display:flex;flex-direction:column;height:100%;padding:14mm 17mm 12mm;}
.cv-top{display:flex;align-items:center;justify-content:space-between;}
.cv-brand{font-size:7pt;font-weight:700;letter-spacing:3.5px;text-transform:uppercase;color:rgba(255,255,255,.4);display:flex;align-items:center;gap:10px;}
.cv-sep{width:1px;height:18px;background:rgba(255,255,255,.18);}
.cv-brand-sub{font-weight:300;letter-spacing:1px;font-size:7.5pt;color:rgba(255,255,255,.32);text-transform:none;}
.cv-badge{font-size:7pt;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(220,38,38,.9);border:1px solid rgba(220,38,38,.5);padding:5px 14px;background:rgba(220,38,38,.08);}
.cv-mid{flex:1;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:12mm;}
.cv-ey{display:flex;align-items:center;gap:10px;margin-bottom:12px;}
.cv-ey-rule{width:28px;height:1px;background:var(--fire2);}
.cv-ey-txt{font-size:7.5pt;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:rgba(239,68,68,.8);}
.cv-h1{font-family:'Cormorant Garamond',Georgia,serif;font-size:72pt;font-weight:300;color:#fff;line-height:.88;letter-spacing:-3px;}
.cv-h1 em{font-style:italic;color:rgba(56,189,248,.85);}
.cv-h1 b{font-weight:300;color:rgba(34,197,94,.8);}
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

.rh{height:9mm;flex-shrink:0;padding:0 15mm;display:flex;align-items:center;justify-content:space-between;border-bottom:.5px solid var(--line);}
.rh-l{font-size:6.5pt;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted);}
.rh-r{font-size:6.5pt;color:var(--muted);display:flex;align-items:center;gap:6px;}
.rh-dot{width:3px;height:3px;border-radius:50%;background:var(--fire);display:inline-block;}
.rf{height:8mm;flex-shrink:0;padding:0 15mm;display:flex;align-items:center;justify-content:space-between;border-top:.5px solid var(--line);margin-top:auto;}
.rf-l,.rf-r{font-size:6pt;color:var(--muted);}
.body{flex:1;overflow:hidden;display:flex;flex-direction:column;}

.hero{position:relative;overflow:hidden;flex-shrink:0;}
.hero img{width:100%;height:100%;object-fit:cover;display:block;}
.hero-ov{position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,8,14,.05) 0%,rgba(5,8,14,.75) 82%);}
.hero-txt{position:absolute;inset:0;padding:0 15mm 16px;display:flex;flex-direction:column;justify-content:flex-end;}
.day-chip{display:inline-block;width:fit-content;font-size:6.5pt;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#fff;padding:4px 14px;margin-bottom:8px;}
.chip-ocean{background:var(--ocean);}
.chip-forest{background:var(--forest);}
.chip-fire{background:var(--fire);}
.hero-ttl{font-family:'Cormorant Garamond',serif;font-size:28pt;font-weight:400;color:#fff;line-height:1.02;letter-spacing:-.5px;}
.hero-sub{font-size:7.5pt;font-weight:300;color:rgba(255,255,255,.52);letter-spacing:2.5px;text-transform:uppercase;margin-top:6px;}

.split{display:flex;flex:1;overflow:hidden;}
.sp-img{overflow:hidden;flex-shrink:0;position:relative;}
.sp-img img{width:100%;height:100%;object-fit:cover;display:block;}
.sp-txt{display:flex;flex-direction:column;justify-content:center;}
.dlabel{font-size:6pt;font-weight:800;letter-spacing:3.5px;text-transform:uppercase;color:var(--fire);margin-bottom:5px;}
.dlabel.ocean{color:var(--ocean);}
.dlabel.forest{color:var(--forest);}
.dtitle{font-family:'Cormorant Garamond',serif;font-size:24pt;font-weight:400;color:var(--ink);line-height:1.05;letter-spacing:-.3px;}
.drule{width:30px;height:1.5px;background:var(--fire);margin:11px 0;}
.drule.ocean{background:var(--ocean);}
.drule.forest{background:var(--forest);}
.dbody{font-size:8.5pt;font-weight:300;color:var(--muted);line-height:1.8;}

.info-tbl{width:100%;border-collapse:collapse;margin-top:11px;}
.info-tbl tr{border-bottom:.5px solid var(--line);}
.info-tbl tr:last-child{border:none;}
.info-tbl td{padding:6px 0;font-size:8pt;vertical-align:middle;}
.info-tbl td:first-child{font-size:6pt;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);width:30%;padding-right:8px;}
.info-tbl td:last-child{font-size:9pt;font-weight:600;color:var(--ink);}

.srow{display:flex;margin-top:12px;padding-top:12px;border-top:.5px solid var(--line);}
.sc{flex:1;border-right:.5px solid var(--line);padding-right:10px;margin-right:10px;}
.sc:last-child{border:none;margin:0;padding:0;}
.sc-n{font-family:'Cormorant Garamond',serif;font-size:18pt;font-weight:600;line-height:1;}
.sc-n.ocean{color:var(--ocean);}
.sc-n.forest{color:var(--forest);}
.sc-n.fire{color:var(--fire);}
.sc-l{font-size:6pt;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);margin-top:2px;}

.iti{padding:8px 15mm 0;}
.iti-head{display:flex;align-items:baseline;gap:12px;margin-bottom:8px;padding-bottom:7px;border-bottom:1.5px solid var(--ink);}
.iti-head-main{font-family:'Cormorant Garamond',serif;font-size:16pt;font-weight:500;color:var(--ink);line-height:1;letter-spacing:-.2px;}
.iti-head-sub{font-size:7pt;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--muted);}

.irow{display:grid;grid-template-columns:50px 8px 1fr auto 50px;gap:0 10px;padding:9px 0;border-bottom:.5px solid var(--line);align-items:center;page-break-inside:avoid;}
.irow:last-child{border:none;}
.irow-img{width:50px;height:50px;border-radius:4px;overflow:hidden;align-self:center;flex-shrink:0;}
.irow-img img{width:100%;height:100%;object-fit:cover;display:block;}
.itime{font-size:7pt;font-weight:700;line-height:1.25;white-space:nowrap;text-align:right;padding-top:2px;}
.itime.ocean{color:var(--ocean);}
.itime.forest{color:var(--forest);}
.itime.fire{color:var(--fire);}
.idot-col{display:flex;flex-direction:column;align-items:center;padding-top:5px;}
.idot{width:7px;height:7px;border-radius:50%;border:1.5px solid var(--ocean);background:var(--white);flex-shrink:0;}
.idot.forest{border-color:var(--forest);}
.idot.fire{border-color:var(--fire);}
.idot.dark{border-color:var(--ink);background:var(--ink);}
.ivline{flex:1;width:1px;background:var(--line);margin-top:4px;min-height:10px;}
.ittl{font-size:9.5pt;font-weight:700;color:var(--ink);margin-bottom:3px;line-height:1.3;}
.idesc{font-size:8pt;font-weight:400;color:#3d4452;line-height:1.6;}
.itags{display:flex;flex-wrap:wrap;gap:3px;margin-top:3px;}
.itag{font-size:6pt;font-weight:600;color:var(--muted);background:var(--warm);border:.5px solid var(--line);padding:2px 7px;}
.itype{font-size:6pt;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:3px 8px;white-space:nowrap;border:.5px solid;align-self:start;margin-top:2px;}
.tm{color:var(--ocean);border-color:var(--ocean-lt);background:var(--ocean-lt);}
.tf{color:#9f1239;border-color:#ffe4e6;background:#fff1f2;}
.tr{color:var(--forest);border-color:var(--forest-lt);background:var(--forest-lt);}
.tp{color:#92400e;border-color:#fef3c7;background:#fffbeb;}
.tn{color:#6b21a8;border-color:#f3e8ff;background:#faf5ff;}
.to{color:var(--muted);border-color:var(--line);background:var(--warm);}

.mos{display:grid;gap:3px;flex-shrink:0;}
.mos.c3{grid-template-columns:2fr 1fr 1fr;}
.mos.c4{grid-template-columns:1fr 1fr 1fr 1fr;}
.mi{overflow:hidden;position:relative;}
.mi img{width:100%;height:100%;object-fit:cover;display:block;}
.mcap{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.55));padding:10px 8px 5px;font-size:5.5pt;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,.85);}

.route-bar{display:flex;align-items:center;padding:8px 15mm;background:var(--sand);gap:6px;flex-shrink:0;}
.rb-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
.rb-line{flex:1;height:1px;background:var(--line);}
.rb-label{font-size:6.5pt;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--ink);white-space:nowrap;}
.rb-km{font-size:6pt;color:var(--muted);white-space:nowrap;}

.btbl{width:100%;border-collapse:collapse;margin-top:7px;}
.btbl th{font-size:6pt;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);padding:5px 8px;border-bottom:1.5px solid var(--ink);text-align:left;}
.btbl td{padding:5px 8px;font-size:8pt;border-bottom:.5px solid var(--line);}
.btbl tr:last-child td{border-bottom:1.5px solid var(--ink);font-weight:700;}

.cgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;}
.ch-hd{font-size:7.5pt;font-weight:700;color:var(--ink);padding:5px 0;border-bottom:1px solid var(--line);margin-bottom:6px;}
.cul{list-style:none;display:flex;flex-direction:column;gap:4px;}
.cul li{font-size:7pt;color:#4a4a4a;display:flex;align-items:center;gap:7px;line-height:1.3;}
.cb{width:10px;height:10px;border:.75px solid var(--line);background:white;flex-shrink:0;}

.flow{display:grid;grid-template-columns:1fr 1fr;gap:7px;}
.fb{padding:12px 13px;}
.fb-dark{background:var(--ink2);}
.fb-ocean{background:var(--ocean);}
.fb-forest{background:var(--forest);}
.fb-ey{font-size:6pt;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,.6);margin-bottom:4px;}
.fb-ttl{font-family:'Cormorant Garamond',serif;font-size:14pt;font-weight:400;color:white;margin-bottom:8px;line-height:1.05;}
.fs{display:flex;align-items:center;gap:7px;padding:3.5px 0;border-bottom:.5px solid rgba(255,255,255,.07);}
.fs:last-child{border:none;}
.fs-time{font-size:7pt;font-weight:700;color:rgba(255,255,255,.6);width:50px;flex-shrink:0;}
.fs-div{width:.5px;height:10px;background:rgba(255,255,255,.15);flex-shrink:0;}
.fs-txt{flex:1;font-size:7pt;color:rgba(255,255,255,.72);line-height:1.3;}

.grule{height:.5px;background:linear-gradient(90deg,var(--fire),transparent);margin:9px 0;}
.hrule{height:1.5px;background:var(--ink);margin:10px 0;}

/* Photo strip — inline images next to itinerary items */
.ps{display:grid;gap:3px;margin:5px 0 3px;border-radius:4px;overflow:hidden;}
.ps.c2{grid-template-columns:1fr 1fr;}
.ps.c3{grid-template-columns:1fr 1fr 1fr;}
.ps.c4{grid-template-columns:1fr 1fr 1fr 1fr;}
.ps-h30{height:30mm;}
.ps-h24{height:24mm;}
.ps-h20{height:20mm;}
.ps-h26{height:15mm;}
.ps img{width:100%;height:100%;object-fit:cover;display:block;}
/* Highlight spot box */
.spot-box{border:.5px solid var(--line);border-radius:2px;overflow:hidden;margin:4px 0;}
.spot-box-img{height:36mm;overflow:hidden;}
.spot-box-img img{width:100%;height:100%;object-fit:cover;display:block;}
.spot-box-body{padding:10px 12px;background:var(--sand);border-top:1.5px solid var(--line);}
.spot-tag{display:inline-block;font-size:6.5pt;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:2px 7px;margin-bottom:5px;}
.spot-name{font-family:'Cormorant Garamond',serif;font-size:14pt;font-weight:600;color:var(--ink);line-height:1.1;margin-bottom:4px;}
.spot-desc{font-size:8pt;color:#2d3748;line-height:1.65;}
.spot-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px;}
</style>
</head>
<body>

<!-- ══ COVER ══ -->
<div class="page">
  <div class="cv-bg" style="background-image:url('${I.rBinhDinh}');"></div>
  <div class="cv-grad"></div>
  <div class="cv-z">
    <div class="cv-top">
      <div class="cv-brand">
        <span>Hành Trình</span><div class="cv-sep"></div>
        <span class="cv-brand-sub">Xe Máy · 2 Người · 26/4–2/5/2026</span>
      </div>
      <div class="cv-badge">Lễ 30/4 + 1/5 · 7 Ngày</div>
    </div>
    <div class="cv-mid">
      <div class="cv-ey"><div class="cv-ey-rule"></div><span class="cv-ey-txt">SG · Cổ Thạch · Vĩnh Hy · Quy Nhơn · Nha Trang · Đèo Khánh Lê · Bảo Lộc · SG</span></div>
      <div class="cv-h1">Theo <em>Bờ Nam</em><br/>Lên <b>Tây Nguyên</b></div>
      <div class="cv-sub"><div class="cv-sub-rule"></div><span class="cv-sub-txt">7 Ngày · 6 Đêm · 26/4–2/5/2026 · ~1,350km · Xe Máy</span></div>
      <div class="cv-stats">
        <div class="cv-st"><div class="cv-st-n">7</div><div class="cv-st-l">Ngày · 6 đêm</div></div>
        <div class="cv-st"><div class="cv-st-n">1,350km</div><div class="cv-st-l">Tổng quãng đường</div></div>
        <div class="cv-st"><div class="cv-st-n">9</div><div class="cv-st-l">Điểm độc lạ</div></div>
        <div class="cv-st"><div class="cv-st-n">~3.5tr</div><div class="cv-st-l">Budget/người</div></div>
      </div>
    </div>
    <div class="cv-foot">
      <span class="cv-foot-l">Xe máy · 2 người · Đi biển lên Quy Nhơn · Về núi qua Bảo Lộc</span>
      <div class="cv-foot-r">
        <span class="cv-tag">Coastal Road</span><span class="cv-tag">Mountain Pass</span><span class="cv-tag">Food Tour</span>
      </div>
    </div>
  </div>
</div>


<!-- ══ PAGE 2 · OVERVIEW + ROUTE MAP ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Hành Trình 30/4 · 2026</div><div class="rh-r">Tổng quan <span class="rh-dot"></span> 02</div></div>
  <div class="body">
    <div class="split">
      <div class="sp-img" style="width:42%;"><img src="${I.rNinhThuan}" alt="Đường ven biển" style="object-position:center 50%;"/></div>
      <div class="sp-txt" style="padding:12mm 14mm 12mm 12mm;">
        <div class="dlabel">Trip Overview</div>
        <div class="dtitle">Đi biển lên,<br/>Về núi xuống</div>
        <div class="drule"></div>
        <div class="dbody">Chuyến road trip 30/4 hoàn hảo cho 2 thằng: ven biển từ SG lên Vĩnh Hy (Ninh Thuận) — hang động, san hô, điện gió. Tiếp tục Quy Nhơn, Nha Trang xem pháo hoa 30/4. Về núi qua đèo Khánh Lê hùng vĩ, nghỉ Bảo Lộc rồi về SG. Biển + đèo + núi + cao nguyên — đủ hết.</div>
        <table class="info-tbl">
          <tr><td>Hành trình</td><td>SG → Vĩnh Hy (NT) → Quy Nhơn → Nha Trang → Đèo Khánh Lê → Bảo Lộc → SG</td></tr>
          <tr><td>Thời gian</td><td>7 ngày 6 đêm · 26/4 – 2/5/2026</td></tr>
          <tr><td>Phương tiện</td><td>Xe máy · 2 người</td></tr>
          <tr><td>Tổng km</td><td>~1,300 km</td></tr>
          <tr><td>Budget</td><td>~3–4 triệu/người</td></tr>
        </table>
        <div class="srow">
          <div class="sc"><div class="sc-n ocean">620km</div><div class="sc-l">Đường biển đi</div></div>
          <div class="sc"><div class="sc-n forest">440km</div><div class="sc-l">Đường núi về</div></div>
          <div class="sc"><div class="sc-n fire">5</div><div class="sc-l">Đèo lớn</div></div>
          <div class="sc"><div class="sc-n fire">30/4</div><div class="sc-l">Khởi hành</div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">SG → Vĩnh Hy → Quy Nhơn → Bảo Lộc → SG</div><div class="rf-r">Hành Trình 30/4 · 2026</div></div>
</div>


<!-- ══ PAGE 3 · ĐIỂM ĐỘC LẠ + XÃ HỘI ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Hành Trình 30/4 · 2026</div><div class="rh-r">Điểm mới khám phá <span class="rh-dot"></span> 03</div></div>
  <div class="body" style="padding:0 15mm;">

    <div style="padding:8px 0 5px;">
      <div class="dlabel">5 Địa Điểm Độc Lạ &amp; Xã Hội — Thêm Mới 2026</div>
      <div style="font-size:7.5pt;color:var(--muted);margin-top:2px;">Ít người biết · Hoang sơ · Trendy · Nhiều cơ hội gặp gỡ</div>
    </div>

    <div class="spot-grid">

      <!-- Cổ Thạch -->
      <div class="spot-box">
        <div class="spot-box-img"><img src="${I.rCoThachH}" alt="Cổ Thạch"/></div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px;height:18mm;">
          <img src="${I.rCoThach1}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
          <img src="${I.rCoThach2}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
          <img src="${I.rCoThach3}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
        </div>
        <div class="spot-box-body">
          <div class="spot-tag" style="background:var(--ocean-lt);color:var(--ocean);">Day 1 · Bình Thuận</div>
          <div class="spot-name">Cổ Thạch · Bãi Đá 7 Màu</div>
          <div class="spot-desc">Ngàn viên đá màu xanh, đỏ, tím, vàng trải dài trên biển — hiện tượng địa chất độc nhất Việt Nam. Tháng 4 nắng rực, màu đá đậm nhất trong năm. Cách QL1 ~5km.</div>
        </div>
      </div>

      <!-- Biển Bình Tiên -->
      <div class="spot-box">
        <div class="spot-box-img"><img src="${I.rBinhTien1}" alt="Bình Tiên"/></div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px;height:18mm;">
          <img src="${I.rBinhTien2}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
          <img src="${I.rBinhTien3}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
          <img src="${I.rBinhTien4}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
        </div>
        <div class="spot-box-body">
          <div class="spot-tag" style="background:var(--ocean-lt);color:var(--ocean);">Day 2 · Ninh Thuận</div>
          <div class="spot-name">Biển Bình Tiên · Nàng Thơ</div>
          <div class="spot-desc">"Nàng thơ ngủ quên" của Ninh Thuận — ba mặt vườn quốc gia Núi Chúa, nước trong như kính, bãi cát trắng hoang sơ. Tháng 4–6 là đẹp nhất. 30km bắc Phan Rang.</div>
        </div>
      </div>

      <!-- Cánh đồng muối -->
      <div class="spot-box">
        <div class="spot-box-img"><img src="${I.rMuoi1}" alt="Cánh đồng muối"/></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;height:18mm;">
          <img src="${I.rMuoi2}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
          <img src="${I.rMuoi3}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
        </div>
        <div class="spot-box-body">
          <div class="spot-tag" style="background:var(--forest-lt);color:var(--forest);">Day 1 · Phan Rang</div>
          <div class="spot-name">Cánh Đồng Muối Cà Ná</div>
          <div class="spot-desc">Từng lọt top hoàng hôn đẹp nhất thế giới. Ô muối trắng lấp lánh dưới ánh nắng vàng chiều 16:30–17:30. Tháng 4–5 đang vào mùa thu hoạch — diêm dân làm đầy đồng.</div>
        </div>
      </div>

      <!-- Hải Giang + Bãi Xép -->
      <div class="spot-box">
        <div class="spot-box-img"><img src="${I.rHaiGiang1}" alt="Hải Giang"/></div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px;height:18mm;">
          <img src="${I.rHaiGiang2}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
          <img src="${I.rHaiGiang3}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
          <img src="${I.rBaiXep1}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
        </div>
        <div class="spot-box-body">
          <div class="spot-tag" style="background:var(--ocean-lt);color:var(--ocean);">Day 3 + 4 · Bình Định / Phú Yên</div>
          <div class="spot-name">Hải Giang + Bãi Xép</div>
          <div class="spot-desc"><strong>Hải Giang</strong>: bán đảo 3 mặt núi, bãi đá cuội như "trứng khổng lồ", sóng êm — rùa biển đẻ trứng. <strong>Bãi Xép</strong>: làng chài phim "Hoa Vàng Cỏ Xanh", cỏ xanh trên đồi, biển xanh dưới chân.</div>
        </div>
      </div>

    </div>

    <!-- Bars / Social row -->
    <div style="margin-top:5px;">
      <div class="dlabel fire" style="color:var(--fire);">Nightlife &amp; Xã Hội — Gặp Gỡ Giới Trẻ</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:4px;">

      <div class="spot-box">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px;height:24mm;">
          <img src="${I.rSurfbar1}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
          <img src="${I.rSurfbar2}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
          <img src="${I.rSurfbar3}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
        </div>
        <div class="spot-box-body" style="padding:5px 8px;">
          <div class="spot-tag" style="background:#fff1f2;color:#9f1239;">Đêm 3 · Quy Nhơn</div>
          <div class="spot-name" style="font-size:11pt;">Surf Bar + Sol Skybar</div>
          <div class="spot-desc"><strong>Surf Bar</strong>: bar bãi biển mộc mạc, nhạc reggae/acoustic, giới trẻ chill. <strong>Sol Skybar</strong> (Fleur De Lys): rooftop cocktail, view thành phố đêm. <strong>V Club</strong>: EDM sôi động nhất Quy Nhơn — đông cuối tuần.</div>
        </div>
      </div>

      <div class="spot-box">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px;height:24mm;">
          <img src="${I.rSailing1}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
          <img src="${I.rSailing2}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
          <img src="${I.rSailing3}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
        </div>
        <div class="spot-box-body" style="padding:5px 8px;">
          <div class="spot-tag" style="background:#fff1f2;color:#9f1239;">Đêm 4 · Nha Trang</div>
          <div class="spot-name" style="font-size:11pt;">Sailing Club Nha Trang</div>
          <div class="spot-desc"><strong>Sailing Club</strong>: beach club quốc tế #1 Nha Trang — 2,400m², 4 bars, DJ, fire dance 21:30. Rất đông khách tây + Việt trẻ. <strong>Karma Lounge</strong>: cocktail bar hiện đại, vibe intimate hơn, dễ làm quen.</div>
        </div>
      </div>

    </div>

  </div>
  <div class="rf"><div class="rf-l">SG → Vĩnh Hy → Quy Nhơn → Bảo Lộc → SG</div><div class="rf-r">Hành Trình 30/4 · 2026</div></div>
</div>



<!-- ══ PAGE 4 · DAY 1 · 26/4 ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Hành Trình 30/4 · 2026</div><div class="rh-r">Day 1 · SG → Vĩnh Hy <span class="rh-dot"></span> 04</div></div>
  <div class="body">
    <div class="hero" style="height:56mm;">
      <img src="${I.rBinhThuan}" alt="Đường biển Bình Thuận" style="object-position:center 55%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-ocean">Day 01 · 26/4 (T7)</div>
        <div class="hero-ttl">SG → Cổ Thạch<br/>→ Vĩnh Hy</div>
        <div class="hero-sub">QL51 · QL55 ven biển · Cổ Thạch Đá 7 Màu · Cánh Đồng Muối · Vĩnh Hy · ~320km</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">26/4 · T7</div><div class="iti-head-sub">SG → Hồ Tràm → QL55 ven biển → Cổ Thạch → Muối Cà Ná → Vĩnh Hy (Ninh Thuận) · ~320km</div></div>

      <div class="irow">
        <div class="itime ocean">04:30<br/>07:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Xuất phát SG → Hồ Tràm</div>
          <div class="idesc">QL51 → Bà Rịa → Hồ Tràm. Đi sớm tránh kẹt + nắng. Ăn sáng Hồ Tràm — hủ tiếu ven đường, nắng đẹp, đường thông trước 7h.</div>
        </div>
        <div class="itype tm">~100km</div>
      </div>

      <div class="irow">
        <div class="itime ocean">07:00<br/>10:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Hồ Tràm → QL55 ven biển → Mũi Né</div>
          <div class="idesc">QL55 sát biển qua Lagi — đường đẹp, ít xe, nhìn thấy sóng từ yên xe. Một trong những cung đường ven biển đẹp nhất miền Nam. Ăn trưa nhẹ Phan Thiết: bánh canh chả cá đặc sản.</div>
          <div class="itags"><span class="itag">QL55 ven biển</span><span class="itag">Lagi → Mũi Né</span><span class="itag">Bánh canh chả cá Phan Thiết</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.rBinhThuan2}" alt="Biển Bình Thuận"/>
            <img src="${I.rNinhThuan}" alt="Đường ven biển"/>
            <img src="${I.rBinhDinh}" alt="Cung đường biển"/>
          </div>
        </div>
        <div class="itype tm">~100km</div>
      </div>

      <div class="irow">
        <div class="itime ocean">11:00<br/>13:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ CỔ THẠCH — Bãi Đá 7 Màu (Tuy Phong, Bình Thuận)</div>
          <div class="idesc">QL1 → rẽ vào Bình Thạnh, Tuy Phong — cách QL1 ~5km. Ngàn viên đá xanh, đỏ, tím, vàng trải dài sát biển — hiện tượng địa chất độc nhất Việt Nam. Tháng 4 nắng rực, màu đá đậm nhất năm.</div>
          <div class="itags"><span class="itag">Độc nhất VN</span><span class="itag">Đá 7 màu</span><span class="itag">~90km bắc Phan Thiết</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.rCoThach1}" alt="Cổ Thạch bãi biển"/>
            <img src="${I.rCoThach2}" alt="Đá 7 màu"/>
            <img src="${I.rCoThach3}" alt="Cổ Thạch đá lớn"/>
          </div>
        </div>
        <div class="itype tp">★ New</div>
      </div>

      <div class="irow">
        <div class="itime ocean">13:30<br/>17:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Cổ Thạch → QL1 → Phan Rang → Vĩnh Hy · Check-in</div>
          <div class="idesc">Liên Hương → Cà Ná → Phan Rang → rẽ ĐT702 lên Vĩnh Hy (~40km từ PR). Vĩnh Hy: thị trấn làng chài nhỏ ngay Vườn QG Núi Chúa — ngủ đêm tại đây, sáng mai ra Hang Gái và Đảo Nở cực gần.</div>
          <div class="itags"><span class="itag">QL1 Ninh Thuận</span><span class="itag">ĐT702 → Vĩnh Hy</span><span class="itag">~140km</span></div>
        </div>
        <div class="itype tm">~120km</div>
      </div>

      <div class="irow">
        <div class="itime ocean">17:00<br/>18:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ Cánh Đồng Muối Cà Ná — Giờ Vàng Hoàng Hôn</div>
          <div class="idesc">Cách Phan Rang ~15km. Ô muối trắng phản chiếu ánh cam 16:30–17:30 — từng lọt top hoàng hôn đẹp nhất thế giới. Tháng 4–5 đang vào mùa thu hoạch, diêm dân làm đầy đồng.</div>
          <div class="itags"><span class="itag">Top hoàng hôn thế giới</span><span class="itag">Mùa thu hoạch tháng 4–5</span><span class="itag">Golden hour 16:30</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.rMuoi1}" alt="Cánh đồng muối"/>
            <img src="${I.rMuoi2}" alt="Muối hoàng hôn"/>
            <img src="${I.rMuoi3}" alt="Diêm dân"/>
          </div>
        </div>
        <div class="itype tp">★ Sunset</div>
      </div>

      <div class="irow">
        <div class="itime ocean">19:30</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Tối: Cơm hải sản Vĩnh Hy + Nghỉ đêm</div>
          <div class="idesc">Vĩnh Hy có nhiều quán hải sản tươi ngay tại làng chài — tôm hùm, cá mú, ốc giá rẻ hơn thành phố nhiều. Homestay Vĩnh Hy ~200–350k/đêm. Ngủ sớm, mai chill cả ngày tại đây.</div>
        </div>
        <div class="itype tn">Nghỉ đêm</div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">SG → Vĩnh Hy → Quy Nhơn → Bảo Lộc → SG</div><div class="rf-r">Hành Trình 30/4 · 2026</div></div>
</div>


<!-- ══ PAGE 5 · DAY 2 · 27/4 ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Hành Trình 30/4 · 2026</div><div class="rh-r">Day 2 · Ninh Thuận Full Day <span class="rh-dot"></span> 05</div></div>
  <div class="body">
    <div class="hero" style="height:44mm;">
      <img src="${I.rBinhTien1}" alt="Biển Bình Tiên" style="object-position:center 50%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-ocean">Day 02 · 27/4 (CN)</div>
        <div class="hero-ttl">Ninh Thuận<br/>Cả Ngày</div>
        <div class="hero-sub">Vĩnh Hy chill · Hang Gái · Công viên đá · Đảo Nở san hô · Điện gió Mũi Dinh · Hoàng hôn muối</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">27/4 · CN</div><div class="iti-head-sub">Chill tại Vĩnh Hy — Hang Gái · Công viên đá · Đảo Nở san hô · Điện gió Mũi Dinh · Muối hoàng hôn</div></div>

      <div class="irow">
        <div class="itime ocean">05:00<br/>07:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ BIỂN BÌNH TIÊN — Hoang Sơ Ngay Trước Cửa</div>
          <div class="idesc">Nghỉ Vĩnh Hy rồi đi bộ/xe máy 10 phút ra Bình Tiên — tiện lợi cực kỳ. Ba mặt Vườn QG Núi Chúa bao quanh, nước xanh trong vắt, hầu như không có người. Bình minh đẹp nhất cả trip. Ăn sáng bánh mì tại đây.</div>
          <div class="itags"><span class="itag">Ngay gần Vĩnh Hy</span><span class="itag">Nước trong như kính</span><span class="itag">Núi Chúa NP</span></div>
        </div>
        <div class="itype tp">★ Hoang sơ</div>
        <div class="irow-img"><img src="${I.rBinhTien2}" alt="Bình Tiên"/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">08:00<br/>09:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ HANG GÁI — Hang Động Kỳ Bí Ven Biển</div>
          <div class="idesc">Hang Gái ở khu vực Vĩnh Hy / Núi Chúa — hang đá vôi ven biển với nhũ đá hình thành triệu năm, ánh sáng lọt qua khe đá tạo hiệu ứng lung linh huyền ảo. Ít khách du lịch biết đến, vẫn còn rất hoang sơ.</div>
          <div class="itags"><span class="itag">★ Hang đá vôi ven biển</span><span class="itag">Nhũ đá kỳ bí</span><span class="itag">Ít người biết</span></div>
        </div>
        <div class="itype tp">★ New</div>
        <div class="irow-img"><img src="${I.rNinhThuan}" alt="Hang Gái"/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">09:30<br/>11:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ CÔNG VIÊN ĐÁ — Địa Hình Đá Cuội Độc Nhất Vô Nhị</div>
          <div class="idesc">Khu vực đá cuội khổng lồ tự nhiên trải dài ven biển Ninh Thuận — sóng triệu năm bào mòn tạo hình thù kỳ lạ. Kết hợp với cảnh biển + cỏ cháy vàng tháng 4 — ảnh cực kỳ đặc biệt và độc lạ so với bất kỳ bãi biển nào.</div>
          <div class="itags"><span class="itag">★ Đá cuội tự nhiên</span><span class="itag">Cỏ vàng + biển xanh</span><span class="itag">Check-in cực độc</span></div>
        </div>
        <div class="itype tp">★ Độc lạ</div>
        <div class="irow-img"><img src="${I.rBinhTien3}" alt="Công viên đá"/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">11:00<br/>12:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ CÁNH ĐỒNG ĐIỆN GIÓ MŨI DINH</div>
          <div class="idesc">Mũi Dinh, Thuận Nam — hàng trăm trụ điện gió khổng lồ trải dài mỏm núi ven biển. Cỏ vàng + biển xanh + trụ trắng quay liên tục. Ảnh cực đẹp.</div>
          <div class="itags"><span class="itag">Hàng trăm trụ gió</span><span class="itag">View biển cực đỉnh</span></div>
        </div>
        <div class="itype tp">Điện gió</div>
        <div class="irow-img"><img src="${I.rMuoi1}" alt="Điện gió Mũi Dinh"/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">13:00<br/>15:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ ĐẢO NỞ (Hòn Nở) — Snorkeling San Hô Ninh Thuận</div>
          <div class="idesc">Thuyền từ Ninh Chữ / Vĩnh Hy ~30–40'. San hô đủ màu, nước trong, cá nhiều — thuộc vùng biển Vườn QG Núi Chúa. Snorkeling + ăn trưa hải sản trên đảo.</div>
          <div class="itags"><span class="itag">★ San hô đa dạng</span><span class="itag">Snorkeling</span><span class="itag">Ăn hải sản đảo</span></div>
        </div>
        <div class="itype tp">★ San hô</div>
        <div class="irow-img"><img src="${I.rKyco}" alt="Đảo Nở"/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">16:00<br/>17:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ Cánh Đồng Muối Cà Ná — Hoàng Hôn Trắng</div>
          <div class="idesc">Ô muối trắng phản chiếu ánh cam tím hoàng hôn. Mùa thu hoạch tháng 4–5, diêm dân đông.</div>
          <div class="itags"><span class="itag">Hoàng hôn top thế giới</span><span class="itag">Mùa thu hoạch</span></div>
        </div>
        <div class="itype tp">Sunset</div>
        <div class="irow-img"><img src="${I.rMuoi2}" alt="Muối Cà Ná"/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">19:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Về Vĩnh Hy · Cơm hải sản + Nghỉ đêm</div>
          <div class="idesc">Cơm hải sản tươi tại Vĩnh Hy — tôm, cá mú, ốc giá rẻ cực kỳ. Homestay ~200–350k/đêm. Ngày mai sáng sớm rời Vĩnh Hy, đường dài ~330km về Quy Nhơn.</div>
        </div>
        <div class="itype tn">Nghỉ đêm</div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">SG → Vĩnh Hy → Quy Nhơn → Bảo Lộc → SG</div><div class="rf-r">Hành Trình 30/4 · 2026</div></div>
</div>


<!-- ══ PAGE 6 · DAY 3 · 28/4 ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Hành Trình 30/4 · 2026</div><div class="rh-r">Day 3 · Vĩnh Hy → Quy Nhơn <span class="rh-dot"></span> 06</div></div>
  <div class="body">
    <div class="hero" style="height:56mm;">
      <img src="${I.rQuyNhon}" alt="Quy Nhơn" style="object-position:center 45%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-ocean">Day 03 · 28/4 (T2)</div>
        <div class="hero-ttl">Vĩnh Hy<br/>→ Quy Nhơn</div>
        <div class="hero-sub">Đèo Cổ Mã · Gành Đá Đĩa · Check-in QN · ★ Nhậu bạn đêm duy nhất · ~330km</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">28/4 · T2</div><div class="iti-head-sub">Vĩnh Hy → QL1 → Đèo Cổ Mã → Gành Đá Đĩa (Phú Yên) → Quy Nhơn · ~330km</div></div>

      <div class="irow">
        <div class="itime ocean">05:30<br/>07:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Bình Minh Vĩnh Hy · Ăn Sáng + Khởi Hành</div>
          <div class="idesc">Dậy sớm ngắm bình minh trên vịnh Vĩnh Hy lần cuối. Ăn sáng bánh mì hoặc bún hải sản tại làng chài. Lên đường trước 7:30 — hôm nay 330km, cần xuất phát sớm.</div>
          <div class="itags"><span class="itag">Bình minh vịnh Vĩnh Hy</span><span class="itag">Xuất phát sớm 7:30</span></div>
        </div>
        <div class="itype tp">Bình minh</div>
        <div class="irow-img"><img src="${I.rBinhTien1}" alt=""/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">07:30<br/>11:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">QL1 bắc → Đèo Cổ Mã → Đại Lãnh</div>
          <div class="idesc">QL1 qua Cam Ranh, Nha Trang (không dừng), Vạn Ninh → Đèo Cổ Mã (QL1) — một trong những đèo ven biển đẹp nhất VN, view vịnh Vân Phong. Dừng Đại Lãnh ăn sáng/trưa — bãi biển đẹp hoang sơ.</div>
          <div class="itags"><span class="itag">QL1 ven biển</span><span class="itag">Đèo Cổ Mã · Vịnh Vân Phong</span><span class="itag">~130km</span></div>
        </div>
        <div class="itype tm">~130km</div>
        <div class="irow-img"><img src="${I.rBinhDinh}" alt=""/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">12:00<br/>14:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ GÀNH ĐÁ ĐĨA — Cột Đá Basalt Volcanic Phú Yên</div>
          <div class="idesc">An Ninh Đông, Tuy An, Phú Yên — biểu tượng địa chất Phú Yên. Hàng nghìn cột basalt lục giác xếp khít nhau như đĩa chồng — hình thành từ dung nham núi lửa triệu năm. Ăn trưa hải sản Tuy An ngay cạnh.</div>
          <div class="itags"><span class="itag">Basalt lục giác</span><span class="itag">Địa chất độc nhất VN</span><span class="itag">Ăn trưa Tuy An</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.rNhaTrang}" alt="Bờ biển Phú Yên"/>
            <img src="${I.rBinhDinh}" alt="Gành Đá Đĩa"/>
            <img src="${I.rQuyNhon}" alt="Phú Yên biển"/>
          </div>
        </div>
        <div class="itype tp">Highlight</div>
      </div>

      <div class="irow">
        <div class="itime ocean">14:30<br/>17:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Phú Yên → QL1 → Quy Nhơn · Check-in</div>
          <div class="idesc">~100km cuối. Check-in khách sạn Quy Nhơn (gần bãi biển Trần Hưng Đạo, ~350k). Tắm biển nhanh. Nhắn tin báo bạn bè — đêm nay là đêm duy nhất ở QN, nhậu hết sức.</div>
          <div class="itags"><span class="itag">QL1 · ~100km</span><span class="itag">Check-in Quy Nhơn</span></div>
        </div>
        <div class="itype tm">~100km</div>
        <div class="irow-img"><img src="${I.rQuyNhon2}" alt=""/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">19:00<br/>23:30</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">★ NHẬU BẠN QUY NHƠN — Đêm Duy Nhất</div>
          <div class="idesc">Hải sản tươi + bia lạnh ven Trần Hưng Đạo — giá rẻ hơn NT 30–40%, cá mực tươi ngay ngày đánh. Đây là đêm duy nhất ở QN nên nhậu hết cỡ. Sau đó: <strong>Surf Bar</strong> (acoustic/indie, giới trẻ) hoặc <strong>V Club</strong> (EDM). QN về khuya vẫn đông, không lo hết chỗ.</div>
          <div class="itags"><span class="itag">★ Nhậu bạn đêm duy nhất</span><span class="itag">Hải sản Trần Hưng Đạo</span><span class="itag">Surf Bar / V Club</span></div>
        </div>
        <div class="itype tn">★ Nhậu bạn</div>
        <div class="irow-img"><img src="${I.rSurfbar1}" alt=""/></div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">SG → Vĩnh Hy → Quy Nhơn → Bảo Lộc → SG</div><div class="rf-r">Hành Trình 30/4 · 2026</div></div>
</div>


<!-- ══ PAGE 7 · DAY 4 · 29/4 ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Hành Trình 30/4 · 2026</div><div class="rh-r">Day 4 · Quy Nhơn → Nha Trang <span class="rh-dot"></span> 07</div></div>
  <div class="body">
    <div class="hero" style="height:44mm;">
      <img src="${I.rBaiXep1}" alt="Bãi Xép Phú Yên" style="object-position:center 50%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-ocean">Day 04 · 29/4 (T3)</div>
        <div class="hero-ttl">QN → Bãi Xép<br/>→ Nha Trang</div>
        <div class="hero-sub">Eo Gió sáng sớm · Hải Giang · QL1D · ★ Bãi Xép làng chài · Nha Trang check-in · ~220km</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">29/4 · T3</div><div class="iti-head-sub">Quy Nhơn sáng → ★Eo Gió + ★Hải Giang → QL1D → ★Bãi Xép → Nha Trang · ~220km</div></div>

      <div class="irow">
        <div class="itime ocean">07:00<br/>10:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ EO GIÓ + HẢI GIANG — Sáng Sớm Trước Khi Rời QN</div>
          <div class="idesc">Eo Gió (~30km): vách đá dựng đứng giữa biển xanh — gió mạnh, sóng ầm ầm, ảnh cực đỉnh. Tiếp theo Hải Giang (~15km): bán đảo hoang dã ít người, nước trong, bãi cát trắng. Check out khách sạn, đặt đồ gửi rồi đi sáng sớm.</div>
          <div class="itags"><span class="itag">★ Eo Gió · vách đá</span><span class="itag">Hải Giang · hoang dã</span><span class="itag">Sáng sớm tránh nắng</span></div>
        </div>
        <div class="itype tp">★ QN Highlight</div>
        <div class="irow-img"><img src="${I.rHaiGiang1}" alt="Hải Giang"/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">10:30<br/>13:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Quy Nhơn → QL1D ven biển → Phú Yên</div>
          <div class="idesc">QL1D — đường ven biển song song QL1, cảnh đẹp hơn, ít xe hơn. Qua Sông Cầu, Tuy Hòa. Nắng sớm vàng óng, biển xanh hai bên.</div>
          <div class="itags"><span class="itag">QL1D ven biển</span><span class="itag">Ít xe</span><span class="itag">~120km</span></div>
        </div>
        <div class="itype tm">~120km</div>
        <div class="irow-img"><img src="${I.rBinhDinh}" alt=""/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">13:30<br/>15:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ BÃI XÉP — Làng Chài "Hoa Vàng Trên Cỏ Xanh"</div>
          <div class="idesc">Xã An Chấn, Tuy An, Phú Yên. Cỏ xanh đồi, bãi cát vàng, làng chài nhỏ authentic — bối cảnh phim nổi tiếng. Ăn trưa/xế hải sản tươi tại đây, cá tươi ngay ngày đánh, giá rất rẻ.</div>
          <div class="itags"><span class="itag">★ Authentic làng chài</span><span class="itag">Cỏ xanh + biển xanh</span><span class="itag">Ăn hải sản</span></div>
        </div>
        <div class="itype tp">★ Phú Yên</div>
        <div class="irow-img"><img src="${I.rBaiXep2}" alt="Bãi Xép"/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">16:00<br/>18:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Phú Yên → QL1 → Nha Trang · Check-in</div>
          <div class="idesc">~100km đường quen. Check-in khách sạn trung tâm Nha Trang (gần Trần Phú, ~350–500k). Nghỉ ngơi, tắm biển nhanh tại Trần Phú. Ngày mai chill Bích Đầm đảo.</div>
          <div class="itags"><span class="itag">QL1 · ~100km</span><span class="itag">Check-in gần Trần Phú</span></div>
        </div>
        <div class="itype tm">~100km</div>
        <div class="irow-img"><img src="${I.rNhaTrang2}" alt=""/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">20:00<br/>23:30</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Tối: Hải Sản + Sailing Club Nha Trang</div>
          <div class="idesc">Ăn hải sản nướng/hấp ven biển Trần Phú — Nha Trang có cả phố hải sản sầm uất về đêm. Sau đó: <strong>Sailing Club</strong> (72–74 Trần Phú) — DJ, fire dance 21:30, khách quốc tế đông vui. Hoặc <strong>Karma Lounge</strong> nếu muốn thoải mái hơn.</div>
          <div class="itags"><span class="itag">Hải sản Trần Phú</span><span class="itag">Sailing Club · fire dance</span></div>
        </div>
        <div class="itype tn">Hải sản + Club</div>
        <div class="irow-img"><img src="${I.rSailing2}" alt="Sailing Club"/></div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">SG → Vĩnh Hy → Quy Nhơn → Bảo Lộc → SG</div><div class="rf-r">Hành Trình 30/4 · 2026</div></div>
</div>


<!-- ══ PAGE 8 · DAY 5 · 30/4 ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Hành Trình 30/4 · 2026</div><div class="rh-r">Day 5 · Nha Trang · Pháo Hoa 30/4 <span class="rh-dot"></span> 08</div></div>
  <div class="body">
    <div class="hero" style="height:44mm;">
      <img src="${I.rNhaTrang}" alt="Nha Trang" style="object-position:center 50%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-ocean">Day 05 · 30/4 (T4)</div>
        <div class="hero-ttl">Nha Trang<br/>Chill + Pháo Hoa</div>
        <div class="hero-sub">★ Bích Đầm đảo · Bãi biển Trần Phú · ★ Pháo hoa 30/4 · 21:00 · Sailing Club</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">30/4 · T4</div><div class="iti-head-sub">Nha Trang chill — ★Bích Đầm đảo sáng · Trần Phú chiều · ★PHÁO HOA 30/4 · 21:00</div></div>

      <div class="irow">
        <div class="itime ocean">08:00<br/>12:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ BÍCH ĐẦM — Làng Chài Đảo Cổ Nhất Nha Trang</div>
          <div class="idesc">Thuyền từ Cảng Cầu Đá → đảo Trí Nguyên ~30'. Bích Đầm: làng chài nổi lâu đời — nhà bè trên vịnh, cá lồng bè, nước xanh ngọc, hoàn toàn yên bình. Ăn sáng/trưa hải sản tươi ngay trên bè. Khác hoàn toàn với resort Vinpearl.</div>
          <div class="itags"><span class="itag">★ Làng chài đảo cổ nhất NT</span><span class="itag">Thuyền Cầu Đá ~30k</span><span class="itag">Hải sản bè tươi</span></div>
        </div>
        <div class="itype tp">★ Đảo</div>
        <div class="irow-img"><img src="${I.rNhaTrang3}" alt="Bích Đầm"/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">13:00<br/>17:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Về bờ · Chill Trần Phú · Nghỉ ngơi</div>
          <div class="idesc">Thuyền về Cầu Đá, về phòng nghỉ ngơi buổi chiều. Tối có pháo hoa nên cần sức. Khoảng 18:30 đi ăn hải sản tối sớm rồi ra Trần Phú giữ chỗ xem pháo hoa — đông cực từ 20:00.</div>
          <div class="itags"><span class="itag">Nghỉ ngơi buổi chiều</span><span class="itag">Ra Trần Phú trước 20:00</span></div>
        </div>
        <div class="itype to">Chill</div>
        <div class="irow-img"><img src="${I.rNhaTrang2}" alt=""/></div>
      </div>

      <div class="irow">
        <div class="itime fire">20:30<br/>22:00</div>
        <div class="idot-col"><div class="idot fire"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ PHÁO HOA 30/4 — Trần Phú Nha Trang · 21:00</div>
          <div class="idesc">Lý do số 1 chọn ngủ NT đêm 30/4. Pháo hoa bắn từ khu vực cầu Trần Phú — bãi biển đông nghịt hàng chục nghìn người, không khí lễ hội sôi động nhất năm. Xem từ bờ biển hoặc rooftop cafe view cao. Không thể bỏ lỡ.</div>
          <div class="itags"><span class="itag">★ Pháo hoa 21:00 · 30/4</span><span class="itag">Trần Phú · Đông nghịt</span><span class="itag">Lễ hội lớn nhất NT</span></div>
        </div>
        <div class="itype" style="color:var(--fire);border-color:rgba(220,38,38,.25);background:rgba(220,38,38,.08);">★ Pháo hoa</div>
        <div class="irow-img"><img src="${I.rNhaTrang}" alt="Nha Trang"/></div>
      </div>

      <div class="irow">
        <div class="itime ocean">22:00<br/>23:59</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">★ Sailing Club · After-party Đêm 30/4</div>
          <div class="idesc">Đêm 30/4 tại Sailing Club là đặc biệt nhất năm — DJ quốc tế, đông khách hơn ngày thường gấp đôi. Hoặc <strong>Skylight Rooftop Bar</strong> nếu muốn vibe cao cấp hơn nhìn xuống thành phố.</div>
          <div class="itags"><span class="itag">Sailing Club · Đêm 30/4</span><span class="itag">DJ + fire dance</span><span class="itag">Skylight Rooftop</span></div>
        </div>
        <div class="itype tn">After-party</div>
        <div class="irow-img"><img src="${I.rSailing1}" alt="Sailing Club"/></div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">SG → Vĩnh Hy → Quy Nhơn → Bảo Lộc → SG</div><div class="rf-r">Hành Trình 30/4 · 2026</div></div>
</div>


<!-- ══ PAGE 9 · DAY 6 · 1/5 ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Hành Trình 30/4 · 2026</div><div class="rh-r">Day 6 · Đèo Khánh Lê → Bảo Lộc <span class="rh-dot"></span> 09</div></div>
  <div class="body">
    <div class="hero" style="height:50mm;">
      <img src="${I.rDJI}" alt="Đèo Khánh Lê" style="object-position:center 50%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-forest">Day 06 · 1/5 (T5)</div>
        <div class="hero-ttl">Đèo Khánh Lê<br/>→ Bảo Lộc</div>
        <div class="hero-sub">QL27C · 140km đèo hùng vĩ · Đà Lạt ghé trưa · QL20 → Bảo Lộc thác + đồi chè · ~250km</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">1/5 · T5</div><div class="iti-head-sub">Nha Trang → QL27C Đèo Khánh Lê → Đà Lạt (ghé) → QL20 → Bảo Lộc · ~250km</div></div>

      <div class="irow">
        <div class="itime forest">06:30<br/>07:30</div>
        <div class="idot-col"><div class="idot forest"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Ăn sáng + Đổ xăng đầy bình</div>
          <div class="idesc">Hôm nay ~250km, phần lớn là đèo núi. Đổ xăng đầy tại Nha Trang — trên QL27C rất ít trạm (cách nhau 60–80km). Ăn sáng bún bò/bánh mì, khởi hành trước 7:30.</div>
          <div class="itags"><span class="itag">Đổ xăng đầy bình</span><span class="itag">Ít trạm xăng trên đèo</span></div>
        </div>
        <div class="itype to">Chuẩn bị</div>
        <div class="irow-img"><img src="${I.rNhaTrang2}" alt=""/></div>
      </div>

      <div class="irow">
        <div class="itime forest">07:30<br/>12:30</div>
        <div class="idot-col"><div class="idot forest"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ ĐÈO KHÁNH LÊ (QL27C) — Highlight Cả Trip</div>
          <div class="idesc">~140km đèo núi hùng vĩ nhất Nam Trung Bộ. Từ biển Nha Trang leo lên cao nguyên: view núi + rừng thông + suối + mây thấp. Không cần vội — mỗi khúc cua mở ra khung cảnh mới, dừng chụp hình thả ga.</div>
          <div class="itags"><span class="itag">QL27C · 140km đèo</span><span class="itag">View núi + rừng cực đỉnh</span><span class="itag">★ Đẹp nhất trip</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.rDJI}" alt="Đèo Khánh Lê trên cao"/>
            <img src="${I.rAdgahjd}" alt="Đèo núi hùng vĩ"/>
            <img src="${I.rDaLat2}" alt="Rừng thông cao nguyên"/>
          </div>
        </div>
        <div class="itype" style="color:var(--forest);border-color:var(--forest-lt);background:var(--forest-lt);">★ Highlight</div>
      </div>

      <div class="irow">
        <div class="itime forest">12:30<br/>14:00</div>
        <div class="idot-col"><div class="idot forest"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Đà Lạt — Ghé ăn trưa + cafe nhanh</div>
          <div class="idesc">Không ngủ lại Đà Lạt. Ăn lẩu gà lá é — đặc sản chỉ ngon nhất tại đây. Cafe view đồi thông 30'. Đổ xăng rồi xuống QL20 về phía Bảo Lộc.</div>
          <div class="itags"><span class="itag">Lẩu gà lá é</span><span class="itag">Cafe Đà Lạt nhanh</span><span class="itag">QL20 → Bảo Lộc</span></div>
        </div>
        <div class="itype tf">Ghé ngang</div>
        <div class="irow-img"><img src="${I.rDaLat}" alt="Đà Lạt"/></div>
      </div>

      <div class="irow">
        <div class="itime forest">14:00<br/>16:30</div>
        <div class="idot-col"><div class="idot forest"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Đà Lạt → QL20 → Bảo Lộc (~80km)</div>
          <div class="idesc">QL20 đổ dốc từ Đà Lạt (1500m) xuống Bảo Lộc (900m) — cung đường đèo đẹp, rừng thông + đồi chè bạt ngàn. Bảo Lộc: thủ đô trà Việt Nam, khí hậu mát mẻ quanh năm, ít khách du lịch hơn Đà Lạt.</div>
          <div class="itags"><span class="itag">QL20 · ~80km</span><span class="itag">Đồi chè Bảo Lộc</span><span class="itag">Mát mẻ · 900m</span></div>
        </div>
        <div class="itype tm">~80km</div>
        <div class="irow-img"><img src="${I.rDaLat2}" alt="Cao nguyên"/></div>
      </div>

      <div class="irow">
        <div class="itime forest">17:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Bảo Lộc · Check-in + Thác Đam Bri + Tối Chill</div>
          <div class="idesc">Check-in khách sạn Bảo Lộc (~300–500k). Ghé nhanh thác Đam Bri nếu còn sáng (cách trung tâm ~5km, vé 30k). Tối: cơm gà Bảo Lộc hoặc lẩu thả — rẻ, ngon, không khí cao nguyên mát lạnh. Cafe trà Bảo Lộc tối — đặc sản phải thử.</div>
          <div class="itags"><span class="itag">★ Thác Đam Bri</span><span class="itag">Cơm gà Bảo Lộc</span><span class="itag">Cafe trà đặc sản</span></div>
        </div>
        <div class="itype tn">Check-in BL</div>
        <div class="irow-img"><img src="${I.rDaLat}" alt="Bảo Lộc"/></div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">SG → Vĩnh Hy → Quy Nhơn → Bảo Lộc → SG</div><div class="rf-r">Hành Trình 30/4 · 2026</div></div>
</div>


<!-- ══ PAGE 6 · DAY 7 + BUDGET ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Hành Trình 30/4 · 2026</div><div class="rh-r">Day 7 · Về nhà <span class="rh-dot"></span> 06</div></div>
  <div class="body">
    <div class="hero" style="height:48mm;">
      <img src="${I.rTaDung}" alt="Tà Đùng" style="object-position:center 50%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-fire">Day 07 · Về nhà</div>
        <div class="hero-ttl">Bảo Lộc → Sài Gòn<br/>~200km</div>
        <div class="hero-sub">Đồi chè sáng sớm · QL20 · Bảo Lộc → Dầu Giây → Sài Gòn</div>
      </div>
    </div>

    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Day 7</div><div class="iti-head-sub">Bảo Lộc → QL20 → Dầu Giây → QL1 → SG · ~200km · Về nhà ~12h</div></div>

      <div class="irow">
        <div class="itime fire">06:00<br/>07:30</div>
        <div class="idot-col"><div class="idot fire"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Sáng Bảo Lộc · Đồi Chè + Cafe Trà</div>
          <div class="idesc">Dậy sớm ra đồi chè Bảo Lộc ngắm sương sớm — đồi chè xanh ngút ngàn lúc 6–7h sáng là đẹp nhất. Uống cafe trà đặc sản trước khi về. Ăn sáng bánh mì thịt nướng kiểu Bảo Lộc.</div>
          <div class="itags"><span class="itag">Đồi chè sáng sớm</span><span class="itag">Cafe trà đặc sản</span></div>
        </div>
        <div class="itype tp">Sáng đẹp</div>
      </div>

      <div class="irow">
        <div class="itime fire">08:00<br/>10:00</div>
        <div class="idot-col"><div class="idot fire"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Bảo Lộc → QL20 → Dầu Giây (~130km)</div>
          <div class="idesc">QL20 đẹp — xuống dốc từ cao nguyên về đồng bằng, cảnh thay đổi dần từ đồi chè, rừng thông sang miền Đông Nam Bộ. Đường tốt, ít xe ngày thường. Dừng đổ xăng Dầu Giây.</div>
          <div class="itags"><span class="itag">QL20 · ~130km</span><span class="itag">Đẹp · Ít xe</span></div>
        </div>
        <div class="itype tm">~130km</div>
      </div>

      <div class="irow">
        <div class="itime fire">10:30<br/>12:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Dầu Giây → QL1 / CT01 → Sài Gòn</div>
          <div class="idesc">Cao tốc Long Thành – Dầu Giây → SG, hoặc QL1A qua Biên Hòa. Về tới SG trước trưa ~12h. Kết thúc 7 ngày, ~1,300km, biển + hang + san hô + đèo + cao nguyên. Trip này đi là "đã".</div>
          <div class="itags"><span class="itag">CT01 Dầu Giây → SG</span><span class="itag">~70km · Về nhà ~12h</span><span class="itag">Kết thúc 1,300km</span></div>
        </div>
        <div class="itype" style="color:var(--ink);border-color:var(--line);background:var(--warm);">Về nhà</div>
      </div>
    </div>

    <div style="padding:8px 15mm 0;">
      <div class="hrule"></div>
      <div class="dlabel">Budget ước tính — 2 người</div>
      <table class="btbl">
        <tr><th>Hạng mục</th><th>Đơn giá</th><th>/người</th></tr>
        <tr><td>Xăng (~1,300km)</td><td>~1–1.2 triệu tổng</td><td><strong>~550k</strong></td></tr>
        <tr><td>Khách sạn 6 đêm</td><td>300–500k/đêm</td><td><strong>~1.2 triệu</strong></td></tr>
        <tr><td>Ăn uống 7 ngày</td><td>200–300k/ngày/người</td><td><strong>~1.5 triệu</strong></td></tr>
        <tr><td>Vé tham quan (Bích Đầm, Eo Gió...)</td><td>~100–200k</td><td><strong>~200k</strong></td></tr>
        <tr><td style="font-weight:700;">TỔNG</td><td></td><td style="font-weight:700;color:var(--fire);font-size:11pt;">~3.5 triệu</td></tr>
      </table>
    </div>
  </div>
  <div class="rf"><div class="rf-l">SG → Vĩnh Hy → Quy Nhơn → Bảo Lộc → SG</div><div class="rf-r">Hành Trình 30/4 · 2026</div></div>
</div>


<!-- ══ PAGE 7 · CHECKLIST ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Hành Trình 30/4 · 2026</div><div class="rh-r">Chuẩn bị <span class="rh-dot"></span> 07</div></div>
  <div class="body" style="padding:9mm 15mm 0;">

    <div class="mos c4" style="height:32mm;margin:0 -15mm;">
      <div class="mi"><img src="${I.rBinhThuan2}" alt="Bình Thuận"/><div class="mcap">Biển Bình Thuận</div></div>
      <div class="mi"><img src="${I.rNhaTrang2}" alt="Nha Trang"/><div class="mcap">Nha Trang city</div></div>
      <div class="mi"><img src="${I.rNhaTrang3}" alt="Vinpearl"/><div class="mcap">Vịnh Nha Trang</div></div>
      <div class="mi"><img src="${I.rDaLat}" alt="Đà Lạt"/><div class="mcap">Đà Lạt city</div></div>
    </div>

    <div class="grule" style="margin:10px 0 8px;"></div>

    <div class="dlabel">Route tổng quan</div>
    <div class="flow" style="margin-top:7px;">
      <div class="fb fb-ocean">
        <div class="fb-ey">Đường Biển · Day 1–5</div>
        <div class="fb-ttl">SG → Vĩnh Hy<br/>→ Quy Nhơn → Nha Trang</div>
        <div class="fs"><div class="fs-time">26/4</div><div class="fs-div"></div><div class="fs-txt">SG → QL55 ven biển → ★Cổ Thạch đá 7 màu → Muối Cà Ná hoàng hôn → Vĩnh Hy (~320km)</div></div>
        <div class="fs"><div class="fs-time">27/4</div><div class="fs-div"></div><div class="fs-txt">Vĩnh Hy chill: ★Bình Tiên · ★Hang Gái · ★Công viên đá · ★Đảo Nở san hô · Điện gió Mũi Dinh</div></div>
        <div class="fs"><div class="fs-time">28/4</div><div class="fs-div"></div><div class="fs-txt">Vĩnh Hy → QL1 → Đèo Cổ Mã → Gành Đá Đĩa → Quy Nhơn · ★NHẬU BẠN đêm duy nhất (~330km)</div></div>
        <div class="fs"><div class="fs-time">29/4</div><div class="fs-div"></div><div class="fs-txt">★Eo Gió + ★Hải Giang sáng → QL1D → ★Bãi Xép Phú Yên → Nha Trang check-in (~220km)</div></div>
        <div class="fs"><div class="fs-time">30/4</div><div class="fs-div"></div><div class="fs-txt">★Bích Đầm đảo sáng → chill Trần Phú · ★PHÁO HOA 30/4 · 21:00 + Sailing Club after-party</div></div>
      </div>
      <div class="fb fb-forest">
        <div class="fb-ey">Đường Núi · Day 6–7</div>
        <div class="fb-ttl">NT → Đèo Khánh Lê<br/>→ Bảo Lộc → SG</div>
        <div class="fs"><div class="fs-time">1/5</div><div class="fs-div"></div><div class="fs-txt">★QL27C Đèo Khánh Lê 140km → Đà Lạt ghé trưa → QL20 → Bảo Lộc · ★Thác Đam Bri (~250km)</div></div>
        <div class="fs"><div class="fs-time">2/5</div><div class="fs-div"></div><div class="fs-txt">Đồi chè Bảo Lộc sáng sớm → QL20 → Dầu Giây → CT01 → SG trước trưa (~200km)</div></div>
      </div>
    </div>

    <div class="hrule"></div>

    <div class="dlabel">Checklist sống còn</div>
    <div class="cgrid" style="margin-top:7px;">
      <div>
        <div class="ch-hd">Xe máy</div>
        <ul class="cul">
          <li><span class="cb"></span>Kiểm tra lốp (mòn, áp suất)</li>
          <li><span class="cb"></span>Phanh trước + sau</li>
          <li><span class="cb"></span>Thay nhớt trước trip</li>
          <li><span class="cb"></span>Đèn pha + xi nhan</li>
          <li><span class="cb"></span>Gương chiếu hậu</li>
          <li><span class="cb"></span>Bộ vá lốp khẩn cấp</li>
          <li><span class="cb"></span>Dây buộc đồ chắc</li>
        </ul>
      </div>
      <div>
        <div class="ch-hd">Đồ cá nhân</div>
        <ul class="cul">
          <li><span class="cb"></span>Áo khoác (Đà Lạt + Bảo Lộc lạnh)</li>
          <li><span class="cb"></span>Áo mưa (2 bộ)</li>
          <li><span class="cb"></span>Kem chống nắng SPF 50+</li>
          <li><span class="cb"></span>Kính mát · Nón bảo hiểm tốt</li>
          <li><span class="cb"></span>Đồ bơi (biển Day 1–4)</li>
          <li><span class="cb"></span>Sạc + pin dự phòng lớn</li>
          <li><span class="cb"></span>Thuốc (đau đầu, tiêu hóa, dầu)</li>
        </ul>
      </div>
      <div>
        <div class="ch-hd">Quan trọng</div>
        <ul class="cul">
          <li><span class="cb"></span>Bằng lái xe máy (A1/A2)</li>
          <li><span class="cb"></span>CCCD / Giấy tờ tùy thân</li>
          <li><span class="cb"></span>Google Maps offline (tải sẵn)</li>
          <li><span class="cb"></span>Tiền mặt (vùng xa ít ATM)</li>
          <li><span class="cb"></span>Đổ xăng đầy trước leo đèo</li>
          <li><span class="cb"></span>Đi trước 15h (tránh sương đèo)</li>
          <li><span class="cb"></span>Dừng nghỉ mỗi 100km</li>
        </ul>
      </div>
    </div>

    <div class="hrule"></div>

    <div class="dlabel fire" style="color:var(--fire);">Đánh giá plan</div>
    <div style="font-size:8.5pt;color:var(--muted);line-height:1.7;margin-top:5px;">
      <strong style="color:var(--ink);">Không quá mệt</strong> — mỗi ngày max 320km, có 2 ngày chill nghỉ hồi sức (Day 3 + Day 6).<br/>
      <strong style="color:var(--ink);">Biển + Hang + San hô + Đèo + Cao nguyên</strong> — đi biển lên, về núi xuống, không lặp đường.<br/>
      <strong style="color:var(--ink);">Rất hợp đi 2 thằng</strong> — tự do, linh hoạt, muốn dừng đâu thì dừng.<br/>
      <strong style="color:var(--fire);">Nói thật: plan này đi là "đã".</strong>
    </div>

  </div>
  <div class="rf"><div class="rf-l">SG → Vĩnh Hy → Quy Nhơn → Bảo Lộc → SG</div><div class="rf-r">Hành Trình 30/4 · 2026</div></div>
</div>

</body>
</html>`;

fs.writeFileSync(__dirname + '/output/roadtrip-30-4-2026.html', html);
console.log('Done: ' + Math.round(html.length/1024) + 'KB');
