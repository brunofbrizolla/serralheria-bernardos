# ChatWidget - Instruções de Configuração

## EmailJS Setup

Para que o componente funcione completamente, você precisa configurar o EmailJS:

1. **Criar conta no EmailJS** (https://www.emailjs.com/)
   - Faça o cadastro gratuito
   - Verifique seu email

2. **Criar um Service**
   - Acesse "Email Services" no dashboard
   - Conecte seu provedor de email (Gmail, Outlook, etc.)
   - Anote o **Service ID**

3. **Criar um Template de Email**
   - Acesse "Email Templates"
   - Crie um novo template
   - Use estas variáveis no template:
     - `{{to_email}}` - Email do destinatário
     - `{{from_name}}` - Nome do cliente
     - `{{from_email}}` - Email do cliente
     - `{{service_type}}` - Tipo de serviço
     - `{{description}}` - Descrição do projeto
     - `{{message}}` - Resumo completo da conversa
   - Configure o email de destino como `{{to_email}}`
   - Anote o **Template ID**

4. **Obter Public Key**
   - No dashboard, vá em "Account" > "General"
   - Copie sua **Public Key**

5. **Configurar no componente**
   - Abra `src/components/ChatWidget.tsx`
   - Substitua as constantes:
     ```typescript
     const EMAILJS_SERVICE_ID = 'seu_service_id';
     const EMAILJS_TEMPLATE_ID = 'seu_template_id';
     const EMAILJS_PUBLIC_KEY = 'sua_public_key';
     const RECIPIENT_EMAIL = 'contato@minhaempresa.com';
     ```

## Funcionalidades

- ✅ Botão flutuante fixo no canto inferior direito
- ✅ Transição suave ao abrir/fechar
- ✅ Avatar do atendente no topo do chat
- ✅ Fluxo de conversa passo a passo
- ✅ Validação de email
- ✅ Histórico completo de mensagens
- ✅ Envio de email via EmailJS
- ✅ Interface responsiva e amigável

## Dependências

- `@emailjs/browser` - Já instalado
- `react` - Já instalado
- `tailwindcss` - Já configurado
- RemixIcon - Já incluído no HTML

