# Configuração do EmailJS para Formulário de Contato

## Passo 1: Criar Conta no EmailJS

1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita (até 200 emails/mês)
3. Faça login no dashboard

## Passo 2: Configurar Serviço de Email

1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. **IMPORTANTE**: Configure para enviar para `geral@serralheriabernardos.pt`
6. Anote o **Service ID** gerado

## Passo 3: Criar Template de Email

1. No dashboard, vá em **Email Templates**
2. Clique em **Create New Template**
3. Use o seguinte template:

**Subject:**
```
Novo Pedido de Orçamento - Serralheria Bernardo's
```

**Content (HTML):**
```html
<h2>Novo Pedido de Orçamento</h2>

<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Telefone:</strong> {{phone}}</p>
<p><strong>Localização:</strong> {{location}}</p>
<p><strong>Tipo de Serviço:</strong> {{service_type}}</p>

<h3>Mensagem:</h3>
<p>{{message}}</p>

<hr>
<p><small>Enviado através do formulário de contato do site</small></p>
```

4. Salve o template
5. Anote o **Template ID** gerado

## Passo 4: Obter Public Key

1. No dashboard, vá em **Account** > **General**
2. Copie a **Public Key**

## Passo 5: Configurar Variáveis de Ambiente

1. Crie um ficheiro `.env` na raiz do projeto (se não existir)
2. Adicione as seguintes variáveis:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

3. **IMPORTANTE**: Adicione `.env` ao `.gitignore` para não commitar as chaves

## Passo 6: Configurar no Vercel (Produção)

1. Acesse o dashboard do Vercel
2. Vá em **Settings** > **Environment Variables**
3. Adicione as três variáveis:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Faça um novo deploy

## Teste

Após configurar, teste o formulário de contato. O email deve ser enviado para `geral@serralheriabernardos.pt`.

## Alternativa: Usar mailto (Temporário)

Se preferir uma solução temporária sem configuração, posso implementar um fallback que abre o cliente de email padrão do utilizador.
