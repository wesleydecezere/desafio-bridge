# Desafio Bridge

## Desafio

Criar um PWA que calcula o menor número real duodígito de x, onde x é um número real maior que 100 fornecido pelo usuário.

## Tecnologias

No *frontend*, fui utilizado **TypeScript** e a biblioteca **ReactJS**. Para a estilização, foi utilizada a ferramenta **Styled Components**, que permite a escrita de *CSS-in-JS*. Também foram utilizados alguns componentes do *design system* **Bold**, desenvolvido em código aberto pelo Laboratório Bridge.

O *backend*, escrito em **JavaScript**, foi implementado no **Node.js** com o framework **Express.**

As dependências do projeto foram gerenciadas com a ferramenta **yarn**.

O controle do padrão de código foi feito com o auxílio do *linter* **ESLint** com as configurações do *Airbnb*.

Tanto no *backend* quanto no *frontend*, foram escritos testes unitários para as funcionalidades mais importantes. Para isso, foi utilizado o framework de testes **Jest** com a **React Testing Library**.

## Rodando a aplicação localmente

1. Para executar os passos seguintes, é necessário que você possuo o *JS Runtime* Node.js e o gerenciador de pacotes yarn instalados em sua máquina
2. Primeiramente, baixe este repositório com `git clone https://github.com/wesleydecezere/desafio-bridge.git`
3. Então, acesse a pasta *pwa-duodigit* e execute o comando `yarn install` para instalar todas as dependências do projeto
4. Após a instalação,  rode `node server.js` na mesma pasta para iniciar o *backend* na porta ***5000***
5. Em seguida, execute `yarn start` para iniciar o *frontend* na porta ***3000***
6. Pronto, a aplicação já está rodando! Basta acessar [http://localhost:3000](http://localhost:3000) para interagir com a interface e consumir os serviços do *backend*
