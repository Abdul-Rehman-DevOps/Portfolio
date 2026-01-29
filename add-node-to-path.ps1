# Add Node.js to user PATH and refresh current session
$nodePath = "C:\Program Files\nodejs"
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
$machinePath = [Environment]::GetEnvironmentVariable("Path", "Machine")

if ($userPath -notlike "*$nodePath*") {
    [Environment]::SetEnvironmentVariable("Path", "$nodePath;$userPath", "User")
    $userPath = [Environment]::GetEnvironmentVariable("Path", "User")
    Write-Host "Added Node.js to PATH." -ForegroundColor Green
}

# Refresh PATH in THIS terminal so npm works immediately
$env:Path = "$nodePath;" + $machinePath + ";" + $userPath
Write-Host "Refreshed PATH in this terminal. Run: npm -v" -ForegroundColor Green
