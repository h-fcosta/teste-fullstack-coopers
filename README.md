# Teste Vaga Fullstack Developer - Coopers

#### By Henrique Costa

Aplicação MERN de 'To-do List' feita com Node.js no backend, e React.js no frontend.

# Backend

Foi criado um sistema de cadastro e autenticação(login), usando o MongoDB para armazenar os dados e Express.

Na parte de cadastro, foi utilizado o pacote 'bcrypt' para a criptografia de senhas, antes de serem enviadas para o banco.
E na parte de autenticação, foi usado o pacote JsonWebToken, para a criação de Tokens de sessão.
Somente as rotas de cadastro e login não utilizam os tokens gerados, as diversas rotas todas necessitam de um token e passam por uma verificação se o mesmo é válido ou não.
Além da parte de usuário, foi criado uma sistema básico de CRUD para as tarefas da lista.

# Frontend

A parte de frontend foi criada com React.js e para a criação do design, a partir do modelo que foi passado, foi utilizada a biblioteca CSS Bulma.io, além de alguns códigos CSS específicos para alguns componentes.

Para as fazer requisições do backend para o frontend, foi utilizado o cliente HTTP Axios.

Tentei fazer um gerenciamento de estado, com o Recoil.js, para que a parte das listas (Inserir tarefa, Visualização da Lista e tarefas completadas), fossem vísiveis apenas para o usuário logado.
O gerenciamento funciona depois que o login é realizado, mas ao atualizar a página, por alguma limitação da biblioteca as listas ficam vazias, como se o login não fosse feito anteriormente.
