# API de Lista de Tarefas com Express

Este é um projeto de estudo que consiste em uma API para uma lista de tarefas simples, desenvolvida usando o framework Express do Node.js. A API permite a criação, leitura, atualização e exclusão de tarefas da lista.

## Funcionalidades

- Criar uma nova tarefa
- Obter todas as tarefas
- Obter uma tarefa específica
- Atualizar uma tarefa existente
- Excluir uma tarefa

## Tecnologias Utilizadas

- Node.js
- Express

## Rotas

A API possui as seguintes rotas e suas respectivas funcionalidades:

- `GET /allTasks`: Retorna todas as tarefas existentes na lista.
- `POST /tasks`: Cria uma nova tarefa. Antes de criar a tarefa, é feita uma validação para garantir que o campo "title" esteja preenchido corretamente.
- `DELETE /tasks/:taskId`: Exclui uma tarefa específica com base no seu ID.
- `PUT /tasks/:taskId`: Atualiza uma tarefa existente com base no seu ID. Antes de atualizar a tarefa, são feitas validações para garantir que os campos "title" e "status" estejam preenchidos corretamente.

Lembrando que para as rotas que exigem validações, é utilizado um middleware para realizar essas verificações antes de executar as ações correspondentes no controller.
