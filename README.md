# Playwright - SauceDemo Test Suite

Projeto de automação de testes end-to-end utilizando **Playwright** com **TypeScript** para validar o fluxo de login da aplicação [SauceDemo](https://www.saucedemo.com/).

---

## Tecnologias Utilizadas

- [Playwright](https://playwright.dev/) — Framework de automação de testes E2E
- [TypeScript](https://www.typescriptlang.org/) — Linguagem de programação tipada
- [Node.js](https://nodejs.org/) — Ambiente de execução

---

## Estrutura do Projeto

```
playwright-saucedemo/
├── tests/
│   └── login.spec.ts       # Testes do fluxo de login
├── playwright.config.ts    # Configurações do Playwright
├── package.json
└── README.md
```

---

## Cenários de Teste

### Login (`login.spec.ts`)

| Cenário | Descrição | Status |
|---|---|---|
| Login válido | Acesso com credenciais corretas | ✅ |
| Login inválido | Acesso com credenciais incorretas | ✅ |
| Credenciais vazias | Submissão do form sem preencher campos | ✅ |
| Senha não preenchida | Apenas username informado | ✅ |

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado (versão 16 ou superior)
- Git instalado

### 1. Clone o repositório

```bash
git clone https://github.com/NatanaelMartiny/playwright-saucedemo.git
cd playwright-saucedemo
```

### 2. Instale as dependências

```bash
npm install
npx playwright install
```

### 3. Execute os testes

```bash
# Executar todos os testes
npx playwright test

# Executar em modo visual (headed)
npx playwright test --headed

# Executar com relatório HTML
npx playwright test --reporter=html
```

### 4. Visualizar o relatório

```bash
npx playwright show-report
```

---

## Sobre a Aplicação Testada

A [SauceDemo](https://www.saucedemo.com/) é uma aplicação de e-commerce criada pela Sauce Labs especificamente para prática de automação de testes. Ela simula um ambiente real com diferentes tipos de usuários e comportamentos esperados.

**Usuários disponíveis para teste:**

| Usuário | Comportamento |
|---|---|
| `standard_user` | Acesso normal ao sistema |
| `locked_out_user` | Usuário bloqueado |
| `problem_user` | Apresenta problemas de UI |
| `performance_glitch_user` | Lentidão simulada |

---

## Próximos Passos

- [ ] Adicionar testes do fluxo de carrinho de compras
- [ ] Adicionar testes de checkout
- [ ] Configurar relatório Allure
- [ ] Implementar CI/CD com GitHub Actions

---

## Autor

**Natanael Martiny**  
QA Engineer | Cypress | Playwright | Automação de Testes  

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Natanael%20Martiny-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/natanael-martiny-14410137a/)
[![GitHub](https://img.shields.io/badge/GitHub-NatanaelMartiny-black?style=flat&logo=github)](https://github.com/NatanaelMartiny)
