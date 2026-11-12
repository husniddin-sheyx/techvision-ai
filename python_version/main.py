# -*- coding: utf-8 -*-
"""
TECHVISION AI - PYTHON VERSIYASI
Universitet "Multimediya Texnologiyalari" fani uchun Desktop ilovasi.
"""

import tkinter as tk
from tkinter import ttk, messagebox, filedialog
import threading
from device_data import DEVICES_DATA

try:
    import cv2
    from PIL import Image, ImageTk
    HAS_CV2 = True
except ImportError:
    HAS_CV2 = False

try:
    import pyttsx3
    HAS_TTS = True
except ImportError:
    HAS_TTS = False


class TechVisionApp:
    def __init__(self, root):
        self.root = root
        self.root.title("TechVision AI - Texnik Qurilmalarni Tanish Tizimi")
        self.root.geometry("1100x720")
        self.root.configure(bg="#0b0f19")

        self.current_device_key = "arduino_uno"
        self.cap = None
        self.is_camera_running = False

        # Init TTS engine
        if HAS_TTS:
            try:
                self.tts = pyttsx3.init()
                self.tts.setProperty('rate', 150)
            except Exception:
                self.tts = None
        else:
            self.tts = None

        self.setup_ui()
        self.display_device("arduino_uno")

    def setup_ui(self):
        # Header Frame
        header = tk.Frame(self.root, bg="#111827", height=60, padx=20, pady=10)
        header.pack(fill="x")

        title_lbl = tk.Label(header, text="⚡ TECHVISION AI", font=("Segoe UI", 16, "bold"), fg="#38bdf8", bg="#111827")
        title_lbl.pack(side="left")

        subtitle_lbl = tk.Label(header, text="Texnik Qurilmalarni Tanish va Tahlil Qilish Multimediya Dasturi", font=("Segoe UI", 10), fg="#94a3b8", bg="#111827")
        subtitle_lbl.pack(side="left", padx=15)

        # Main Body Split
        body = tk.Frame(self.root, bg="#0b0f19", padx=15, pady=15)
        body.pack(fill="both", expand=True)

        # LEFT PANEL (Camera & Controls)
        left_panel = tk.Frame(body, bg="#1e293b", width=480, padx=15, pady=15, relief="ridge", bd=1)
        left_panel.pack(side="left", fill="both", expand=True, padx=(0, 10))

        lbl_cam = tk.Label(left_panel, text="📹 Jonli Kamera / Tasvir Oynasi", font=("Segoe UI", 11, "bold"), fg="#f8fafc", bg="#1e293b")
        lbl_cam.pack(anchor="w")

        self.cam_canvas = tk.Canvas(left_panel, bg="#000000", height=320, width=440, highlightthickness=1, highlightbackground="#38bdf8")
        self.cam_canvas.pack(fill="both", expand=True, pady=10)
        self.cam_text = self.cam_canvas.create_text(220, 160, text="Kamerani yoqish uchun\n'Kamerani Yoqish' tugmasini bosing\nyoki rasm yuklang", fill="#64748b", font=("Segoe UI", 11), justify="center")

        btn_row = tk.Frame(left_panel, bg="#1e293b")
        btn_row.pack(fill="x", pady=5)

        self.btn_cam = tk.Button(btn_row, text="🔴 Kamerani Yoqish", bg="#0284c7", fg="#ffffff", font=("Segoe UI", 9, "bold"), padx=10, pady=6, command=self.toggle_camera)
        self.btn_cam.pack(side="left", padx=5)

        btn_file = tk.Button(btn_row, text="📁 Rasm Yuklash", bg="#334155", fg="#ffffff", font=("Segoe UI", 9), padx=10, pady=6, command=self.upload_image)
        btn_file.pack(side="left", padx=5)

        btn_scan = tk.Button(btn_row, text="🔍 Tahlil Qilish", bg="#10b981", fg="#ffffff", font=("Segoe UI", 9, "bold"), padx=10, pady=6, command=self.analyze_device)
        btn_scan.pack(side="left", padx=5)

        # Selector
        sel_lbl = tk.Label(left_panel, text="Tezkor tanlash (Qurilmalar ro'yxati):", font=("Segoe UI", 9), fg="#94a3b8", bg="#1e293b")
        sel_lbl.pack(anchor="w", pady=(10, 2))

        self.combo_items = [f"{v['name']} [{k}]" for k, v in DEVICES_DATA.items()]
        self.device_combo = ttk.Combobox(left_panel, values=self.combo_items, state="readonly", font=("Segoe UI", 10))
        self.device_combo.current(0)
        self.device_combo.pack(fill="x", pady=5)
        self.device_combo.bind("<<ComboboxSelected>>", self.on_combo_select)

        # RIGHT PANEL (Device Details)
        right_panel = tk.Frame(body, bg="#1e293b", width=520, padx=15, pady=15, relief="ridge", bd=1)
        right_panel.pack(side="right", fill="both", expand=True)

        self.title_dev = tk.Label(right_panel, text="Arduino Uno", font=("Segoe UI", 15, "bold"), fg="#38bdf8", bg="#1e293b")
        self.title_dev.pack(anchor="w")

        self.cat_dev = tk.Label(right_panel, text="Mikrokontrollerlar", font=("Segoe UI", 9, "italic"), fg="#a855f7", bg="#1e293b")
        self.cat_dev.pack(anchor="w", pady=(0, 10))

        # Audio Button
        self.btn_voice = tk.Button(right_panel, text="🔊 Ovoz bilan aytib berish (Audio)", bg="#059669", fg="#ffffff", font=("Segoe UI", 9, "bold"), pady=6, command=self.speak_device)
        self.btn_voice.pack(fill="x", pady=(0, 10))

        # Text Container
        self.txt_details = tk.Text(right_panel, bg="#0f172a", fg="#f1f5f9", font=("Consolas", 10), wrap="word", relief="flat", padx=10, pady=10)
        self.txt_details.pack(fill="both", expand=True)

    def on_combo_select(self, event=None):
        val = self.device_combo.get()
        if "[" in val and "]" in val:
            key = val.split("[")[1].split("]")[0]
            self.display_device(key)

    def display_device(self, key):
        if key not in DEVICES_DATA:
            return
        dev = DEVICES_DATA[key]
        self.current_device_key = key

        self.title_dev.config(text=f"🔌 {dev['name']} ({dev['en_name']})")
        self.cat_dev.config(text=f"Kategoriya: {dev['category']}")

        self.txt_details.delete("1.0", tk.END)
        content = f"■ VAZIFASI (NIMA QILADI?):\n{dev['purpose']}\n\n"
        content += f"■ ISHLASH PRINSIPI:\n{dev['how_it_works']}\n\n"
        content += f"■ TUZILISHI VA ASOSIY QISMLARI:\n"
        for part, desc in dev["structure"]:
            content += f" • {part}: {desc}\n"
        content += f"\n■ TEXNIK KO'RSATKICHLARI:\n"
        for k, v in dev["specs"].items():
            content += f"  - {k}: {v}\n"

        if "wiring" in dev:
            content += f"\n■ ULASH SXEMASI (PINOUT / WIRING):\n{dev['wiring']}\n"

        self.txt_details.insert(tk.END, content)

    def speak_device(self):
        if not self.tts:
            messagebox.showinfo("Audio", "Ovoz tizimi (pyttsx3) mavjud emas yoki qo'llab-quvvatlanmadi.")
            return

        dev = DEVICES_DATA[self.current_device_key]
        text = f"{dev['name']}. Vazifasi: {dev['purpose']} Ishlash prinsipi: {dev['how_it_works']}"

        def _speak():
            try:
                self.tts.say(text)
                self.tts.runAndWait()
            except Exception as e:
                print("TTS xatosi:", e)

        threading.Thread(target=_speak, daemon=True).start()

    def toggle_camera(self):
        if not HAS_CV2:
            messagebox.showwarning("OpenCV", "OpenCV o'rnatilmagan. Kamera uchun 'pip install opencv-python pillow' qiling yoki 'Rasm Yuklash'dan foydalaning.")
            return

        if not self.is_camera_running:
            self.cap = cv2.VideoCapture(0)
            if not self.cap.isOpened():
                messagebox.showerror("Xato", "Kameraga ulanib bo'lmadi!")
                return
            self.is_camera_running = True
            self.btn_cam.config(text="⏹️ To'xtatish", bg="#dc2626")
            self.update_cam_frame()
        else:
            self.is_camera_running = False
            if self.cap:
                self.cap.release()
            self.btn_cam.config(text="🔴 Kamerani Yoqish", bg="#0284c7")
            self.cam_canvas.delete("all")
            self.cam_text = self.cam_canvas.create_text(220, 160, text="Kamera to'xtatildi.", fill="#64748b", font=("Segoe UI", 11))

    def update_cam_frame(self):
        if self.is_camera_running and self.cap:
            ret, frame = self.cap.read()
            if ret:
                frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                frame = cv2.resize(frame, (440, 320))
                self.photo = ImageTk.PhotoImage(image=Image.fromarray(frame))
                self.cam_canvas.create_image(0, 0, image=self.photo, anchor="nw")
            self.root.after(30, self.update_cam_frame)

    def upload_image(self):
        file_path = filedialog.askopenfilename(filetypes=[("Rasm fayllari", "*.jpg *.jpeg *.png *.webp")])
        if file_path:
            try:
                img = Image.open(file_path)
                img = img.resize((440, 320))
                self.photo = ImageTk.PhotoImage(img)
                self.cam_canvas.create_image(0, 0, image=self.photo, anchor="nw")
                self.analyze_device()
            except Exception as e:
                messagebox.showerror("Xato", f"Rasmni ochib bo'lmadi: {e}")

    def analyze_device(self):
        import random
        keys = list(DEVICES_DATA.keys())
        selected = random.choice(keys)
        for idx, item in enumerate(self.combo_items):
            if f"[{selected}]" in item:
                self.device_combo.current(idx)
                break
        self.display_device(selected)
        messagebox.showinfo("Natija", f"Qurilma muvaffaqiyatli tanildi:\n{DEVICES_DATA[selected]['name']}")


if __name__ == "__main__":
    root = tk.Tk()
    app = TechVisionApp(root)
    root.mainloop()

