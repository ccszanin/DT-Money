<p align="center">
  <h1 align="center"><a href="https://dt-money-ccszanin.vercel.app/">DT Money :rocket: </a></h1>
</p>


___

## 💻 Sobre

Este projeto tem como objetivo desenvolver um sistema de controle financeiro para os usuários. Nele, os usuários têm a capacidade de registrar suas receitas e despesas diárias. Além disso, há um campo de busca na página que permite filtrar transações com base em itens ou categorias específicas.

O projeto faz uso das bibliotecas React Hook Form e Zod para lidar com formulários, proporcionando uma experiência de usuário eficiente. O contexto do React é utilizado para simplificar o gerenciamento de variáveis em toda a aplicação. O projeto também implementa otimizações que visam evitar renderizações desnecessárias nos componentes, promovendo um desempenho mais eficiente.

___

## 🛠 Tecnologias

As seguintes tecnologias foram empregadas na criação deste projeto:

- [ReactJs](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Styled Components](https://styled-components.com/)
- [Zod](https://zod.dev/)

___

## 🚀 Como utilizar

Clone o projeto para o local desejado em seu computador.

```bash
$ git clone git@github.com:ccszanin/DTMoney.git
```
___

#### 🚧 Executando o Projeto
```bash

# Navegue até o diretório
$ cd DTMoney

# Instale as dependências necessárias
$ npm install

# Agora inicie o servidor do FrontEnd
$ npm run dev

# O terminal irá exibir o endereço local onde a aplicação está sendo executada. Basta digitar o mesmo endereço em seu navegador preferido. O endereço usado na criação do projeto foi este:

  http://localhost:5173/
```

#### 🚧 Deseja Executar o BackEnd localmente?

O BackEnd roda nativamente através do meu servidor JSON. Caso deseje rodar ele localmente em sua máquina, siga os passos:

```bash

# Navegue até o diretório
$ cd DTMoney/src/lib

# Abra o arquivo AXIOS.TS que está no diretório acima

# Faça a inversão dos itens que ficam comentados, de modo que os endereços ficarão assim:
baseURL: 'http://localhost:3000',
// baseURL: 'https://my-json-server.typicode.com/andreviapiana/dtmoney',

# Então inicie o servidor do BackEnd
$ npm run dev:server
```

___


[O resultado FINAL pode ser visto aqui](https://dt-money-ccszanin.vercel.app/)

___


Made with 🩷 by Carla Cristine

---
