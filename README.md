# Serralheria Bernardo's - Site Institucional

Site institucional da Serralheria Bernardo's - Serralharia e Remodelações em Geral – Lisboa e Região.

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite 7
- React Router DOM
- Tailwind CSS
- Remix Icons

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 🏗️ Build para Produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `out/`

## 📤 Deploy na Vercel

### Opção 1: Deploy via Vercel CLI

1. Instale a Vercel CLI globalmente:
```bash
npm i -g vercel
```

2. Faça login na Vercel:
```bash
vercel login
```

3. Execute o deploy:
```bash
vercel
```

Siga as instruções no terminal. Na primeira vez, escolha:
- Link to existing project? **No**
- What's your project's name? **serralheria-bernardos** (ou o nome desejado)
- In which directory is your code located? **./**
- Override settings? **No**

4. Para fazer deploy de produção:
```bash
vercel --prod
```

### Opção 2: Deploy via GitHub

1. Faça commit e push do código para o GitHub:
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

2. Acesse [vercel.com](https://vercel.com) e faça login

3. Clique em "Add New Project"

4. Importe o repositório do GitHub

5. A Vercel detectará automaticamente as configurações:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Install Command**: `npm install`

6. Clique em "Deploy"

### Configurações do Vercel

O projeto já está configurado com `vercel.json` que inclui:
- ✅ Configuração de build
- ✅ Rewrites para SPA (todas as rotas redirecionam para `/index.html`)
- ✅ Cache para assets estáticos

## 📁 Estrutura do Projeto

```
serralheria-bernardos/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas do site
│   ├── router/         # Configuração de rotas
│   └── ...
├── public/             # Arquivos públicos
├── out/                # Build de produção
├── vite.config.ts      # Configuração do Vite
├── vercel.json         # Configuração do Vercel
└── package.json        # Dependências do projeto
```

## 🌐 URLs e Rotas

- `/` - Página inicial
- `/servicos` - Serviços oferecidos
- `/sobre` - Sobre a empresa
- `/contato` - Formulário de contato
- `/serralharia` - Serviços de Serralharia
- `/remodelacoes` - Remodelações Gerais
- `/pintura` - Serviços de Pintura
- `/pladur` - Pladur (Gesso Cartonado)
- `/eletricos` - Serviços Elétricos
- `/manutencao` - Manutenção e Reparações

## 📞 Contato

- **Telefone**: 968 747 769
- **Email**: geral@serralheriabernardos.pt
- **Localização**: Lisboa e Região, Portugal

## 📝 Licença

© 2025 Serralheria Bernardo's. Todos os direitos reservados.
