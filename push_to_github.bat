@echo off
title GitHub Push - TechVision AI
echo ======================================================================
echo                TECHVISION AI - GITHUB REPOZITORIYASIGA PUSH
echo ======================================================================
echo.

set /p REPO_URL="GitHub repozitoriya URL manzilini kiriting (masalan: https://github.com/husniddin-sheyx/techvision-ai.git): "

if "%REPO_URL%"=="" (
    echo [XATO] Repozitoriya manzili kiritilmadi!
    pause
    exit /b
)

git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%
git branch -M main

echo.
echo Kodlar GitHub repozitoriyasiga yuklanmoqda (Push)...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo [MUVAFFAQIYAT] Barcha fayllar GitHub-ga muvaffaqiyatli yuklandi!
) else (
    echo.
    echo [DIQQAT] Agar xatolik bersa:
    echo 1. GitHub-da shu nomli bo'sh repozitoriya ochilganligini tekshiring.
    echo 2. Login / Personal Access Token to'g'ri kiritilganligiga ishonch hosil qiling.
)

pause
