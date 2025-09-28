# Manual de Atendimento Interativo

Um portal web responsivo e protegido por senha, projetado para ser um manual de consulta para equipes de Serviço de Atendimento ao Consumidor (SAC). O projeto foi construído como uma Single Page Application (SPA), onde o conteúdo principal é carregado dinamicamente após a autenticação.

## ✨ Funcionalidades

- **Autenticação:** Acesso ao conteúdo protegido por uma senha única.
- **Arquitetura Serverless:** Utiliza Netlify Functions para validar a senha e carregar o conteúdo, mantendo a lógica de back-end separada do front-end.
- **Navegação Dinâmica:** O conteúdo é carregado sem a necessidade de recarregar a página, proporcionando uma experiência de usuário fluida.
- **Design Responsivo:** Interface adaptável a diferentes tamanhos de tela, construída com Tailwind CSS.
- **Conteúdo Organizado:** Seções bem definidas para Scripts, Links Úteis, Procedimentos Técnicos, Valores e mais.

## 🛠️ Tecnologias Utilizadas

- **Front-end:** HTML, JavaScript, Tailwind CSS
- **Back-end (Serverless):** Netlify Functions (Node.js)
- **Hospedagem:** Netlify

## 📁 Estrutura do Projeto
- **`index.html`**: Página inicial que contém a tela de login e o script para autenticação.
- **`netlify.toml`**: Arquivo de configuração que indica ao Netlify onde encontrar as funções serverless.
- **`netlify/functions/auth.js`**: Função serverless responsável por receber a senha e validar o acesso.
- **`netlify/functions/content.js`**: Função serverless que armazena e entrega todo o HTML do manual após o login bem-sucedido.

## 🚀 Como Executar

Para visualizar e testar o projeto, basta fazer o deploy do diretório em uma plataforma como a Netlify, que dará suporte nativo às funções serverless.

A senha padrão para acesso ao conteúdo é: `admin123`