# Controle de Investimentos

## 📑 Sumário
- [Objetivos do Projeto](#-objetivos-do-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Validações](#-validacoes)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar](#-como-executar)
- [Autor](#-autor)


## 🎯 Objetivos do Projeto
Este é um sistema para cadastro, atualização e visualização de investimentos, onde é possível cadastrar novos investimentos, editar e excluir investimentos existentes, e visualizar uma lista de investimentos registrados

## 🔥 Funcionalidades Principais
- *Cadastrar novos investimentos*: Inserir informações como nome, tipo, valor investido e data do investimento.
- *Editar investimentos existentes*: Atualizar informações de investimentos cadastrados.
- *Excluir investimentos*: Remover investimentos da lista.
- *Visualizar lista de investimentos*: Exibir todos os investimentos cadastrados com a possibilidade de realizar ações de edição e remoção.

## ✔️ Funcionalidades Principais
- *Nome do Investimento*: O nome do investimento deve ter pelo menos 3 caracteres. Caso contrário, o usuário receberá uma mensagem de erro.
- *Tipo de Investimento*: O tipo do investimento é obrigatório e não pode ser deixado em branco.
- *Valor Investido*: O valor investido deve ser maior que 0, garantindo que o usuário insira um valor válido para o investimento.
- *Data do Investimento*: A data do investimento não pode ser no futuro. O sistema valida a data inserida e assegura que o investimento tenha sido feito em uma data válida.

## 🛠 Tecnologias Utilizadas:
- *Frontend*: O front-end do sistema foi desenvolvido utilizando Angular, oferecendo uma interface interativa e fácil de usar.
- *Estilo*: Foi utilizado Bootstrap para garantir um design responsivo e atraente, com componentes prontos para facilitar o desenvolvimento da interface.
- *Backend*: Para o backend, um servidor JSON foi configurado para realizar as operações de CRUD (Create, Read, Update, Delete) dos investimentos.

## 💻 Como Executar:
- *Instalação do JSON Server*: Primeiro, instale o JSON Server globalmente na sua máquina com o seguinte comando:
```sh
npm install -g json-server
```
- *Iniciar o JSON Server*: Para iniciar o servidor back-end e simular um banco de dados, execute o seguinte comando:
```sh
json-server --watch db.json --port 3000
```
Isso iniciará o back-end na URL http://localhost:3000.
- *Instalar as Dependências*: No diretório do seu projeto Angular, instale as dependências necessárias, incluindo o HttpClientModule para interagir com o JSON Server:
```sh
npm install
```
- *Inicar Servidor Angular*: Eexecute o seguinte comando no diretório do projeto:
```sh
ng serve
```
Isso iniciará o front-end na URL http://localhost:4200.

## 👥 Autor
O Aplicativo Controle de Investimentos foi criado por Lucas Silva Pinheiro.
