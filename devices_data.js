/**
 * TECHVISION AI - QURILMALAR BILIMLAR BAZASI
 * Texnikaga oid qurilmalarning to'liq tavsifi, vazifasi, tuzilishi va xarakteristikalari
 */

const DEVICES_DATABASE = [
  {
    id: "arduino_uno",
    name: "Arduino Uno",
    category: "Mikrokontrollerlar va Robototexnika",
    en_name: "Arduino Uno R3",
    icon: "🔌",
    summary: "Elektronika, avtomatika va robototexnika loyihalarini yaratish uchun ochiq kodli mikrokontroller platasi.",
    purpose: "Datchiklardan (harorat, yorug'lik, masofa va b.) signallarni qabul qilib, ularni dastur bo'yicha qayta ishlaydi va ijro mexanizmlariga (motorlar, svetodiodlar, relelar, displeylar) buyruq beradi. Robotlar va aqlli tizimlarning 'miyasi' hisoblanadi.",
    how_it_works: "Kompyuterda Arduino IDE dasturida C/C++ tilida yozilgan dasturiy kod USB orqali mikrokontrollerning flesh-xotirasiga yuklanadi. Mikrokontroller kirish pinlaridagi kuchlanishni o'qiydi (0V yoki 5V, yoki analog qiymat) va shartlarga binoan chiqish pinlariga tok uzatadi.",
    structure: [
      { part: "ATmega328P Mikrokontrolleri", desc: "Plataning asosiy 8-bitli hisoblash miyasi. 32 KB flesh-xotira, 2 KB SRAM va 16 MHz chastotaga ega." },
      { part: "USB B-type Porti", desc: "Kompyuter bilan ulanish, dasturni yuklash va platani 5V quvvat bilan ta'minlash uchun." },
      { part: "Tashqi quvvat manbai uyasi (DC Barrel Jack)", desc: "7V dan 12V gacha bo'lgan tashqi adapter yoki batareya ulash uchun." },
      { part: "Voltaj stabilizatori (Voltage Regulator)", desc: "Kiruvchi yuqori kuchlanishni barqaror 5V va 3.3V ga pasaytirib beradi." },
      { part: "Raqamli Kirish/Chiqish Pinlari (0 - 13)", desc: "Datchiklar va mexanizmlarni ulash uchun 14 ta raqamli pin (shulardan 6 tasi PWM chiqishini qo'llab-quvvatlaydi)." },
      { part: "Analog Kirish Pinlari (A0 - A5)", desc: "0 dan 5V gacha bo'lgan o'zgaruvchan analog signallarni (masalan, fotorezistor, potentsiometr) o'lchash uchun 10-bitli ADC pinlar." },
      { part: "Kvars rezonatori (16 MHz Crystal)", desc: "Mikrokontrollerning takt chastotasini va vaqt hisobini aniq ta'minlaydi." },
      { part: "Qayta yuklash tugmasi (Reset Button)", desc: "Mikrokontrollerdagi dasturni boshidan qayta ishga tushirish uchun." }
    ],
    specs: {
      "Mikrokontroller": "ATmega328P",
      "Ishchi kuchlanishi": "5V",
      "Tavsiya etilgan kirish kuchlanishi": "7-12V",
      "Raqamli I/O pinlar": "14 ta (6 tasi PWM)",
      "Analog kirish pinlar": "6 ta",
      "Flesh xotira": "32 KB (0.5 KB bootloader)",
      "Takt chastotasi": "16 MHz"
    },
    applications: "Robototexnika, aqlli uy tizimlari, ob-havo stansiyalari, avtomatlashtirilgan sug'orish tizimlari, o'quv dasturlari va IoT qurilmalari prototiplari.",
    wiring: "Kompyuterga standart USB B kabeli orqali ulanadi. Tashqi datchiklar uchun: VCC -> 5V, GND -> GND, Raqamli signallar -> D0-D13, Analog sensorlar -> A0-A5 pinlariga.",
    code_sample: `// Arduino Uno - Platadagi LEDni o'chirib-yoqish (Blink)
void setup() {
  pinMode(13, OUTPUT); // 13-raqamli pindagi LED
}

void loop() {
  digitalWrite(13, HIGH); // LEDni yoqish
  delay(1000);            // 1 soniya kutish
  digitalWrite(13, LOW);  // LEDni o'chirish
  delay(1000);            // 1 soniya kutish
}`,
    keywords: ["arduino", "uno", "atmega328", "microcontroller", "robotics", "plata", "blue board"]
  },
  {
    id: "raspberry_pi",
    name: "Raspberry Pi",
    category: "Mikrokompyuterlar",
    en_name: "Raspberry Pi Single-Board Computer",
    icon: "🍓",
    summary: "Kredit kartasi o'lchamidagi to'laqonli bir platalik kompyuter (Single-board computer).",
    purpose: "Oddiy shaxsiy kompyuter bajaradigan barcha vazifalarni: internetda ishlash, dasturlash, video ko'rish, server sifatida ishlash hamda elektronika va datchiklarni GPIO pinlari orqali bevosita boshqarish vazifasini bajaradi.",
    how_it_works: "MicroSD kartaga o'rnatilgan Linux (Raspberry Pi OS, Ubuntu) operatsion tizimi orqali yuklanadi. ARM arxitekturasidagi ko'p yadroli protsessor dasturlarni mustaqil kompyuter sifatida ishga tushiradi.",
    structure: [
      { part: "Broadcom ARM Protsessori (SoC)", desc: "Grafik protsessor (GPU) va markaziy hisoblash yadrolarini (CPU) birlashtirgan quvvatli chip." },
      { part: "LPDDR4 Operativ xotira (RAM)", desc: "1GB dan 8GB gacha bo'lgan tezkor xotira." },
      { part: "40 pinli GPIO shinasi", desc: "Tashqi sensorlar, LEDlar, motorlar va boshqa elektron komponentlarni dastur orqali boshqarish portlari." },
      { part: "HDMI / Micro-HDMI portlari", desc: "Monitor yoki televizorga 4K formatgacha video va audio chiqarish uchun." },
      { part: "USB 2.0 va USB 3.0 portlari", desc: "Klaviatura, sichqoncha, fleshka yoki tashqi disklarni ulash uchun." },
      { part: "Gigabit Ethernet va Wi-Fi/Bluetooth moduli", desc: "Internet va simsiz tarmoqqa to'g'ridan-to'g'ri ulanish vositasi." },
      { part: "USB-C Quvvat porti", desc: "5V 3A quvvat ta'minoti kiritish uchun." },
      { part: "Kamera (CSI) va Displey (DSI) razyomlari", desc: "Raspberry Pi maxsus kameralari va sensorli ekranlarini ulash lentali shinalari." }
    ],
    specs: {
      "Protsessor": "Quad-core ARM Cortex-A72 @ 1.5-1.8 GHz",
      "RAM": "2GB / 4GB / 8GB LPDDR4",
      "Tarmoq": "Gigabit Ethernet, Wi-Fi 2.4/5GHz, Bluetooth 5.0",
      "Operatsion tizim": "Raspberry Pi OS, Linux, Android",
      "Quvvat": "5V / 3A USB-C orqali"
    },
    applications: "Sun'iy intellekt va kompyuter ko'rish, web-server, media markaz (Kodi), avtomatlashtirilgan nazorat tizimlari, dronlar va aqlli uy boshqaruv markazi.",
    keywords: ["raspberry", "pi", "rpi", "raspi", "single board computer", "mini pc", "arm"]
  },
  {
    id: "motherboard",
    name: "Ona plata (Motherboard)",
    category: "Kompyuter jihozlari",
    en_name: "Computer Motherboard / Mainboard",
    icon: "🖲️",
    summary: "Kompyuterning barcha ichki qismlarini birlashtiruvchi va ular o'rtasida ma'lumot almashinuvini ta'minlovchi bosh plata.",
    purpose: "Protsessor, tezkor xotira, videokarta, qattiq disklar va kiritish-chiqarish qurilmalarini bir tizimga bog'laydi, ularga elektr toki taqsimlaydi va o'zaro yuqori tezlikda aloqa qilishini boshqaradi.",
    how_it_works: "Plata qatlamlariga yotqizilgan yuzlab mis o'tkazgich yo'llari (shinalar) orqali elektr va ma'lumot signallari uzatiladi. Chipset barcha komponentlar ma'lumot almashish tezligi va tartibini muvofiqlashtiradi.",
    structure: [
      { part: "CPU Soketi (Socket)", desc: "Markaziy protsessor (Intel yoki AMD) o'rnatiladigan maxsus uyasi." },
      { part: "RAM Slotlari (DIMM)", desc: "DDR4 yoki DDR5 tezkor xotira modullari ulanadigan joylar." },
      { part: "Chipset (Shimoliy va Janubiy ko'prik vazifasi)", desc: "Protsessor, xotira va tashqi qurilmalar o'rtasidagi ma'lumot oqimini tartibga soluvchi boshqaruv chipi." },
      { part: "PCI Express (PCIe) slotlari", desc: "Videokartalar, tovush kartalari va tarmoq adapterlarini ulash uchun yuqori tezlikdagi shinalar." },
      { part: "M.2 va SATA portlari", desc: "Tezkor NVMe SSD va qattiq disklarni (HDD) ulovchi ma'lumot portlari." },
      { part: "VRM (Voltage Regulator Module)", desc: "Protsessorga kerakli bo'lgan toza va barqaror past kuchlanishni beruvchi drossel, kondensator va mosfetlar zanjiri." },
      { part: "BIOS / UEFI mikrosxemasi va CR2032 batareyasi", desc: "Kompyuter yoqilganda birlamchi yuklashni amalga oshiradi va vaqt/sozlamalarni eslab qoladi." },
      { part: "Orqa panel (I/O Shield)", desc: "USB, HDMI, Ethernet, audio ulagichlar joylashgan tashqi panel." }
    ],
    specs: {
      "Form-faktorlar": "ATX, Micro-ATX, Mini-ITX, E-ATX",
      "Soket turlari": "LGA1700, AM4, AM5, LGA1200",
      "Xotira qo'llab-quvvatlashi": "DDR4 / DDR5 (128GB+ gacha)",
      "Shinalar": "PCIe 4.0 / PCIe 5.0, SATA 3, USB 3.2 / USB 4"
    },
    applications: "Shaxsiy kompyuterlar, serverlar, noutbuklar va ish stansiyalari.",
    keywords: ["motherboard", "ona plata", "mainboard", "asus", "gigabyte", "msi", "pcb"]
  },
  {
    id: "cpu",
    name: "Markaziy Protsessor (CPU)",
    category: "Kompyuter jihozlari",
    en_name: "Central Processing Unit (CPU)",
    icon: "🔲",
    summary: "Kompyuterning barcha matematik, mantiqiy amallarini va dasturiy buyruqlarini bajaruvchi bosh hisoblash organi.",
    purpose: "Operatsion tizim va dasturlardan kelayotgan buyruqlarni sekundiga milliardlab marta bajaradi, axborotlarni qayta ishlaydi va tizimning umumiy ishlash tezligini belgilaydi.",
    how_it_works: "Nanometr o'lchamidagi milliardlab tranzistorlar 0 va 1 (ikkilik sanoq tizimi) holatida tezkor almashinish orqali hisob-kitob qiladi. Fetch-Decode-Execute (Olish - Deshifrlash - Bajarish) sikli asosida ishlaydi.",
    structure: [
      { part: "Hisoblash Yadrolari (Cores)", desc: "Mustaqil parallel hisob-kitoblarni bajaruvchi jismoniy yadrolar." },
      { part: "Kesh-xotira (L1, L2, L3 Cache)", desc: "Eng ko'p ishlatiladigan buyruqlarni saqlovchi o'ta tezkor ichki xotira." },
      { part: "Arifmetik-mantiqiy qurilma (ALU)", desc: "Qo'shish, ayirish, mantiqiy 'VA', 'YOKI' kabi asosiy operatsiyalarni bajaruvchi blok." },
      { part: "Boshqaruv qurilmasi (Control Unit)", desc: "Xotiradan buyruqlarni o'qib, boshqa bloklarga ko'rsatmalar taqsimlaydi." },
      { part: "Issiqlik tarqatuvchi qopqoq (IHS)", desc: "Protsessor kristalini himoyalovchi va kulerga issiqlik o'tkazuvchi metall qobiq." },
      { part: "Kontakt oyoqchalari (PGA) yoki yostiqchalari (LGA)", desc: "Ona plata bilan elektr aloqasini o'rnatuvchi yuzlab tilla suvi yugurtirilgan kontaktlar." }
    ],
    specs: {
      "Arxitektura": "x86-64 (Intel, AMD) yoki ARM (Apple M, Qualcomm)",
      "Yadrolar soni": "2 dan 64+ yadrogacha",
      "Takt chastotasi": "2.5 GHz dan 6.0 GHz gacha",
      "Texnologik jarayon": "3nm, 5nm, 7nm, 10nm",
      "TDP (Issiqlik ajratish)": "15W - 250W"
    },
    applications: "Kompyuterlar, smartfonlar, sun'iy yo'ldoshlar, robotlar, serverlar va raqamli elektronika.",
    keywords: ["cpu", "protsessor", "intel", "amd", "core i7", "ryzen", "chip"]
  },
  {
    id: "ram",
    name: "Operativ xotira (RAM)",
    category: "Kompyuter jihozlari",
    en_name: "Random Access Memory (RAM)",
    icon: "🎛️",
    summary: "Hozirda ishlab turgan dasturlar va tizim ma'lumotlarini vaqtinchalik saqlaydigan o'ta tezkor xotira platasi.",
    purpose: "Protsessorga kerak bo'lgan ma'lumotlarni qattiq diskdan (HDD/SSD) ancha tez yetkazib berish. Kompyuter o'chirilganda undagi barcha ma'lumotlar o'chib ketadi (energiya bog'liq xotira).",
    how_it_works: "Har bir xotira yacheykasi bitta tranzistor va mikroskopik kondensatordan iborat. Kondensatorda zaryad borligi '1', yo'qligi '0' degani. Zaryad tez yo'qolganligi uchun xotira har soniyada minglab marta yangilanadi (Dynamic RAM).",
    structure: [
      { part: "DRAM Xotira kristallari (BGA chiplari)", desc: "Ma'lumotlar bitlarini saqlovchi qora kremniy mikrosxemalar." },
      { part: "SPD (Serial Presence Detect) chipi", desc: "Xotira hajmi, chastotasi va tayminglari haqidagi texnik ma'lumotni BIOSga uzatuvchi kichik chip." },
      { part: "Oltin qoplangan kontaktlar (Gold fingers)", desc: "Ona platadagi slotga o'tirib, signallarni xatosiz o'tkazuvchi kontakt qatori." },
      { part: "Radiator (Heat Spreader)", desc: "Yuqori chastotada qizigan xotira chiplarini sovutuvchi alyuminiy korpus." },
      { part: "Ko'p qatlamli bosma plata (PCB)", desc: "Chiplar va kontaktlarni birlashtiruvchi yuqori chastotali elektron plata." }
    ],
    specs: {
      "Standartlar": "DDR3, DDR4, DDR5, LPDDR5",
      "Hajmlar": "4GB, 8GB, 16GB, 32GB, 64GB",
      "Tezlik (Chastota)": "2400 MHz dan 7200+ MHz gacha",
      "Kuchlanish": "1.1V - 1.35V"
    },
    applications: "Kompyuterlar, smartfonlar, o'yin konsollari, planshetlar va serverlar.",
    keywords: ["ram", "operativ xotira", "ddr4", "ddr5", "memory", "corsair", "kingston"]
  },
  {
    id: "gpu",
    name: "Videokarta (GPU)",
    category: "Kompyuter jihozlari",
    en_name: "Graphics Processing Unit (GPU / Video Card)",
    icon: "🎮",
    summary: "Grafik tasvirlarni, 3D modellarni, videolarni va sun'iy intellekt hisob-kitoblarini qayta ishlovchi quvvatli apparat vositasi.",
    purpose: "Monitorga tasvir chiqarish, zamonaviy 3D o'yinlar fizikasi va renderini amalga oshirish hamda neyron tarmoqlar (AI, Deep Learning) matritsa hisoblarini millionlab mayda yadrolar yordamida parallel bajarish.",
    how_it_works: "Protsessordan farqli ravishda minglab sodda hisoblash oqimlariga (CUDA yoki Stream Processors) ega. U bir vaqtning o'zida ekrandagi millionlab piksellarni rangini hisoblab chiqadi.",
    structure: [
      { part: "Grafik protsessor (GPU Die)", desc: "Milliardlab tranzistorlarga ega bo'lgan asosiy hisoblash kristali." },
      { part: "VRAM (Video RAM - GDDR6/GDDR6X)", desc: "Teksturalar va kadrlar buferini saqlovchi ultra yuqori tezlikdagi video xotira." },
      { part: "Sovutish tizimi (Kulerlar va mis trubkalar)", desc: "Kuchli qizishni bartaraf etuvchi massiv radiator va ventilyatorlar." },
      { part: "PCIe x16 ulagichi", desc: "Ona plataga ulanib, sekundiga o'nlab gigabayt ma'lumot almashuvchi shina." },
      { part: "Qo'shimcha quvvat ulagichlari (8-pin / 12VHPWR)", desc: "Blok pitaniyadan 150W dan 450W gacha elektr quvvatini qabul qilish uyalari." },
      { part: "Video chiqish portlari (HDMI, DisplayPort)", desc: "Monitorda 4K/8K tasvir ko'rsatish portlari." }
    ],
    specs: {
      "Xotira hajmi": "4GB dan 24GB+ GDDR6X gacha",
      "Shina kengligi": "128-bit, 192-bit, 256-bit, 384-bit",
      "Asosiy ishlab chiqaruvchilar": "NVIDIA (GeForce RTX), AMD (Radeon RX), Intel (Arc)",
      "Quvvat iste'moli": "75W - 450W"
    },
    applications: "3D animatsiya, kompyuter o'yinlari, videoni montaj qilish (Premier Pro, DaVinci), AI neyron tarmoqlarni o'qitish va 3D modellashtirish.",
    keywords: ["gpu", "videokarta", "graphics card", "nvidia", "rtx", "geforce", "radeon"]
  },
  {
    id: "multimeter",
    name: "Raqamli Multimetr (Tester)",
    category: "O'lchov va Ta'mirlash uskunalari",
    en_name: "Digital Multimeter (DMM)",
    icon: "📟",
    summary: "Elektr zanjirlarining asosiy parametrlarini o'lchovchi universal ko'p funksiyali raqamli asbob.",
    purpose: "Kuchlanish (Volt), tok kuchi (Amper), qarshilik (Om), elektr zanjirining butunligini (prozvonka), diodlarni va kondensatorlar sig'imini tekshirish uchun xizmat qiladi.",
    how_it_works: "O'lchanayotgan analog signal ichki aniq rezistorli bo'lgichlar va o'lchov shunti orqali o'tadi. So'ngra ADC (Analog-raqamli o'zgartirgich) mikrosxemasi uni raqamli qiymatga aylantirib, ekranda ko'rsatadi.",
    structure: [
      { part: "Raqamli LCD Displey", desc: "O'lchangan ko'rsatkichlarni raqam va o'lchov birliklari bilan aniq aks ettiruvchi ekran." },
      { part: "Aylanma tanlash kommutatori (Rotary Switch)", desc: "O'lchanadigan parametrni (V~, V=, A, Ω, F, Diod, Prozvonka) va diapazonni tanlash murvati." },
      { part: "COM uyasi (Qora shchup)", desc: "Umumiy zamin (Ground / Minus) shchupi ulanadigan asosiy teshik." },
      { part: "V/Ω/mA uyasi (Qizil shchup)", desc: "Kuchlanish, qarshilik, chastota va kichik toklarni o'lchovchi teshik." },
      { part: "10A / 20A maxsus uyasi", desc: "Katta toklarni o'lchashda maxsus past qarshilikli ichki shunt orqali ulanadigan xavfsizlik uyasi." },
      { part: "Ichki himoya predoxraniteli (Fuse)", desc: "Noto'g'ri o'lchash yoki qisqa tutashuvda asbob mikrosxemasini yonishdan saqlovchi eruvchan saqlagich." }
    ],
    specs: {
      "O'lchov diapazonlari": "DC Volt: 200mV - 1000V, AC Volt: 200V - 750V, Tok: 2mA - 10A, Qarshilik: 200Ω - 20MΩ",
      "Xususiyatlari": "Akustik prozvonka (buzzer), diod tekshirish, batareya quvvati indikatori",
      "Quvvat ta'minoti": "9V Krona batareyasi yoki 2x AAA"
    },
    applications: "Elektron platalarni ta'mirlash, avtomobil elektr tizimi diagnostikasi, uydagi simlarni tekshirish va fizika laboratoriyalari.",
    keywords: ["multimeter", "tester", "ommetr", "voltmetr", "multimetr", "dmm", "ampermetr"]
  },
  {
    id: "soldering_iron",
    name: "Kavsharlagich (Payalnik)",
    category: "O'lchov va Ta'mirlash uskunalari",
    en_name: "Soldering Iron / Station",
    icon: "🔥",
    summary: "Elektron komponentlarni platalarga metall qotishmasi (qalay) orqali elektr va mexanik jihatdan mustahkam biriktiruvchi asbob.",
    purpose: "Rezistorlar, tranzistorlar, simlar va mikrosxemalarni bosma platalarga (PCB) kavsharlash (lehimlash) yoki ularni eritib ajratib olish (desoldering).",
    how_it_works: "Elektr toki ichki nixrom yoki keramika spiralidan o'tganda yuqori qarshilik tufayli kuchli issiqlik ajraladi. Bu issiqlik mis/metall uchlikka (jalo) uzatilib, 300°C - 400°C gacha qiziydi va qalayni (erish harorati ~183-220°C) eritadi.",
    structure: [
      { part: "Qizdiruvchi element (Keramika yoki spiral)", desc: "Elektr energiyasini issiqlikka aylantiruvchi yadro." },
      { part: "Uchlik (Jalo / Tip)", desc: "Qalay va flyusni ushlab turuvchi, detalga issiqlikni yetkazuvchi o'tkir metall uchi." },
      { part: "Harorat sensori (Termopara)", desc: "Zamonaviy payalniklarda haroratni aniq nazorat qilib turuvchi datchik." },
      { part: "Issiqlikka chidamli tutqich", desc: "Usta qo'li kuymasligi uchun ebonit yoki silikondan yasalgan izolyatsion dasta." },
      { part: "Haroratni boshqarish mikrosxemasi", desc: "Belgilangan haroratni doimiy bir me'yorda saqlab turuvchi regulyator." }
    ],
    specs: {
      "Quvvati": "40W - 100W (Oddiy), 65W - 120W (Smart / USB-C PD)",
      "Ishchi harorati": "150°C dan 450°C gacha",
      "Qizish vaqti": "8 - 15 soniya (Keramik uchliklarda)"
    },
    applications: "Radioelektronika, mikrosxemalarni o'rnatish, maishiy texnikani tuzatish, simlarni ulash.",
    keywords: ["payalnik", "soldering iron", "kavsharlagich", "lehim", "qalay", "soldering station"]
  },
  {
    id: "oscilloscope",
    name: "Raqamli Ossillograf",
    category: "O'lchov va Ta'mirlash uskunalari",
    en_name: "Digital Storage Oscilloscope (DSO)",
    icon: "📈",
    summary: "Elektr signallarining vaqt bo'yicha o'zgarish shaklini, chastotasi va amplitudasini grafik ko'rinishda aks ettiruvchi murakkab laboratoriya asbobi.",
    purpose: "Zanjirdagi signallarning impulslari, to'lqin shakli (sinusoida, to'rtburchak, arra shakli), shovqinlar, chastota va kechikishlarni ko'z bilan ko'rib tahlil qilish imkonini beradi.",
    how_it_works: "Shchup orqali kelayotgan signal kuchaytirgichdan o'tib, yuqori tezlikdagi ADC tomonidan soniyasiga milliardlab marta raqamlanadi va ekranda X (vaqt) va Y (kuchlanish) o'qlari bo'ylab chiziladi.",
    structure: [
      { part: "Rangli Displey", desc: "Signallarning to'lqin shaklini va o'lchov parametrlarini (Vpp, RMS, Frequency) ko'rsatuvchi ekran." },
      { part: "BNC Kirish Kanallari (CH1, CH2)", desc: "Koaksial o'lchov shchuplarini ulash uchun himoyalangan razyomlar." },
      { part: "Vaqt masshtabi bloki (Horizontal / Timebase)", desc: "Gorizontal o'qdagi vaqt qadamini (sekund, millisekund, mikrosekund) sozlash tugmalari." },
      { part: "Kuchlanish masshtabi bloki (Vertical / Volts/Div)", desc: "Vertikal o'qdagi kuchlanish bo'linmasini sozlash bloki." },
      { part: "Sinxronizatsiya bloki (Trigger)", desc: "Davriy signallarni ekranda to'xtatib, qo'zg'almas holatda ushlab turish mexanizmi." }
    ],
    specs: {
      "O'tkazish polosasi": "50 MHz dan 500+ MHz gacha",
      "Diskretlash tezligi (Sampling Rate)": "1 GSa/s (Gigasampl sekundiga)",
      "Kanallar soni": "2 yoki 4 ta kanal"
    },
    applications: "Mikrokontroller protokollarini (SPI, I2C, UART) tekshirish, yuqori chastotali generatorlarni sozlash va audio tizimlarni diagnostika qilish.",
    keywords: ["oscilloscope", "ossillograf", "dso", "signal generator", "wave", "tektronix", "rigol"]
  },
  {
    id: "resistor",
    name: "Rezistor (Qarshilik)",
    category: "Elektron komponentlar",
    en_name: "Resistor",
    icon: "〰️",
    summary: "Elektr zanjirida tok kuchini cheklovchi va kuchlanishni bo'lib beruvchi passiv elektron detal.",
    purpose: "Zanjirdagi sezgir elementlarga (masalan, svetodiodlar yoki tranzistorlar) ortiqcha tok borishiga yo'l qo'ymaydi, kuchlanish bo'lgich vazifasini bajaradi.",
    how_it_works: "Om qonuniga (I = U / R) binoan ishlaydi. Tok o'tkazuvchanligi past bo'lgan uglerod yoki metall qatlam orqali o'tayotgan elektronlar qarshilikka uchraydi va ortiqcha energiya issiqlik sifatida ajraladi.",
    structure: [
      { part: "Rezistiv qatlam (Uglerod yoki Metall plyonka)", desc: "Keramika o'zakka o'ralgan maxsus qarshilikka ega spiral qatlam." },
      { part: "Izolyatsion korpus", desc: "Himoyalovchi va issiqlikka chidamli lak yoki keramika qobig'i." },
      { part: "Rangli halqalar (Rangli markirovka)", desc: "Rezistorning qarshilik qiymatini (Om) va aniqlik xatosini (tolerantlik) ifodalovchi 4 yoki 5 ta rangli chiziq." },
      { part: "Metall kontakt oyoqchalari", desc: "Plataga kavsharlash uchun toza mis yoki qalaylangan kontaktlar." }
    ],
    specs: {
      "Qarshilik o'lchov birligi": "Om (Ω), kOm (kΩ), MOm (MΩ)",
      "Quvvati": "0.125W, 0.25W, 0.5W, 1W, 2W, 5W+",
      "Tolerantlik (aniqlik)": "±1%, ±5%, ±10%"
    },
    applications: "Deyarli 100% barcha elektron platalar, LED chiroqlar, kuchaytirgichlar, quvvat manbalari.",
    keywords: ["resistor", "qarshilik", "rezistor", "ohm", "om", "passive component"]
  },
  {
    id: "capacitor",
    name: "Kondensator",
    category: "Elektron komponentlar",
    en_name: "Capacitor",
    icon: "🔋",
    summary: "Elektr maydonida elektr zaryadini va energiyasini to'plash va kerak bo'lganda tezda qaytarib berish xususiyatiga ega element.",
    purpose: "Elektr manbalaridagi pulsatsiyalarni va shovqinlarni tekislash (filtr), o'zgaruvchan tok signallarini o'tkazib o'zgarmas tokni to'sish, chastota filtrlarini yaratish.",
    how_it_works: "Dielektrik (izolyator) modda bilan ajratilgan ikkita metall qoplama (obkladka)dan iborat. Zanjir ulanganda bir plastinada musbat, ikkinchisida manfiy zaryadlar yig'iladi.",
    structure: [
      { part: "Metall qoplamalar (Alyuminiy folga)", desc: "Elektr zaryadini yig'uvchi ikkita parallel o'tkazgich qatlam." },
      { part: "Dielektrik qatlam", desc: "Qoplamalar orasidagi qisqa tutashuvga yo'l qo'ymaydigan qog'oz, slyuda, keramika yoki elektrolit shimdirilgan qatlam." },
      { part: "Germetik germetizator va korpus", desc: "Elektrolit qurib qolmasligi uchun alyuminiy silindr idish." },
      { part: "Xavfsizlik klapani (Yuqori qismdagi xochsimon chiziq)", desc: "Kondensator haddan tashqari qizib ketganda portlamasdan bosimni zararsiz chiqarish uchun mo'ljallangan yoriq chiziqlar." }
    ],
    specs: {
      "Sig'im birligi": "Farad (F), mikrofarad (µF), nanofarad (nF), pikofarad (pF)",
      "Maksimal kuchlanish": "6.3V dan 450V+ gacha",
      "Turlari": "Elektrolitik (qutbli), Keramik (qutbsiz), Tantal, Polimer"
    },
    applications: "Blok pitaniyalar, audio kuchaytirgichlar, motorlarni yurgizish (start kondensatorlari), ona platalar.",
    keywords: ["capacitor", "kondensator", "farad", "elektrolit", "filtr", "cap"]
  },
  {
    id: "transistor",
    name: "Tranzistor (BJT / MOSFET)",
    category: "Elektron komponentlar",
    en_name: "Transistor (Bipolar / Field Effect)",
    icon: "🔀",
    summary: "Kichik elektr signali orqali katta tokni boshqaruvchi, kuchaytiruvchi yoki kalit rejimida uzib-ulovchi yarimo'tkazgichli asbob.",
    purpose: "Zamonaviy raqamli elektronikaning tamal toshi. Dvigatellarni yoqib-o'chirish, signallarni kuchaytirish va protsessorlar ichida mantiqiy 0 va 1 holatlarini hosil qilish.",
    how_it_works: "Kremniy yoki germaniy yarimo'tkazgichlarining p-n o'tishlariga asoslangan. Bipolyar tranzistorda bazaga berilgan kichik tok kollektor-emitter orasidagi katta tokni boshqaradi. MOSFETda esa zatvorga berilgan kuchlanish kanaldan tok o'tishini boshqaradi.",
    structure: [
      { part: "Baza / Zatvor (Base / Gate)", desc: "Tranzistorni ochuvchi yoki yopuvchi boshqaruv elektrod oyoqchasi." },
      { part: "Kollektor / Stok (Collector / Drain)", desc: "Asosiy ishchi tok kirib keladigan kontakt." },
      { part: "Emitter / Istok (Emitter / Source)", desc: "Tok chiqib ketadigan umumiy kontakt." },
      { part: "Yarimo'tkazgich kristali", desc: "P va N sohalar bilan legirlangan kremniy kristali." },
      { part: "Metall radiator maydoni", desc: "Quvvatli tranzistorlarda (TO-220 korpus) issiqlikni sovutgichga berish maydonchasi." }
    ],
    specs: {
      "Turlari": "BJT (NPN, PNP), MOSFET (N-kanal, P-kanal), IGBT",
      "Maksimal kuchlanish": "Vce / Vds (30V - 1000V+)",
      "Maksimal tok": "Bir necha mA dan 100A+ gacha"
    },
    applications: "Kompyuter mikrosxemalari, invertorlar, audio kuchaytirgichlar, quvvat manbalari.",
    keywords: ["transistor", "tranzistor", "mosfet", "npn", "pnp", "semiconductor", "igbt"]
  },
  {
    id: "esp32",
    name: "ESP32 Wi-Fi & Bluetooth Moduli",
    category: "Mikrokontrollerlar va Robototexnika",
    en_name: "ESP32 NodeMCU IoT Module",
    icon: "📡",
    summary: "O'rnatilgan Wi-Fi va Bluetooth aloqasiga ega, o'ta arzon va quvvatli 32-bitli IoT (Buyumlar interneti) mikrokontrolleri.",
    purpose: "Qurilmalarni internetga ulash, ma'lumotlarni bulutga (Cloud) uzatish, smartfon orqali masofadan boshqarish va simsiz datchiklar tarmog'ini yaratish.",
    how_it_works: "Xtensa 32-bitli ikkita yadroga ega. Wi-Fi moduli orqali HTTP, MQTT, WebSocket protokollarida ma'lumot almashadi. C/C++ (Arduino IDE) yoki MicroPython tillarida dasturlanadi.",
    structure: [
      { part: "ESP-WROOM-32 metall himoya qopqog'i", desc: "Mikrokontroller yadrosi va RF qismini elektromagnit xalaqitlardan himoyalovchi ekran." },
      { part: "Bosma Wi-Fi/Bluetooth antennasi", desc: "Plataning yuqori qismidagi zig-zag shaklidagi PCB antenna." },
      { part: "CP2102 yoki CH340 USB-UART chipi", desc: "Kompyuter bilan USB orqali dasturlash va muloqot o'rnatuvchi ko'prik." },
      { part: "MicroUSB / Type-C porti", desc: "Quvvat va proshivka yuklash uchun." },
      { part: "BOOT va EN (Enable) tugmalari", desc: "Platani proshivka rejimiga o'tkazish va qayta ishga tushirish (Reset) tugmalari." },
      { part: "Ko'p funksiyali GPIO oyoqchalari", desc: "ADC, DAC, PWM, I2C, SPI, UART va sensorli (touch) pinlar." }
    ],
    specs: {
      "Protsessor": "Dual-Core Xtensa 32-bit LX6 @ 240 MHz",
      "Xotira": "520 KB SRAM, 4MB / 8MB Flash",
      "Simsiz aloqa": "Wi-Fi 802.11 b/g/n, Bluetooth v4.2 BR/EDR va BLE",
      "Ishchi kuchlanish": "3.3V (Platada 5V regulyator mavjud)"
    },
    applications: "Aqlli uy tizimlari (Home Assistant), masofaviy telemetriya, ob-havo monitoringi, simsiz robotlar, dron kontrollerlari.",
    wiring: "MicroUSB orqali to'g'ridan-to'g'ri kompyuterga ulanadi. GPIO pinlari 3.3V mantiqiy darajada ishlaydi (5V datchiklar uchun rezistorli bo'lgich talab qilinadi).",
    code_sample: `// ESP32 Wi-Fi ulanish kodi
#include <WiFi.h>
const char* ssid = "WiFi_Nomi";
const char* pass = "Parol";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\\nWiFi ulandi! IP: ");
  Serial.println(WiFi.localIP());
}
void loop() {}`,
    keywords: ["esp32", "esp8266", "nodemcu", "iot", "wifi module", "bluetooth"]
  },
  {
    id: "ultrasonic_sensor",
    name: "HC-SR04 Ultratovush Masofa Datchigi",
    category: "Datchiklar va Modullar",
    en_name: "HC-SR04 Ultrasonic Distance Sensor",
    icon: "🦇",
    summary: "Ultratovush to'lqinlari yordamida to'siqqacha bo'lgan masofani aniq o'lchovchi datchik.",
    purpose: "Robotlarda to'siqlarni aylanib o'tish, suv omborlarida suv sathini o'lchash, avtomobillarda parkovka radarlari (parktronik) sifatida qo'llaniladi.",
    how_it_works: "Ko'rshapalaklarning exolokatsiya prinsipiga asoslangan. Datchik 40 kHz chastotali tovush impulsini chiqaradi va to'siqdan qaytgan aks-sadoni kutadi. Tovushning havoda tarqalish tezligi (340 m/s) va vaqt orqali masofa: S = (Vaqt * 0.034) / 2 formulasi bilan hisoblanadi.",
    structure: [
      { part: "Ultratovush uzatuvchi (Transmitter 'T')", desc: "40 kHz tovush to'lqinini chiqaruvchi piezoelektrik emitent." },
      { part: "Ultratovush qabul qiluvchi (Receiver 'R')", desc: "Qaytgan tovush to'lqinini elektr signaliga aylantiruvchi qabul qilgich." },
      { part: "VCC pini", desc: "5V doimiy tok manbai ulash uchun." },
      { part: "Trig pini (Trigger)", desc: "Mikrokontrollerdan 10 mikrosekundlik impuls qabul qilib, o'lchashni boshlash signali." },
      { part: "Echo pini", desc: "Tovush borib-kelgunicha yuqori (HIGH) signal ushlab turuvchi chiqish pini." },
      { part: "GND pini", desc: "Umumiy zamin (Minus) ulagichi." },
      { part: "MAX232 va LM324 mikrosxemalari", desc: "Orqa tarafdagi signalni kuchaytiruvchi va tahlil qiluvchi operatsion kuchaytirgichlar." }
    ],
    specs: {
      "O'lchash masofasi": "2 sm dan 400 sm gacha",
      "O'lchov aniqligi": "±3 mm",
      "Ko'rish burchagi": "15 daraja",
      "Ishchi kuchlanish": "5V DC"
    },
    applications: "To'siqlarni aylanib o'tuvchi robotlar, daraja datchiklari, avtomobil parktroniklari, xavfsizlik signalizatsiyalari.",
    wiring: "VCC -> 5V\\nGND -> GND\\nTrig -> Arduino Pin 9\\nEcho -> Arduino Pin 10",
    code_sample: `// HC-SR04 Masofa o'lchash dasturi
const int trigPin = 9;
const int echoPin = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duration = pulseIn(echoPin, HIGH);
  float distance = duration * 0.034 / 2;
  
  Serial.print("Masofa: ");
  Serial.print(distance);
  Serial.println(" sm");
  delay(500);
}`,
    keywords: ["ultrasonic", "hc-sr04", "hcsr04", "distance sensor", "masofa datchigi", "radar"]
  },
  {
    id: "motor_driver",
    name: "L298N Dvigatel Drayveri Moduli",
    category: "Datchiklar va Modullar",
    en_name: "L298N Dual H-Bridge Motor Driver",
    icon: "⚙️",
    summary: "Mikrokontroller signallari yordamida yuqori quvvatli o'zgarmas tok (DC) yoki qadamli (stepper) motorlarni boshqaruvchi modul.",
    purpose: "Mikrokontroller pinlari motorga kerak bo'lgan katta tokni (1-2 Amper) bera olmaydi va yonib ketishi mumkin. L298N mikrokontroller bilan motorni galvanik ajratadi va motorni oldinga, orqaga aylantirish hamda tezligini (PWM) boshqarish imkonini beradi.",
    how_it_works: "Modul ichida 2 ta to'liq 'H-ko'prik' (H-Bridge) tranzistorli sxemasi joylashgan. Diagonaldagi tranzistorlar juftligini ochish orqali motorga berilayotgan qutblar teskarisiga o'zgaradi va motor qarama-qarshi tomonga aylanadi.",
    structure: [
      { part: "L298N quvvat mikrosxemasi", desc: "Katta toklar bilan ishlovchi 15 oyoqli bipolyar integrallashgan drayver chipi." },
      { part: "Katta qora alyuminiy radiator", desc: "Drayver qizib ketganda issiqlikni atrof-muhitga tarqatuvchi qanotli radiator." },
      { part: "VMS (Motor Power) klemmalari", desc: "Motorlar uchun 7V dan 35V gacha alohida kuchlanish ulash klemmalari." },
      { part: "5V Regulyator va djemper", desc: "Agar kiruvchi kuchlanish 12V dan oshmasa, ichki mantiqiy qism uchun 5V ajratuvchi o'rnatilgan 78M05 stabilizatori." },
      { part: "Chiqish klemmalari (OUT1, OUT2, OUT3, OUT4)", desc: "Ikkita DC motor yoki bitta 4 fazali qadamli motor ulash terminallari." },
      { part: "Boshqaruv pinlari (IN1, IN2, IN3, IN4 va ENA, ENB)", desc: "Mikrokontrollerga ulanib aylanish yo'nalishi va PWM tezlik boshqaruvini qabul qiladi." },
      { part: "Himoya diodlari (Flyback diodes)", desc: "Motor to'xtaganda hosil bo'ladigan o'z-o'zidan induksiya qarshi kuchlanishidan mikrosxemani himoyalovchi 8 ta diod." }
    ],
    specs: {
      "Motor quvvat kuchlanishi": "5V - 35V",
      "Kanal boshiga maksimal tok": "2A (Pikda 3A)",
      "Mantiqiy kuchlanish": "5V",
      "Maksimal quvvati": "25W"
    },
    applications: "G'ildirakli robotlar, 4WD mashinalar, CNC dastgohlar, avtomatik pardalar ochish tizimi.",
    keywords: ["l298n", "motor driver", "drayver", "h bridge", "dc motor", "dvigatel"]
  },
  {
    id: "power_supply",
    name: "Kompyuter Quvvat Bloki (PSU)",
    category: "Kompyuter jihozlari",
    en_name: "Power Supply Unit (PSU / SMPS)",
    icon: "⚡",
    summary: "220V o'zgaruvchan tarmoq tokini kompyuter qismlari uchun zarur bo'lgan past kuchlanishli o'zgarmas toklarga aylantiruvchi impulsli quvvat manbai.",
    purpose: "Ona plata, protsessor, videokarta va disklarga barqaror +12V, +5V, +3.3V kuchlanishlarni yetkazib beradi va ortiqcha kuchlanishdan, qisqa tutashuvdan himoya qiladi.",
    how_it_works: "Impulsli (Invertorli) texnologiya: 220V tok diodli ko'prikda to'g'rilanadi, yuqori chastotada (o'nlab kHz) tranzistorlar orqali uziladi, kichik transformatordan o'tkazilib past kuchlanishlarga ajratiladi va Shottki diodlari hamda induktorlar bilan filtrlanadi.",
    structure: [
      { part: "Kirish filtri (EMI Filter)", desc: "Tarmoqqa xalaqit shovqinlar o'tishini va zaryad sakrashlarini to'suvchi varistor va drossellar." },
      { part: "Yuqori kuchlanishli kondensatorlar", desc: "400V kuchlanishli katta elektrolitik saqlovchi kondensatorlar." },
      { part: "Impulsli transformator", desc: "Yuqori chastotali kuchlanishni pasaytirib beruvchi ixcham transformator." },
      { part: "Sovutish ventilyatori (120mm / 140mm)", desc: "Elektron detallar ustidan doimiy havo haydab turuvchi kuler." },
      { part: "24-pinli ATX asosiy kabeli", desc: "Ona plataga umumiy quvvat ulagichi." },
      { part: "8-pin (4+4) EPS kabeli", desc: "Markaziy protsessorga alohida +12V yetkazuvchi quvvat liniyasi." },
      { part: "PCIe 6+2 pin kabellari", desc: "Videokartaga yuqori tok uzatuvchi kabellar." },
      { part: "SATA va Molex kabellari", desc: "Qattiq disklar va qo'shimcha sovutgichlar uchun." }
    ],
    specs: {
      "Quvvati": "450W, 650W, 850W, 1000W+",
      "Chiqish kuchlanishlari": "+12V (Asosiy yuklama), +5V, +3.3V, -12V, +5VSB (Kutish rejimi)",
      "Samaradorlik sertifikati": "80 PLUS (White, Bronze, Gold, Platinum, Titanium)",
      "Himoyalar": "OVP, UVP, OCP, OPP, SCP, OTP"
    },
    applications: "Stol kompyuterlari, serverlar, ish stansiyalari, tog'-kon (mining) uskunalari.",
    keywords: ["psu", "power supply", "blok pitaniya", "quvvat bloki", "atx", "corsair", "seasonic"]
  },
  {
    id: "router",
    name: "Wi-Fi Router (Marshrutizator)",
    category: "Tarmoq qurilmalari",
    en_name: "Wi-Fi Router / Gateway",
    icon: "🌐",
    summary: "Internet provayderi tarmog'i bilan foydalanuvchilarning uy yoki ofis qurilmalari o'rtasida ma'lumot paketlarini marshrutlovchi va Wi-Fi orqali tarqatuvchi tarmoq qurilmasi.",
    purpose: "Bitta internet kabeli orqali o'nlab telefon, kompyuter va televizorlarni internetga ulash, mahalliy tarmoq (LAN) tashkil etish, IP manzillar tarqatish (DHCP) va xavfsizlik devori (Firewall) bilan himoya qilish.",
    how_it_works: "Paket kommutatsiyasi asosida ishlaydi. Internetdan kelgan IP paketlarning sarlavhasini tahlil qiladi va marshrutlash jadvali bo'yicha ularni tegishli ichki qurilmaga yo'naltiradi (NAT texnologiyasi).",
    structure: [
      { part: "WAN Porti (Odatda ko'k rangda)", desc: "Internet provayderidan kelgan asosiy kabelni ulash porti." },
      { part: "LAN Portlari (Sariq rangda, 4 ta)", desc: "Kompyuter va televizorlarni sim orqali ulash portlari." },
      { part: "Tashqi Wi-Fi Antennalari", desc: "2.4 GHz va 5 GHz radio signallarni ko'p yo'nalishli (MIMO) tarqatuvchi antennalar." },
      { part: "Protsessor (SoC) va Operativ xotira", desc: "Tarmoq paketlarini shifrlash va yo'naltirishni boshqaruvchi hisoblash bloki." },
      { part: "WPS va Reset tugmasi", desc: "Parolsiz tezkor ulanish va sozlamalarni zavod holatiga qaytarish tugmalari." },
      { part: "LED Indikatorlar paneli", desc: "Internet borligi, Wi-Fi holati, LAN portlar faolligini ko'rsatuvchi miltillovchi chiroqlar." }
    ],
    specs: {
      "Wi-Fi standartlari": "Wi-Fi 4 (802.11n), Wi-Fi 5 (802.11ac), Wi-Fi 6 (802.11ax)",
      "Chastota diapazonlari": "Dual-Band (2.4 GHz va 5 GHz)",
      "Tezligi": "300 Mbps dan 3000+ Mbps gacha",
      "Xavfsizlik": "WPA2-PSK, WPA3, SPI Firewall"
    },
    applications: "Xonadonlar, idoralar, maktab va universitetlar, jamoat joylaridagi umumiy internet tarmoqlari.",
    keywords: ["router", "marshrutizator", "wi-fi", "wifi", "modem", "tp-link", "netgear", "huawei"]
  },
  {
    id: "ssd",
    name: "SSD Disk (M.2 NVMe / SATA)",
    category: "Kompyuter jihozlari",
    en_name: "Solid State Drive (SSD)",
    icon: "💾",
    summary: "Harakatlanuvchi mexanik qismlarsiz, yarimo'tkazgichli flesh-xotira asosida ishlovchi o'ta tezkor doimiy saqlash qurilmasi.",
    purpose: "Operatsion tizim, dasturlar va shaxsiy fayllarni uzoq muddat saqlash. Kompyuterni bir necha soniyada yoqilishini va dasturlarning bir zumda ochilishini ta'minlaydi.",
    how_it_works: "NAND Flash xotira yacheykalariga suzuvchi zatvorli (Floating Gate) yoki zaryad tutqichli tranzistorlar yordamida elektr zaryadini kiritish orqali ma'lumot yoziladi. Mexanik aylanuvchi disklarga nisbatan 5-30 barobar tez ishlaydi.",
    structure: [
      { part: "Boshqaruvchi Kontroller (SSD Controller)", desc: "O'qish/yozish, xatolarni tuzatish (ECC), xotira resursini teng taqsimlashni (Wear Leveling) boshqaruvchi mini-protsessor." },
      { part: "NAND Flash Xotira Kristallari", desc: "Ma'lumotlar saqlanadigan 3D TLC yoki QLC kremniy mikrosxemalar." },
      { part: "DRAM Kesh chipi", desc: "Xotira xaritasi va tezkor amallar uchun foydalaniladigan tezkor kesh buferi." },
      { part: "M.2 PCIe ulagichi yoki SATA interfeysi", desc: "Ona plataga ulanuvchi tilla rangli kontaktlar guruhi." }
    ],
    specs: {
      "Form-faktorlar": "M.2 2280, 2.5 dyuym SATA",
      "Interfeys": "NVMe PCIe 4.0 / PCIe 5.0 x4 (Tezlik: 3500 - 7500+ MB/s), SATA III (550 MB/s)",
      "Hajmlar": "256GB, 512GB, 1TB, 2TB, 4TB",
      "Ishonchlilik ko'rsatkichi": "TBW (Terabytes Written) va MTBF"
    },
    applications: "Noutbuklar, kompyuterlar, serverlar, tashqi ko'chma saqlash disklari.",
    keywords: ["ssd", "nvme", "m.2", "sata", "solid state drive", "flesh xotira", "samsung 980"]
  },
  {
    id: "dht11",
    name: "DHT11 Harorat va Namlik Datchigi",
    category: "Datchiklar va Modullar",
    en_name: "DHT11 Temperature & Humidity Sensor",
    icon: "🌡️",
    summary: "Atrof-muhit harorati va havo namligini o'lchovchi arzon raqamli kompozit datchik.",
    purpose: "Xonadagi yoki laboratoriyadagi havo harorati (°C) va namlik foizini (% RH) raqamli 1 simli (1-Wire) interfeys orqali mikrokontrollerga uzatish.",
    how_it_works: "Ichida rezistiv namlik sensori va NTC termorezistor mavjud. 8-bitli ichki mikrosxema o'lchangan qiymatlarni 40-bitli raqamli paketga aylantirib, bitta Data pini orqali uzatadi.",
    structure: [
      { part: "Gigroskopik dielektrik namlik sensori", desc: "Havo namligiga qarab qarshiligini o'zgartiruvchi polimer plastinka." },
      { part: "NTC Termorezistor", desc: "Harorat ko'tarilganda qarshiligi pasayuvchi harorat sezgichi." },
      { part: "8-bitli OTP Mikrosxemasi", desc: "Analog qiymatlarni kalibrlab, raqamli 40-bit paketga aylantiruvchi kontroller." },
      { part: "Teshikchali ko'k plastik korpus", desc: "Havoni ichki sensorlarga to'siqsiz o'tkazuvchi himoya panjarasi." }
    ],
    specs: {
      "Namlik diapazoni": "20% - 90% RH (±5% aniqlik)",
      "Harorat diapazoni": "0°C dan 50°C gacha (±2°C aniqlik)",
      "Diskretlash chastotasi": "1 Hz (har soniyada 1 marta)",
      "Kuchlanish": "3V - 5.5V DC"
    },
    wiring: "VCC -> 5V / 3.3V\\nDATA -> Arduino Pin 2\\nGND -> GND",
    code_sample: `// DHT11 Harorat va Namlik o'qish kodi
#include <DHT.h>
#define DHTPIN 2
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}
void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  Serial.print("Namlik: "); Serial.print(h);
  Serial.print("% | Harorat: "); Serial.print(t); Serial.println("C");
  delay(2000);
}`,
    applications: "Ob-havo stansiyalari, avtomatlashtirilgan issiqxonalar, aqlli uy iqlim nazorati (HVAC).",
    keywords: ["dht11", "dht22", "temperature", "humidity", "harorat", "namlik", "sensor"]
  },
  {
    id: "relay_module",
    name: "5V Rele Moduli (Relay)",
    category: "Datchiklar va Modullar",
    en_name: "5V Single Channel Relay Module",
    icon: "🧲",
    summary: "Past kuchlanishli mikrokontroller signali bilan 220V tarmoq yuklamalarini (lampochka, nasos, isitgich) xavfsiz yoqib-o'chirish moduli.",
    purpose: "Galvanik ajratish (Optocoupler) orqali mikrokontrollerning 5V zanjirini yuqori kuchlanishli 220V zanjirdan himoyalaydi va katta quvvatli elektr jihozlarini kompyuter orqali boshqarish imkonini beradi.",
    how_it_works: "Mikrokontroller IN piniga signal borganda, optopara orqali ichki elektromagnit g'altakka tok beriladi. Magnit maydoni metall kontaktni o'ziga tortadi va mexanik chertish ovozi bilan 220V zanjir ulanadi (yoki uziladi).",
    structure: [
      { part: "Songle 5V Elektromagnit relesi", desc: "Ichida g'altak, po'lat o'zak va 10A 250V kontaktlar joylashgan ko'k germetik quti." },
      { part: "EL817 Optopara (Optron)", desc: "Mikrokontroller va 220V tarmoqni yorug'lik orqali galvanik ajratuvchi chip." },
      { part: "Tranzistorli kalit", desc: "Rele g'altagiga kerak bo'lgan tokni boshqaruvchi tranzistor." },
      { part: "1N4007 Himoya diodi", desc: "Rele o'chganda hosil bo'luvchi o'z-o'zidan induksiya teskari tokidan sxemani himoyalaydi." },
      { part: "Vintli klemmalar (NO, COM, NC)", desc: "220V simlarni ulash klemmalari: COM (umumiy), NO (odatda ochiq), NC (odatda yopiq)." }
    ],
    specs: {
      "Maksimal yuklama": "AC 250V/10A, DC 30V/10A",
      "G'altak kuchlanishi": "5V DC",
      "Boshqaruv signali": "0V (Low trigger) yoki 5V (High trigger)"
    },
    wiring: "VCC -> 5V\\nGND -> GND\\nIN -> Arduino Pin 7\\nCOM va NO klemmalari -> 220V lampochka simining uzilmasi",
    code_sample: `// 5V Rele boshqarish dasturi
const int relayPin = 7;
void setup() {
  pinMode(relayPin, OUTPUT);
}
void loop() {
  digitalWrite(relayPin, LOW);  // Releni yoqish
  delay(3000);
  digitalWrite(relayPin, HIGH); // Releni o'chirish
  delay(3000);
}`,
    applications: "Aqlli xonadon, avtomatlashtirilgan chiroqlar, nasoslarni yoqish, sanoat boshqaruv shkaflari.",
    keywords: ["relay", "rele", "songle", "optopara", "kalit", "switch"]
  },
  {
    id: "oled_display",
    name: "OLED 0.96 I2C Displey Moduli",
    category: "Datchiklar va Modullar",
    en_name: "0.96 inch I2C OLED Display (SSD1306)",
    icon: "📺",
    summary: "O'zidan yorug'lik taratuvchi organik diodlar asosidagi 128x64 pikselli ultra yorqin va kam quvvatli displey.",
    purpose: "Datchiklar ko'rsatkichlarini, matnlarni, grafik piktogrammalarni va animatsiyalarni mikrokontrollerdan chiqarib ko'rsatish.",
    how_it_works: "Har bir piksel o'zi mustaqil nur chiqaradi (orqa yoritish - backlight talab qilinmaydi), shuning uchun qora rang mutlaqo toza va energiya tejamkor bo'ladi. I2C (SDA, SCL) shinasida bor-yo'g'i 2 ta sim orqali boshqariladi.",
    structure: [
      { part: "SSD1306 Drayver mikrosxemasi", desc: "128x64 matritsali OLED piksellarni I2C protokoli bo'yicha boshqaruvchi chip." },
      { part: "0.96 dyuymli Organik Shisha", desc: "Monoxrom (ko'k yoki oq) yorug'lik taratuvchi diodlar matritsasi." },
      { part: "I2C Ulagich pinlari (VCC, GND, SCL, SDA)", desc: "Mikrokontrollerga ulanuvchi 4 ta kontakt oyoqcha." }
    ],
    specs: {
      "Ruxsat (Resolution)": "128 x 64 piksel",
      "Interfeys": "I2C (Manzili: 0x3C yoki 0x3D)",
      "Ishchi kuchlanish": "3.3V - 5V DC",
      "Quvvat sarfi": "~0.04W (juda kam)"
    },
    wiring: "VCC -> 5V yoki 3.3V\\nGND -> GND\\nSCL -> Arduino A5 (SCL)\\nSDA -> Arduino A4 (SDA)",
    code_sample: `// Adafruit SSD1306 kutubxonasi bilan OLED kodi
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

Adafruit_SSD1306 display(128, 64, &Wire, -1);

void setup() {
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(10, 20);
  display.println("TechVision AI");
  display.setCursor(10, 35);
  display.println("Multimediya 2026");
  display.display();
}
void loop() {}`,
    applications: "Portativ aqlli soatlar, termometrlar, tibbiy oksimetrlar, kichik robotlar ekrani.",
    keywords: ["oled", "display", "ssd1306", "i2c", "screen", "ekran", "displey"]
  }
];

// Qidirish va aniqlash yordamchi funksiyalari
function findDeviceByKeyword(text) {
  if (!text) return null;
  const clean = text.toLowerCase();
  
  for (const device of DEVICES_DATABASE) {
    if (clean.includes(device.id.toLowerCase())) return device;
    if (clean.includes(device.name.toLowerCase())) return device;
    if (clean.includes(device.en_name.toLowerCase())) return device;
    for (const kw of device.keywords) {
      if (clean.includes(kw.toLowerCase())) return device;
    }
  }
  return null;
}

