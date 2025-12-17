# Configurar Repositório Git com Token do GitHub

## Método 1: Usando o Script PowerShell (Recomendado)

### Passo 1: Obter Token do GitHub

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token" > "Generate new token (classic)"
3. Dê um nome (ex: "Greenelite Site")
4. Selecione as permissões:
   - ✅ `repo` (acesso completo aos repositórios)
5. Clique em "Generate token"
6. **Copie o token** (você só verá ele uma vez!)

### Passo 2: Executar o Script

Abra o PowerShell na pasta do projeto e execute:

```powershell
# Opção A: Passar token como parâmetro
.\setup-github.ps1 -GitHubToken "seu_token_aqui" -GitHubUser "seu_usuario" -RepoName "greenelite-site"

# Opção B: Usar variável de ambiente (mais seguro)
$env:GITHUB_TOKEN = "seu_token_aqui"
.\setup-github.ps1 -GitHubUser "seu_usuario" -RepoName "greenelite-site"
```

### Passo 3: Criar Repositório no GitHub (se ainda não existir)

1. Acesse: https://github.com/new
2. Nome do repositório: `greenelite-site` (ou o nome que escolheu)
3. Deixe como **privado** ou **público** (sua escolha)
4. **NÃO** marque "Initialize with README"
5. Clique em "Create repository"

### Passo 4: Fazer Push

```powershell
git push -u origin main
```

## Método 2: Manual (Passo a Passo)

### 1. Remover repositório antigo
```powershell
Remove-Item -Recurse -Force .git
```

### 2. Inicializar novo repositório
```powershell
git init
git branch -M main
```

### 3. Adicionar arquivos
```powershell
git add .
git commit -m "Initial commit - Greenelite site"
```

### 4. Configurar remote com token
```powershell
# Substitua SEU_TOKEN, SEU_USUARIO e NOME_DO_REPO
git remote add origin https://SEU_TOKEN@github.com/SEU_USUARIO/NOME_DO_REPO.git
```

### 5. Fazer push
```powershell
git push -u origin main
```

## Método 3: Usando GitHub CLI (gh)

Se você tem o GitHub CLI instalado:

```powershell
# Login
gh auth login

# Criar repositório e fazer push
gh repo create greenelite-site --private --source=. --remote=origin --push
```

## Segurança do Token

⚠️ **IMPORTANTE**: Nunca commite o token no código!

- Use variáveis de ambiente
- Adicione `.env` ao `.gitignore` (já está configurado)
- Use tokens com permissões mínimas necessárias
- Revogue tokens antigos regularmente

## Verificar Configuração

```powershell
# Ver remotes
git remote -v

# Ver status
git status

# Ver commits
git log --oneline
```
