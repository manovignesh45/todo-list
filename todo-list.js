
document.body.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    addTodo();
  }
});

const todoList = JON.parse(loacalStorage.getItem('todoList') || [];
renderTodoList();

function renderTodoList () {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {


    const {name, dueDate} = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="button red-button js-delete-button"
      >Delete</button>
      <input class="check-box" type="checkbox">
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        localStorage.setItem('todoList', JSON.stringifi(todoList));
        renderTodoList();
      });
    });
};

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
  addTodo();
});

function addTodo () {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name, dueDate
  });

  loacalStorage.setItem('todoList', JSON.stringify(todoList));

  inputElement.value = '';
  renderTodoList ();
}
