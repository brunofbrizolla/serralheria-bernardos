# Script para remover repositório Git antigo e preparar para novo repositório

Write-Host "Removendo repositório Git antigo..." -ForegroundColor Yellow

# Remove remotes se existirem
$remotes = git remote 2>$null
if ($remotes) {
    foreach ($remote in $remotes) {
        Write-Host "Removendo remote: $remote" -ForegroundColor Cyan
        git remote remove $remote 2>$null
    }
}

# Tenta remover a pasta .git
if (Test-Path .git) {
    Write-Host "Tentando remover pasta .git..." -ForegroundColor Yellow
    
    # Fecha processos que possam estar usando arquivos
    Get-Process | Where-Object {$_.Path -like "*cursor*"} | Stop-Process -Force -ErrorAction SilentlyContinue
    
    Start-Sleep -Seconds 2
    
    # Remove arquivos e pastas
    try {
        Remove-Item -Path .git -Recurse -Force -ErrorAction Stop
        Write-Host "✓ Pasta .git removida com sucesso!" -ForegroundColor Green
    } catch {
        Write-Host "⚠ Alguns arquivos estão bloqueados. Por favor:" -ForegroundColor Yellow
        Write-Host "  1. Feche o Cursor completamente" -ForegroundColor White
        Write-Host "  2. Execute este script novamente OU" -ForegroundColor White
        Write-Host "  3. Delete manualmente a pasta .git" -ForegroundColor White
        exit 1
    }
} else {
    Write-Host "✓ Nenhum repositório Git encontrado" -ForegroundColor Green
}

Write-Host "`nRepositório Git removido! Agora você pode:" -ForegroundColor Green
Write-Host "  1. Executar: git init" -ForegroundColor Cyan
Write-Host "  2. Adicionar seus arquivos: git add ." -ForegroundColor Cyan
Write-Host "  3. Fazer commit inicial: git commit -m 'Initial commit'" -ForegroundColor Cyan
Write-Host "  4. Conectar ao novo repositório: git remote add origin <URL>" -ForegroundColor Cyan
