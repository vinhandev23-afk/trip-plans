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
  // Real images user added
  rQuyNhon:   loadW('Quy-Nhon-Vnexpress-4396-155296-2039-6570-1617941560.webp'),
  rQuyNhon2:  loadW('dulichQuyNhon-1648878861-3106-1648880222.webp'),
  rNhaTrang:  load('280762356-359581132902753-2117815975823559575-n-1225.jpg'),
  rNhaTrang2: load('nhattrang3-16721128389061596602579.jpg'),
  rNhaTrang3: load('WWbp3Z5y-vinpearl-harbour-nha-trang.jpg'),
  rKyco:      load('z6223362576777_15a21ef00a73b25851a3972d86795475_20250113104122.jpg'),
  rBinhDinh:  loadW('binh-dinhngam-cung-duong-bien-nghin-ty-nhu-duong-bo-tay-nuoc-mydoan-cong9jpg-edited-1746614485729.webp'),
  rDJI:       load('DJI_0071.jpg'),
  rNinhThuan: load('duong-ven-bien-ninh-thuan-5.jpg'),
  rBinhThuan: loadW('tinh-binh-thuan.webp'),
  rBinhThuan2:load('anh-dep-binh-thuan-33.jpg'),
  rAdgahjd:   load('adgahjd-1755152740753.jpg'),
  rTaDung:    load('1_ve_dep_hoang_so_cua_khu_du_lich_ta_dung_cdc0407440.jpg'),
  rDaLat:     load('0829-0623_da-lat.jpg'),
  rDaLat2:    loadW('canh-dep-da-lat-1_1688379739.webp'),
};

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8"/>
<title>Road Trip 30/4 — SG → Quy Nhơn → Tà Đùng → SG</title>
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

.irow{display:grid;grid-template-columns:50px 8px 1fr auto;gap:0 9px;padding:6px 0;border-bottom:.5px solid var(--line);align-items:start;page-break-inside:avoid;}
.irow:last-child{border:none;}
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
.ittl{font-size:9pt;font-weight:700;color:var(--ink);margin-bottom:2px;line-height:1.25;}
.idesc{font-size:7.5pt;font-weight:300;color:var(--muted);line-height:1.55;}
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
        <span>Road Trip</span><div class="cv-sep"></div>
        <span class="cv-brand-sub">Biển · Đèo · Núi · 30/4/2026</span>
      </div>
      <div class="cv-badge">Lễ 30/4 · 7 Ngày</div>
    </div>
    <div class="cv-mid">
      <div class="cv-ey"><div class="cv-ey-rule"></div><span class="cv-ey-txt">Sài Gòn → Biển Quy Nhơn → Hồ Tà Đùng → Sài Gòn</span></div>
      <div class="cv-h1">Đường <em>Biển</em><br/>Về <b>Núi</b></div>
      <div class="cv-sub"><div class="cv-sub-rule"></div><span class="cv-sub-txt">7 Ngày · 6 Đêm · 2 Người · ~1,300km</span></div>
      <div class="cv-stats">
        <div class="cv-st"><div class="cv-st-n">7</div><div class="cv-st-l">Ngày · 6 đêm</div></div>
        <div class="cv-st"><div class="cv-st-n">1,300km</div><div class="cv-st-l">Tổng quãng đường</div></div>
        <div class="cv-st"><div class="cv-st-n">5</div><div class="cv-st-l">Tỉnh thành</div></div>
        <div class="cv-st"><div class="cv-st-n">~3.5tr</div><div class="cv-st-l">Budget/người</div></div>
      </div>
    </div>
    <div class="cv-foot">
      <span class="cv-foot-l">Xe máy · 2 người · Đi biển lên Quy Nhơn · Về núi qua Tà Đùng</span>
      <div class="cv-foot-r">
        <span class="cv-tag">Coastal Road</span><span class="cv-tag">Mountain Pass</span><span class="cv-tag">Food Tour</span>
      </div>
    </div>
  </div>
</div>


<!-- ══ PAGE 2 · OVERVIEW + ROUTE MAP ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Road Trip 30/4 · 2026</div><div class="rh-r">Tổng quan <span class="rh-dot"></span> 02</div></div>
  <div class="body">
    <div class="split">
      <div class="sp-img" style="width:42%;"><img src="${I.rNinhThuan}" alt="Đường ven biển" style="object-position:center 50%;"/></div>
      <div class="sp-txt" style="padding:12mm 14mm 12mm 12mm;">
        <div class="dlabel">Trip Overview</div>
        <div class="dtitle">Đi biển lên,<br/>Về núi xuống</div>
        <div class="drule"></div>
        <div class="dbody">Chuyến road trip 30/4 hoàn hảo cho 2 thằng: đi đường biển từ Sài Gòn lên Quy Nhơn qua Phan Rang, Nha Trang — ngắm biển xanh, ăn hải sản dọc đường. Về qua đường núi: đèo Khánh Lê hùng vĩ, ghé ngang Đà Lạt rồi lên Hồ Tà Đùng — "Vịnh Hạ Long của Tây Nguyên" — cắm trại giữa hồ. Biển + núi + đèo + hồ + food — đủ hết.</div>
        <table class="info-tbl">
          <tr><td>Hành trình</td><td>SG → Phan Rang → Quy Nhơn → Nha Trang → Đà Lạt → Tà Đùng → SG</td></tr>
          <tr><td>Thời gian</td><td>7 ngày 6 đêm · 30/4 – 6/5/2026</td></tr>
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
  <div class="rf"><div class="rf-l">SG → Quy Nhơn → Tà Đùng → SG</div><div class="rf-r">Road Trip 30/4 · 2026</div></div>
</div>


<!-- ══ PAGE 3 · DAY 1 + DAY 2 ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Road Trip 30/4 · 2026</div><div class="rh-r">Day 1–2 · Đường biển <span class="rh-dot"></span> 03</div></div>
  <div class="body">
    <div class="hero" style="height:48mm;">
      <img src="${I.rBinhThuan}" alt="Đường biển Bình Thuận" style="object-position:center 55%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-ocean">Day 01–02 · Đường Biển</div>
        <div class="hero-ttl">SG → Phan Rang<br/>→ Quy Nhơn</div>
        <div class="hero-sub">Hồ Tràm · Mũi Né · Vĩnh Hy · Gành Đá Đĩa · ~620km</div>
      </div>
    </div>

    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Day 1</div><div class="iti-head-sub">SG → Phan Rang · ~300km</div></div>

      <div class="irow">
        <div class="itime ocean">04:30<br/>07:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Xuất phát SG → Hồ Tràm</div>
          <div class="idesc">Đi sớm tránh nắng. Ăn sáng Hồ Tràm — hủ tiếu ven đường, cà phê đá.</div>
        </div>
        <div class="itype tm">~100km</div>
      </div>

      <div class="irow">
        <div class="itime ocean">07:00<br/>11:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Hồ Tràm → Lagi → Phan Thiết</div>
          <div class="idesc">Đường ven biển đẹp qua Lagi. Ăn trưa Phan Thiết: bánh canh chả cá, hải sản.</div>
          <div class="itags"><span class="itag">Đường ven biển</span><span class="itag">Ăn trưa Phan Thiết</span></div>
        </div>
        <div class="itype tm">~100km</div>
      </div>

      <div class="irow">
        <div class="itime ocean">12:00<br/>15:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Mũi Né → Phan Rang</div>
          <div class="idesc">Qua đồi cát Mũi Né, chạy thẳng QL1 lên Phan Rang. Check-in nghỉ ngơi.</div>
        </div>
        <div class="itype tm">~100km</div>
      </div>

      <div class="irow">
        <div class="itime ocean">16:00<br/>18:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Vịnh Vĩnh Hy — View đẹp nhất Day 1</div>
          <div class="idesc">Ghé Vĩnh Hy chiều muộn: vịnh xanh ngọc, núi bao quanh, yên tĩnh. Rất đáng dừng 1–2 tiếng ngắm và chụp hình.</div>
          <div class="itags"><span class="itag">Vịnh Vĩnh Hy</span><span class="itag">View núi + biển</span><span class="itag">Rất đáng ghé</span></div>
        </div>
        <div class="itype tp">Highlight</div>
      </div>

      <div class="irow">
        <div class="itime ocean">19:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Tối: Ngủ Phan Rang · Ăn hải sản / cơm gà</div>
          <div class="idesc">300–500k/phòng. Cơm gà Phan Rang nổi tiếng — đậm đà, giá bình dân.</div>
        </div>
        <div class="itype tn">Nghỉ đêm</div>
      </div>
    </div>

    <div class="grule" style="margin:6px 15mm;background:linear-gradient(90deg,var(--ocean),transparent);"></div>

    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Day 2</div><div class="iti-head-sub">Phan Rang → Quy Nhơn · ~320km</div></div>

      <div class="irow">
        <div class="itime ocean">05:00<br/>08:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Phan Rang → Cam Ranh → Nha Trang</div>
          <div class="idesc">Đi sớm. Cafe sáng Nha Trang — ngồi view biển, nạp năng lượng. Không cần ở lâu vì Day 4 sẽ quay lại.</div>
        </div>
        <div class="itype tm">~110km</div>
      </div>

      <div class="irow">
        <div class="itime ocean">08:30<br/>13:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Nha Trang → Phú Yên → Gành Đá Đĩa</div>
          <div class="idesc">Đường biển đẹp qua Vạn Ninh, Đại Lãnh. Check-in Gành Đá Đĩa — cột basalt volcanic xếp chồng hàng triệu năm, biểu tượng Phú Yên. Ăn trưa nhẹ.</div>
          <div class="itags"><span class="itag">Gành Đá Đĩa · Phú Yên</span><span class="itag">Volcanic basalt</span><span class="itag">Ăn trưa</span></div>
        </div>
        <div class="itype tp">Highlight</div>
      </div>

      <div class="irow">
        <div class="itime ocean">14:00<br/>17:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Phú Yên → Quy Nhơn · Check-in</div>
          <div class="idesc">~100km cuối. Đến Quy Nhơn chiều, check-in khách sạn, tắm rửa. Nghỉ ngơi.</div>
        </div>
        <div class="itype tm">~100km</div>
      </div>

      <div class="irow">
        <div class="itime ocean">18:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Tối: Hải sản + Bún chả cá Quy Nhơn</div>
          <div class="idesc">Bún chả cá Quy Nhơn — đặc sản. Hải sản tươi ven biển, giá rẻ hơn Nha Trang nhiều.</div>
        </div>
        <div class="itype tf">Food</div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">SG → Quy Nhơn → Tà Đùng → SG</div><div class="rf-r">Road Trip 30/4 · 2026</div></div>
</div>


<!-- ══ PAGE 4 · DAY 3 + DAY 4 ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Road Trip 30/4 · 2026</div><div class="rh-r">Day 3–4 · Quy Nhơn & Nha Trang <span class="rh-dot"></span> 04</div></div>
  <div class="body">
    <div class="hero" style="height:48mm;">
      <img src="${I.rQuyNhon}" alt="Quy Nhơn" style="object-position:center 50%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-ocean">Day 03–04 · Biển</div>
        <div class="hero-ttl">Chill Quy Nhơn<br/>& Nha Trang</div>
        <div class="hero-sub">Kỳ Co · Eo Gió · Dạo biển · Cafe rooftop · Giữ sức</div>
      </div>
    </div>

    <div class="mos c3" style="height:30mm;">
      <div class="mi"><img src="${I.rQuyNhon2}" alt="Quy Nhơn biển"/><div class="mcap">Biển Quy Nhơn</div></div>
      <div class="mi"><img src="${I.rKyco}" alt="Kỳ Co"/><div class="mcap">Kỳ Co · Eo Gió</div></div>
      <div class="mi"><img src="${I.rNhaTrang}" alt="Nha Trang"/><div class="mcap">Vịnh Nha Trang</div></div>
    </div>

    <div class="iti" style="padding-top:6px;">
      <div class="iti-head"><div class="iti-head-main">Day 3</div><div class="iti-head-sub">Chill Quy Nhơn · Nghỉ hồi sức</div></div>

      <div class="irow">
        <div class="itime ocean">08:00<br/>12:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Kỳ Co + Eo Gió — Biển đẹp nhất miền Trung</div>
          <div class="idesc">Kỳ Co: "Maldives Việt Nam" — nước trong vắt, cát trắng. Eo Gió: vách đá sóng vỗ, gió biển mạnh. 2 điểm gần nhau, đi nửa buổi là đủ.</div>
          <div class="itags"><span class="itag">Kỳ Co · Nước xanh ngọc</span><span class="itag">Eo Gió · Vách đá + sóng</span></div>
        </div>
        <div class="itype tp">Highlight</div>
      </div>

      <div class="irow">
        <div class="itime ocean">12:00<br/>17:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Nghỉ ngơi — Hồi sức giữa trip</div>
          <div class="idesc">Ngày quan trọng nhất: giữ sức cho 4 ngày còn lại. Ăn trưa, ngủ trưa thật sâu. Chiều tắm biển nhẹ hoặc nằm đọc sách.</div>
        </div>
        <div class="itype to">Nghỉ ngơi</div>
      </div>

      <div class="irow">
        <div class="itime ocean">18:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Tối: Bia nhẹ + Dạo biển Quy Nhơn</div>
          <div class="idesc">Hải sản nướng ven biển, bia Quy Nhơn, ngắm thành phố về đêm. Không uống nhiều — mai đi tiếp.</div>
        </div>
        <div class="itype tn">Chill</div>
      </div>
    </div>

    <div class="grule" style="margin:5px 15mm;background:linear-gradient(90deg,var(--ocean),transparent);"></div>

    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Day 4</div><div class="iti-head-sub">Quy Nhơn → Nha Trang · ~220km</div></div>

      <div class="irow">
        <div class="itime ocean">07:00<br/>11:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Quy Nhơn → Phú Yên · Cafe biển sáng</div>
          <div class="idesc">Đi ngược ven biển. Dừng cafe biển Phú Yên — bãi Xép, Gành Yến. Ăn trưa nhẹ dọc đường.</div>
          <div class="itags"><span class="itag">Ven biển ngược</span><span class="itag">Cafe Phú Yên</span></div>
        </div>
        <div class="itype tm">~120km</div>
      </div>

      <div class="irow">
        <div class="itime ocean">12:00<br/>16:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Phú Yên → Nha Trang · Check-in</div>
          <div class="idesc">~100km còn lại, đường quen. Check-in Nha Trang, nghỉ ngơi. Đây là điểm trung chuyển trước khi lên núi.</div>
        </div>
        <div class="itype tm">~100km</div>
      </div>

      <div class="irow">
        <div class="itime ocean">17:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Tối: Dạo biển + Cafe rooftop Nha Trang</div>
          <div class="idesc">Thả lỏng: đi bộ bãi biển, uống cafe rooftop nhìn vịnh Nha Trang về đêm. Ngủ sớm — mai leo đèo.</div>
        </div>
        <div class="itype tn">Chill</div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">SG → Quy Nhơn → Tà Đùng → SG</div><div class="rf-r">Road Trip 30/4 · 2026</div></div>
</div>


<!-- ══ PAGE 5 · DAY 5 + DAY 6 ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Road Trip 30/4 · 2026</div><div class="rh-r">Day 5–6 · Đường núi <span class="rh-dot"></span> 05</div></div>
  <div class="body">
    <div class="hero" style="height:48mm;">
      <img src="${I.rDJI}" alt="Đèo Khánh Lê" style="object-position:center 50%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-forest">Day 05–06 · Đường Núi</div>
        <div class="hero-ttl">Đèo Khánh Lê<br/>→ Hồ Tà Đùng</div>
        <div class="hero-sub">QL27C · Đà Lạt đi ngang · Tà Đùng cắm trại · Kayak · BBQ</div>
      </div>
    </div>

    <div class="mos c3" style="height:30mm;">
      <div class="mi"><img src="${I.rAdgahjd}" alt="Đèo"/><div class="mcap">Đèo Khánh Lê · QL27C</div></div>
      <div class="mi"><img src="${I.rDaLat2}" alt="Đà Lạt"/><div class="mcap">Đà Lạt · Ghé ngang</div></div>
      <div class="mi"><img src="${I.rTaDung}" alt="Tà Đùng"/><div class="mcap">Hồ Tà Đùng · Đắk Nông</div></div>
    </div>

    <div class="iti" style="padding-top:6px;">
      <div class="iti-head"><div class="iti-head-main">Day 5</div><div class="iti-head-sub">Nha Trang → Đà Lạt (ghé ngang) → Tà Đùng · ~250km</div></div>

      <div class="irow">
        <div class="itime forest">06:00<br/>07:00</div>
        <div class="idot-col"><div class="idot forest"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Ăn sáng + Đổ xăng đầy bình</div>
          <div class="idesc">Đi sớm — hôm nay đường dài ~250km. Đổ xăng đầy, trên đèo Khánh Lê rất ít trạm xăng.</div>
        </div>
        <div class="itype to">Chuẩn bị</div>
      </div>

      <div class="irow">
        <div class="itime forest">07:00<br/>12:00</div>
        <div class="idot-col"><div class="idot forest"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">ĐÈO KHÁNH LÊ (QL27C) — Highlight cả trip</div>
          <div class="idesc">~140km đèo núi hùng vĩ nhất Nam Trung Bộ. Từ biển Nha Trang lên cao nguyên: view núi + rừng thông + suối + mây — mỗi khúc cua mở ra khung cảnh mới. Đi chậm, dừng nhiều, chụp hình thoải mái.</div>
          <div class="itags"><span class="itag">QL27C · 140km đèo</span><span class="itag">View núi + rừng cực đỉnh</span><span class="itag">Đẹp nhất trip</span></div>
        </div>
        <div class="itype" style="color:var(--forest);border-color:var(--forest-lt);background:var(--forest-lt);">Highlight</div>
      </div>

      <div class="irow">
        <div class="itime forest">12:00<br/>13:30</div>
        <div class="idot-col"><div class="idot forest"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Đà Lạt — Ghé ngang ăn trưa + cafe</div>
          <div class="idesc">Không ngủ lại Đà Lạt. Dừng ăn lẩu gà lá é buổi trưa — đặc sản chỉ ĐL mới ngon. Cafe nhanh 1 quán view đồi thông. Đổ xăng, rồi đi tiếp.</div>
          <div class="itags"><span class="itag">Lẩu gà lá é</span><span class="itag">Cafe view đồi thông</span><span class="itag">Đổ xăng</span></div>
        </div>
        <div class="itype tf">Ghé ngang</div>
      </div>

      <div class="irow">
        <div class="itime forest">13:30<br/>16:30</div>
        <div class="idot-col"><div class="idot forest"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Đà Lạt → Hồ Tà Đùng (~110km)</div>
          <div class="idesc">Đường Đà Lạt → Đức Trọng → Gia Nghĩa → Tà Đùng. Đường đẹp qua cao nguyên, rừng thông bạt ngàn. Đổ dốc từ ĐL xuống, thoáng mát.</div>
          <div class="itags"><span class="itag">~110km</span><span class="itag">Cao nguyên Đắk Nông</span><span class="itag">Rừng thông</span></div>
        </div>
        <div class="itype tm">~110km</div>
      </div>

      <div class="irow">
        <div class="itime forest">17:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Check-in Hồ Tà Đùng — "Vịnh Hạ Long Tây Nguyên"</div>
          <div class="idesc">Nhận phòng homestay/lều bên hồ. Hồ Tà Đùng: hồ nước ngọt với hàng trăm đảo nhỏ giữa rừng nguyên sinh. Hoàng hôn trên hồ — không khí trong lành, yên tĩnh tuyệt đối. Tối BBQ bên hồ.</div>
          <div class="itags"><span class="itag">Hồ Tà Đùng · Đắk Nông</span><span class="itag">Hàng trăm đảo nhỏ</span><span class="itag">BBQ bên hồ</span></div>
        </div>
        <div class="itype tn">Cắm trại</div>
      </div>
    </div>

    <div class="grule" style="margin:5px 15mm;background:linear-gradient(90deg,var(--forest),transparent);"></div>

    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Day 6</div><div class="iti-head-sub">Chill Hồ Tà Đùng · Ngày nghỉ giữa rừng</div></div>

      <div class="irow">
        <div class="itime forest">05:30<br/>07:00</div>
        <div class="idot-col"><div class="idot forest"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Bình minh trên hồ — Sương mù giữa đảo</div>
          <div class="idesc">Dậy sớm ngắm sương mù tan dần, lộ ra hàng trăm đảo nhỏ giữa hồ. Khoảnh khắc yên bình nhất trip — hoàn toàn khác biệt với biển.</div>
        </div>
        <div class="itype tp">Highlight</div>
      </div>

      <div class="irow">
        <div class="itime forest">08:00<br/>11:00</div>
        <div class="idot-col"><div class="idot forest"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Kayak / Chèo SUP trên hồ</div>
          <div class="idesc">Thuê kayak hoặc SUP (~100–150k/giờ) chèo quanh các đảo nhỏ. Nước hồ xanh trong, rừng bao quanh, yên tĩnh. Muốn mạo hiểm hơn: thuê thuyền ra đảo giữa hồ cắm trại.</div>
          <div class="itags"><span class="itag">Kayak · SUP</span><span class="itag">Chèo quanh đảo</span><span class="itag">100–150k/giờ</span></div>
        </div>
        <div class="itype" style="color:var(--forest);border-color:var(--forest-lt);background:var(--forest-lt);">Trải nghiệm</div>
      </div>

      <div class="irow">
        <div class="itime forest">11:00<br/>16:00</div>
        <div class="idot-col"><div class="idot forest"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Nghỉ ngơi — Chill bên hồ cả ngày</div>
          <div class="idesc">Ăn trưa tại homestay. Ngủ trưa trong lều/phòng. Chiều: đọc sách, nghe nhạc, ngắm hồ. Không có wifi mạnh — đó chính là điểm hay. Disconnect hoàn toàn.</div>
        </div>
        <div class="itype to">Chill</div>
      </div>

      <div class="irow">
        <div class="itime forest">17:00<br/>18:30</div>
        <div class="idot-col"><div class="idot forest"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Hoàng hôn Tà Đùng — Golden hour trên hồ</div>
          <div class="idesc">Sunset tại Tà Đùng khác hoàn toàn với biển: ánh cam chiếu qua sương, phản chiếu trên mặt hồ phẳng lặng, núi rừng im lìm. Chụp hình tuyệt đẹp.</div>
        </div>
        <div class="itype tp">Sunset</div>
      </div>

      <div class="irow">
        <div class="itime forest">19:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Tối: BBQ bên hồ + Ngắm sao</div>
          <div class="idesc">BBQ gà, heo rừng nướng, khoai lang nướng kiểu Tây Nguyên. Lửa trại bên hồ. Bầu trời sao Tà Đùng rực rỡ — không ô nhiễm ánh sáng. Đêm cuối trip — đáng nhớ nhất.</div>
        </div>
        <div class="itype tn">BBQ Night</div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">SG → Quy Nhơn → Tà Đùng → SG</div><div class="rf-r">Road Trip 30/4 · 2026</div></div>
</div>


<!-- ══ PAGE 6 · DAY 7 + BUDGET ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Road Trip 30/4 · 2026</div><div class="rh-r">Day 7 · Về nhà <span class="rh-dot"></span> 06</div></div>
  <div class="body">
    <div class="hero" style="height:48mm;">
      <img src="${I.rTaDung}" alt="Tà Đùng" style="object-position:center 50%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-fire">Day 07 · Về nhà</div>
        <div class="hero-ttl">Tà Đùng → Sài Gòn<br/>~300km</div>
        <div class="hero-sub">Gia Nghĩa · QL14 · Đồng Xoài · Bình Dương · Sài Gòn</div>
      </div>
    </div>

    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Day 7</div><div class="iti-head-sub">Tà Đùng → Gia Nghĩa → Đồng Xoài → SG · ~300km</div></div>

      <div class="irow">
        <div class="itime fire">05:30<br/>06:30</div>
        <div class="idot-col"><div class="idot fire"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Bình minh cuối cùng — Tà Đùng sương sớm</div>
          <div class="idesc">Dậy sớm ngắm hồ lần cuối. Sương phủ trắng mặt hồ, đảo nhỏ lấp ló — khoảnh khắc magic. Chụp hình, ăn sáng, trả phòng.</div>
        </div>
        <div class="itype tp">Sunrise</div>
      </div>

      <div class="irow">
        <div class="itime fire">07:00<br/>09:30</div>
        <div class="idot-col"><div class="idot fire"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Tà Đùng → Gia Nghĩa → Đồng Xoài</div>
          <div class="idesc">Đường QL14 xuyên Tây Nguyên — rừng cao su, rẫy cà phê bạt ngàn. Đường thẳng dễ chạy. Dừng Gia Nghĩa đổ xăng, cafe nhanh.</div>
          <div class="itags"><span class="itag">QL14 · Tây Nguyên</span><span class="itag">Rừng cao su</span><span class="itag">~150km</span></div>
        </div>
        <div class="itype tm">~150km</div>
      </div>

      <div class="irow">
        <div class="itime fire">10:00<br/>11:30</div>
        <div class="idot-col"><div class="idot fire"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Ăn trưa Đồng Xoài · Nghỉ chân</div>
          <div class="idesc">Cơm tấm Bình Phước hoặc phở. Nghỉ 30 phút, nạp năng lượng cho chặng cuối.</div>
        </div>
        <div class="itype tf">Food</div>
      </div>

      <div class="irow">
        <div class="itime fire">12:00<br/>15:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Đồng Xoài → Bình Dương → Sài Gòn</div>
          <div class="idesc">~150km cuối. Qua Bình Dương vào SG. Về tới nhà khoảng 15h. Kết thúc 7 ngày, ~1,400km, biển + đèo + hồ + rừng. Nói thật: trip này đi là "đã".</div>
          <div class="itags"><span class="itag">Bình Phước → Bình Dương → SG</span><span class="itag">~150km · Đường thẳng</span><span class="itag">Về nhà</span></div>
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
        <tr><td>Vé tham quan (Kỳ Co, Eo Gió...)</td><td>~100–200k</td><td><strong>~200k</strong></td></tr>
        <tr><td style="font-weight:700;">TỔNG</td><td></td><td style="font-weight:700;color:var(--fire);font-size:11pt;">~3.5 triệu</td></tr>
      </table>
    </div>
  </div>
  <div class="rf"><div class="rf-l">SG → Quy Nhơn → Tà Đùng → SG</div><div class="rf-r">Road Trip 30/4 · 2026</div></div>
</div>


<!-- ══ PAGE 7 · CHECKLIST ══ -->
<div class="page">
  <div class="rh"><div class="rh-l">Road Trip 30/4 · 2026</div><div class="rh-r">Chuẩn bị <span class="rh-dot"></span> 07</div></div>
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
        <div class="fb-ey">Đường Biển · Day 1–4</div>
        <div class="fb-ttl">SG → Quy Nhơn<br/>→ Nha Trang</div>
        <div class="fs"><div class="fs-time">Day 1</div><div class="fs-div"></div><div class="fs-txt">SG → Hồ Tràm → Phan Thiết → Vĩnh Hy → Phan Rang (300km)</div></div>
        <div class="fs"><div class="fs-time">Day 2</div><div class="fs-div"></div><div class="fs-txt">Phan Rang → Nha Trang → Gành Đá Đĩa → Quy Nhơn (320km)</div></div>
        <div class="fs"><div class="fs-time">Day 3</div><div class="fs-div"></div><div class="fs-txt">Chill Quy Nhơn: Kỳ Co + Eo Gió + Nghỉ hồi sức</div></div>
        <div class="fs"><div class="fs-time">Day 4</div><div class="fs-div"></div><div class="fs-txt">Quy Nhơn → Phú Yên cafe → Nha Trang (220km)</div></div>
      </div>
      <div class="fb fb-forest">
        <div class="fb-ey">Đường Núi · Day 5–7</div>
        <div class="fb-ttl">Nha Trang → Đà Lạt<br/>→ Tà Đùng → SG</div>
        <div class="fs"><div class="fs-time">Day 5</div><div class="fs-div"></div><div class="fs-txt">Đèo Khánh Lê → Đà Lạt (ghé ngang) → Hồ Tà Đùng (250km)</div></div>
        <div class="fs"><div class="fs-time">Day 6</div><div class="fs-div"></div><div class="fs-txt">Chill Tà Đùng: Kayak + Sunset hồ + BBQ bên hồ</div></div>
        <div class="fs"><div class="fs-time">Day 7</div><div class="fs-div"></div><div class="fs-txt">Tà Đùng → Gia Nghĩa → Đồng Xoài → SG (300km)</div></div>
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
          <li><span class="cb"></span>Áo khoác (Đà Lạt + Tà Đùng lạnh)</li>
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
      <strong style="color:var(--ink);">Biển + Đèo + Hồ + Rừng</strong> — đi biển lên, về núi + hồ xuống, không lặp đường.<br/>
      <strong style="color:var(--ink);">Rất hợp đi 2 thằng</strong> — tự do, linh hoạt, muốn dừng đâu thì dừng.<br/>
      <strong style="color:var(--fire);">Nói thật: plan này đi là "đã".</strong>
    </div>

  </div>
  <div class="rf"><div class="rf-l">SG → Quy Nhơn → Tà Đùng → SG</div><div class="rf-r">Road Trip 30/4 · 2026</div></div>
</div>

</body>
</html>`;

fs.writeFileSync('/Users/nhantv5/roadtrip-30-4-2026.html', html);
console.log('Done: ' + Math.round(html.length/1024) + 'KB');
