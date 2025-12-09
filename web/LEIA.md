🧪 Webdojo – Testes Automatizados com Cypress

Este repositório contém a aplicação Webdojo e sua respectiva suíte de testes automatizados E2E utilizando Cypress.
O objetivo é garantir a qualidade e estabilidade da aplicação através de testes consistentes e automatizados.

📌 Visão Geral do Projeto

O repositório é composto por:

Aplicação Webdojo

Testes automatizados com Cypress

Os testes rodam sobre a aplicação Webdojo, que precisa estar ativa durante a execução.

🚀 Como Executar o Projeto
📥 Instalar dependências
npm install

🟦 Executando a Aplicação Webdojo

A aplicação está no mesmo repositório e deve ser iniciada antes dos testes:

npm run dev


A aplicação será executada em:

http://localhost:3000

🧫 Executando os Testes com Cypress

Os scripts de execução estão definidos no package.json:

▶️ Rodar toda a suíte de testes
npm test


Executa todos os testes com viewport 1440x900 (desktop).

▶️ Rodar apenas testes de login (desktop)
npm run test:login

▶️ Rodar apenas testes de login (mobile)
npm run test:login:mobile


Viewport simulada: 414x896.

🗂 Estrutura do Projeto Cypress
cypress/
│
├── e2e/
│   └── (arquivos de testes .cy.js)
│
├── fixtures/
│   ├── cep.json
│   ├── document.pdf
│   ├── profile.json
│   └── users.json
│
└── support/
    ├── commands.js
    ├── e2e.js
    ├── helper.js
    └── utils.js

📁 Descrição dos Diretórios
📁 cypress/e2e/

Contém todos os testes E2E da aplicação Webdojo.
Cada arquivo .cy.js representa um conjunto de cenários de teste.

Exemplos comuns:

login.cy.js — validações de autenticação

📁 cypress/fixtures/

Armazena arquivos usados como massa de teste.

Arquivo	Descrição
cep.json	Dados de CEP para cenários de endereço
document.pdf	Upload de documentos
profile.json	Dados de perfil para testes
users.json	Usuários válidos e inválidos
📁 cypress/support/

Contém utilidades e configurações globais do Cypress.

Arquivo	Função
commands.js	Comandos customizados do Cypress
e2e.js	Configurações carregadas automaticamente
helper.js	Funções auxiliares reutilizadas
utils.js	Utilidades diversas para testes
🔧 Comandos Customizados

Exemplo típico de comando criado em commands.js:

Cypress.Commands.add("login", (email, password) => {
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get("button[type='submit']").click();
});


Uso no teste:

cy.login('usuario@teste.com', '123456');

📄 Exemplo de Teste (login.cy.js)
describe('Fluxo de Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve realizar login com sucesso', () => {
    cy.fixture('users').then(data => {
      cy.get('#email').type(data.valid_user.email);
      cy.get('#password').type(data.valid_user.password);
      cy.get('button[type=submit]').click();

      cy.contains('Bem-vindo').should('be.visible');
    });
  });
});

📌 Boas Práticas Aplicadas

✔ Separação clara de fixtures, testes e suporte

✔ Uso de comandos customizados

✔ Testes cross-viewport (desktop/mobile)

✔ Estrutura intuitiva e escalável

✔ Reutilização de dados via fixtures

📈 Abrir o Cypress em modo interativo (opcional)
npx cypress open

🤝 Como Contribuir

Crie uma branch:

git checkout -b feature/minha-feature


Commit:

git commit -m "Adiciona minha feature"


Push:

git push origin feature/minha-feature


Abra um Pull Request

🧾 Licença

Este projeto é de uso interno e restrito ao time responsável pela aplicação Webdojo.