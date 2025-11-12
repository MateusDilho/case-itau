# Projeto CASE React + TypeScript + Vite

## Pré-requisitos

- **Node.js**

## Instalando dependências

Dentro da pasta do projeto rode o comando:
```bash
npm install
```
## Rodando o projeto

Para iniciar o servidor de desenvolvimento rode:
```bash
npm run dev
```
Em seguida acesse:
```bash
http://localhost:5173
```

---
## Observações do Projeto

O projeto é bem simples e direto, com algumas telas principais:

- **Login:** É a primeira tela, onde o usuário entra com e-mail e senha
  <img width="1916" height="971" alt="image" src="https://github.com/user-attachments/assets/9cbfe4fa-93c6-4b13-9bd6-a66c2a165e50" />

- **Reset de senha:** Se o usuário esqueceu a senha, ele coloca o e-mail e recebe um link por e-mail para criar uma nova senha (O token é perdido no ambiente do banco)
  <img width="1918" height="972" alt="image" src="https://github.com/user-attachments/assets/47d8b65b-be3f-4b30-b65e-f709fa1a5787" />

- **Troca de senha:** Tela para colocar a nova senha usando o link enviado
  <img width="1917" height="970" alt="image" src="https://github.com/user-attachments/assets/a07ffd0b-3aa3-4b5c-9a5c-ca5ff9fa71b7" />

- **Produtos:** Depois de logar, o usuário vê todos os produtos que já cadastrou e pode adicionar novos
  <img width="1914" height="968" alt="image" src="https://github.com/user-attachments/assets/5d87d222-37fe-495d-bffa-849e92e5f9ff" />

#### Observação sobre o `.env`
Pra facilitar o teste do projeto, o arquivo `.env` foi mantido no repositório

## Diagrama do Banco de Dados
<img width="1316" height="503" alt="image" src="https://github.com/user-attachments/assets/06143ddf-ac19-4da4-9721-e32239e6fd5e" />

 
