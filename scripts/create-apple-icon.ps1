Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap 180, 180
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::FromArgb(250, 246, 244))
$brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(183, 110, 121))
$font = New-Object System.Drawing.Font("Georgia", 72, [System.Drawing.FontStyle]::Regular)
$g.DrawString("J", $font, $brush, 58, 48)
$bmp.Save("$PSScriptRoot\..\app\apple-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
Write-Host "Created app/apple-icon.png"
