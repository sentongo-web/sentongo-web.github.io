<#
Generate resized PNG and WebP images for responsive `srcset` usage.

Requirements:
- ImageMagick `magick` on PATH (or `convert` for older installs)
- libwebp `cwebp` on PATH

Usage (PowerShell):
  ./scripts/generate-srcset.ps1 -ImagePath "assets/paul-passport.png"

This script will create `assets/paul-passport-260.png`, `assets/paul-passport-520.png`,
and their `.webp` counterparts.
#>

param (
    [Parameter(Mandatory = $true)]
    [string]$ImagePath
)

if (-not (Test-Path $ImagePath)) {
    Write-Error "Image not found: $ImagePath"
    exit 1
}

$base = [System.IO.Path]::GetFileNameWithoutExtension($ImagePath)
$dir = [System.IO.Path]::GetDirectoryName($ImagePath)

$sizes = @(260, 520)

foreach ($size in $sizes) {
    $outPng = Join-Path $dir "$base-$size.png"
    $outWebp = Join-Path $dir "$base-$size.webp"

    Write-Host "Generating $outPng"
    magick convert "$ImagePath" -resize ${size} "$outPng"

    Write-Host "Generating $outWebp"
    # Use cwebp for smaller file sizes (quality 80)
    cwebp -q 80 "$outPng" -o "$outWebp" | Out-Null
}

Write-Host "Done. Generated images for $ImagePath"
