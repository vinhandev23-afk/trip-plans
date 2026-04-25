'use strict';

const IS_LOCAL = ['localhost', '127.0.0.1'].includes(window.location.hostname);

const TRANSPORT_ICONS = {
  'xe máy': '🏍️', 'motorcycle': '🏍️', 'motorbike': '🏍️',
  'ô tô': '🚗', 'car': '🚗', 'auto': '🚗',
  'máy bay': '✈️', 'flight': '✈️', 'plane': '✈️',
  'tàu': '🚢', 'ship': '🚢', 'boat': '🚢',
  'bus': '🚌', 'xe buýt': '🚌', 'xe khách': '🚌',
};

function tripIcon(meta) {
  if (meta.icon) return meta.icon;
  const t = (meta.transport || '').toLowerCase();
  for (const [key, icon] of Object.entries(TRANSPORT_ICONS)) {
    if (t.includes(key)) return icon;
  }
  return '🗺️';
}

let state = {
  trips: [],
  current: null,
  tab: 'readme',
};

// ─── API ───────────────────────────────────────────────────────────────
async function fetchTrips() {
  const res = await fetch('/api/trips');
  if (!res.ok) throw new Error('Failed to load trips');
  return res.json();
}

async function fetchReadme(name) {
  const res = await fetch(`/api/trips/${name}/readme`);
  if (!res.ok) throw new Error('README not found');
  return res.text();
}

async function createTrip(data) {
  const res = await fetch('/api/trips', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Failed to create trip');
  return json;
}

async function patchMeta(name, patch) {
  const res = await fetch(`/api/trips/${name}/meta`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch),
  });
  return res.json();
}

// ─── MOBILE SIDEBAR DRAWER ─────────────────────────────────────────────
const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

function setSidebar(open) {
  document.body.classList.toggle('sidebar-open', open);
}

// ─── SIDEBAR ───────────────────────────────────────────────────────────
function renderSidebar() {
  const el = document.getElementById('trips-list');
  const { trips, current } = state;

  if (!trips.length) {
    el.innerHTML = '<div class="loading">Chưa có trip nào</div>';
    return;
  }

  const groups = { upcoming: [], planning: [], completed: [] };
  for (const t of trips) {
    const key = t.status in groups ? t.status : 'planning';
    groups[key].push(t);
  }

  const groupMeta = [
    { key: 'upcoming', label: '🚀 Sắp tới' },
    { key: 'planning', label: '📋 Đang lên kế hoạch' },
    { key: 'completed', label: '✅ Đã đi' },
  ];

  let html = '';
  for (const { key, label } of groupMeta) {
    const items = groups[key];
    if (!items.length) continue;
    html += `<div class="group-label">${label}</div>`;
    for (const trip of items) {
      const active = current?.name === trip.name ? 'active' : '';
      const icon = tripIcon(trip);
      const parts = [trip.dates, trip.duration].filter(Boolean);
      const sub = parts.join(' · ');
      const visBtn = IS_LOCAL
        ? `<button class="vis-toggle ${trip.public ? 'public' : 'private'}" data-name="${esc(trip.name)}" title="${trip.public ? 'Public — click để ẩn' : 'Private — click để public'}">${trip.public ? '🌐' : '🔒'}</button>`
        : '';
      html += `
        <div class="trip-card ${active}" data-name="${esc(trip.name)}">
          <div class="trip-icon">${icon}</div>
          <div class="trip-info">
            <div class="trip-name">${esc(trip.title || trip.name)}</div>
            ${sub ? `<div class="trip-sub">${esc(sub)}</div>` : ''}
          </div>
          ${visBtn}
        </div>`;
    }
  }

  el.innerHTML = html;

  el.querySelectorAll('.trip-card').forEach(card => {
    card.addEventListener('click', e => {
      // Don't select trip when clicking visibility toggle
      if (e.target.closest('.vis-toggle')) return;
      selectTrip(card.dataset.name);
    });
  });

  if (IS_LOCAL) {
    el.querySelectorAll('.vis-toggle').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation();
        const name = btn.dataset.name;
        const trip = state.trips.find(t => t.name === name);
        if (!trip) return;

        const newPublic = !trip.public;
        btn.textContent = '⏳';
        btn.disabled = true;

        try {
          await patchMeta(name, { public: newPublic });
          trip.public = newPublic;
          btn.textContent = newPublic ? '🌐' : '🔒';
          btn.className = `vis-toggle ${newPublic ? 'public' : 'private'}`;
          btn.title = newPublic ? 'Public — click để ẩn' : 'Private — click để public';
        } catch {
          btn.textContent = trip.public ? '🌐' : '🔒';
        }
        btn.disabled = false;
      });
    });
  }
}

// ─── TRIP VIEW ─────────────────────────────────────────────────────────
async function selectTrip(name) {
  state.current = state.trips.find(t => t.name === name) || null;
  state.tab = state.current?.hasReadme ? 'readme' : 'pdf';
  renderSidebar();
  renderTripView();
  if (isMobile()) setSidebar(false);
}

function renderTripView() {
  const main = document.getElementById('main');
  const trip = state.current;
  if (!trip) return;

  const chips = [
    trip.dates      && `📅 ${trip.dates}`,
    trip.duration   && `⏱ ${trip.duration}`,
    trip.people     && `👥 ${trip.people} người`,
    trip.km         && `🛣️ ~${trip.km}`,
    trip.budget     && `💰 ~${trip.budget}/người`,
  ].filter(Boolean);

  const statusLabel = { upcoming: '🚀 Sắp tới', completed: '✅ Đã đi', planning: '📋 Kế hoạch' };
  const firstPdf = trip.pdfs?.[0];
  const pdfOpts = (trip.pdfs || []).map(p =>
    `<option value="${esc(p)}">${esc(p)}</option>`
  ).join('');

  main.innerHTML = `
    <div class="trip-view">
      <div class="trip-topbar">
        <div class="trip-hero">
          <div class="trip-title">${esc(trip.title || trip.name)}</div>
          ${trip.subtitle ? `<div class="trip-subtitle">${esc(trip.subtitle)}</div>` : ''}
          <div class="chips">
            ${chips.map(c => `<span class="chip">${c}</span>`).join('')}
            <span class="chip accent">${statusLabel[trip.status] || '📋 Kế hoạch'}</span>
          </div>
        </div>
        <nav class="tab-nav">
          <button class="tab-btn ${state.tab === 'readme' ? 'active' : ''}" data-tab="readme">📄 README</button>
          <button class="tab-btn ${state.tab === 'pdf' ? 'active' : ''}" data-tab="pdf">📑 PDF</button>
        </nav>
      </div>
      <div class="trip-content">
        <div id="pane-readme" style="display:${state.tab === 'readme' ? 'block' : 'none'}">
          <div class="loading">Đang tải…</div>
        </div>
        <div id="pane-pdf" style="display:${state.tab === 'pdf' ? 'flex' : 'none'}">
          ${firstPdf
            ? `<div class="pdf-toolbar">
                 ${trip.pdfs.length > 1
                   ? `<select class="pdf-select" id="pdf-select">${pdfOpts}</select>`
                   : `<span class="pdf-filename">${esc(firstPdf)}</span>`}
                 <a class="pdf-link" id="pdf-open" href="/trips/${encodeURIComponent(trip.name)}/output/${encodeURIComponent(firstPdf)}" target="_blank">↗ Mở tab mới</a>
               </div>
               <div class="pdf-frame-wrap">
                 <iframe id="pdf-frame" src="/trips/${encodeURIComponent(trip.name)}/output/${encodeURIComponent(firstPdf)}"></iframe>
               </div>`
            : `<div class="no-pdf">
                 <div class="no-pdf-icon">📄</div>
                 <p>Chưa có PDF nào</p>
                 <p>Chạy <code>node gen.js</code> trong thư mục trip để tạo PDF</p>
               </div>`}
        </div>
      </div>
    </div>`;

  main.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  const sel = document.getElementById('pdf-select');
  if (sel) {
    sel.addEventListener('change', () => {
      const src = `/trips/${encodeURIComponent(state.current.name)}/output/${encodeURIComponent(sel.value)}`;
      const frame = document.getElementById('pdf-frame');
      const link  = document.getElementById('pdf-open');
      if (frame) frame.src = src;
      if (link)  link.href = src;
    });
  }

  loadReadme(trip.name);
}

async function loadReadme(name) {
  const pane = document.getElementById('pane-readme');
  if (!pane) return;
  try {
    const md = await fetchReadme(name);
    pane.innerHTML = marked.parse(md);
    pane.querySelectorAll('table').forEach(table => {
      const wrap = document.createElement('div');
      wrap.className = 'table-scroll';
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    });
  } catch {
    pane.innerHTML = '<p class="error-msg">Không tìm thấy README.md</p>';
  }
}

function switchTab(tab) {
  state.tab = tab;
  const readme = document.getElementById('pane-readme');
  const pdf    = document.getElementById('pane-pdf');
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  if (readme) readme.style.display = tab === 'readme' ? 'block' : 'none';
  if (pdf)    pdf.style.display    = tab === 'pdf'    ? 'flex'  : 'none';
}

// ─── MODAL ─────────────────────────────────────────────────────────────
function openModal() {
  document.getElementById('modal').classList.add('open');
  document.querySelector('input[name="title"]')?.focus();
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.getElementById('new-trip-form').reset();
  document.querySelector('input[name="name"]')._manual = false;
}

// ─── INIT ──────────────────────────────────────────────────────────────
async function init() {
  // Hide "+ Trip" button on hosted version
  if (!IS_LOCAL) {
    document.getElementById('btn-new').style.display = 'none';
    document.getElementById('btn-new-empty')?.style && (document.getElementById('btn-new-empty').style.display = 'none');
  }

  const listEl = document.getElementById('trips-list');
  try {
    state.trips = await fetchTrips();
    renderSidebar();
  } catch (e) {
    listEl.innerHTML = `<div class="error-msg">Lỗi tải trips:<br>${e.message}</div>`;
  }

  // Auto-slug from title
  const titleInput = document.querySelector('input[name="title"]');
  const nameInput  = document.querySelector('input[name="name"]');
  if (titleInput && nameInput) {
    nameInput._manual = false;
    titleInput.addEventListener('input', () => {
      if (!nameInput._manual) {
        nameInput.value = titleInput.value
          .toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/đ/gi, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      }
    });
    nameInput.addEventListener('input', () => { nameInput._manual = true; });
  }

  document.getElementById('new-trip-form').addEventListener('submit', async e => {
    e.preventDefault();
    const btn = e.target.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Đang tạo…';
    try {
      const data = Object.fromEntries(new FormData(e.target));
      const result = await createTrip(data);
      closeModal();
      state.trips = await fetchTrips();
      renderSidebar();
      await selectTrip(result.name);
    } catch (err) {
      alert('Lỗi: ' + err.message);
    } finally {
      btn.disabled = false;
      btn.textContent = 'Tạo Trip →';
    }
  });

  document.getElementById('btn-new').addEventListener('click', openModal);
  document.getElementById('btn-new-empty')?.addEventListener('click', openModal);
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('btn-cancel').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', e => {
    if (e.target === document.getElementById('modal')) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); setSidebar(false); }
  });

  // Mobile sidebar drawer
  document.getElementById('menu-toggle').addEventListener('click', () => {
    setSidebar(!document.body.classList.contains('sidebar-open'));
  });
  document.getElementById('sidebar-overlay').addEventListener('click', () => setSidebar(false));
  // Reset drawer state when crossing the breakpoint
  window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
    if (!e.matches) setSidebar(false);
  });
}

// ─── UTILS ─────────────────────────────────────────────────────────────
function esc(str) {
  return String(str ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

document.addEventListener('DOMContentLoaded', init);
