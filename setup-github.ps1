# Script para configurar novo repositório Git com token do GitHub

param(
    [Parameter(Mandatory=$false)]
    [string]$GitHubToken,
    
    [Parameter(Mandatory=$false)]
    [string]$RepoName = "greenelite-site",
    
    [Parameter(Mandatory=$false)]
    [string]$GitHubUser
)

Write-Host "=== Configuração de Novo Repositório Git ===" -ForegroundColor Cyan
Write-Host ""

# Passo 1: Remover repositório Git antigo se existir
if (Test-Path .git) {
    Write-Host "Removendo repositório Git antigo..." -ForegroundColor Yellow
    Remove-Item -Path .git -Recurse -Force -ErrorAction SilentlyContinue
    if (Test-Path .git) {
        Write-Host "⚠ Erro: Não foi possível remover .git. Feche o Cursor e tente novamente." -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ Repositório antigo removido" -ForegroundColor Green
}

# Passo 2: Inicializar novo repositório
Write-Host "Inicializando novo repositório Git..." -ForegroundColor Yellow
git init
git branch -M main
Write-Host "✓ Repositório inicializado" -ForegroundColor Green

# Passo 3: Adicionar arquivos
Write-Host "Adicionando arquivos..." -ForegroundColor Yellow
git add .
Write-Host "✓ Arquivos adicionados" -ForegroundColor Green

# Passo 4: Commit inicial
Write-Host "Criando commit inicial..." -ForegroundColor Yellow
git commit -m "Initial commit - Greenelite site (Pladur, Barramento e Pinturas)"
Write-Host "✓ Commit criado" -ForegroundColor Green

# Passo 5: Configurar GitHub (se token fornecido)
if ($GitHubToken -or $env:GITHUB_TOKEN) {
    $token = if ($GitHubToken) { $GitHubToken } else { $env:GITHUB_TOKEN }
    
    if (-not $GitHubUser) {
        $GitHubUser = Read-Host "Digite seu usuário do GitHub"
    }
    
    Write-Host ""
    Write-Host "Configurando repositório remoto no GitHub..." -ForegroundColor Yellow
    
    # URL do repositório com token
    $repoUrl = "https://${token}@github.com/${GitHubUser}/${RepoName}.git"
    
    # Adicionar remote
    git remote add origin $repoUrl
    Write-Host "✓ Remote 'origin' configurado" -ForegroundColor Green
    
    Write-Host ""
    Write-Host "Próximos passos:" -ForegroundColor Cyan
    Write-Host "1. Crie o repositório '$RepoName' no GitHub (se ainda não existir)" -ForegroundColor White
    Write-Host "2. Execute: git push -u origin main" -ForegroundColor White
    Write-Host ""
    Write-Host "OU execute este script novamente com:" -ForegroundColor Yellow
    Write-Host "  .\setup-github.ps1 -GitHubToken 'seu_token' -GitHubUser 'seu_usuario' -RepoName 'nome_do_repo'" -ForegroundColor Gray
} else {
    Write-Host ""
    Write-Host "Para configurar o GitHub, execute:" -ForegroundColor Yellow
    Write-Host "  .\setup-github.ps1 -GitHubToken 'seu_token' -GitHubUser 'seu_usuario' -RepoName 'nome_do_repo'" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Ou configure a variável de ambiente GITHUB_TOKEN:" -ForegroundColor Yellow
    Write-Host "  `$env:GITHUB_TOKEN = 'seu_token'" -ForegroundColor Gray
    Write-Host "  .\setup-github.ps1 -GitHubUser 'seu_usuario'" -ForegroundColor Gray
}

Write-Host ""
Write-Host "✓ Configuração concluída!" -ForegroundColor Green
