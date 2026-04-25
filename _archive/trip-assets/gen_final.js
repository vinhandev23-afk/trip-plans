const fs = require('fs');
const I = JSON.parse(fs.readFileSync('real_b64.json'));
// fallbacks for supporting images
const loadImg = (f) => fs.existsSync(f) ? 'data:image/jpeg;base64,'+fs.readFileSync(f).toString('base64') : '';
const supp = {
  bbq:     loadImg('vn-bbq.jpg'),
  food:    loadImg('vn-food.jpg'),
  sunrise: loadImg('lh-sunrise2.jpg'),
};

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8"/>
<title>Company Trip Long Hải 2026</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700;800&display=swap');
@page{size:A4;margin:0;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --ink:#0c0f14;--ink2:#1c2433;--sand:#f5f0e8;--warm:#ede8df;
  --gold:#b8936a;--gold2:#d4b08a;--teal:#1b5e6e;--teal-lt:#cde8ed;
  --muted:#7a8190;--line:#ddd8cf;--white:#ffffff;
}
body{font-family:'Inter',-apple-system,sans-serif;background:var(--white);color:var(--ink);-webkit-print-color-adjust:exact;print-color-adjust:exact;}
.page{width:210mm;height:297mm;overflow:hidden;page-break-after:always;display:flex;flex-direction:column;position:relative;}
.page:last-child{page-break-after:auto;}

/* COVER */
.cv-bg{position:absolute;inset:0;background-size:cover;background-position:center 30%;}
.cv-grad{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(5,8,14,.5) 0%,transparent 28%),linear-gradient(to top,rgba(5,8,14,.92) 0%,rgba(5,8,14,.5) 40%,transparent 65%),linear-gradient(110deg,rgba(5,8,14,.35) 0%,transparent 55%);}
.cv-z{position:relative;z-index:2;display:flex;flex-direction:column;height:100%;padding:14mm 17mm 12mm;}
.cv-top{display:flex;align-items:center;justify-content:space-between;}
.cv-brand{font-size:7pt;font-weight:700;letter-spacing:3.5px;text-transform:uppercase;color:rgba(255,255,255,.4);display:flex;align-items:center;gap:10px;}
.cv-sep{width:1px;height:18px;background:rgba(255,255,255,.18);}
.cv-brand-sub{font-weight:300;letter-spacing:1px;font-size:7.5pt;color:rgba(255,255,255,.32);text-transform:none;}
.cv-badge{font-size:7pt;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(212,176,138,.85);border:1px solid rgba(212,176,138,.35);padding:5px 14px;}
.cv-mid{flex:1;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:12mm;}
.cv-ey{display:flex;align-items:center;gap:10px;margin-bottom:12px;}
.cv-ey-rule{width:28px;height:1px;background:var(--gold2);}
.cv-ey-txt{font-size:7.5pt;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--gold2);}
.cv-h1{font-family:'Cormorant Garamond',Georgia,serif;font-size:88pt;font-weight:300;color:#fff;line-height:.85;letter-spacing:-4px;}
.cv-h1 em{font-style:italic;color:rgba(212,176,138,.9);}
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
.rh-dot{width:3px;height:3px;border-radius:50%;background:var(--gold);display:inline-block;}
.rf{height:8mm;flex-shrink:0;padding:0 15mm;display:flex;align-items:center;justify-content:space-between;border-top:.5px solid var(--line);margin-top:auto;}
.rf-l,.rf-r{font-size:6pt;color:var(--muted);}
.body{flex:1;overflow:hidden;display:flex;flex-direction:column;}

/* HERO */
.hero{position:relative;overflow:hidden;flex-shrink:0;}
.hero img{width:100%;height:100%;object-fit:cover;display:block;}
.hero-ov{position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,8,14,.05) 0%,rgba(5,8,14,.75) 82%);}
.hero-txt{position:absolute;inset:0;padding:0 15mm 16px;display:flex;flex-direction:column;justify-content:flex-end;}
.day-chip{display:inline-block;width:fit-content;font-size:6.5pt;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;background:var(--gold);color:#fff;padding:4px 14px;margin-bottom:8px;}
.day-chip.alt{background:var(--teal);}
.hero-ttl{font-family:'Cormorant Garamond',serif;font-size:30pt;font-weight:400;color:#fff;line-height:1.02;letter-spacing:-.5px;}
.hero-sub{font-size:7.5pt;font-weight:300;color:rgba(255,255,255,.52);letter-spacing:2.5px;text-transform:uppercase;margin-top:6px;}

/* OVERVIEW SPLIT */
.split{display:flex;flex:1;overflow:hidden;}
.sp-img{overflow:hidden;flex-shrink:0;position:relative;}
.sp-img img{width:100%;height:100%;object-fit:cover;display:block;}
.sp-txt{display:flex;flex-direction:column;justify-content:center;}
.dlabel{font-size:6pt;font-weight:800;letter-spacing:3.5px;text-transform:uppercase;color:var(--gold);margin-bottom:5px;}
.dtitle{font-family:'Cormorant Garamond',serif;font-size:25pt;font-weight:400;color:var(--ink);line-height:1.05;letter-spacing:-.3px;}
.drule{width:30px;height:1.5px;background:var(--gold);margin:11px 0;}
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
.sc-s{font-size:5.5pt;color:var(--line);margin-top:1px;}

/* ITINERARY */
.iti{padding:10px 15mm 0;}
.iti-head{display:flex;align-items:baseline;gap:12px;margin-bottom:12px;padding-bottom:8px;border-bottom:1.5px solid var(--ink);}
.iti-head-main{font-family:'Cormorant Garamond',serif;font-size:17pt;font-weight:500;color:var(--ink);line-height:1;letter-spacing:-.2px;}
.iti-head-sub{font-size:7pt;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--muted);}

.irow{display:grid;grid-template-columns:52px 8px 1fr auto;gap:0 10px;padding:8px 0;border-bottom:.5px solid var(--line);align-items:start;page-break-inside:avoid;}
.irow:last-child{border:none;}
.itime{font-size:7pt;font-weight:700;color:var(--gold);line-height:1.25;white-space:nowrap;text-align:right;padding-top:2px;}
.idot-col{display:flex;flex-direction:column;align-items:center;padding-top:5px;}
.idot{width:7px;height:7px;border-radius:50%;border:1.5px solid var(--gold);background:var(--white);flex-shrink:0;}
.idot.teal{border-color:var(--teal);}
.idot.dark{border-color:var(--ink);background:var(--ink);}
.idot.faint{border-color:var(--line);background:var(--warm);}
.ivline{flex:1;width:1px;background:var(--line);margin-top:4px;min-height:14px;}
.ittl{font-size:9.5pt;font-weight:700;color:var(--ink);margin-bottom:3px;line-height:1.25;}
.idesc{font-size:7.5pt;font-weight:300;color:var(--muted);line-height:1.65;margin-bottom:5px;}
.itags{display:flex;flex-wrap:wrap;gap:3px;}
.itag{font-size:6pt;font-weight:600;color:var(--muted);background:var(--warm);border:.5px solid var(--line);padding:2px 7px;}
.itype{font-size:6pt;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;padding:3px 9px;white-space:nowrap;border:.5px solid;align-self:start;margin-top:2px;}
.tm{color:var(--teal);border-color:var(--teal-lt);background:var(--teal-lt);}
.tf{color:#9f1239;border-color:#ffe4e6;background:#fff1f2;}
.tr{color:#166534;border-color:#dcfce7;background:#f0fdf4;}
.tp{color:#92400e;border-color:#fef3c7;background:#fffbeb;}
.tx{color:var(--teal);border-color:var(--teal-lt);background:var(--teal-lt);}
.tn{color:#6b21a8;border-color:#f3e8ff;background:#faf5ff;}
.to{color:var(--muted);border-color:var(--line);background:var(--warm);}

/* OPTIONS */
.opts{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:4px 0 2px;}
.opt{border:.5px solid var(--line);padding:10px 12px;background:var(--white);}
.opt-n{font-family:'Cormorant Garamond',serif;font-size:20pt;font-weight:600;color:var(--gold);line-height:1;float:left;margin-right:8px;margin-top:-2px;}
.opt-lbl{font-size:5.5pt;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:1px;}
.opt-t{font-size:8.5pt;font-weight:700;color:var(--ink);display:block;margin-bottom:6px;clear:left;}
.opt-ul{list-style:none;display:flex;flex-direction:column;gap:3px;}
.opt-ul li{font-size:7.5pt;color:var(--muted);display:flex;gap:6px;line-height:1.4;}
.opt-ul li::before{content:'—';color:var(--gold2);font-size:7pt;flex-shrink:0;}

/* MOSAIC */
.mos{display:grid;gap:3px;flex-shrink:0;}
.mos.c3{grid-template-columns:2fr 1fr 1fr;}
.mos.c2{grid-template-columns:3fr 2fr;}
.mi{overflow:hidden;position:relative;}
.mi img{width:100%;height:100%;object-fit:cover;display:block;}
.mcap{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.55));padding:12px 8px 5px;font-size:5.5pt;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,.85);}

/* ROLES */
.rgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-top:11px;}
.rc{background:var(--sand);padding:13px 11px 11px;border-top:1.5px solid var(--gold);page-break-inside:avoid;}
.rc-tag{font-size:5.5pt;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:6px;}
.rc-title{font-size:9pt;font-weight:700;color:var(--ink);margin-bottom:5px;line-height:1.2;}
.rc-desc{font-size:7pt;color:var(--muted);line-height:1.55;}

/* CHECKLIST */
.cgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:9px;}
.ch-hd{font-size:7.5pt;font-weight:700;color:var(--ink);padding:6px 0;border-bottom:1px solid var(--line);margin-bottom:7px;}
.cul{list-style:none;display:flex;flex-direction:column;gap:5px;}
.cul li{font-size:7pt;color:#4a4a4a;display:flex;align-items:center;gap:7px;line-height:1.3;}
.cb{width:10px;height:10px;border:.75px solid var(--line);background:white;flex-shrink:0;}

/* FLOW */
.flow{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:9px;}
.fb{padding:13px 14px;}
.fb-dark{background:var(--ink2);}
.fb-teal{background:var(--teal);}
.fb-ey{font-size:6pt;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--gold2);margin-bottom:5px;}
.fb-ttl{font-family:'Cormorant Garamond',serif;font-size:15pt;font-weight:400;color:white;margin-bottom:11px;line-height:1.05;}
.fs{display:flex;align-items:center;gap:7px;padding:4.5px 0;border-bottom:.5px solid rgba(255,255,255,.07);}
.fs:last-child{border:none;}
.fs-time{font-size:7pt;font-weight:700;color:var(--gold2);width:36px;flex-shrink:0;text-align:right;}
.fs-div{width:.5px;height:11px;background:rgba(255,255,255,.15);flex-shrink:0;}
.fs-txt{flex:1;font-size:7.5pt;color:rgba(255,255,255,.72);line-height:1.3;}
.fs-tag{font-size:6pt;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:rgba(255,255,255,.28);}

.grule{height:.5px;background:linear-gradient(90deg,var(--gold),transparent);margin:11px 0;}
.hrule{height:1.5px;background:var(--ink);margin:13px 0;}
</style>
</head>
<body>

<!-- ══ COVER ══ -->
<div class="page">
  <div class="cv-bg" style="background-image:url('${I.cover}');"></div>
  <div class="cv-grad"></div>
  <div class="cv-z">
    <div class="cv-top">
      <div class="cv-brand">
        <span>Company Trip</span><div class="cv-sep"></div>
        <span class="cv-brand-sub">Long Hải · Bà Rịa – Vũng Tàu</span>
      </div>
      <div class="cv-badge">2026 Edition</div>
    </div>
    <div class="cv-mid">
      <div class="cv-ey"><div class="cv-ey-rule"></div><span class="cv-ey-txt">Hành trình nghỉ dưỡng & gắn kết đội nhóm</span></div>
      <div class="cv-h1">Long<br/><em>Hải</em></div>
      <div class="cv-sub"><div class="cv-sub-rule"></div><span class="cv-sub-txt">2 Ngày · 1 Đêm · ~20 Thành viên</span></div>
      <div class="cv-stats">
        <div class="cv-st"><div class="cv-st-n">20</div><div class="cv-st-l">Thành viên</div></div>
        <div class="cv-st"><div class="cv-st-n">120km</div><div class="cv-st-l">Từ Sài Gòn</div></div>
        <div class="cv-st"><div class="cv-st-n">2N1Đ</div><div class="cv-st-l">Hành trình</div></div>
        <div class="cv-st"><div class="cv-st-n">BR–VT</div><div class="cv-st-l">Tỉnh thành</div></div>
      </div>
    </div>
    <div class="cv-foot">
      <span class="cv-foot-l">Khởi hành: Quận 9, TP.HCM &nbsp;·&nbsp; Xe bus 29 chỗ &nbsp;·&nbsp; Cao tốc Long Thành – Dầu Giây</span>
      <div class="cv-foot-r">
        <span class="cv-tag">Nghỉ dưỡng</span><span class="cv-tag">Team Building</span><span class="cv-tag">BBQ Night</span>
      </div>
    </div>
  </div>
</div>


<!-- ══ PAGE 2 · OVERVIEW ══ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r">Tổng quan chuyến đi <span class="rh-dot"></span> 02</div>
  </div>
  <div class="body">
    <div class="split">
      <div class="sp-img" style="width:45%;">
        <img src="${I.sunset}" alt="Long Hải" style="object-position:center 50%;"/>
      </div>
      <div class="sp-txt" style="padding:13mm 15mm 13mm 12mm;">
        <div class="dlabel">Trip Overview</div>
        <div class="dtitle">Thông tin<br/>chuyến đi</div>
        <div class="drule"></div>
        <div class="dbody">Long Hải — dải bờ biển hoang sơ thuộc Bà Rịa–Vũng Tàu, chỉ ~120km từ Sài Gòn qua cao tốc Long Thành–Dầu Giây. Nước biển trong xanh, sóng nhẹ, hải sản tươi ngon từ làng chài Phước Hải và không gian yên tĩnh — lý tưởng để cả team xả stress và gắn kết sau những tháng làm việc bận rộn.</div>
        <table class="info-tbl">
          <tr><td>Số lượng</td><td>~20 người</td></tr>
          <tr><td>Phương tiện</td><td>Xe bus 29 chỗ</td></tr>
          <tr><td>Xuất phát</td><td>Quận 9, TP.HCM — 06:00</td></tr>
          <tr><td>Điểm đến</td><td>Long Hải, Bà Rịa – Vũng Tàu</td></tr>
          <tr><td>Khoảng cách</td><td>~120 km · ~2.5 giờ lăn bánh</td></tr>
          <tr><td>Lưu trú</td><td>Villa · 50 Nguyễn Chí Thanh, Long Hải · Nhận phòng 13:30</td></tr>
        </table>
        <div class="dlabel" style="margin-top:13px;">Xu hướng 2026</div>
        <div class="srow">
          <div class="sc"><div class="sc-n">+47%</div><div class="sc-l">Du khách tăng</div><div class="sc-s">Tổng cục Du lịch VN</div></div>
          <div class="sc"><div class="sc-n">42M</div><div class="sc-l">#LongHai TikTok</div><div class="sc-s">TikTok Travel 2026</div></div>
          <div class="sc"><div class="sc-n">4.8★</div><div class="sc-l">Google Maps</div><div class="sc-s">Rating 2026</div></div>
          <div class="sc"><div class="sc-n">94%</div><div class="sc-l">NV hài lòng</div><div class="sc-s">Gallup 2026</div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">Long Hải · Bà Rịa – Vũng Tàu</div><div class="rf-r">Confidential · Company Trip 2026</div></div>
</div>


<!-- ══ PAGE 3 · DAY 1 MORNING ══ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r">Lịch trình · Ngày 1 <span class="rh-dot"></span> 03</div>
  </div>
  <div class="body">
    <div class="hero" style="height:66mm;">
      <img src="${I.road}" alt="Đèo Nước Ngọt Long Hải" style="object-position:center 40%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip">Day 01</div>
        <div class="hero-ttl">Roadtrip &<br/>Trải nghiệm</div>
        <div class="hero-sub">Khởi hành · Đèo Nước Ngọt · Hải sản Phước Hải · Cafe biển · BBQ đêm biển</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Lịch trình chi tiết</div><div class="iti-head-sub">Ngày 01 · Buổi sáng & Trưa</div></div>

      <div class="irow">
        <div class="itime">06:00<br/>08:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Xuất phát từ Quận 9 — Hành trình bắt đầu</div>
          <div class="idesc">Xe bus 29 chỗ lăn bánh đúng 06:00 theo route: Q9 → Cao tốc Long Thành–Dầu Giây → QL-51 → BR-VT → Long Hải. Tổng ~120km, khoảng 2.5 tiếng. Tranh thủ ăn sáng trên xe hoặc dừng nghỉ nhẹ tại trạm dịch vụ Long Thành.</div>
          <div class="itags"><span class="itag">~120 km</span><span class="itag">Cao tốc Long Thành–Dầu Giây</span><span class="itag">Xe bus 29 chỗ</span></div>
        </div>
        <div class="itype tm">Di chuyển</div>
      </div>

      <div class="irow">
        <div class="itime">08:30<br/>09:15</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Đèo Nước Ngọt — Tầm nhìn panorama tuyệt đẹp</div>
          <div class="idesc">Đèo Nước Ngọt trên QL-55 là điểm dừng biểu tượng của tuyến đường Long Hải. Từ trên đèo nhìn xuống toàn cảnh vùng biển BR-VT trải dài — núi xanh, đường uốn lượn, biển bạc. Cả đoàn dừng xe 30–40 phút, chụp ảnh nhóm, hít thở không khí trong lành — khoảnh khắc báo hiệu kỳ nghỉ thực sự bắt đầu.</div>
          <div class="itags"><span class="itag">Đèo Nước Ngọt · QL-55</span><span class="itag">View panorama biển BR-VT</span><span class="itag">Chụp ảnh nhóm</span></div>
        </div>
        <div class="itype tp">Check-in</div>
      </div>

      <div class="irow">
        <div class="itime">09:30<br/>11:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Bữa trưa hải sản tươi sống tại Phước Hải</div>
          <div class="idesc">Xuống thẳng làng chài Phước Hải — hải sản đánh bắt trong ngày, đưa thẳng từ thuyền vào bếp. Nhà hàng mộc mạc ven biển, giá thực dân, không khí làng chài đặc sắc. Ăn no, ngồi nhìn thuyền ra khơi trước khi tiếp tục hành trình.</div>
          <div class="itags"><span class="itag">Tôm hùm nướng muối ớt</span><span class="itag">Mực một nắng sa tế</span><span class="itag">Lẩu cá biển nấu me</span><span class="itag">Ghẹ hấp sả</span></div>
        </div>
        <div class="itype tf">Ăn trưa</div>
      </div>

      <div class="irow">
        <div class="itime">11:30<br/>13:30</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Cafe ven biển — Chill trước khi nhận villa</div>
          <div class="idesc">Ghé cafe view biển Long Hải, kiến trúc mộc, gió biển thổi mát. Gọi cà phê phin Việt, nước dừa tươi chặt tại chỗ — ngồi thư giãn, chụp ảnh, không cần đi đâu. Khoảng trống hoàn hảo để nạp năng lượng trước khi check-in villa lúc 13:30.</div>
          <div class="itags"><span class="itag">Cafe view biển</span><span class="itag">Cà phê phin · Nước dừa tươi</span><span class="itag">Kiến trúc mộc Long Hải</span></div>
        </div>
        <div class="itype tp">Cafe</div>
      </div>

      <div class="irow">
        <div class="itime">13:30</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Nhận phòng Villa — 50 Nguyễn Chí Thanh, Long Hải</div>
          <div class="idesc">Về villa, nhận phòng, thả hành lý và tự do khám phá: bãi biển riêng, hồ bơi ngoài trời, khu vườn. Leader briefing nhanh lịch trình buổi chiều và phân công vai trò BBQ tối.</div>
          <div class="itags"><span class="itag">50 Nguyễn Chí Thanh</span><span class="itag">Villa riêng · Bãi biển · Hồ bơi</span></div>
        </div>
        <div class="itype tr">Villa</div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">Long Hải · Bà Rịa – Vũng Tàu</div><div class="rf-r">Confidential · Company Trip 2026</div></div>
</div>


<!-- ══ PAGE 4 · DAY 1 AFTERNOON & NIGHT ══ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r">Lịch trình · Ngày 1 (tiếp theo) <span class="rh-dot"></span> 04</div>
  </div>
  <div class="body">
    <div class="mos c3" style="height:38mm;">
      <div class="mi"><img src="${I.boats}" alt="Làng chài Phước Hải" style="object-position:center 40%;"/><div class="mcap">Làng chài Phước Hải</div></div>
      <div class="mi"><img src="${I.market}" alt="Chợ Long Hải"/><div class="mcap">Chợ Long Hải</div></div>
      <div class="mi"><img src="${supp.bbq}" alt="BBQ đêm biển" style="object-position:center 55%;"/><div class="mcap">BBQ đêm biển</div></div>
    </div>
    <div class="iti" style="padding-top:9px;">
      <div class="iti-head"><div class="iti-head-main">Lịch trình chi tiết</div><div class="iti-head-sub">Ngày 01 · Buổi chiều & Tối</div></div>

      <div class="irow">
        <div class="itime">14:00<br/>17:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline" style="min-height:52px;"></div></div>
        <div>
          <div class="ittl">Tự do — Mỗi người chọn cách tận hưởng riêng</div>
          <div class="opts">
            <div class="opt">
              <span class="opt-n">A</span>
              <span class="opt-lbl">Chill Mode</span>
              <span class="opt-t">Nghỉ dưỡng tại Homestay</span>
              <ul class="opt-ul">
                <li>Ngủ trưa, thư giãn hoàn toàn</li>
                <li>Tắm hồ bơi, nằm ghế bãi biển</li>
                <li>Chill nhạc, đọc sách, chụp ảnh sân vườn</li>
              </ul>
            </div>
            <div class="opt">
              <span class="opt-n">B</span>
              <span class="opt-lbl">Explorer Mode</span>
              <span class="opt-t">Khám phá Phước Hải xe máy</span>
              <ul class="opt-ul">
                <li>Thuê xe — đi theo nhóm tối thiểu 3 người</li>
                <li>Hồ Sở Bông · Bờ kè Lộc An</li>
                <li>Quảng trường Phước Hải · Cafe view biển</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="itype tx">Tự do</div>
      </div>

      <div class="irow">
        <div class="itime">17:00<br/>18:00</div>
        <div class="idot-col"><div class="idot"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Tập trung — Đi chợ Long Hải mua nguyên liệu BBQ</div>
          <div class="idesc">Cả đoàn tập hợp, cùng đi chợ chọn hải sản tươi cho bữa BBQ tối. Chiến thuật tối ưu: nhờ tiểu thương làm sạch và ướp gia vị sẵn tại chợ (muối ớt / sa tế / mỡ hành). Về đến homestay chỉ việc bắc bếp — tiết kiệm thời gian, giữ nguyên hương vị tươi nhất.</div>
          <div class="itags"><span class="itag">Tôm sú · Tôm càng xanh</span><span class="itag">Mực ống · Mực lá</span><span class="itag">Sò điệp · Sò huyết</span><span class="itag">Nhờ ướp sẵn tại chợ</span></div>
        </div>
        <div class="itype tf">Cả team</div>
      </div>

      <div class="irow">
        <div class="itime">18:00<br/>23:30</div>
        <div class="idot-col"><div class="idot" style="border-color:#6b21a8;"></div></div>
        <div>
          <div class="ittl">BBQ Night — Tiệc nướng hải sản, Karaoke & Party Games</div>
          <div class="idesc">Bữa tiệc dưới bầu trời đêm biển với mùi hải sản nướng trên than hồng, tiếng nhạc vang xa, tiếng cười hòa vào gió biển. Sau ăn chuyển sang karaoke tập thể và mini games — khoảnh khắc kết nối thật sự, không thể tìm thấy ở văn phòng. Food Lead điều phối bếp nướng, Game Lead dẫn chương trình.</div>
          <div class="itags"><span class="itag">Karaoke tập thể</span><span class="itag">Đoán bài hát theo giai điệu</span><span class="itag">Truth or Dare</span><span class="itag">Drinking games</span></div>
        </div>
        <div class="itype tn">BBQ Night</div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">Long Hải · Bà Rịa – Vũng Tàu</div><div class="rf-r">Confidential · Company Trip 2026</div></div>
</div>


<!-- ══ PAGE 5 · DAY 2 ══ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r">Lịch trình · Ngày 2 <span class="rh-dot"></span> 05</div>
  </div>
  <div class="body">
    <div class="hero" style="height:66mm;">
      <img src="${I.rocky}" alt="Bãi đá Long Hải bình minh" style="object-position:center 40%;"/>
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="day-chip alt">Day 02</div>
        <div class="hero-ttl">Biển sáng &<br/>Về nhà</div>
        <div class="hero-sub">Bình minh · Tắm biển · Team Building · Ăn sáng · Lên đường</div>
      </div>
    </div>
    <div class="iti">
      <div class="iti-head"><div class="iti-head-main">Lịch trình chi tiết</div><div class="iti-head-sub">Ngày 02 · Sáng sớm đến trưa</div></div>

      <div class="irow">
        <div class="itime">05:30<br/>06:30</div>
        <div class="idot-col"><div class="idot teal"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Bình minh trên biển — Khoảnh khắc không thể bỏ lỡ</div>
          <div class="idesc">5:30 sáng, Long Hải yên tĩnh đến lạ thường. Mặt trời nhú lên từ đường chân trời, nhuộm bầu trời sắc cam và hồng rực rỡ. Tắm biển buổi sáng sóng nhẹ, nước trong lành — hoàn toàn khác biệt so với tắm trưa hay chiều.</div>
        </div>
        <div class="itype tr" style="background:var(--teal-lt);color:var(--teal);border-color:var(--teal-lt);">Sáng sớm</div>
      </div>

      <div class="irow">
        <div class="itime">06:30<br/>07:30</div>
        <div class="idot-col"><div class="idot teal"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Team Building bãi biển — Vui, kết nối, đáng nhớ</div>
          <div class="idesc">Bãi cát trắng và bầu trời sáng sớm là sân khấu lý tưởng nhất. Game Lead chia team và điều phối 3 vòng thi: ném bóng biển, chạy tiếp sức trên cát, kéo co — đội thua tự chọn hình phạt vui. Tinh thần sảng khoái, đây là năng lượng cao điểm nhất trong cả chuyến đi.</div>
          <div class="itags"><span class="itag">Ném bóng biển</span><span class="itag">Chạy tiếp sức trên cát</span><span class="itag">Kéo co · Đội thua lội biển</span></div>
        </div>
        <div class="itype tr" style="background:var(--teal-lt);color:var(--teal);border-color:var(--teal-lt);">Team Building</div>
      </div>

      <div class="irow">
        <div class="itime">07:30<br/>08:30</div>
        <div class="idot-col"><div class="idot teal"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Ăn sáng địa phương & Dọn đồ check-out</div>
          <div class="idesc">Bữa sáng với những món đặc trưng vùng biển BR-VT: bún cá nước me chua ngọt, bánh mì ốp la ăn kèm pate địa phương, hoặc hủ tiếu biển nấu xương cá thơm ngọt. Sau đó dọn phòng, gom đồ, check-out đúng giờ.</div>
        </div>
        <div class="itype tf">Ăn sáng</div>
      </div>

      <div class="irow">
        <div class="itime">08:30<br/>10:00</div>
        <div class="idot-col"><div class="idot faint"></div><div class="ivline"></div></div>
        <div>
          <div class="ittl">Cầu bình an — Chùa/Nhà thờ địa phương <span style="font-size:7pt;font-weight:400;color:var(--muted);">(Tùy chọn)</span></div>
          <div class="idesc">Những ngôi chùa và nhà thờ nhỏ mộc mạc trong làng Long Hải — nơi người dân cầu nguyện trước mỗi chuyến ra khơi. Dành cho ai muốn dừng lại. Hoàn toàn tự nguyện, không ép buộc.</div>
        </div>
        <div class="itype to">Tùy chọn</div>
      </div>

      <div class="irow">
        <div class="itime">10:30<br/>13:30</div>
        <div class="idot-col"><div class="idot dark"></div></div>
        <div>
          <div class="ittl">Lên đường — Về Sài Gòn, mang theo kỷ niệm</div>
          <div class="idesc">Xe lăn bánh: Long Hải → Bà Rịa → QL-51 → Cao tốc Long Thành → Quận 9. Khoảng 2.5 tiếng — lúc này mọi người ngả lưng, nghe nhạc, hoặc nhìn ra cửa sổ ngắm cung đường ven biển lần cuối.</div>
          <div class="itags"><span class="itag">Long Hải → Quận 9</span><span class="itag">~120 km · ~2.5 giờ</span><span class="itag">Cao tốc Long Thành</span></div>
        </div>
        <div class="itype" style="color:var(--ink);border-color:var(--line);background:var(--warm);">Về nhà</div>
      </div>
    </div>
  </div>
  <div class="rf"><div class="rf-l">Long Hải · Bà Rịa – Vũng Tàu</div><div class="rf-r">Confidential · Company Trip 2026</div></div>
</div>


<!-- ══ PAGE 6 · ROLES + CHECKLIST + SUMMARY ══ -->
<div class="page">
  <div class="rh">
    <div class="rh-l">Company Trip Long Hải 2026</div>
    <div class="rh-r">Phân công & Chuẩn bị <span class="rh-dot"></span> 06</div>
  </div>
  <div class="body" style="padding:9mm 15mm 0;overflow:hidden;">

    <div class="mos c3" style="height:32mm;margin:0 -15mm;">
      <div class="mi"><img src="${I.person}" alt="Bãi biển Long Hải" style="object-position:center 20%;"/><div class="mcap">Bãi biển Long Hải</div></div>
      <div class="mi"><img src="${I.cafe}" alt="Cafe ven biển" style="object-position:center 40%;"/><div class="mcap">Cafe ven biển</div></div>
      <div class="mi"><img src="${I.boats}" alt="Làng chài Phước Hải" style="object-position:center 40%;"/><div class="mcap">Làng chài Phước Hải</div></div>
    </div>

    <div class="grule" style="margin:12px 0 9px;"></div>

    <div class="dlabel">Team Roles</div>
    <div class="rgrid">
      <div class="rc"><div class="rc-tag">Leader</div><div class="rc-title">Quản lý chuyến đi</div><div class="rc-desc">Quản lý toàn bộ timeline, điều phối lịch trình, xử lý phát sinh, liên lạc homestay và xe bus.</div></div>
      <div class="rc"><div class="rc-tag">Food Lead</div><div class="rc-title">Phụ trách ẩm thực</div><div class="rc-desc">Mua sắm hải sản tại chợ, giám sát ướp đồ, chuẩn bị bếp than và đảm bảo BBQ suôn sẻ.</div></div>
      <div class="rc"><div class="rc-tag">Game Lead</div><div class="rc-title">Tổ chức hoạt động</div><div class="rc-desc">Chuẩn bị kịch bản games, dẫn dắt team building buổi sáng và điều hành đêm BBQ.</div></div>
      <div class="rc"><div class="rc-tag">Media</div><div class="rc-title">Ghi lại kỷ niệm</div><div class="rc-desc">Chụp ảnh, quay video xuyên suốt chuyến đi. Xuất reels và highlight để chia sẻ nội bộ.</div></div>
    </div>

    <div class="hrule"></div>

    <div class="dlabel">Checklist chuẩn bị</div>
    <div class="cgrid">
      <div>
        <div class="ch-hd">Đồ cá nhân</div>
        <ul class="cul">
          <li><span class="cb"></span>Quần áo tắm biển (2 bộ)</li>
          <li><span class="cb"></span>Kem chống nắng SPF 50+</li>
          <li><span class="cb"></span>Kính mát · Nón bảo hiểm</li>
          <li><span class="cb"></span>Dép xỏ ngón · Dép lê</li>
          <li><span class="cb"></span>Thuốc say xe · Thuốc cá nhân</li>
          <li><span class="cb"></span>Sạc + pin dự phòng</li>
          <li><span class="cb"></span>CCCD / Giấy tờ tùy thân</li>
        </ul>
      </div>
      <div>
        <div class="ch-hd">Đồ BBQ & Tiệc chung</div>
        <ul class="cul">
          <li><span class="cb"></span>Loa bluetooth (2 cái)</li>
          <li><span class="cb"></span>Than hoa + bếp nướng</li>
          <li><span class="cb"></span>Thùng đá + đá cây đủ dùng</li>
          <li><span class="cb"></span>Tăm · Giấy ăn · Đĩa 1 lần</li>
          <li><span class="cb"></span>Nước ngọt · Bia dự trữ</li>
          <li><span class="cb"></span>Kẹp nướng · Găng tay bếp</li>
          <li><span class="cb"></span>Túi rác (giữ vệ sinh chung)</li>
        </ul>
      </div>
      <div>
        <div class="ch-hd">Logistics & Vận hành</div>
        <ul class="cul">
          <li><span class="cb"></span>Book xe bus · Confirm giờ đón</li>
          <li><span class="cb"></span>Confirm homestay có khu BBQ</li>
          <li><span class="cb"></span>Liên hệ điểm thuê xe máy</li>
          <li><span class="cb"></span>Lập quỹ chung · Minh bạch CP</li>
          <li><span class="cb"></span>Group chat · Gửi lịch trình trước</li>
          <li><span class="cb"></span>Phân công phòng trước ngày đi</li>
          <li><span class="cb"></span>Chuẩn bị danh sách bài karaoke</li>
        </ul>
      </div>
    </div>

    <div class="grule" style="margin:10px 0 8px;"></div>

    <div class="dlabel">Trip Summary</div>
    <div class="flow">
      <div class="fb fb-dark">
        <div class="fb-ey">Day 01 · Roadtrip & Trải nghiệm</div>
        <div class="fb-ttl">Ngày đầu hành trình</div>
        <div class="fs"><span class="fs-time">07:00</span><span class="fs-div"></span><span class="fs-txt">Xuất phát từ Quận 9, TP.HCM</span><span class="fs-tag">Di chuyển</span></div>
        <div class="fs"><span class="fs-time">09:30</span><span class="fs-div"></span><span class="fs-txt">Check-in Đèo Nước Ngọt</span><span class="fs-tag">Check-in</span></div>
        <div class="fs"><span class="fs-time">10:45</span><span class="fs-div"></span><span class="fs-txt">Check-in Homestay Long Hải</span><span class="fs-tag">Homestay</span></div>
        <div class="fs"><span class="fs-time">11:30</span><span class="fs-div"></span><span class="fs-txt">Hải sản tươi làng chài Phước Hải</span><span class="fs-tag">Ăn trưa</span></div>
        <div class="fs"><span class="fs-time">13:30</span><span class="fs-div"></span><span class="fs-txt">Tự do: Chill hoặc Khám phá xe máy</span><span class="fs-tag">Tự do</span></div>
        <div class="fs"><span class="fs-time">16:30</span><span class="fs-div"></span><span class="fs-txt">Mua hải sản tại Chợ Long Hải</span><span class="fs-tag">Cả team</span></div>
        <div class="fs"><span class="fs-time">18:30</span><span class="fs-div"></span><span class="fs-txt">BBQ Night · Karaoke · Party Games</span><span class="fs-tag">BBQ</span></div>
      </div>
      <div class="fb fb-teal">
        <div class="fb-ey">Day 02 · Biển sáng & Về nhà</div>
        <div class="fb-ttl">Ngày cuối hành trình</div>
        <div class="fs"><span class="fs-time">05:30</span><span class="fs-div"></span><span class="fs-txt">Bình minh & Tắm biển buổi sáng</span><span class="fs-tag">Biển</span></div>
        <div class="fs"><span class="fs-time">06:30</span><span class="fs-div"></span><span class="fs-txt">Team Building trên bãi cát Long Hải</span><span class="fs-tag">Games</span></div>
        <div class="fs"><span class="fs-time">07:30</span><span class="fs-div"></span><span class="fs-txt">Ăn sáng địa phương + Check-out</span><span class="fs-tag">Ăn sáng</span></div>
        <div class="fs"><span class="fs-time">08:30</span><span class="fs-div"></span><span class="fs-txt">Cafe view biển trending 2026</span><span class="fs-tag">Cafe</span></div>
        <div class="fs"><span class="fs-time">09:30</span><span class="fs-div"></span><span class="fs-txt">Cầu bình an (Tùy chọn)</span><span class="fs-tag">Optional</span></div>
        <div class="fs"><span class="fs-time">10:30</span><span class="fs-div"></span><span class="fs-txt">Lên đường về Sài Gòn</span><span class="fs-tag">Về nhà</span></div>
        <div class="fs"><span class="fs-time">13:30</span><span class="fs-div"></span><span class="fs-txt">Về đến Quận 9 · Kết thúc hành trình</span><span class="fs-tag">Xong</span></div>
      </div>
    </div>

  </div>
  <div class="rf"><div class="rf-l">Long Hải · Bà Rịa – Vũng Tàu</div><div class="rf-r">Confidential · Company Trip 2026</div></div>
</div>

</body>
</html>`;

fs.writeFileSync('/Users/nhantv5/company-trip-longhai-2026.html', html);
console.log('Done:', Math.round(fs.statSync('/Users/nhantv5/company-trip-longhai-2026.html').size/1024)+'KB');
