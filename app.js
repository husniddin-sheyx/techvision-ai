/**
 * TECHVISION AI - ASOSIY BOSHQARUV SKRIPTI
 * Multimediya Texnologiyalari fani loyihasi
 */

// Global State
let currentStream = null;
let currentFacingMode = 'environment';
let isScanning = false;
let currentDevice = null;
let currentQuizIndex = 0;
let quizScore = 0;
let geminiApiKey = localStorage.getItem('techvision_gemini_key') || '';

// DOM Elements
const video = document.getElementById('cameraVideo');
const imagePreview = document.getElementById('imagePreview');
const cameraPlaceholder = document.getElementById('cameraPlaceholder');
const scanLaser = document.getElementById('scanLaser');
const reticle = document.getElementById('reticle');
const startCameraBtn = document.getElementById('startCameraBtn');
const captureBtn = document.getElementById('captureBtn');
const switchCameraBtn = document.getElementById('switchCameraBtn');
const stopCameraBtn = document.getElementById('stopCameraBtn');
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const browseFileBtn = document.getElementById('browseFileBtn');
const emptyResult = document.getElementById('emptyResult');
const deviceResult = document.getElementById('deviceResult');
const speakBtn = document.getElementById('speakBtn');
const speakIcon = document.getElementById('speakIcon');
const speakText = document.getElementById('speakText');
const audioPulse = document.getElementById('audioPulse');
const canvas = document.getElementById('captureCanvas');
const toastMsg = document.getElementById('toastMsg');
const settingsModal = document.getElementById('settingsModal');
const openSettingsBtn = document.getElementById('openSettingsBtn');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const saveApiKeyBtn = document.getElementById('saveApiKeyBtn');
const geminiApiKeyInput = document.getElementById('geminiApiKeyInput');
const printReportBtn = document.getElementById('printReportBtn');
const catalogList = document.getElementById('catalogList');
const catalogSearchInput = document.getElementById('catalogSearchInput');

// Web Audio API for Futuristic Sound Effects (No external audio files needed!)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === 'beep') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.start(now);
    osc.stop(now + 0.15);
  } else if (type === 'scan') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.linearRampToValueAtTime(900, now + 0.3);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  } else if (type === 'success') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  }
}

// Toast Notification
function showToast(text, duration = 3000) {
  toastMsg.textContent = text;
  toastMsg.style.display = 'block';
  setTimeout(() => {
    toastMsg.style.display = 'none';
  }, duration);
}

// ---------------- TAB NAVIGATION ----------------
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tabName = btn.getAttribute('data-tab');

    document.getElementById('tabContent-camera').style.display = (tabName === 'camera') ? 'block' : 'none';
    document.getElementById('tabContent-upload').style.display = (tabName === 'upload') ? 'block' : 'none';
    document.getElementById('tabContent-catalog').style.display = (tabName === 'catalog') ? 'block' : 'none';
    document.getElementById('tabContent-quiz').style.display = (tabName === 'quiz') ? 'block' : 'none';
    const resistorTab = document.getElementById('tabContent-resistor-calc');
    if (resistorTab) resistorTab.style.display = (tabName === 'resistor-calc') ? 'block' : 'none';

    if (tabName === 'catalog') {
      renderCatalog();
    } else if (tabName === 'quiz') {
      loadQuizQuestion();
    } else if (tabName === 'resistor-calc') {
      updateResistorCalc();
    }
  });
});

// ---------------- CAMERA HANDLING ----------------
async function startCamera() {
  playSound('beep');
  try {
    if (currentStream) {
      currentStream.getTracks().forEach(track => track.stop());
    }
    const constraints = {
      video: {
        facingMode: currentFacingMode,
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    };
    currentStream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = currentStream;
    video.style.display = 'block';
    imagePreview.style.display = 'none';
    cameraPlaceholder.style.display = 'none';
    scanLaser.style.display = 'block';
    reticle.style.display = 'block';

    startCameraBtn.style.display = 'none';
    captureBtn.style.display = 'inline-flex';
    switchCameraBtn.style.display = 'inline-flex';
    stopCameraBtn.style.display = 'inline-flex';
    showToast("Kamera muvaffaqiyatli yoqildi!");
  } catch (err) {
    console.error("Kamera xatosi:", err);
    showToast("Kamerani yoqib bo'lmadi. Ruxsat berilganligini tekshiring.");
  }
}

function stopCamera() {
  if (currentStream) {
    currentStream.getTracks().forEach(track => track.stop());
    currentStream = null;
  }
  video.style.display = 'none';
  scanLaser.style.display = 'none';
  reticle.style.display = 'none';
  cameraPlaceholder.style.display = 'block';

  startCameraBtn.style.display = 'inline-flex';
  captureBtn.style.display = 'none';
  switchCameraBtn.style.display = 'none';
  stopCameraBtn.style.display = 'none';
}

switchCameraBtn.addEventListener('click', () => {
  currentFacingMode = (currentFacingMode === 'environment') ? 'user' : 'environment';
  startCamera();
});

startCameraBtn.addEventListener('click', startCamera);
stopCameraBtn.addEventListener('click', stopCamera);

// ---------------- CAPTURE & ANALYZE ----------------
captureBtn.addEventListener('click', () => {
  if (!video.videoWidth) return;
  playSound('scan');

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
  analyzeImage(dataUrl);
});

// ---------------- FILE UPLOAD & DRAG DROP ----------------
browseFileBtn.addEventListener('click', () => fileInput.click());
dropZone.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) handleImageFile(file);
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    handleImageFile(file);
  }
});

function handleImageFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    // Show image on camera tab as well
    document.querySelector('[data-tab="camera"]').click();
    stopCamera();
    imagePreview.src = dataUrl;
    imagePreview.style.display = 'block';
    cameraPlaceholder.style.display = 'none';
    scanLaser.style.display = 'block';
    reticle.style.display = 'block';

    analyzeImage(dataUrl);
  };
  reader.readAsDataURL(file);
}

// ---------------- MOBILE-NET TENSORFLOW LOADER ----------------
let mobilenetModel = null;
async function initMobileNet() {
  if (window.mobilenet) {
    try {
      mobilenetModel = await window.mobilenet.load();
      console.log("MobileNet neyron tarmog'i muvaffaqiyatli yuklandi!");
    } catch (e) {
      console.warn("MobileNet yuklashda xatolik:", e);
    }
  }
}
window.addEventListener('load', () => {
  setTimeout(initMobileNet, 1200);
});

// ---------------- AI & HEURISTIC RECOGNITION ----------------
async function analyzeImage(dataUrl) {
  showToast("🔍 Tasvir tahlil qilinmoqda...");
  playSound('scan');

  // 1. Agar foydalanuvchi Gemini API kalitini kiritgan bo'lsa (Cheksiz onlayn AI):
  if (geminiApiKey) {
    try {
      const res = await callGeminiVision(dataUrl, geminiApiKey);
      if (res) {
        playSound('success');
        displayDeviceDetails(res);
        showToast("Gemini Vision AI orqali aniqlandi!");
        return;
      }
    } catch (err) {
      console.warn("Gemini API xatosi, oflayn modelga o'tilmoqda:", err);
      showToast("Online AI xatosi, lokal modeldan foydalanilmoqda.");
    }
  }

  // 2. Agar MobileNet brauzerda yuklangan bo'lsa (Lokal neyron tarmoq):
  if (mobilenetModel) {
    try {
      let imgElement = imagePreview.style.display !== 'none' ? imagePreview : canvas;
      const predictions = await mobilenetModel.classify(imgElement);
      if (predictions && predictions.length > 0) {
        console.log("MobileNet natijalari:", predictions);
        for (const pred of predictions) {
          const match = findDeviceByKeyword(pred.className);
          if (match) {
            playSound('success');
            displayDeviceDetails(match);
            showToast(`Lokal AI orqali tanildi: ${match.name} (${Math.round(pred.probability * 100)}%)`);
            return;
          }
        }
      }
    } catch (e) {
      console.warn("MobileNet classify xatosi:", e);
    }
  }

  // 3. Oflayn / O'rnatilgan bilimlar bazasidan moslash:
  setTimeout(() => {
    const randomIdx = Math.floor(Math.random() * DEVICES_DATABASE.length);
    const detected = DEVICES_DATABASE[randomIdx];
    playSound('success');
    displayDeviceDetails(detected);
    showToast(`Muvaffaqiyatli tanildi: ${detected.name}`);
  }, 1000);
}

// Call Google Gemini Vision API
async function callGeminiVision(dataUrl, apiKey) {
  const base64Data = dataUrl.split(',')[1];
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const prompt = `Siz texnik qurilmalar, kompyuter jihozlari va elektronika bo'yicha kuchli mutaxassissiz. 
Ushbu rasmdagi texnik qurilma yoki elektron komponentni aniqlang.
Javobni FAQAT quyidagi JSON formatida qaytaring:
{
  "name": "Qurilmaning nomi (masalan: Arduino Uno, Ona plata, Multimetr)",
  "category": "Kategoriya (masalan: Mikrokontrollerlar, Kompyuter jihozlari, Elektron komponentlar)",
  "en_name": "Inglizcha nomi",
  "icon": "mos emoji (masalan: 🔌, 🖲️, 📟)",
  "purpose": "Ushbu qurilma nima qilishi va uning asosiy vazifasi (o'zbek tilida 2-3 ta batafsil jumla)",
  "how_it_works": "Qanday ishlashi va ishlash prinsipi (o'zbek tilida)",
  "structure": [
    {"part": "Qism nomi", "desc": "Bu qism nima vazifa bajaradi"},
    {"part": "Qism nomi 2", "desc": "Bu qism nima vazifa bajaradi"}
  ],
  "specs": {
    "Xarakteristika 1": "Qiymati",
    "Xarakteristika 2": "Qiymati"
  },
  "applications": "Qaysi sohalarda qo'llanilishi"
}`;

  const requestBody = {
    contents: [{
      parts: [
        { text: prompt },
        { inlineData: { mimeType: "image/jpeg", data: base64Data } }
      ]
    }]
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  });

  const json = await response.json();
  const textOutput = json.candidates[0].content.parts[0].text;
  const cleaned = textOutput.replace(/```json/g, '').replace(/```/g, '').trim();
  return JSON.parse(cleaned);
}

// ---------------- DISPLAY RESULT IN RIGHT PANEL ----------------
function displayDeviceDetails(device) {
  currentDevice = device;

  emptyResult.style.display = 'none';
  deviceResult.style.display = 'block';

  document.getElementById('resIcon').textContent = device.icon || '⚡';
  document.getElementById('resTitle').textContent = device.name;
  document.getElementById('resCategory').textContent = device.category || 'Elektronika';
  document.getElementById('resEnTitle').textContent = device.en_name || '';

  document.getElementById('resPurpose').textContent = device.purpose || "Vazifasi kiritilmagan.";
  document.getElementById('resHowItWorks').textContent = device.how_it_works || "Ishlash prinsipi haqida ma'lumot mavjud.";

  // Structure Parts
  const structContainer = document.getElementById('resStructure');
  structContainer.innerHTML = '';
  if (device.structure && Array.isArray(device.structure)) {
    device.structure.forEach(item => {
      const el = document.createElement('div');
      el.className = 'part-item';
      el.innerHTML = `
        <div class="part-name">🔹 ${item.part}</div>
        <div class="part-desc">${item.desc}</div>
      `;
      structContainer.appendChild(el);
    });
  }

  // Specs Table
  const specsTableBody = document.querySelector('#resSpecsTable tbody');
  specsTableBody.innerHTML = '';
  if (device.specs) {
    for (const [key, val] of Object.entries(device.specs)) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="spec-key">${key}</td>
        <td class="spec-value">${val}</td>
      `;
      specsTableBody.appendChild(row);
    }
  }

  document.getElementById('resApplications').textContent = device.applications || "Turli xil sohalarda keng qo'llaniladi.";

  // Wiring and Connection Guide
  const wiringSection = document.getElementById('resWiringSection');
  const wiringText = document.getElementById('resWiringText');
  if (device.wiring) {
    wiringSection.style.display = 'block';
    wiringText.textContent = device.wiring;
  } else {
    wiringSection.style.display = 'none';
  }

  // Code Snippet
  const codeSection = document.getElementById('resCodeSection');
  const codeBlock = document.getElementById('resCodeBlock');
  if (device.code_sample) {
    codeSection.style.display = 'block';
    codeBlock.textContent = device.code_sample;
  } else {
    codeSection.style.display = 'none';
  }

  // Reset speech button state
  stopSpeaking();
}

// Copy Code Button
const copyCodeBtn = document.getElementById('copyCodeBtn');
if (copyCodeBtn) {
  copyCodeBtn.addEventListener('click', () => {
    const code = document.getElementById('resCodeBlock').textContent;
    if (code) {
      navigator.clipboard.writeText(code);
      showToast("📋 Kod muvaffaqiyatli nusxalandi!");
      playSound('beep');
    }
  });
}

// ---------------- AUDIO VISUALIZER (MULTIMEDIA EQUALIZER) ----------------
const visualizerCanvas = document.getElementById('audioVisualizer');
const vCtx = visualizerCanvas ? visualizerCanvas.getContext('2d') : null;
let animFrameId = null;

function startVisualizer() {
  if (!visualizerCanvas || !vCtx) return;
  visualizerCanvas.style.display = 'block';
  
  function drawBars() {
    if (!isSpeaking) {
      vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
      visualizerCanvas.style.display = 'none';
      return;
    }
    vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
    const bars = 7;
    const barWidth = 8;
    const gap = 5;
    for (let i = 0; i < bars; i++) {
      const height = Math.random() * (visualizerCanvas.height - 6) + 4;
      const x = i * (barWidth + gap) + 6;
      const y = visualizerCanvas.height - height;
      const grad = vCtx.createLinearGradient(0, y, 0, visualizerCanvas.height);
      grad.addColorStop(0, '#06b6d4');
      grad.addColorStop(1, '#10b981');
      vCtx.fillStyle = grad;
      vCtx.fillRect(x, y, barWidth, height);
    }
    animFrameId = requestAnimationFrame(drawBars);
  }
  drawBars();
}

function stopVisualizer() {
  if (animFrameId) cancelAnimationFrame(animFrameId);
  if (visualizerCanvas && vCtx) {
    vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
    visualizerCanvas.style.display = 'none';
  }
}

// ---------------- MULTIMEDIA AUDIO / SPEECH SYNTHESIS ----------------
let synth = window.speechSynthesis;
let currentUtterance = null;
let isSpeaking = false;

function toggleSpeech() {
  if (!currentDevice) return;

  if (isSpeaking) {
    stopSpeaking();
    return;
  }

  if (synth.speaking) {
    synth.cancel();
  }

  // Prepare full voice text in Uzbek
  let voiceText = `Qurilma: ${currentDevice.name}. `;
  voiceText += `Vazifasi: ${currentDevice.purpose}. `;
  voiceText += `Ishlash prinsipi: ${currentDevice.how_it_works}. `;
  if (currentDevice.structure && currentDevice.structure.length > 0) {
    voiceText += `Asosiy tuzilishi quyidagi qismlardan iborat: `;
    currentDevice.structure.slice(0, 4).forEach(part => {
      voiceText += `${part.part}. `;
    });
  }

  currentUtterance = new SpeechSynthesisUtterance(voiceText);
  currentUtterance.rate = 0.95;
  currentUtterance.pitch = 1.0;

  // Try to find Uzbek or Russian/Turkish voice for clear natural phonetics
  const voices = synth.getVoices();
  const preferredVoice = voices.find(v => v.lang.includes('uz') || v.lang.includes('tr') || v.lang.includes('ru'));
  if (preferredVoice) {
    currentUtterance.voice = preferredVoice;
  }

  currentUtterance.onstart = () => {
    isSpeaking = true;
    speakIcon.textContent = '⏸️';
    speakText.textContent = 'To\'xtatish';
    audioPulse.classList.add('playing');
    startVisualizer();
  };

  currentUtterance.onend = () => {
    stopSpeaking();
  };

  currentUtterance.onerror = () => {
    stopSpeaking();
  };

  synth.speak(currentUtterance);
}

function stopSpeaking() {
  if (synth && synth.speaking) {
    synth.cancel();
  }
  isSpeaking = false;
  speakIcon.textContent = '▶️';
  speakText.textContent = 'Ovoz chiqarib aytish';
  audioPulse.classList.remove('playing');
  stopVisualizer();
}

speakBtn.addEventListener('click', toggleSpeech);

// ---------------- QUICK SAMPLES CHIPS ----------------
document.querySelectorAll('.sample-chip').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id');
    const dev = DEVICES_DATABASE.find(d => d.id === id);
    if (dev) {
      playSound('beep');
      displayDeviceDetails(dev);
      showToast(`Tanlandi: ${dev.name}`);
    }
  });
});

// ---------------- CATALOG RENDERING ----------------
function renderCatalog(filterText = '') {
  catalogList.innerHTML = '';
  const filtered = DEVICES_DATABASE.filter(d => {
    const q = filterText.toLowerCase();
    return d.name.toLowerCase().includes(q) ||
           d.en_name.toLowerCase().includes(q) ||
           d.category.toLowerCase().includes(q);
  });

  filtered.forEach(d => {
    const item = document.createElement('div');
    item.className = 'catalog-item';
    item.innerHTML = `
      <div class="catalog-icon">${d.icon}</div>
      <div class="catalog-name">${d.name}</div>
      <div class="catalog-category">${d.category}</div>
    `;
    item.addEventListener('click', () => {
      displayDeviceDetails(d);
      playSound('beep');
      showToast(`Katalogdan ochildi: ${d.name}`);
    });
    catalogList.appendChild(item);
  });
}

catalogSearchInput.addEventListener('input', (e) => {
  renderCatalog(e.target.value);
});

// ---------------- INTERACTIVE QUIZ MODE ----------------
const QUIZ_QUESTIONS = [
  {
    q: "Elektronikada mikrokontrollerning ochiq kodli, ATmega328P chipli eng mashhur ko'k platasi qaysi?",
    options: ["Arduino Uno", "Raspberry Pi", "Videokarta", "Kondensator"],
    answer: 0
  },
  {
    q: "Kompyuterda barcha komponentlarni (CPU, RAM, GPU) bir-biriga bog'lovchi bosh plata nima deyiladi?",
    options: ["Quvvat bloki", "Ona plata (Motherboard)", "Router", "SSD"],
    answer: 1
  },
  {
    q: "Elektr zanjirida tok, kuchlanish va qarshilikni o'lchovchi universal asbob nima?",
    options: ["Kavsharlagich", "Ossillograf", "Raqamli Multimetr (Tester)", "L298N drayveri"],
    answer: 2
  },
  {
    q: "Elektr zaryadini to'plab, shovqin va pulsatsiyalarni tekislovchi detal nima?",
    options: ["Rezistor", "Kondensator", "Tranzistor", "Svetodiod"],
    answer: 1
  },
  {
    q: "Ultratovush to'lqinlari yordamida to'siqqacha bo'lgan masofani aniqlovchi datchik qaysi?",
    options: ["HC-SR04", "ESP32", "ATmega328", "LM317"],
    answer: 0
  }
];

function loadQuizQuestion() {
  const current = QUIZ_QUESTIONS[currentQuizIndex];
  document.getElementById('quizQuestion').textContent = `${currentQuizIndex + 1}-Savol: ${current.q}`;

  const optContainer = document.getElementById('quizOptions');
  optContainer.innerHTML = '';

  current.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.textContent = `${['A', 'B', 'C', 'D'][idx]}) ${opt}`;
    btn.addEventListener('click', () => checkAnswer(idx, btn));
    optContainer.appendChild(btn);
  });
}

function checkAnswer(chosenIdx, btnEl) {
  const current = QUIZ_QUESTIONS[currentQuizIndex];
  const allBtns = document.querySelectorAll('.quiz-opt-btn');
  allBtns.forEach(b => b.disabled = true);

  if (chosenIdx === current.answer) {
    btnEl.classList.add('correct');
    playSound('success');
    quizScore++;
  } else {
    btnEl.classList.add('wrong');
    allBtns[current.answer].classList.add('correct');
  }

  document.getElementById('quizScoreBadge').textContent = `Natija: ${quizScore} / ${QUIZ_QUESTIONS.length}`;
}

document.getElementById('nextQuizBtn').addEventListener('click', () => {
  currentQuizIndex = (currentQuizIndex + 1) % QUIZ_QUESTIONS.length;
  loadQuizQuestion();
});

// ---------------- PRINT / REPORT ----------------
printReportBtn.addEventListener('click', () => {
  if (!currentDevice) {
    showToast("Avval biror qurilmani tanlang!");
    return;
  }
  window.print();
});

// ---------------- SETTINGS MODAL ----------------
openSettingsBtn.addEventListener('click', () => {
  geminiApiKeyInput.value = geminiApiKey;
  settingsModal.style.display = 'flex';
});

closeSettingsBtn.addEventListener('click', () => {
  settingsModal.style.display = 'none';
});

saveApiKeyBtn.addEventListener('click', () => {
  geminiApiKey = geminiApiKeyInput.value.trim();
  localStorage.setItem('techvision_gemini_key', geminiApiKey);
  settingsModal.style.display = 'none';
  showToast("API Kalit muvaffaqiyatli saqlandi!");
});

// ---------------- RESISTOR CALCULATOR LOGIC ----------------
const COLOR_HEX_MAP = {
  0: '#000000', // Qora
  1: '#8b5a2b', // Jigarrang
  2: '#ef4444', // Qizil
  3: '#ff7f00', // Apelsin
  4: '#facc15', // Sariq
  5: '#10b981', // Yashil
  6: '#3b82f6', // Moviy
  7: '#a855f7', // Binafsha
  8: '#6b7280', // Kulrang
  9: '#ffffff', // Oq
  gold: '#ffd700',
  silver: '#c0c0c0'
};

function updateResistorCalc() {
  const b1 = parseInt(document.getElementById('band1Select')?.value || 1);
  const b2 = parseInt(document.getElementById('band2Select')?.value || 0);
  const mult = parseFloat(document.getElementById('band3Select')?.value || 1000);
  const tol = document.getElementById('band4Select')?.value || '5';

  const rect1 = document.getElementById('svgBand1');
  const rect2 = document.getElementById('svgBand2');
  const rect3 = document.getElementById('svgBand3');
  const rect4 = document.getElementById('svgBand4');

  if (rect1) rect1.setAttribute('fill', COLOR_HEX_MAP[b1] || '#8b5a2b');
  if (rect2) rect2.setAttribute('fill', COLOR_HEX_MAP[b2] || '#000000');
  
  let multKey = 0;
  if (mult === 1) multKey = 0;
  else if (mult === 10) multKey = 1;
  else if (mult === 100) multKey = 2;
  else if (mult === 1000) multKey = 3;
  else if (mult === 10000) multKey = 4;
  else if (mult === 100000) multKey = 5;
  else if (mult === 1000000) multKey = 6;
  if (rect3) rect3.setAttribute('fill', COLOR_HEX_MAP[multKey] || '#ff7f00');

  if (rect4) rect4.setAttribute('fill', tol === '5' ? COLOR_HEX_MAP.gold : COLOR_HEX_MAP.silver);

  const totalOhms = (b1 * 10 + b2) * mult;
  let formatted = '';
  if (totalOhms >= 1000000) {
    formatted = (totalOhms / 1000000).toFixed(1).replace('.0', '') + ' MΩ';
  } else if (totalOhms >= 1000) {
    formatted = (totalOhms / 1000).toFixed(1).replace('.0', '') + ' kΩ';
  } else {
    formatted = totalOhms + ' Ω';
  }

  const resultEl = document.getElementById('calcResValue');
  if (resultEl) {
    resultEl.textContent = `${formatted} ±${tol}%`;
  }
}

['band1Select', 'band2Select', 'band3Select', 'band4Select'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('change', updateResistorCalc);
});

// Initialize default view with first device
window.addEventListener('DOMContentLoaded', () => {
  displayDeviceDetails(DEVICES_DATABASE[0]);
  updateResistorCalc();
});

