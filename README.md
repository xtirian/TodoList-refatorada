<div align="center">
	<h1>Listagem de tarefas</h1>
	<br>
	<p align="center">
		<a href="https://www.linkedin.com/in/mf-cunha/">
		  <img alt="made by" src="https://img.shields.io/badge/made%20by-xTirian-red">
		</a>
		<a href="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/art-gallery-website">
		  <img alt="last commit" src="https://img.shields.io/github/last-commit/xtirian/xtirian">
		</a>
	</p>
</div>

<hr>

<h4>Descrição 📄</h4>

Aplicação desenvolvida para listar, visualizar, mudar status, editar e apagar itens da lista, com o objetivo de colocar em práticas a biblioteca de desenvolvimento de interfaces React JS.

Na Refatoração deste projeto foram aplicados gerenciamento de informações do LocalStorage, criadas novas páginas para pegar o nome do usuário uma página para editar as tarefas.

- [URL do site para testes](https://todolist-refact.vercel.app/)

<hr>

<h4>Tecnologias 🚀</h4>

- Javascript
- React JS
- Vite
- React Router Dom
- Sass
- React- Icons
- JSON Server

<hr>

<h4>Como rodar no seu computador🖥️</h4>

- Instale o [Node.js](https://nodejs.org/en/download/) e o [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). Então:

```
# clone esse repositório
$ git clone https://github.com/felipejsborges/<repo_name>.git

# acesse a pasta do projeto
$ cd <repo_name>

# instale as dependências
$ npm install

# rode o server
$ npm run server

# abra outro terminal e rode o projeto
$ npm run dev
```

- [Acesse a aplicação](http://localhost:5173)

- Há 3 tarefas pré-definidas como exemplo que você pode usar para apagar, editar ou mudar o status para testar, além de adicionar suas próprias tarefas.

<hr>

by Matheus Fernandes (aka xTirian)<br>

- Linkedin - [Click here](https://www.linkedin.com/in/mf-cunha/)
- GitHub - [Click here](https://github.com/xtirian/)
- FrontEnd Mentor - [Click here](https://www.frontendmentor.io/profile/xtirian)
- CodePen - [Click Here](https://codepen.io/xtirian/)

## Atualização 1.1

Para atender à demanda do Júlio, adicionei algumas linhas de código ao programa para, assim, conseguir armazenar os dados no PC das pessoas para utilizar mais tarde.
A history é a seguinte:

> O usuário deve ser capaz de adicionar uma tarefa ao site e garantir que quando o usuário volte depois ele tenha as tarefas que ele salvou disponíveis para checar.

Para a solução do código, usei a propriedade localStorage() do javaScript e precisaria ser dividido em 3 etapas:

1 - Salvar os dados com o localStorage.setItem() e useEffect
2 - Pegar os dados com o localStorage.getItem()
3 - Resolver bugs:
3.1 - Reset do localStorage quando dava refresh na página.

```jsx
// 1 - Salvar os dados com o localStorage.setItem() e useEffect
useEffect(() => {
  localStorage.setItem("storedToDoList", JSON.stringify(toDos));
}, [toDos]);
```

Esta parte foi simples, a única coisa que precisei me atentar ( e descobri no StackOverflow), é que os dados passados ao Local Storage devem ser Strings. Eu poderia passar pelo método .toString(), mas não era a forma mais inteligente. Já que os dados estão estruturados de forma muito parecida com o JSON, usei o método JSON.stringify para transformalo em String. Isto deixa implicito que para receber os intes eu preciso recebê-los com o JSON.parse()

```jsx
// 2 - Pegar os dados com o localStorage.getItem()
const Lista = ({ data }) => {
  const storedToDoList = JSON.parse(localStorage.getItem("storedToDoList"));

  //carrega a lista do mock
  const [toDos, setToDos] = useState(storedToDoList || data);
};
```

Para esta segunda parte eu precisei criar uma ocnstante que recebe o localStorage. Importante ressaltar que eu coloquei ele na primeira linha da função para usá-lo na variável de estado toDos como valor inicial. Assim a pagina quando dá refresh verifica se tem algo salvo e seta no toDos Isto resolve o bug dos refresh que apagava o local storage


## Atualização 1.2

Foram adicionadas 2 novas features e 1 feature antiga precisou ser editada.
1 - A edição aconteceu na lista de tarefas. Adicionei a Data ao item para ter mais uma informação na lista.
2 - Duas novas view foram adicionadas.
- A primeira é a página de boas vindas. Ela renderiza 2 maneiras diferentes, considerando se o usuário já está autenticado ou não. Depois apresenta a página de tarefas que já tinha.
- Caso o usuário clique em uma das tarefas, será direcionado para uma nova página, onde pode editar os itens. Para a edição dos itens usei o seguinte código:
```jsx
<input
            type="text"
            id="title"
            maxLength={15}
            value={toDo.title}
            onChange={(e) => {
              let task = toDoList[taskId];

              task.title = e.target.value;

              setToDo(task);
            }}
          />
```

Assim, toda vez que trocar o valor ele atualiza a tarefa aberta na página. Quando o usuário salvar a info, o form chama o método para atualizar o local storage.

- Fiz uma pequena edição para detectar o tema do usuário no momento que acessa a página.
Preciso voltar no futuro para melhorar esta parte.