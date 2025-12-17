# Configuração Simples do Formulário de Contato

## Solução: Web3Forms (Gratuito e Muito Simples)

### ⚡ Configuração em 2 Passos:

### Passo 1: Obter Chave de Acesso (2 minutos)

1. Acesse https://web3forms.com/
2. Digite seu email: `geral@serralheriabernardos.pt`
3. Clique em **Get Your Access Key**
4. Copie a chave gerada (exemplo: `abc123-def456-ghi789`)

### Passo 2: Adicionar no Vercel (1 minuto)

1. Acesse o dashboard do Vercel: https://vercel.com/
2. Vá no seu projeto **serralheria-bernardos**
3. Clique em **Settings** > **Environment Variables**
4. Adicione uma nova variável:
   - **Name:** `VITE_WEB3FORMS_KEY`
   - **Value:** (cole a chave que copiou)
5. Clique em **Save**
6. Faça um novo deploy (ou aguarde o deploy automático)

### ✅ Pronto!

O formulário já está configurado e funcionando! Todos os pedidos serão enviados para `geral@serralheriabernardos.pt`.

### 📧 Vantagens:

✅ **Gratuito** - 250 envios/mês  
✅ **Configuração em 2 minutos**  
✅ **Sem servidor necessário**  
✅ **Proteção anti-spam automática**  
✅ **Notificações por email**

### 🧪 Teste

Após configurar, teste o formulário. Você receberá:
- Email de confirmação no `geral@serralheriabernardos.pt`
- Todos os dados do formulário formatados

---

**Nota:** Se não configurar a chave, o formulário ainda funcionará mas mostrará um aviso. Configure a chave para funcionar completamente.
