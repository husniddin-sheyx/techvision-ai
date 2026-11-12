# "MULTIMEDIYA TEXNOLOGIYALARI" FANI BO'YICHA AMALIY LOYIHA HISOBOTI

## 1. LOYIHA HAQIDA UMUMIY MA'LUMOT
- **Mavzu:** Texnik va elektron qurilmalarni kompyuter ko'rishi (Computer Vision) va sun'iy intellekt orqali tanish, ularning vazifasi, tuzilishi va xarakteristikalarini multimediali tahlil qilish tizimi.
- **Loyiha nomi:** TechVision AI
- **Foydalanilgan texnologiyalar:** HTML5, CSS3 (Modern Glassmorphism / Cyber-HUD), JavaScript (ES6+), Web Audio API, Web Speech API (Text-to-Speech), MediaDevices API (Jonli video oqimi), Canvas API, Google Gemini Vision AI API, Python, OpenCV.

---

## 2. LOYIHANING DOLZARBLIGI VA MAQSADI
Hozirgi kunda texnika, robototexnika, radioelektronika va kompyuter texnologiyalari sohasida ta'lim olayotgan talabalar va yosh mutaxassislar uchun elektron komponentlar, mikrokontrollerlar, o'lchov asboblari va kompyuter tugunlarining vazifasini hamda ularning ichki tuzilishini tezkor o'rganish muhim ahamiyatga ega.

**Loyihaning asosiy maqsadi:**  
Foydalanuvchi kameraga biror texnik qurilmani (masalan, Arduino, ona plata, multimetr, rezistor va h.k.) ko'rsatganida yoki uning rasmini yuklaganida, tizim quyidagi vazifalarni avtomatlashtirilgan tarzda bajaradi:
1. Qurilmaning to'liq nomi va toifasini aniqlash;
2. Uning nima vazifa bajarishi va ishlash prinsipini tushuntirish;
3. Qurilmaning anatomik tuzilishini (har bir chip, port, element vazifasini) ko'rsatish;
4. Multimediya audio sintezi orqali ma'lumotlarni o'zbek tilida ovoz chiqarib aytib berish;
5. O'rganishni mustahkamlash uchun interaktiv test (Quiz) mexanizmini taqdim etish.

---

## 3. MULTIMEDIYA KOMPONENTLARINING QO'LLANILISHI
"Multimediya texnologiyalari" fanining barcha 5 ta negiziy talabi to'liq amalga oshirildi:

| Komponent | Loyihadagi ijrosi |
|---|---|
| **Matn (Text)** | Qurilmalarning ilmiy va amaliy tavsifi, texnik ko'rsatkichlar jadvali, ishlash prinsiplari. |
| **Grafika va Animatsiya** | Neomorfik va shaffof dizayn, skanerlash lazer animatsiyasi, nishonga olish to'ri (reticle), interaktiv SVG rezistor rang modeli va tovush chastotalari ekvalayzeri (Audio Visualizer). |
| **Video va Kamera** | `navigator.mediaDevices.getUserMedia` orqali real vaqtda videoni kadrlar bo'yicha tahlil qilish va MobileNet / Gemini Vision neyron tarmoqlariga uzatish. |
| **Audio (Ovoz)** | Web Speech API orqali o'zbek tilidagi nutq sintezi (TTS) + Web Audio API orqali dinamik sintezlangan tovush signallari va jonli visualizer ekvalayzeri. |
| **Interaktivlik** | Qidiruv tizimi, dinamik filtrlar, Drag-and-Drop, kamera almashish, bilimni sinovchi viktorina (Quiz), 4-halqali rezistor kalkulyatori, kod nusxalash va PDF chop etish. |

---

## 4. DASTURNI ISHLATISH TARTIBI
1. Loyiha jildidagi **`start_app.bat`** fayli ishga tushiriladi.
2. Dastur ochilgach:
   - **"📹 Jonli Kamera"** bo'limida **"🔴 Kamerani Yoqish"** bosiladi va qurilma ekranga tutiladi.
   - Yoki **"📁 Rasm Yuklash"** bo'limiga qurilma fotosurati yuklanadi.
   - Yoki pastki qatordagi namunaviy chiplardan biri tanlanadi.
3. O'ng paneldagi **"🔊 Ovoz chiqarib aytish"** tugmasi bosilganda sun'iy intellekt diktori qurilmaning nomi, vazifasi va tuzilishini ovoz chiqarib o'qib beradi.
4. **"🖨️ Chop etish / PDF"** tugmasi orqali qurilma pasporti laboratoriya hisoboti shaklida saqlanadi.

---

## 5. XULOSA
TechVision AI loyihasi texnik ta'limda ko'rgazmali va audio-vizual ta'lim berish imkoniyatlarini yangi bosqichga olib chiqadi. Loyiha kompyuter ko'rishi, neyron tarmoqlar va multimediya integratsiyasining yuqori samaradorligini isbotlaydi.

