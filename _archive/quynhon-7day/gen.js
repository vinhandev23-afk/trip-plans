const fs = require('fs');
const path = require('path');

const R = '/Users/nhantv5/trip-plans/roadtrip-30-4/images/';
const P = '/Users/nhantv5/trip-plans/phuquy/images/';

const loadAny = (p) => {
  if (!fs.existsSync(p) || fs.statSync(p).size < 100) return '';
  const ext = path.extname(p).toLowerCase().slice(1);
  const m = ext === 'webp' ? 'image/webp' : ext === 'png' ? 'image/png' : 'image/jpeg';
  return 'data:' + m + ';base64,' + fs.readFileSync(p).toString('base64');
};

const I = {
  cover:      loadAny(R + 'Quy-Nhon-Vnexpress-4396-155296-2039-6570-1617941560.webp'),
  quyNhon:    loadAny(R + 'dulichQuyNhon-1648878861-3106-1648880222.webp'),
  quyNhon2:   loadAny(R + 'binh-dinhngam-cung-duong-bien-nghin-ty-nhu-duong-bo-tay-nuoc-mydoan-cong9jpg-edited-1746614485729.webp'),
  binhThuan:  loadAny(R + 'anh-dep-binh-thuan-33.jpg'),
  binhThuan2: loadAny(R + 'tinh-binh-thuan.webp'),
  ninhThuan:  loadAny(R + 'duong-ven-bien-ninh-thuan-5.jpg'),
  coThach:    loadAny(R + 'co-thach-hero.jpg'),
  coThach1:   loadAny(R + 'co-thach-1.jpg'),
  coThach2:   loadAny(R + 'co-thach-2.jpg'),
  coThach3:   loadAny(R + 'co-thach-3.jpg'),
  binhTien1:  loadAny(R + 'binh-tien-1.jpg'),
  binhTien2:  loadAny(R + 'binh-tien-2.jpg'),
  binhTien3:  loadAny(R + 'binh-tien-3.jpg'),
  muoi1:      loadAny(R + 'muoi-1.jpg'),
  muoi2:      loadAny(R + 'muoi-2.jpg'),
  windmill:   loadAny(P  + 'Cánh-đồng-quạt-gió-phú-quý-ivivu-1.jpg'),
  nhaTrang:   loadAny(R + 'nhatrang-bay.jpg'),
  nhaTrang2:  loadAny(R + 'nhattrang3-16721128389061596602579.jpg'),
  nhaTrang3:  loadAny(R + 'WWbp3Z5y-vinpearl-harbour-nha-trang.jpg'),
  coastRoad:  loadAny(R + 'coastal-road.jpg'),
  sunsetCoast:loadAny(R + 'sunset-coast.jpg'),
  oceanAerial:loadAny(R + 'ocean-aerial.jpg'),
  cliffOcean: loadAny(R + 'cliff-ocean.jpg'),
  sunrise:    loadAny(R + 'sunrise-sea.jpg'),
  haiGiang1:  loadAny(R + 'hai-giang-1.jpg'),
  haiGiang2:  loadAny(R + 'hai-giang-2.jpg'),
  haiGiang3:  loadAny(R + 'hai-giang-3.jpg'),
  baiXep1:    loadAny(R + 'bai-xep-1.jpg'),
  baiXep2:    loadAny(R + 'bai-xep-2.jpg'),
  baiXep3:    loadAny(R + 'bai-xep-3.jpg'),
  sailing1:   loadAny(R + 'sailing-2.jpg'),
  sailing2:   loadAny(R + 'sailing-3.jpg'),
  surfbar1:   loadAny(R + 'surfbar-1.jpg'),
  surfbar2:   loadAny(R + 'surfbar-2.jpg'),
  qnBeach:    loadAny(R + 'qn-beach.jpg'),
  cafe:       loadAny(R + 'cafe-view.jpg'),
  dji:        loadAny(R + 'DJI_0071.jpg'),
  adg:        loadAny(R + 'adgahjd-1755152740753.jpg'),
  daLat:      loadAny(R + '0829-0623_da-lat.jpg'),
  daLat2:     loadAny(R + 'dalat-hills.jpg'),
  daLat3:     loadAny(R + 'canh-dep-da-lat-1_1688379739.webp'),
  taDung:     loadAny(R + '1_ve_dep_hoang_so_cua_khu_du_lich_ta_dung_cdc0407440.jpg'),
  lakeMist:   loadAny(R + 'lake-mist.jpg'),
  seafood:    loadAny(R + 'seafood2.jpg'),
  bbq:        loadAny(R + 'bbq-night.jpg'),
  moto:       loadAny(R + 'motorcycle.jpg'),
};

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8"/>
<title>7 Ngày Ven Biển · Quy Nhơn 2026</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700;800&display=swap');
@page{size:A4;margin:0;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --ink:#0c0f14;--ink2:#1c2433;--sand:#f5f0e8;--warm:#ede8df;
  --gold:#b8936a;--gold2:#d4b08a;
  --ocean:#0284c7;--ocean2:#0369a1;--ocean-lt:#e0f2fe;
  --coral:#e11d48;--muted:#7a8190;--line:#ddd8cf;--white:#ffffff;
}
body{font-family:'Inter',-apple-system,sans-serif;background:var(--white);color:var(--ink);-webkit-print-color-adjust:exact;print-color-adjust:exact;}
.page{width:210mm;height:297mm;overflow:hidden;page-break-after:always;display:flex;flex-direction:column;position:relative;}
.page:last-child{page-break-after:auto;}

/* ── COVER ── */
.cv-bg{position:absolute;inset:0;background-size:cover;background-position:center 45%;}
.cv-grad{position:absolute;inset:0;
  background:linear-gradient(to bottom,rgba(2,10,20,.5) 0%,transparent 28%),
             linear-gradient(to top,rgba(2,10,20,.95) 0%,rgba(2,10,20,.6) 35%,transparent 65%),
             linear-gradient(105deg,rgba(2,10,20,.35) 0%,transparent 55%);}
.cv-z{position:relative;z-index:2;display:flex;flex-direction:column;height:100%;padding:14mm 17mm 13mm;}
.cv-top{display:flex;align-items:center;justify-content:space-between;}
.cv-brand{font-size:6.5pt;font-weight:700;letter-spacing:3.5px;text-transform:uppercase;color:rgba(255,255,255,.4);display:flex;align-items:center;gap:10px;}
.cv-sep{width:1px;height:16px;background:rgba(255,255,255,.2);}
.cv-brand-sub{font-weight:300;font-size:7pt;color:rgba(255,255,255,.3);letter-spacing:1px;text-transform:none;}
.cv-badge{font-size:6.5pt;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(2,132,199,.9);border:1px solid rgba(2,132,199,.45);padding:5px 14px;background:rgba(224,242,254,.1);}
.cv-mid{flex:1;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:11mm;}
.cv-eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:14px;}
.cv-ey-rule{width:32px;height:1px;background:rgba(224,242,254,.7);}
.cv-ey-txt{font-size:7pt;font-weight:600;letter-spacing:3.5px;text-transform:uppercase;color:rgba(224,242,254,.75);}
.cv-h1{font-family:'Cormorant Garamond',serif;font-size:74pt;font-weight:300;color:#fff;line-height:.85;letter-spacing:-3px;}
.cv-h1 em{font-style:italic;color:rgba(56,189,248,.9);}
.cv-dest{font-family:'Cormorant Garamond',serif;font-size:32pt;font-weight:600;color:var(--gold2);letter-spacing:1px;margin-top:6px;}
.cv-sub{display:flex;align-items:center;gap:14px;margin-top:16px;margin-bottom:24px;}
.cv-sub-rule{width:80px;height:.5px;background:rgba(255,255,255,.18);}
.cv-sub-txt{font-size:7.5pt;font-weight:300;color:rgba(255,255,255,.45);letter-spacing:4px;text-transform:uppercase;}
.cv-stats{display:flex;border-top:.5px solid rgba(255,255,255,.1);padding-top:14px;}
.cv-st{flex:1;padding-right:16px;border-right:.5px solid rgba(255,255,255,.08);margin-right:16px;}
.cv-st:last-child{border:none;margin:0;padding:0;}
.cv-st-n{font-family:'Cormorant Garamond',serif;font-size:21pt;font-weight:500;color:#fff;line-height:1;margin-bottom:3px;}
.cv-st-l{font-size:6pt;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.28);}
.cv-foot{border-top:.5px solid rgba(255,255,255,.07);padding-top:10px;display:flex;align-items:center;justify-content:space-between;}
.cv-foot-l{font-size:6.5pt;color:rgba(255,255,255,.22);letter-spacing:.8px;}
.cv-foot-r{display:flex;gap:6px;}
.cv-tag{font-size:6pt;color:rgba(255,255,255,.27);border:.5px solid rgba(255,255,255,.1);padding:3px 9px;letter-spacing:.8px;}

/* ── CHROME ── */
.rh{height:10mm;flex-shrink:0;padding:0 17mm;display:flex;align-items:center;justify-content:space-between;border-bottom:.5px solid var(--line);}
.rh-l{font-size:6.5pt;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted);}
.rh-r{font-size:6.5pt;color:var(--muted);display:flex;align-items:center;gap:6px;}
.rh-dot{width:3px;height:3px;border-radius:50%;background:var(--ocean);display:inline-block;}
.rf{height:9mm;flex-shrink:0;padding:0 17mm;display:flex;align-items:center;justify-content:space-between;border-top:.5px solid var(--line);margin-top:auto;}
.rf-l,.rf-r{font-size:6pt;color:var(--muted);}
.body{flex:1;overflow:hidden;display:flex;flex-direction:column;}

/* ── HERO ── */
.hero{position:relative;overflow:hidden;flex-shrink:0;}
.hero img{width:100%;height:100%;object-fit:cover;display:block;}
.hero-ov{position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,8,14,.05) 0%,rgba(5,8,14,.78) 85%);}
.hero-txt{position:absolute;inset:0;padding:0 17mm 18px;display:flex;flex-direction:column;justify-content:flex-end;}
.day-chip{display:inline-block;width:fit-content;font-size:6.5pt;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#fff;padding:4px 14px;margin-bottom:8px;}
.chip-ocean{background:var(--ocean);}
.chip-coral{background:var(--coral);}
.chip-gold{background:var(--gold);}
.chip-night{background:#1e293b;}
.chip-green{background:#059669;}
.hero-ttl{font-family:'Cormorant Garamond',serif;font-size:30pt;font-weight:400;color:#fff;line-height:1.02;letter-spacing:-.5px;}
.hero-sub{font-size:7.5pt;font-weight:300;color:rgba(255,255,255,.52);letter-spacing:2.5px;text-transform:uppercase;margin-top:6px;}

/* ── OVERVIEW SPLIT ── */
.split{display:flex;flex:1;overflow:hidden;}
.sp-img{overflow:hidden;flex-shrink:0;position:relative;}
.sp-img img{width:100%;height:100%;object-fit:cover;display:block;}
.sp-txt{display:flex;flex-direction:column;justify-content:center;padding:14mm 17mm 14mm 14mm;}
.dlabel{font-size:6pt;font-weight:800;letter-spacing:3.5px;text-transform:uppercase;color:var(--ocean);margin-bottom:5px;}
.dtitle{font-family:'Cormorant Garamond',serif;font-size:24pt;font-weight:400;color:var(--ink);line-height:1.05;letter-spacing:-.3px;}
.drule{width:30px;height:1.5px;background:var(--ocean);margin:10px 0;}
.dbody{font-size:8pt;font-weight:300;color:var(--muted);line-height:1.8;}
.info-tbl{width:100%;border-collapse:collapse;margin-top:11px;}
.info-tbl tr{border-bottom:.5px solid var(--line);}
.info-tbl tr:last-child{border:none;}
.info-tbl td{padding:6px 0;font-size:8pt;vertical-align:middle;}
.info-tbl td:first-child{font-size:6pt;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);width:32%;padding-right:8px;}
.info-tbl td:last-child{font-size:9pt;font-weight:600;color:var(--ink);}
.srow{display:flex;margin-top:13px;padding-top:13px;border-top:.5px solid var(--line);}
.sc{flex:1;border-right:.5px solid var(--line);padding-right:10px;margin-right:10px;}
.sc:last-child{border:none;margin:0;padding:0;}
.sc-n{font-family:'Cormorant Garamond',serif;font-size:18pt;font-weight:600;color:var(--ocean);line-height:1;}
.sc-l{font-size:5.5pt;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);margin-top:2px;}

/* ── ROUTE STRIP ── */
.route-strip{display:flex;align-items:center;padding:9px 17mm;border-bottom:.5px solid var(--line);gap:0;flex-wrap:nowrap;overflow:hidden;}
.rs-stop{font-size:6.5pt;font-weight:700;color:var(--ink);white-space:nowrap;}
.rs-stop.key{color:var(--ocean);}
.rs-arr{font-size:7pt;color:var(--muted);padding:0 5px;}

/* ── ITINERARY ── */
.iti{padding:12px 17mm 0;}
.iti-head{display:flex;align-items:baseline;gap:12px;margin-bottom:13px;padding-bottom:9px;border-bottom:1.5px solid var(--ink);}
.iti-head-main{font-family:'Cormorant Garamond',serif;font-size:17pt;font-weight:500;color:var(--ink);line-height:1;letter-spacing:-.2px;}
.iti-head-sub{font-size:7pt;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--muted);}
.irow{display:grid;grid-template-columns:52px 10px 1fr auto;gap:0 12px;padding:9px 0;border-bottom:.5px solid var(--line);align-items:start;page-break-inside:avoid;}
.irow:last-child{border:none;}
.itime{font-size:7pt;font-weight:700;color:var(--ocean);line-height:1.25;white-space:nowrap;text-align:right;padding-top:2px;}
.idot-col{display:flex;flex-direction:column;align-items:center;padding-top:5px;}
.idot{width:7px;height:7px;border-radius:50%;border:1.5px solid var(--ocean);background:var(--white);flex-shrink:0;}
.idot.fill{background:var(--ocean);}
.idot.coral{border-color:var(--coral);background:var(--coral);}
.idot.gold{border-color:var(--gold);background:var(--gold);}
.idot.dark{border-color:var(--ink);background:var(--ink);}
.ivline{flex:1;width:1px;background:var(--line);margin-top:4px;min-height:10px;}
.ittl{font-size:9.5pt;font-weight:700;color:var(--ink);margin-bottom:3px;line-height:1.35;}
.ittl .loc{font-size:7pt;font-weight:600;color:var(--ocean);margin-left:5px;font-family:'Inter',sans-serif;}
.ick-list{margin:5px 0 7px;}
.ick{font-size:7.5pt;font-weight:400;color:#3d4452;line-height:1.7;padding-left:14px;position:relative;}
.ick::before{content:'✓';position:absolute;left:0;color:var(--ocean);font-weight:700;font-size:6.5pt;top:1px;}
.itags{display:flex;flex-wrap:wrap;gap:4px;}
.itag{font-size:6pt;font-weight:600;color:var(--muted);background:var(--warm);border:.5px solid var(--line);padding:3px 8px;}
.itag.warn{color:#b45309;background:#fffbeb;border-color:#fde68a;}
.itag.info{color:var(--ocean);background:var(--ocean-lt);border-color:#bae6fd;}
.itype{font-size:6pt;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:3px 9px;white-space:nowrap;border:.5px solid;align-self:start;margin-top:2px;}
.tm{color:var(--ocean);border-color:var(--ocean-lt);background:var(--ocean-lt);}
.ts{color:var(--coral);border-color:#ffe4e6;background:#fff1f2;}
.tp{color:#92400e;border-color:#fef3c7;background:#fffbeb;}
.tf{color:#9f1239;border-color:#ffe4e6;background:#fff1f2;}
.tr{color:#166534;border-color:#dcfce7;background:#f0fdf4;}
.tn{color:#6b21a8;border-color:#f3e8ff;background:#faf5ff;}
.to{color:var(--muted);border-color:var(--line);background:var(--warm);}

/* ── PHOTO STRIP ── */
.ps{display:grid;gap:4px;}
.ps.c3{grid-template-columns:1fr 1fr 1fr;}
.ps.c2{grid-template-columns:1fr 1fr;}
.ps-h26{height:27mm;}
.ps-h22{height:23mm;}
.ps img{width:100%;height:100%;object-fit:cover;display:block;}

/* ── MOSAIC ── */
.mos{display:grid;gap:3px;flex-shrink:0;}
.mos.c3{grid-template-columns:2fr 1fr 1fr;}
.mos.c4{grid-template-columns:1fr 1fr 1fr 1fr;}
.mi{overflow:hidden;position:relative;}
.mi img{width:100%;height:100%;object-fit:cover;display:block;}
.mcap{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.55));padding:12px 8px 5px;font-size:5.5pt;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.85);}

/* ── BUDGET ── */
.btbl{width:100%;border-collapse:collapse;margin-top:8px;}
.btbl th{font-size:6pt;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);padding:6px 9px;border-bottom:1.5px solid var(--ink);text-align:left;}
.btbl td{padding:6px 9px;font-size:7.5pt;border-bottom:.5px solid var(--line);}
.btbl tr:last-child td{border-bottom:1.5px solid var(--ink);font-weight:700;}

/* ── CHECKLIST ── */
.cgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;}
.ch-hd{font-size:7.5pt;font-weight:700;color:var(--ink);padding:5px 0;border-bottom:1px solid var(--line);margin-bottom:6px;}
.cul{list-style:none;display:flex;flex-direction:column;gap:4px;}
.cul li{font-size:7pt;color:#3d4452;display:flex;align-items:flex-start;gap:6px;line-height:1.4;}
.cb{width:10px;height:10px;border:.75px solid var(--line);background:white;flex-shrink:0;margin-top:1px;}

/* ── MISC ── */
.grule{height:.5px;background:linear-gradient(90deg,var(--ocean),transparent);margin:10px 0;}
.hrule{height:1.5px;background:var(--ink);margin:13px 0;}
.flow{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
.fb{padding:12px 13px;}
.fb-ocean{background:var(--ocean2);}
.fb-dark{background:var(--ink2);}
.fb-ey{font-size:6pt;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:rgba(224,242,254,.7);margin-bottom:4px;}
.fb-ttl{font-family:'Cormorant Garamond',serif;font-size:14pt;font-weight:400;color:white;margin-bottom:8px;line-height:1.05;}
.fs{display:flex;align-items:center;gap:6px;padding:3.5px 0;border-bottom:.5px solid rgba(255,255,255,.07);}
.fs:last-child{border:none;}
.fs-lbl{font-size:6.5pt;font-weight:700;color:rgba(224,242,254,.65);width:38px;flex-shrink:0;text-align:right;}
.fs-div{width:.5px;height:10px;background:rgba(255,255,255,.15);flex-shrink:0;}
.fs-txt{flex:1;font-size:7pt;color:rgba(255,255,255,.72);line-height:1.3;}
</style>
</head>
<body>

<!-- ══════════════ COVER ══════════════ -->
<div class="page">
  <div class="cv-bg" style="background-image:url('${I.cover}');background-position:center 40%;"></div>
  <div class="cv-grad"></div>
  <div class="cv-z">
    <div class="cv-top">
      <div class="cv-brand">
        <span>Road Trip</span><div class="cv-sep"></div>
        <span class="cv-brand-sub">SG · Ninh Thuận · Phú Yên · Bình Định</span>
      </div>
      <div class="cv-badge">26/4 – 2/5 · 2026</div>
    </div>
    <div class="cv-mid">
      <div class="cv-eyebrow"><div class="cv-ey-rule"></div><span class="cv-ey-txt">Ven biển · Đèo Cả · Đèo Khánh Lê · Tà Đùng</span></div>
      <div class="cv-h1">7 Ngày<br/><em>Ven Biển</em></div>
      <div class="cv-dest">★ Quy Nhơn ★</div>
      <div class="cv-sub"><div class="cv-sub-rule"></div><span class="cv-sub-txt">SG → Ninh Thuận → Tuy Hòa → Quy Nhơn → Nha Trang → Tà Đùng</span></div>
      <div class="cv-stats">
        <div class="cv-st"><div class="cv-st-n">7</div><div class="cv-st-l">Ngày · 6 Đêm</div></div>
        <div class="cv-st"><div class="cv-st-n">~1.3k</div><div class="cv-st-l">Km tổng</div></div>
        <div class="cv-st"><div class="cv-st-n">2</div><div class="cv-st-l">Người · Xe máy</div></div>
        <div class="cv-st"><div class="cv-st-n">30/4</div><div class="cv-st-l">Pháo hoa Nha Trang</div></div>
      </div>
    </div>
    <div class="cv-foot">
      <span class="cv-foot-l">Khởi hành Chủ Nhật 26/4 · Về nhà Thứ Bảy 2/5</span>
      <div class="cv-foot-r">
        <span class="cv-tag">Biển xanh</span><span class="cv-tag">Đèo đẹp</span><span class="cv-tag">Food tour</span><span class="cv-tag">Camping</span>
      </div>
    </div>
  </div>
</div>


<!-- ══════════════ PAGE 2 · OVERVIEW ══════════════ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">7 Ngày Ven Biển · Quy Nhơn 2026</div>
    <div class="rh-r">Tổng quan <span class="rh-dot"></span> 02</div>
  </div>
  <div class="body">
    <div class="split">
      <div class="sp-img" style="width:43%;">
        <img src="${I.quyNhon2}" alt="Quy Nhơn coastal road" style="object-position:center 50%;"/>
      </div>
      <div class="sp-txt">
        <div class="dlabel">Trip Overview</div>
        <div class="dtitle">Hành trình<br/>ven biển Nam Trung Bộ</div>
        <div class="drule"></div>
        <div class="dbody">Chuyến road trip 7 ngày dọc bờ biển từ SG lên Quy Nhơn — nước xanh ngọc, đèo cao gió lộng, hải sản tươi và đêm 30/4 pháo hoa Nha Trang. Điểm nhấn: Cổ Thạch đá đen, Vĩnh Hy ra đảo, Đèo Cả huyền thoại, Eo Gió + Kỳ Co Quy Nhơn, Đèo Khánh Lê và cắm trại Hồ Tà Đùng.</div>
        <table class="info-tbl">
          <tr><td>Khởi hành</td><td>Chủ Nhật 26/4/2026 · Sáng sớm</td></tr>
          <tr><td>Về nhà</td><td>Thứ Bảy 2/5/2026 · Buổi trưa</td></tr>
          <tr><td>Người đi</td><td>2 người · 1 xe máy</td></tr>
          <tr><td>Phương tiện</td><td>Xe máy · Phà (đảo Vĩnh Hy) · Kayak (Tà Đùng)</td></tr>
          <tr><td>Ngủ lại</td><td>Phan Rang · Tuy Hòa · Quy Nhơn (2đ) · Nha Trang · Tà Đùng ⛺</td></tr>
          <tr><td>Highlight 30/4</td><td>Pháo hoa bãi Trần Phú · Nha Trang</td></tr>
        </table>
        <div class="srow">
          <div class="sc"><div class="sc-n">~185</div><div class="sc-l">km/ngày tb</div></div>
          <div class="sc"><div class="sc-n">5</div><div class="sc-l">Đèo đẹp</div></div>
          <div class="sc"><div class="sc-n">4</div><div class="sc-l">Điểm biển★</div></div>
          <div class="sc"><div class="sc-n">30/4</div><div class="sc-l">Lễ + pháo hoa</div></div>
        </div>
      </div>
    </div>
    <div class="route-strip">
      <span class="rs-stop">SG</span><span class="rs-arr">→</span>
      <span class="rs-stop">Cổ Thạch</span><span class="rs-arr">→</span>
      <span class="rs-stop key">Ninh Thuận ★</span><span class="rs-arr">→</span>
      <span class="rs-stop">Nha Trang</span><span class="rs-arr">→</span>
      <span class="rs-stop">Đèo Cả</span><span class="rs-arr">→</span>
      <span class="rs-stop">Vũng Rô</span><span class="rs-arr">→</span>
      <span class="rs-stop">Tuy Hòa</span><span class="rs-arr">→</span>
      <span class="rs-stop key">Quy Nhơn ★★</span><span class="rs-arr">→</span>
      <span class="rs-stop key">Nha Trang 30/4 ★</span><span class="rs-arr">→</span>
      <span class="rs-stop">Đèo Khánh Lê</span><span class="rs-arr">→</span>
      <span class="rs-stop">Đà Lạt</span><span class="rs-arr">→</span>
      <span class="rs-stop key">Tà Đùng ⛺</span><span class="rs-arr">→</span>
      <span class="rs-stop">SG</span>
    </div>
  </div>
  <div class="rf"><div class="rf-l">Road Trip · SG → Quy Nhơn → Tà Đùng</div><div class="rf-r">7 Ngày · 26/4–2/5/2026</div></div>
</div>


<!-- ══════════════ PAGE 3 · DAY 1 ══════════════ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">7 Ngày Ven Biển · Quy Nhơn 2026</div>
    <div class="rh-r">Day 1 · Chủ Nhật 26/4 <span class="rh-dot"></span> 03</div>
  </div>
  <div class="body">
    <div class="hero" style="height:56mm;">
      <img src="${I.coThach}" alt="Ninh Thuận coastal" style="object-position:center 55%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-ocean">Day 01 · Chủ Nhật 26/4</div>
        <div class="hero-ttl">Biển Bình Thuận<br/>&amp; Thiên đường Ninh Thuận</div>
        <div class="hero-sub">DT719 Ven biển · Cổ Thạch · Điện gió · Vĩnh Hy ra đảo · Hang Rái</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Lịch trình</div><div class="iti-head-sub">Day 01 · SG → Phan Rang · ~250km</div></div>

      <div class="irow">
        <div class="itime">06:00<br/>09:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">SG → DT719 ven biển Bình Thuận</div>
          <div class="ick-list">
            <div class="ick">Mũi Né — Bàu Trắng đồi cát trắng (dừng 20')</div>
            <div class="ick">QL55 → DT719 ven biển hoang sơ Bình Thuận</div>
          </div>
          <div class="itags"><span class="itag info">~180km · 3.5h lái</span><span class="itag warn">Đổ đầy xăng trước khi rời SG</span></div>
        </div>
        <div class="itype tm">Transit</div>
      </div>

      <div class="irow">
        <div class="itime">09:30<br/>11:00</div>
        <div class="idot-col"><div class="idot fill"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ Cổ Thạch Beach <span class="loc">· Tuy Phong, Bình Thuận</span></div>
          <div class="ick-list">
            <div class="ick">Chụp hình vách đá đen volcanic ven biển</div>
            <div class="ick">Tắm biển nước xanh ngọc, sóng vừa</div>
            <div class="ick">Đẹp nhất: sáng sớm ánh vàng chiếu vào đá</div>
          </div>
          <div class="itags"><span class="itag info">GPS: 11.1°N 108.4°E</span><span class="itag">Mở cả ngày</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.coThach1}" alt="Cổ Thạch đá đen"/>
            <img src="${I.coThach2}" alt="Cổ Thạch biển xanh"/>
            <img src="${I.coThach3}" alt="Cổ Thạch cảnh đẹp"/>
          </div>
        </div>
        <div class="itype tp">Photo ★</div>
      </div>

      <div class="irow">
        <div class="itime">11:30<br/>14:30</div>
        <div class="idot-col"><div class="idot fill"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ Vĩnh Hy — Ra đảo + Snorkel <span class="loc">· Ninh Thuận</span></div>
          <div class="ick-list">
            <div class="ick">Thuê thuyền/kayak ra đảo san hô (~100–150k/người)</div>
            <div class="ick">Snorkel nước trong thấy đáy, san hô màu sắc</div>
            <div class="ick">Hải sản tươi ăn trưa ven vịnh Vĩnh Hy</div>
          </div>
          <div class="itags"><span class="itag info">Vịnh Vĩnh Hy · Núi Chúa NP</span><span class="itag warn">Đặt thuyền sáng sớm tại bến</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.binhTien1}" alt="Vịnh Vĩnh Hy"/>
            <img src="${I.binhTien2}" alt="Đảo Ninh Thuận"/>
            <img src="${I.binhTien3}" alt="Nước xanh đảo"/>
          </div>
        </div>
        <div class="itype tr">Đảo ★</div>
      </div>

      <div class="irow">
        <div class="itime">15:00<br/>16:00</div>
        <div class="idot-col"><div class="idot fill"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ Hang Rái — Công viên đá <span class="loc">· Gần Vĩnh Hy</span></div>
          <div class="ick-list">
            <div class="ick">Trèo đá volcanic đen sát biển, cảnh hoang sơ</div>
            <div class="ick">View toàn cảnh Vịnh Vĩnh Hy từ trên cao</div>
          </div>
          <div class="itags"><span class="itag warn">Mang giày đế bám, đá trơn</span><span class="itag info">Cách Vĩnh Hy ~3km</span></div>
        </div>
        <div class="itype tp">Photo ★</div>
      </div>

      <div class="irow">
        <div class="itime">16:30<br/>17:00</div>
        <div class="idot-col"><div class="idot gold"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Cánh đồng điện gió <span class="loc">· Phan Rang</span></div>
          <div class="ick-list">
            <div class="ick">Dừng chụp hình turbine gió dọc QL702</div>
            <div class="ick">Đồng muối + điện gió = cảnh Ninh Thuận rất riêng</div>
          </div>
          <div class="itags"><span class="itag info">Dọc QL702 · Ảnh đẹp chiều tà</span></div>
        </div>
        <div class="itype tp">Photo</div>
      </div>

      <div class="irow">
        <div class="itime">18:00<br/>21:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Phan Rang — Check-in + Đặc sản tối</div>
          <div class="ick-list">
            <div class="ick">Bánh căn Ninh Thuận (đặc sản chỉ ở đây)</div>
            <div class="ick">Nho tươi, táo Phan Rang mua về</div>
          </div>
          <div class="itags"><span class="itag">Ngủ: Phan Rang city</span><span class="itag info">Khách sạn 200–400k/đêm</span></div>
        </div>
        <div class="itype tf">Food · Ngủ</div>
      </div>

    </div>
  </div>
  <div class="rf"><div class="rf-l">Day 01 · SG → Phan Rang</div><div class="rf-r">~250km · 7 Ngày Ven Biển</div></div>
</div>


<!-- ══════════════ PAGE 4 · DAY 2 ══════════════ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">7 Ngày Ven Biển · Quy Nhơn 2026</div>
    <div class="rh-r">Day 2 · Thứ Hai 27/4 <span class="rh-dot"></span> 04</div>
  </div>
  <div class="body">
    <div class="hero" style="height:56mm;">
      <img src="${I.nhaTrang}" alt="Nha Trang bay" style="object-position:center 40%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-ocean">Day 02 · Thứ Hai 27/4</div>
        <div class="hero-ttl">Nha Trang · Đèo Cả<br/>&amp; Vũng Rô huyền bí</div>
        <div class="hero-sub">Phan Rang → Cam Ranh → Nha Trang → Đèo Lương Sơn → Đèo Cả → QL29 → Tuy Hòa</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Lịch trình</div><div class="iti-head-sub">Day 02 · Phan Rang → Tuy Hòa · ~180km</div></div>

      <div class="irow">
        <div class="itime">07:30<br/>10:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Phan Rang → Cam Ranh → Nha Trang</div>
          <div class="ick-list">
            <div class="ick">Vào Nguyễn Chí Thanh → Cầu Long Hồ → Nha Trang</div>
            <div class="ick">Ride dọc Trần Phú (bờ biển đẹp nhất VN) → Phạm Văn Đồng</div>
          </div>
          <div class="itags"><span class="itag info">~90km từ Phan Rang</span><span class="itag">Ghé cà phê view biển nếu muốn</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.nhaTrang2}" alt="Nha Trang bay"/>
            <img src="${I.nhaTrang3}" alt="Nha Trang Vinpearl"/>
            <img src="${I.nhaTrang}" alt="Nha Trang coast"/>
          </div>
        </div>
        <div class="itype tm">Transit</div>
      </div>

      <div class="irow">
        <div class="itime">10:30<br/>12:30</div>
        <div class="idot-col"><div class="idot fill"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ Đèo Lương Sơn → Đèo Cả <span class="loc">· Khánh Hòa–Phú Yên</span></div>
          <div class="ick-list">
            <div class="ick">Đèo Lương Sơn: view Cam Ranh + đầm phá từ trên cao</div>
            <div class="ick">Đèo Cả huyền thoại: dốc cao, đường cua tay áo, mây mù</div>
            <div class="ick">Gần cuối Đèo Cả: quẹo phải vào QL29 ven biển</div>
          </div>
          <div class="itags"><span class="itag warn">QL29 ít người biết, không cần toll</span><span class="itag info">View biển từ đèo rất đẹp</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.coastRoad}" alt="Đèo ven biển"/>
            <img src="${I.cliffOcean}" alt="Vách đá biển"/>
            <img src="${I.oceanAerial}" alt="Biển nhìn từ cao"/>
          </div>
        </div>
        <div class="itype tp">Scenic ★</div>
      </div>

      <div class="irow">
        <div class="itime">12:30<br/>14:00</div>
        <div class="idot-col"><div class="idot fill"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ Vũng Rô — Vịnh kín biển xanh <span class="loc">· Phú Yên</span></div>
          <div class="ick-list">
            <div class="ick">Tắm vịnh sóng lặng, nước trong vắt nhìn thấy đáy</div>
            <div class="ick">Hải sản trưa ven vịnh: tôm hùm con, ốc, cá chiên</div>
          </div>
          <div class="itags"><span class="itag info">Vịnh Vũng Rô · Phú Yên</span><span class="itag">Hải sản ~100–200k/người</span></div>
        </div>
        <div class="itype tr">Biển ★</div>
      </div>

      <div class="irow">
        <div class="itime">14:30<br/>19:00</div>
        <div class="idot-col"><div class="idot gold"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Tuy Hòa — Check-in + Sunset bãi biển</div>
          <div class="ick-list">
            <div class="ick">Tháp Nhạn (di tích Chăm, view toàn thành phố)</div>
            <div class="ick">Bãi Tuy Hòa: nước xanh, dài, ít khách du lịch</div>
            <div class="ick">Bún cá Phú Yên đêm (đặc sản nổi tiếng)</div>
          </div>
          <div class="itags"><span class="itag">Ngủ: Tuy Hòa</span><span class="itag info">KS: Cendeluxe / Sài Gòn–Phú Yên</span></div>
        </div>
        <div class="itype tf">Ngủ · Food</div>
      </div>

    </div>
  </div>
  <div class="rf"><div class="rf-l">Day 02 · Phan Rang → Tuy Hòa</div><div class="rf-r">~180km · 7 Ngày Ven Biển</div></div>
</div>


<!-- ══════════════ PAGE 5 · DAY 3 ══════════════ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">7 Ngày Ven Biển · Quy Nhơn 2026</div>
    <div class="rh-r">Day 3 · Thứ Ba 28/4 <span class="rh-dot"></span> 05</div>
  </div>
  <div class="body">
    <div class="hero" style="height:56mm;">
      <img src="${I.haiGiang1}" alt="Quy Nhơn beach" style="object-position:center 50%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-coral">Day 03 · Thứ Ba 28/4</div>
        <div class="hero-ttl">Tới Quy Nhơn<br/>&amp; Eo Gió Sunset</div>
        <div class="hero-sub">Tuy Hòa → QL1D coastal → Quy Nhơn → Eo Gió → Kỳ Co · ~90km</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Lịch trình</div><div class="iti-head-sub">Day 03 · Tuy Hòa → Quy Nhơn · ~90km</div></div>

      <div class="irow">
        <div class="itime">07:30<br/>11:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Tuy Hòa → QL1D ven biển → Quy Nhơn</div>
          <div class="ick-list">
            <div class="ick">QL1D ngắn hơn QL1A, đi sát biển hơn</div>
            <div class="ick">Đèo Cù Mông (ranh Phú Yên–Bình Định): view biển Bình Định</div>
          </div>
          <div class="itags"><span class="itag info">~90km · 2h lái</span><span class="itag">Dừng đỉnh Đèo Cù Mông chụp hình</span></div>
        </div>
        <div class="itype tm">Transit</div>
      </div>

      <div class="irow">
        <div class="itime">11:00<br/>13:00</div>
        <div class="idot-col"><div class="idot gold"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Check-in Quy Nhơn + Cơm trưa</div>
          <div class="ick-list">
            <div class="ick">Nhận phòng, nghỉ ngơi, bôi kem chống nắng</div>
            <div class="ick">Bánh xèo tôm nhảy Quy Nhơn (đặc sản số 1)</div>
          </div>
          <div class="itags"><span class="itag info">Nên book KS gần biển: Avani / Seagull</span></div>
        </div>
        <div class="itype tr">Check-in</div>
      </div>

      <div class="irow">
        <div class="itime">14:00<br/>17:30</div>
        <div class="idot-col"><div class="idot fill"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ Eo Gió — Vách đá + Sóng biển <span class="loc">· Nhơn Lý</span></div>
          <div class="ick-list">
            <div class="ick">Đứng mỏm đá nhìn sóng vỗ — ảnh siêu đẹp</div>
            <div class="ick">Đường đi bộ 15' từ bãi đậu xe qua rừng dương</div>
            <div class="ick">Chờ sunset 17:00–17:30: ánh vàng + sóng trắng</div>
          </div>
          <div class="itags"><span class="itag info">GPS: 13.72°N 109.31°E</span><span class="itag warn">Sóng to khi biển động</span><span class="itag">Vào cửa: ~10k</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.haiGiang2}" alt="Eo Gió vách đá"/>
            <img src="${I.haiGiang3}" alt="Eo Gió sóng biển"/>
            <img src="${I.baiXep1}" alt="Biển Quy Nhơn"/>
          </div>
        </div>
        <div class="itype ts">Sunset ★</div>
      </div>

      <div class="irow">
        <div class="itime">19:00<br/>22:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Cầu Thị Nại đêm + Nhậu biển</div>
          <div class="ick-list">
            <div class="ick">Đi bộ Cầu Thị Nại đêm (dài 2.5km, đèn LED)</div>
            <div class="ick">Nhậu hải sản khu An Dương Vương / Phạm Hùng</div>
          </div>
          <div class="itags"><span class="itag">Rong nho nướng mỡ hành 😍</span><span class="itag info">Bar biển mở đến 23h</span></div>
        </div>
        <div class="itype tn">Đêm</div>
      </div>

    </div>
  </div>
  <div class="rf"><div class="rf-l">Day 03 · Tuy Hòa → Quy Nhơn</div><div class="rf-r">~90km · 7 Ngày Ven Biển</div></div>
</div>


<!-- ══════════════ PAGE 6 · DAY 4 ══════════════ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">7 Ngày Ven Biển · Quy Nhơn 2026</div>
    <div class="rh-r">Day 4 · Thứ Tư 29/4 <span class="rh-dot"></span> 06</div>
  </div>
  <div class="body">
    <div class="hero" style="height:56mm;">
      <img src="${I.quyNhon}" alt="Quy Nhơn aerial" style="object-position:center 45%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-coral">Day 04 · Thứ Tư 29/4</div>
        <div class="hero-ttl">Quy Nhơn<br/>Full Day ★★</div>
        <div class="hero-sub">Kỳ Co sáng · Shopping · Pre-30/4 Party · Bar ven biển</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Lịch trình</div><div class="iti-head-sub">Day 04 · Quy Nhơn · 0km</div></div>

      <div class="irow">
        <div class="itime">07:00<br/>11:30</div>
        <div class="idot-col"><div class="idot fill"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ Kỳ Co — Nước xanh ngọc bích <span class="loc">· Nhơn Lý</span></div>
          <div class="ick-list">
            <div class="ick">Đặt vé thuyền từ bến Nhơn Lý (~50k/người khứ hồi)</div>
            <div class="ick">Snorkel san hô, tắm biển nước trong vắt</div>
            <div class="ick">Đẹp nhất: 7–9h sáng trước khi đông khách</div>
          </div>
          <div class="itags"><span class="itag warn">Book thuyền sớm (số lượng có hạn)</span><span class="itag info">GPS: 13.69°N 109.32°E</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.baiXep2}" alt="Kỳ Co nước xanh"/>
            <img src="${I.baiXep3}" alt="Kỳ Co bãi đá"/>
            <img src="${I.qnBeach}" alt="Quy Nhơn beach"/>
          </div>
        </div>
        <div class="itype tr">Biển ★★</div>
      </div>

      <div class="irow">
        <div class="itime">13:00<br/>16:00</div>
        <div class="idot-col"><div class="idot gold"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Shopping Quy Nhơn <span class="loc">· Trung tâm</span></div>
          <div class="ick-list">
            <div class="ick">Rong nho tươi Nhơn Lý — đặc sản, giá rẻ hơn SG 3×</div>
            <div class="ick">Chả cá Quy Nhơn, bánh ít lá gai, nước mắm Nhơn Lý</div>
            <div class="ick">Vincom Plaza hoặc Chợ Lớn Quy Nhơn</div>
          </div>
          <div class="itags"><span class="itag info">Rong nho: chợ Đầm · Nhơn Lý</span><span class="itag">Mang thùng xốp đựng đồ tươi</span></div>
        </div>
        <div class="itype tf">Shopping</div>
      </div>

      <div class="irow">
        <div class="itime">17:00<br/>19:00</div>
        <div class="idot-col"><div class="idot fill"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ Sailing Club / Bar ven biển <span class="loc">· Bờ biển QN</span></div>
          <div class="ick-list">
            <div class="ick">Sunset cocktail nhìn ra biển — vibe chuẩn</div>
            <div class="ick">Khu Phạm Hùng / An Dương Vương: nhiều lựa chọn</div>
          </div>
          <div class="itags"><span class="itag info">Đêm trước 30/4 · Đông nhóm trẻ từ SG lên</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.sailing1}" alt="Sailing Club"/>
            <img src="${I.sailing2}" alt="Bar ven biển"/>
            <img src="${I.surfbar1}" alt="Surf bar Quy Nhơn"/>
          </div>
        </div>
        <div class="itype tn">Party ★★★</div>
      </div>

      <div class="irow">
        <div class="itime">19:30<br/>23:00</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Pre-30/4 · Nhậu biển + Kết bạn</div>
          <div class="ick-list">
            <div class="ick">Hải sản nướng bờ biển + bia lạnh đêm gió</div>
            <div class="ick">Đêm trước lễ — nhiều nhóm bạn trẻ SG/HN lên sớm</div>
          </div>
          <div class="itags"><span class="itag">Ngủ: Quy Nhơn đêm 2</span></div>
        </div>
        <div class="itype tn">Đêm ★★★</div>
      </div>

    </div>
  </div>
  <div class="rf"><div class="rf-l">Day 04 · Quy Nhơn Full Day</div><div class="rf-r">0km · 7 Ngày Ven Biển</div></div>
</div>


<!-- ══════════════ PAGE 7 · DAY 5 ══════════════ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">7 Ngày Ven Biển · Quy Nhơn 2026</div>
    <div class="rh-r">Day 5 · Thứ Năm 30/4 🎉 <span class="rh-dot"></span> 07</div>
  </div>
  <div class="body">
    <div class="hero" style="height:56mm;">
      <img src="${I.nhaTrang3}" alt="Nha Trang Vinpearl" style="object-position:center 50%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-gold">Day 05 · 30/4 Lễ 🎉</div>
        <div class="hero-ttl">Quy Nhơn → Nha Trang<br/>Pháo hoa 30/4 ★</div>
        <div class="hero-sub">QL1A south · Đèo Cù Mông · Nha Trang · Trần Phú · Pháo hoa 21:00</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Lịch trình</div><div class="iti-head-sub">Day 05 · Quy Nhơn → Nha Trang · ~200km</div></div>

      <div class="irow">
        <div class="itime">07:00<br/>11:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Quy Nhơn → QL1A south → Nha Trang</div>
          <div class="ick-list">
            <div class="ick">Đèo Cù Mông (Bình Định–Phú Yên): dừng view đồi xanh + biển</div>
            <div class="ick">Đèo Cả lần này đi từ phía Bắc xuống (khác Day 2)</div>
          </div>
          <div class="itags"><span class="itag info">~200km · 3.5h · Đường QL1A tốt</span><span class="itag warn">30/4 đông xe, xuất phát sớm</span></div>
        </div>
        <div class="itype tm">Transit</div>
      </div>

      <div class="irow">
        <div class="itime">11:00<br/>14:00</div>
        <div class="idot-col"><div class="idot fill"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Nha Trang — Check-in + Trần Phú bãi biển</div>
          <div class="ick-list">
            <div class="ick">Nhận phòng KS gần biển Trần Phú</div>
            <div class="ick">Tắm biển, chill bãi cát dài nhất Nha Trang</div>
            <div class="ick">Cơm trưa bún chả cá Nha Trang / hải sản</div>
          </div>
          <div class="itags"><span class="itag info">Book KS trước 1 tuần — 30/4 full</span><span class="itag warn">Giá KS tăng 2-3× dịp lễ</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.nhaTrang}" alt="Nha Trang bay"/>
            <img src="${I.nhaTrang2}" alt="Nha Trang beach"/>
            <img src="${I.sunsetCoast}" alt="Sunset coast"/>
          </div>
        </div>
        <div class="itype tr">Check-in</div>
      </div>

      <div class="irow">
        <div class="itime">17:00<br/>22:30</div>
        <div class="idot-col"><div class="idot coral"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★★★ Pháo hoa 30/4 · Bãi Trần Phú <span class="loc">· Nha Trang</span></div>
          <div class="ick-list">
            <div class="ick">Ra bãi biển Trần Phú giữ chỗ trước 19h</div>
            <div class="ick">Pháo hoa bắn lúc 21:00 — nhìn từ bãi biển là đẹp nhất</div>
            <div class="ick">Sau pháo hoa: bar phố đêm Nha Trang, nhạc sống</div>
          </div>
          <div class="itags"><span class="itag info">Pháo hoa: 21:00–21:20 tại Trần Phú</span><span class="itag warn">Đông người, giữ xe cẩn thận</span></div>
        </div>
        <div class="itype ts">30/4 ★★★</div>
      </div>

    </div>
  </div>
  <div class="rf"><div class="rf-l">Day 05 · 30/4 · Nha Trang</div><div class="rf-r">~200km · 7 Ngày Ven Biển</div></div>
</div>


<!-- ══════════════ PAGE 8 · DAY 6 ══════════════ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">7 Ngày Ven Biển · Quy Nhơn 2026</div>
    <div class="rh-r">Day 6 · Thứ Sáu 1/5 <span class="rh-dot"></span> 08</div>
  </div>
  <div class="body">
    <div class="hero" style="height:56mm;">
      <img src="${I.dji}" alt="Đèo Khánh Lê aerial" style="object-position:center 40%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip chip-night">Day 06 · Thứ Sáu 1/5</div>
        <div class="hero-ttl">Đèo Khánh Lê<br/>Đà Lạt → Hồ Tà Đùng ⛺</div>
        <div class="hero-sub">QL27C đèo đẹp · Hồ Xuân Hương café · QL20 → Tà Đùng camping</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Lịch trình</div><div class="iti-head-sub">Day 06 · Nha Trang → Tà Đùng · ~290km</div></div>

      <div class="irow">
        <div class="itime">07:30<br/>10:00</div>
        <div class="idot-col"><div class="idot fill"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ Đèo Khánh Lê (QL27C) <span class="loc">· Nha Trang → Đà Lạt</span></div>
          <div class="ick-list">
            <div class="ick">Cua tay áo liên tục, cảnh rừng + mây — đẹp nhất miền Trung</div>
            <div class="ick">Dừng 2–3 điểm view núi rừng Khánh Lê</div>
            <div class="ick">Buổi sáng sương mù = ảnh huyền ảo</div>
          </div>
          <div class="itags"><span class="itag warn">Đường ẩm, sương mù sáng · Đi chậm</span><span class="itag info">~60km · 1.5–2h</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.dji}" alt="Đèo Khánh Lê từ trên"/>
            <img src="${I.adg}" alt="Cảnh núi rừng"/>
            <img src="${I.daLat2}" alt="Đà Lạt hills"/>
          </div>
        </div>
        <div class="itype tp">Đèo ★★</div>
      </div>

      <div class="irow">
        <div class="itime">10:30<br/>13:00</div>
        <div class="idot-col"><div class="idot gold"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Đà Lạt — Café Hồ Xuân Hương (qua phát)</div>
          <div class="ick-list">
            <div class="ick">Cà phê bờ hồ Xuân Hương: view đẹp, không khí mát</div>
            <div class="ick">Bánh mì / bánh tráng nướng trước khi đi tiếp</div>
          </div>
          <div class="itags"><span class="itag info">Không nghỉ đêm — ghé 2h rồi đi</span><span class="itag warn">1/5 Đà Lạt rất đông</span></div>
          <div class="ps c3 ps-h26" style="margin-top:6px;">
            <img src="${I.daLat}" alt="Đà Lạt hồ"/>
            <img src="${I.daLat3}" alt="Đà Lạt cảnh đẹp"/>
            <img src="${I.cafe}" alt="Cafe view"/>
          </div>
        </div>
        <div class="itype tf">Café · Qua</div>
      </div>

      <div class="irow">
        <div class="itime">13:30<br/>17:00</div>
        <div class="idot-col"><div class="idot fill"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">★ Hồ Tà Đùng — Cắm trại <span class="loc">· Đắk Nông</span></div>
          <div class="ick-list">
            <div class="ick">QL20 south → rẽ QL28 → vào khu Hồ Tà Đùng (~150km từ ĐL)</div>
            <div class="ick">Dựng lều, nhận điểm cắm trại ven hồ</div>
            <div class="ick">Kayak quanh hồ chiều tà — nước xanh, đảo nhỏ</div>
            <div class="ick">Bonfire tối với nhóm khác đang cắm trại</div>
          </div>
          <div class="itags"><span class="itag warn">Book kayak trước / mang lều theo</span><span class="itag info">Kayak: ~80–120k/người · Lều thuê: ~100k</span></div>
        </div>
        <div class="itype tr">Camping ⛺</div>
      </div>

    </div>
  </div>
  <div class="rf"><div class="rf-l">Day 06 · Nha Trang → Đèo Khánh Lê → Tà Đùng</div><div class="rf-r">~290km · 7 Ngày Ven Biển</div></div>
</div>


<!-- ══════════════ PAGE 9 · DAY 7 + BUDGET ══════════════ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">7 Ngày Ven Biển · Quy Nhơn 2026</div>
    <div class="rh-r">Day 7 + Budget <span class="rh-dot"></span> 09</div>
  </div>
  <div class="body" style="padding:8mm 15mm 0;overflow:hidden;">

    <div class="mos c4" style="height:28mm;margin:0 -15mm;">
      <div class="mi"><img src="${I.taDung}" alt="Hồ Tà Đùng"/><div class="mcap">Hồ Tà Đùng sáng sớm</div></div>
      <div class="mi"><img src="${I.lakeMist}" alt="Sương hồ"/><div class="mcap">Sương khói trên hồ</div></div>
      <div class="mi"><img src="${I.sunrise}" alt="Bình minh"/><div class="mcap">Bình minh Tà Đùng</div></div>
      <div class="mi"><img src="${I.moto}" alt="Về nhà"/><div class="mcap">Hành trình về SG</div></div>
    </div>

    <div style="margin-top:9px;">
      <div class="dlabel">Day 07 · Thứ Bảy 2/5 — Về SG</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:6px;">
        <div>
          <div style="font-size:8.5pt;font-weight:700;color:var(--ink);margin-bottom:4px;">Sáng tại Tà Đùng</div>
          <div class="ick" style="font-size:7.5pt;color:#3d4452;padding-left:13px;position:relative;line-height:1.6;">
            <span style="position:absolute;left:0;color:var(--ocean);font-weight:700;">✓</span>Kayak sáng sớm khi sương còn trên hồ</div>
          <div class="ick" style="font-size:7.5pt;color:#3d4452;padding-left:13px;position:relative;line-height:1.6;">
            <span style="position:absolute;left:0;color:var(--ocean);font-weight:700;">✓</span>Chụp hình bình minh phản chiếu mặt hồ</div>
          <div class="ick" style="font-size:7.5pt;color:#3d4452;padding-left:13px;position:relative;line-height:1.6;">
            <span style="position:absolute;left:0;color:var(--ocean);font-weight:700;">✓</span>Dọn trại, ăn sáng, xuất phát ~9:00</div>
        </div>
        <div>
          <div style="font-size:8.5pt;font-weight:700;color:var(--ink);margin-bottom:4px;">Về SG (~280km)</div>
          <div class="ick" style="font-size:7.5pt;color:#3d4452;padding-left:13px;position:relative;line-height:1.6;">
            <span style="position:absolute;left:0;color:var(--ocean);font-weight:700;">✓</span>QL28 → Bảo Lộc → QL20 → SG</div>
          <div class="ick" style="font-size:7.5pt;color:#3d4452;padding-left:13px;position:relative;line-height:1.6;">
            <span style="position:absolute;left:0;color:var(--ocean);font-weight:700;">✓</span>Ghé Bảo Lộc uống trà (nổi tiếng)</div>
          <div class="ick" style="font-size:7.5pt;color:#3d4452;padding-left:13px;position:relative;line-height:1.6;">
            <span style="position:absolute;left:0;color:var(--ocean);font-weight:700;">✓</span>Về SG ~14:00–15:00 🏠</div>
        </div>
      </div>
    </div>

    <div class="hrule"></div>

    <div class="dlabel">Budget ước tính — 2 người · 7 ngày</div>
    <table class="btbl">
      <tr><th>Hạng mục</th><th>Ghi chú</th><th>2 người</th></tr>
      <tr><td>Xăng (~1,300km · 5L/100km · 25k/L)</td><td>~325k/người</td><td><strong>~650k</strong></td></tr>
      <tr><td>Khách sạn 6 đêm (Phan Rang/Tuy Hòa/QN×2/NT)</td><td>~350k tb/đêm/phòng</td><td><strong>~2,100k</strong></td></tr>
      <tr><td>Camping Tà Đùng (lều + kayak)</td><td>~200k/người</td><td><strong>~400k</strong></td></tr>
      <tr><td>Ăn uống 7 ngày (3 bữa/ngày)</td><td>~200k/người/ngày</td><td><strong>~2,800k</strong></td></tr>
      <tr><td>Vé + thuyền (Vĩnh Hy, Kỳ Co, Eo Gió)</td><td>~200k/người</td><td><strong>~400k</strong></td></tr>
      <tr><td>Mua sắm đặc sản Quy Nhơn</td><td>Tùy</td><td><strong>~500k</strong></td></tr>
      <tr><td style="font-weight:700;">TỔNG</td><td></td><td style="font-weight:700;color:var(--ocean);font-size:10.5pt;">~6,850k</td></tr>
    </table>
    <div style="font-size:6.5pt;color:var(--muted);margin-top:5px;">* ~3.4 triệu/người · Không tính chi phí khác phát sinh</div>

    <div class="hrule"></div>

    <div class="dlabel">Checklist chuẩn bị</div>
    <div class="cgrid" style="margin-top:6px;">
      <div>
        <div class="ch-hd">Đồ cần mang</div>
        <ul class="cul">
          <li><span class="cb"></span>Áo chống nắng dài tay (2 bộ)</li>
          <li><span class="cb"></span>Đồ bơi + khăn tắm</li>
          <li><span class="cb"></span>Kem chống nắng SPF 50+</li>
          <li><span class="cb"></span>Kính mát + nón bảo hiểm tốt</li>
          <li><span class="cb"></span>Giày đế bám (đá trơn Hang Rái)</li>
          <li><span class="cb"></span>Lều + túi ngủ (Tà Đùng)</li>
          <li><span class="cb"></span>Đèn pin + pin dự phòng</li>
        </ul>
      </div>
      <div>
        <div class="ch-hd">Xe máy</div>
        <ul class="cul">
          <li><span class="cb"></span>Check xe: lốp, xích, nhớt, phanh</li>
          <li><span class="cb"></span>Bơm + vá xe dự phòng</li>
          <li><span class="cb"></span>Áo mưa (Đèo Khánh Lê, Tà Đùng)</li>
          <li><span class="cb"></span>Hộp sơ cứu nhỏ</li>
          <li><span class="cb"></span>Google Maps offline: Ninh Thuận, Phú Yên, Bình Định, Khánh Hòa, Đắk Nông</li>
          <li><span class="cb"></span>Đổ xăng đầy trước đèo vắng</li>
        </ul>
      </div>
      <div>
        <div class="ch-hd">Book trước</div>
        <ul class="cul">
          <li><span class="cb"></span>KS Quy Nhơn (2 đêm) — book sớm</li>
          <li><span class="cb"></span>KS Nha Trang 30/4 — <strong>book ngay!</strong></li>
          <li><span class="cb"></span>Tà Đùng camping/kayak</li>
          <li><span class="cb"></span>Thuyền Vĩnh Hy (hỏi trước)</li>
          <li><span class="cb"></span>Vé thuyền Kỳ Co</li>
          <li><span class="cb"></span>Mua đặc sản: thùng xốp + đá lạnh</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">Day 07 · Tà Đùng → SG</div><div class="rf-r">~280km · 7 Ngày Ven Biển · 2026</div></div>
</div>

</body>
</html>`;

const outPath = __dirname + '/output/quynhon-7day.html';
fs.writeFileSync(outPath, html);
console.log('Generated:', outPath);
console.log('Size:', (html.length / 1024 / 1024).toFixed(2), 'MB');
