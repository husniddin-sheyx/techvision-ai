# -*- coding: utf-8 -*-
"""
TECHVISION AI - PYTHON BILIMLAR BAZASI
Texnik va elektron qurilmalarning to'liq ma'lumotlar bazasi
"""

DEVICES_DATA = {
    "arduino_uno": {
        "name": "Arduino Uno",
        "category": "Mikrokontrollerlar va Robototexnika",
        "en_name": "Arduino Uno R3",
        "purpose": "Datchiklardan (harorat, yorug'lik, masofa) signallarni qabul qilib, ularni dastur bo'yicha qayta ishlaydi va ijro mexanizmlariga (motorlar, svetodiodlar, displeylar) buyruq beradi. Robotlarning 'miyasi' vazifasini bajaradi.",
        "how_it_works": "Arduino IDE orqali yozilgan C/C++ kodi USB orqali yuklanadi. Mikrokontroller kirish pinlaridagi kuchlanishni o'lchab, chiqish pinlariga tok uzatish orqali elektron zanjirlarni boshqaradi.",
        "structure": [
            ("ATmega328P Mikrokontrolleri", "8-bitli asosiy hisoblash mikrosxemasi (32KB Flash, 16MHz)."),
            ("USB Port (Type-B)", "Dastur yuklash va 5V quvvat ta'minoti."),
            ("DC Quvvat uyasi", "7V-12V tashqi adapter yoki batareya ulash uchun."),
            ("Raqamli I/O pinlari (0-13)", "14 ta raqamli kirish/chiqish liniyalari (6 tasi PWM)."),
            ("Analog kirish pinlari (A0-A5)", "Datchiklar signallarini o'lchovchi 10-bitli ADC pinlar."),
            ("Kvars rezonatori (16 MHz)", "Takt chastotasi va vaqt o'lchovining aniqligini ta'minlaydi."),
            ("Reset tugmasi", "Dasturni boshidan qayta yuklash tugmasi.")
        ],
        "specs": {
            "Mikrokontroller": "ATmega328P",
            "Ishchi kuchlanish": "5V",
            "Flesh xotira": "32 KB",
            "Chastota": "16 MHz"
        }
    },
    "raspberry_pi": {
        "name": "Raspberry Pi",
        "category": "Mikrokompyuterlar",
        "en_name": "Raspberry Pi 4 Model B",
        "purpose": "Kredit kartasi o'lchamidagi to'laqonli shaxsiy kompyuter. Internet, videoni qayta ishlash, dasturlash va 40-pinli GPIO orqali tashqi elektronikani boshqaradi.",
        "how_it_works": "MicroSD kartadagi Linux (Raspberry Pi OS) tizimi orqali ishga tushadi. ARM arxitekturasidagi quvvatli protsessor orqali murakkab multimedia va AI vazifalarini bajaradi.",
        "structure": [
            ("Broadcom ARM SoC", "Markaziy protsessor (CPU) va grafik yadro (GPU)."),
            ("LPDDR4 RAM", "2GB - 8GB tezkor xotira."),
            ("40 pinli GPIO", "Datchiklar va robototexnika platalarini ulash shinalari."),
            ("Micro-HDMI portlari", "Ikkita 4K monitorga tasvir chiqarish porti."),
            ("Gigabit LAN va Wi-Fi", "Yuqori tezlikdagi simli va simsiz tarmoq moduli."),
            ("USB 3.0 va USB-C", "Tashqi qurilmalar va 5V 3A quvvat porti.")
        ],
        "specs": {
            "Protsessor": "Quad-core Cortex-A72 @ 1.5-1.8 GHz",
            "RAM": "4GB / 8GB LPDDR4",
            "Video": "2x 4K Micro-HDMI",
            "Tarmoq": "Gigabit Ethernet, Wi-Fi 5GHz, BT 5.0"
        }
    },
    "motherboard": {
        "name": "Ona plata (Motherboard)",
        "category": "Kompyuter jihozlari",
        "en_name": "Computer Motherboard",
        "purpose": "Kompyuterning barcha ichki qismlarini (CPU, RAM, GPU, SSD) bir-biriga bog'laydi, ularga elektr quvvatini taqsimlaydi va o'zaro yuqori tezlikda ma'lumot almashishini ta'minlaydi.",
        "how_it_works": "Bosma plataga yotqizilgan yuzlab mis o'tkazgich yo'llar va chipset nazoratchilari orqali signallar kerakli komponentlarga millisekundlarda yetkaziladi.",
        "structure": [
            ("CPU Soketi", "Intel yoki AMD protsessori o'rnatiladigan markaziy uya."),
            ("RAM Slotlari (DIMM)", "DDR4 yoki DDR5 tezkor xotiralarini ulash qatori."),
            ("Chipset", "Xotira, protsessor va tashqi portlar aloqasini boshqaruvchi chip."),
            ("PCIe x16 Slotlari", "Videokartalarni o'rnatish shinalari."),
            ("VRM Zanjiri", "Protsessorga toza kuchlanish beruvchi kondensator va drossellar."),
            ("M.2 NVMe va SATA", "Tezkor SSD va qattiq disklarni ulash portlari.")
        ],
        "specs": {
            "Form-faktor": "ATX / Micro-ATX",
            "Soketlar": "LGA1700, AM4, AM5",
            "Xotira": "DDR4/DDR5 128GB gacha"
        }
    },
    "cpu": {
        "name": "Markaziy Protsessor (CPU)",
        "category": "Kompyuter jihozlari",
        "en_name": "Central Processing Unit",
        "purpose": "Kompyuterning barcha hisob-kitoblarini, matematik amallarini va dasturiy buyruqlarini sekundiga milliardlab marta bajaruvchi bosh organ.",
        "how_it_works": "Fetch-Decode-Execute sikli bo'yicha ishlaydi. Nanometr o'lchamdagi milliardlab tranzistorlar 0 va 1 signallarini qayta ishlaydi.",
        "structure": [
            ("Hisoblash Yadrolari", "Parallel hisoblashlarni bajaruvchi asosiy kristallar."),
            ("Kesh-xotira (L1, L2, L3)", "O'ta tezkor ichki bufer xotirasi."),
            ("ALU (Arifmetik blok)", "Barcha matematik va mantiqiy amallarni bajaruvchi modul."),
            ("IHS Metall qopqog'i", "Sovutgichga issiqlik o'tkazuvchi himoya qobig'i.")
        ],
        "specs": {
            "Arxitektura": "x86-64 / ARM",
            "Chastota": "3.0 GHz - 5.8 GHz",
            "Yadrolar": "4 - 24 yadro"
        }
    },
    "ram": {
        "name": "Operativ xotira (RAM)",
        "category": "Kompyuter jihozlari",
        "en_name": "Random Access Memory",
        "purpose": "Hozirda ishlab turgan dasturlar va operatsion tizim ma'lumotlarini vaqtinchalik saqlaydigan o'ta tezkor xotira platasi.",
        "how_it_works": "Har bir xotira yacheykasi bitta tranzistor va kondensatordan iborat. Zaryad tez yo'qolishi sababli sekundiga minglab marta dinamik yangilanadi (DRAM).",
        "structure": [
            ("DRAM Xotira Kristallari", "Ma'lumotlar bitlarini saqlovchi BGA mikrosxemalar."),
            ("SPD Chipi", "Xotira tayminglari va chastotasi ma'lumotini saqlovchi chip."),
            ("Oltin qoplangan kontaktlar", "Ona plata slotiga toza ulanishni ta'minlaydi."),
            ("Radiator", "Yuqori chastotada qizigan chiplarni sovutuvchi metall qoplama.")
        ],
        "specs": {
            "Standartlar": "DDR4, DDR5",
            "Hajmlar": "8GB, 16GB, 32GB, 64GB",
            "Chastota": "3200 MHz - 6400 MHz"
        }
    },
    "gpu": {
        "name": "Videokarta (GPU)",
        "category": "Kompyuter jihozlari",
        "en_name": "Graphics Processing Unit",
        "purpose": "Grafik tasvirlarni, 3D modellarni, videolarni va sun'iy intellekt hisob-kitoblarini parallel ravishda qayta ishlovchi quvvatli apparat.",
        "how_it_works": "Minglab parallel mayda oqim yadrolari (CUDA yoki Stream Processors) yordamida ekrandagi millionlab piksellar rangini bir vaqtda hisoblab beradi.",
        "structure": [
            ("Grafik protsessor (GPU Die)", "Milliardlab tranzistorlarga ega bosh hisoblash kristali."),
            ("VRAM Video Xotirasi", "Ultra tezkor GDDR6/GDDR6X xotira chiplari."),
            ("Sovutish tizimi", "Mis issiqlik quvurlari, radiator va 2-3 ta ventilyator."),
            ("PCIe x16 Shinalari", "Ona plata bilan yuqori tezlikda ma'lumot almashuvchi qator."),
            ("Video chiqish portlari", "HDMI va DisplayPort ulagichlari.")
        ],
        "specs": {
            "Xotira": "8GB - 24GB GDDR6X",
            "Shina kengligi": "128-bit - 384-bit",
            "Quvvat": "100W - 450W"
        }
    },
    "multimeter": {
        "name": "Raqamli Multimetr (Tester)",
        "category": "O'lchov asboblari",
        "en_name": "Digital Multimeter",
        "purpose": "Elektr zanjirlarida kuchlanish (Volt), tok kuchi (Amper), qarshilik (Om) va zanjirning butunligini (prozvonka) aniqlash uchun universal asbob.",
        "how_it_works": "Analog elektr signali ichki shunt va rezistiv bo'lgichlardan o'tib, ADC mikrosxemasi orqali raqamlarga aylantiriladi va LCD displeyda ko'rsatiladi.",
        "structure": [
            ("Raqamli LCD Displey", "O'lchangan qiymatlarni aniq aks ettiruvchi ekran."),
            ("Aylanma kommutator", "O'lchov rejimi va parametrini tanlash selektori."),
            ("COM Porti", "Qora (Minus/Ground) shchup ulanadigan joy."),
            ("V/Ω/mA Porti", "Kuchlanish va qarshilik o'lchovchi qizil shchup uyasi."),
            ("10A Maxsus uyasi", "Katta toklarni xavfsiz o'lchash porti.")
        ],
        "specs": {
            "O'lchovlar": "DC/AC Volt, Tok, Qarshilik, Diod, Prozvonka",
            "Quvvat": "9V batareya"
        }
    },
    "soldering_iron": {
        "name": "Kavsharlagich (Payalnik)",
        "category": "O'lchov va Ta'mirlash uskunalari",
        "en_name": "Soldering Iron",
        "purpose": "Elektron komponentlarni platalarga metall qotishmasi (qalay) orqali elektr va mexanik jihatdan mustahkam biriktiruvchi asbob.",
        "how_it_works": "Elektr toki ichki keramik yoki nixrom qizdirgichdan o'tganda 300°C - 400°C issiqlik hosil qiladi va qalayni eritib lehimlaydi.",
        "structure": [
            ("Qizdiruvchi element", "Elektr energiyasini issiqlikka aylantiruvchi keramik yadro."),
            ("Uchlik (Jalo)", "Qalayni erituvchi va komponentga yetkazuvchi metall uchi."),
            ("Termosensor", "Haroratni nazorat qilib turuvchi datchik."),
            ("Izolyatsion tutqich", "Qo'lni kuydirmaslik uchun mo'ljallangan dasta.")
        ],
        "specs": {
            "Quvvat": "60W - 100W",
            "Harorat diapazoni": "150°C - 450°C"
        }
    },
    "resistor": {
        "name": "Rezistor (Qarshilik)",
        "category": "Elektron komponentlar",
        "en_name": "Resistor",
        "purpose": "Elektr zanjirida tok kuchini cheklovchi va kuchlanishni bo'lib beruvchi passiv elektron detal.",
        "how_it_works": "Om qonuni (I = U / R) bo'yicha ishlaydi. Tok o'tkazuvchanligi cheklangan qatlam orqali o'tayotgan elektronlar qarshilikka uchrab, ortiqcha energiya issiqlikka aylanadi.",
        "structure": [
            ("Rezistiv qatlam", "Keramik o'zakka o'ralgan uglerod yoki metall plyonka."),
            ("Rangli halqalar", "Qarshilik qiymati va xatosini bildiruvchi 4-5 ta rangli kod."),
            ("Kontakt oyoqchalari", "Plataga kavsharlanuvchi mis kontaktlar.")
        ],
        "specs": {
            "Birlik": "Om (Ω), kOm, MOm",
            "Quvvat": "0.25W, 0.5W, 1W, 2W",
            "Aniqlik": "±1%, ±5%"
        }
    },
    "capacitor": {
        "name": "Kondensator",
        "category": "Elektron komponentlar",
        "en_name": "Capacitor",
        "purpose": "Elektr zaryadini to'plash, elektr signallaridagi pulsatsiyalarni tekislash (filtr) va shovqinlarni yo'qotish.",
        "how_it_works": "Dielektrik bilan ajratilgan ikkita metall qoplama (obkladka) zaryad to'playdi. Kerak bo'lganda elektr energiyasini tezlik bilan qaytarib beradi.",
        "structure": [
            ("Alyuminiy qoplamalar", "Elektr zaryadini yig'uvchi folga qatlamlari."),
            ("Dielektrik", "Qisqa tutashuvga yo'l qo'ymaydigan izolyatsion qatlam."),
            ("Xavfsizlik klapani", "Haddan tashqari qiziganda portlashning oldini oluvchi yuqori yoriq chiziqlar.")
        ],
        "specs": {
            "Sig'im": "Farad (uF, nF, pF)",
            "Kuchlanish": "16V, 25V, 50V, 400V"
        }
    },
    "esp32": {
        "name": "ESP32 Wi-Fi & Bluetooth Moduli",
        "category": "Mikrokontrollerlar va IoT",
        "en_name": "ESP32 NodeMCU",
        "purpose": "Qurilmalarni internetga ulash, ma'lumotlarni bulutga uzatish, smartfondan masofadan boshqarish va IoT tizimlarini yaratish.",
        "how_it_works": "32-bitli ikkita Xtensa yadrosiga ega. Wi-Fi va Bluetooth orqali simsiz ma'lumot almashib, datchiklarni boshqaradi.",
        "structure": [
            ("ESP-WROOM-32 metall ekrani", "RF va hisoblash yadrolarini xalaqitlardan himoyalovchi qopqoq."),
            ("Bosma Wi-Fi antenna", "Plata chetidagi zig-zag PCB antenna."),
            ("MicroUSB/Type-C", "Dasturlash va quvvat kiritish porti."),
            ("GPIO pinlari", "Datchiklar, motorlar va relalarni ulash oyoqchalari.")
        ],
        "specs": {
            "Protsessor": "Dual-Core 32-bit @ 240 MHz",
            "Simsiz aloqa": "Wi-Fi 802.11 b/g/n, Bluetooth 4.2 / BLE",
            "Xotira": "520 KB SRAM, 4MB Flash"
        }
    },
    "ultrasonic_sensor": {
        "name": "HC-SR04 Masofa Datchigi",
        "category": "Datchiklar va Modullar",
        "en_name": "HC-SR04 Ultrasonic Sensor",
        "purpose": "Ultratovush to'lqinlari orqali to'siqqacha bo'lgan masofani aniq o'lchash (robotlar va parktroniklarda).",
        "how_it_works": "40 kHz ultratovush to'lqini chiqariladi va to'siqdan qaytgan aks-sado vaqti orqali masofa: S = (Vaqt * 0.034) / 2 hisoblab topiladi.",
        "structure": [
            ("Uzatuvchi (T)", "Ultratovush impulsini chiqaruvchi element."),
            ("Qabul qiluvchi (R)", "Qaytgan tovush to'lqinini elektrga aylantiruvchi element."),
            ("Trig va Echo pinlari", "Signalni boshlash va natijani o'lchash pinlari.")
        ],
        "specs": {
            "Diapazon": "2 sm dan 400 sm gacha",
            "Aniqlik": "±3 mm",
            "Kuchlanish": "5V DC"
        }
    },
    "dht11": {
        "name": "DHT11 Harorat va Namlik Datchigi",
        "category": "Datchiklar va Modullar",
        "en_name": "DHT11 Temperature & Humidity Sensor",
        "purpose": "Atrof-muhit harorati va havo namligini o'lchab, mikrokontrollerga raqamli 1-Wire interfeysi orqali uzatish.",
        "how_it_works": "Rezistiv namlik sensori va NTC termorezistor qiymatlari ichki kontrollerda 40-bitli paketga aylanadi va bitta sim orqali jo'natiladi.",
        "structure": [
            ("Gigroskopik polimer datchik", "Havo namligiga qarab qarshiligi o'zgaruvchi qism."),
            ("NTC Termistor", "Haroratni o'lchovchi yarimo'tkazgich rezistor."),
            ("Ichki 8-bitli kontroller", "Kalibrlash va raqamli paket shakllantirish mikrosxemasi.")
        ],
        "specs": {
            "Namlik": "20% - 90% RH (±5%)",
            "Harorat": "0°C - 50°C (±2°C)",
            "Kuchlanish": "3.3V - 5V"
        }
    },
    "relay_module": {
        "name": "5V Rele Moduli",
        "category": "Datchiklar va Modullar",
        "en_name": "5V Relay Module",
        "purpose": "Past kuchlanishli mikrokontroller signali bilan 220V tarmoq yuklamalarini (lampochka, nasos, isitgich) xavfsiz yoqib-o'chirish.",
        "how_it_works": "Optopara orqali galvanik ajratilgan elektromagnit g'altakka tok berilganda, kontaktlar tortiladi va 220V zanjir ulanadi.",
        "structure": [
            ("Songle 5V Rele", "10A 250V kontaktlarga ega germetik quti."),
            ("EL817 Optopara", "Sxemani yuqori kuchlanishdan himoyalovchi optron chipi."),
            ("Vintli klemmalar", "220V simlarni ulash kontaktlari (NO, COM, NC).")
        ],
        "specs": {
            "Maksimal yuklama": "250V AC / 10A",
            "G'altak toki": "5V DC"
        }
    },
    "oled_display": {
        "name": "OLED 0.96 I2C Displey",
        "category": "Datchiklar va Modullar",
        "en_name": "0.96 inch I2C OLED (SSD1306)",
        "purpose": "Matn, grafika va datchiklar ko'rsatkichlarini yuqori yorqinlikda aks ettiruvchi ixcham displey.",
        "how_it_works": "Organik piksellar o'zi mustaqil yorug'lik chiqaradi. Bor-yo'g'i 2 ta sim (I2C: SDA, SCL) orqali boshqariladi.",
        "structure": [
            ("SSD1306 Drayver chipi", "128x64 pikselli OLED matritsasini boshqaruvchi mikrosxema."),
            ("0.96 dyuymli shisha", "Yorqin organik svetodiodlar yuzasi."),
            ("4 ta I2C kontakt pinlari", "VCC, GND, SCL, SDA oyoqchalari.")
        ],
        "specs": {
            "Ruxsat": "128 x 64 piksel",
            "Interfeys": "I2C (0x3C)",
            "Quvvat": "3.3V - 5V"
        }
    }
}
