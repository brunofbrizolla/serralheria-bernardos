# Instruções para Criar um Novo Repositório Git

## Passo 1: Remover o Repositório Git Antigo

### Opção A: Usando o Script PowerShell (Recomendado)
1. Feche o Cursor completamente
2. Abra o PowerShell na pasta do projeto
3. Execute:
   ```powershell
   .\remove-git.ps1
   ```

### Opção B: Remoção Manual
1. Feche o Cursor completamente
2. Abra o Explorador de Arquivos
3. Na pasta do projeto, mostre arquivos ocultos (View > Show > Hidden items)
4. Delete a pasta `.git` manualmente

### Opção C: Usando Git (Se o repositório ainda estiver ativo)
```powershell
# Remove todos os remotes
git remote remove origin

# Remove a pasta .git (pode dar erro se arquivos estiverem bloqueados)
Remove-Item -Recurse -Force .git
```

## Passo 2: Criar um Novo Repositório Git Limpo

Após remover o repositório antigo, execute:

```powershell
# Inicializar novo repositório
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit - Greenelite site"

# (Opcional) Conectar a um novo repositório remoto
git remote add origin <URL_DO_SEU_NOVO_REPOSITORIO>
git branch -M main
git push -u origin main
```

## Passo 3: Verificar

```powershell
# Verificar status
git status

# Verificar remotes (deve estar vazio ou mostrar apenas seu novo remote)
git remote -v
```

## Notas Importantes

- ✅ O arquivo `.gitignore` já está configurado corretamente
- ✅ Todas as referências à Friotec foram removidas
- ✅ O projeto está pronto para ser versionado como novo repositório
- ⚠️ Se encontrar erros de "arquivo bloqueado", feche o Cursor e tente novamente
