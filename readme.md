# 🐾 Projeto Site da Turma — PetShop

## 📚 Objetivo do projeto

O objetivo desse projeto é treinar:

- HTML
- CSS
- Organização de projetos
- Git
- GitHub
- Trabalho em equipe

⚠️ O foco principal NÃO é criar um sistema completo.

O foco é aprender:
- estruturação de páginas
- organização de arquivos
- commits
- branches
- pull requests
- colaboração em equipe

---

# 📁 Estrutura do Projeto

```txt
projeto-site-turma/
│
├── index.html
├── style.css
├── README.md
│
└── pages/
    ├── login/
    │   ├── login.html
    │   └── style.css
    │
    ├── cadastro/
    │   ├── cadastro.html
    │   └── style.css
    │
    ├── produtos/
    │   ├── produtos.html
    │   └── style.css
    │
    ├── carrinho/
    │   ├── carrinho.html
    │   └── style.css
    │
    ├── contato/
    │   ├── contato.html
    │   └── style.css
    │
    ├── sobre/
    │   ├── sobre.html
    │   └── style.css
    │
    ├── faq/
    │   ├── faq.html
    │   └── style.css
    │
    ├── perfil/
    │   ├── perfil.html
    │   └── style.css
    │
    └── pedidos/
        ├── pedidos.html
        └── style.css

        ---

# 📌 Requisitos Gerais

Todos devem:

- Utilizar HTML e CSS
- JS é opcional
- Criar layout organizado
- Usar:
  - `header`
  - `main`
  - `footer`
- Criar navegação entre páginas
- Utilizar Flexbox ou Grid
- Adicionar efeito hover em botões/links
- Criar o site para vizualização em monitores (formato horizontal)
- Criar layout responsivo básico (opcional)
- Fazer commits frequentes
- Não alterar arquivos dos coleguinhas XD

---

# 🏠 Página Inicial — index.html

## Requisitos

- Nome/logo do petshop
- Menu de navegação funcionando, direcionando para os links das outras páginas.
- Banner principal
- Pequena apresentação do petshop
- Seção de serviços:
  - banho
  - tosa
  - veterinário
- Cards direcionado o usuário para a parte da loja.
- Rodapé com contato

---

# 🔐 Login — pages/login/login.html

## Requisitos

- Campo de email
- Campo de senha
- Botão “Entrar”
- Link “Criar conta”
- Formulário centralizado
- Estilização dos inputs e botão

---

# 📝 Cadastro — pages/cadastro/cadastro.html

## Requisitos

- Campo nome
- Campo email
- Campo telefone
- Campo senha
- Campo confirmar senha
- Botão cadastrar
- Layout organizado

---

# 🛍 Produtos — pages/produtos/produtos.html

## Requisitos

- Exibir pelo menos 6 produtos
- Cada produto deve conter:
  - imagem
  - nome
  - preço
  - botão “Adicionar”
- Produtos organizados em grid
- Hover nos cards

---

# 🛒 Carrinho — pages/carrinho/carrinho.html

## Requisitos

- Lista de produtos do carrinho
- Mostrar:
  - nome
  - quantidade
  - preço
- Exibir valor total
- Botão finalizar compra
- Pode usar tabela, cards ou listas

---

# 📞 Contato — pages/contato/contato.html

## Requisitos

- Formulário de contato
- Campo nome
- Campo email
- Campo mensagem
- Botão enviar
- Informações do petshop:
  - telefone
  - endereço
  - horário
- Extra: incluir link para whatsapp

---

# ℹ Sobre — pages/sobre/sobre.html

## Requisitos

- História do petshop
- Missão e valores
- Imagem da equipe da loja (turma) XD
- Texto organizado em seções

---

# ❓ FAQ — pages/faq/faq.html

## Requisitos

- Pelo menos 5 perguntas
- Respostas organizadas
- Destaque visual para perguntas
- Pode usar: (esconder respostas)
  - `<details>`
  - `<summary>`

---

# 👤 Perfil — pages/perfil/perfil.html

## Requisitos

- Foto do usuário
- Nome
- Email
- Telefone
- Endereço
- Botão editar perfil
- Layout estilo painel

---

# 📦 Pedidos — pages/pedidos/pedidos.html

## Requisitos

- Histórico de pedidos
- Cada pedido deve conter:
  - número do pedido
  - data
  - valor
  - status
- Pode usar tabela ou cards
- Status com cores diferentes:
  - entregue
  - pendente
  - cancelado

---

# ⭐ Desafios Extras (Opcional)

Quem quiser pode adicionar:

- Dark mode
- Menu responsivo
- Modal
- Animações
- Carrossel
- Validação de formulário
- Toast de sucesso
(a maioria desses usam JS)

---

# 🌳 Organização Git/GitHub

## Regras

- Cada aluno será responsável por uma página
- Cada aluno deve criar sua própria branch

## Exemplos

```bash
git checkout -b feature/login
git checkout -b feature/produtos

git push origin feature/faq

- Fazer commits frequentes
- Enviar alterações com push
- Criar Pull Request no GitHub
- Não alterar páginas dos colegas

---

# ✅ Objetivo Final

Ao final do projeto, todos devem praticar:

- Estruturação de sites
- Organização de código
- Git
- GitHub
- Branches
- Merge
- Pull Request
- Trabalho em equipe