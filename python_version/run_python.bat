@echo off
title TechVision AI - Python Desktop Edition
echo ======================================================================
echo           TECHVISION AI - PYTHON TALQINI ISHGA TUSHMOQDA
echo ======================================================================
echo.

python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [DIQQAT] Kompyuteringizda Python to'g'ridan-to'g'ri topilmadi.
    echo D:\02_Dasturlar\python-3.13.7-amd64.exe orqali Python o'rnatilganligini tekshiring.
    echo.
    echo Dasturning WEB talqinini ishga tushirish uchun papkadagi 'start_app.bat' faylini oching.
    pause
    exit /b
)

python main.py
pause

