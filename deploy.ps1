if ($args.Length -ne 1) {
    Write-Host "Usage: powershell deploy.ps1 <baseURL>. Ex: powershell deploy.ps1 https://www.isid.ac.in/~testdeploy/"
    exit
}

# Remove directories and files
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue .angular, node_modules/.cache, dist, deploy

# Build the Angular app
ng build --base-href $args[0]

mkdir deploy
# Copy files to the deploy directory
Copy-Item -Path "dist\isid-cecfee\*" -Destination .\deploy -Recurse