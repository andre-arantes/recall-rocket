# Sistema de criação de lembretes - André Arantes

![print-sistema-de-lembretes](https://github.com/andre-arantes/lista-de-lembretes/assets/83238593/35adef98-3dba-42f2-9c14-835849fa4710)

Repositório do sistema de criação de lembretes desenvolvido para o processo seletivo da dti digital.

## Executando o projeto

Para executar o projeto localmente:

1. Clone o repositório.
2. Instale as dependências usando "npm install" ou "yarn install".
3. Navegue para a pasta backend e inicie o servidor com "npm start".
4. Em outro terminal navegue para a pasta "frontend" e inicie o servidor de desenvolvimento com "npm run dev".

### Configuração de Ambiente

O arquivo `.env` contém a URL da API para comunicação com o back-end, e seu conteúdo foi deixado visível apenas para facilitar a execução do código.

### Back-end

O back-end deste projeto foi construído em Node.js, utilizando o framework Express para criação das rotas. O banco de dados foi desenvolvido em SQLite3 para armazenar as tarefas.

### Front-end

O front-end do projeto foi desenvolvido em React utilizando o framework Vite para agilizar o desenvolvimento. Foi feito um Custom Hook para facilitar o acesso ao context de tarefas e SCSS modules para encapsular e reutilizar os estilos além de facilitar na legibilidade do código. A aplicação apresenta responsividade e se adapta a diferentes tamanhos de tela.
