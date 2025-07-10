document.addEventListener('DOMContentLoaded', function() {
  const tasksForm = document.getElementById('tasks__form');
  const taskInput = document.getElementById('task__input');
  const tasksList = document.getElementById('tasks__list');
  
  tasksForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
  });
  
  function addTask() {
    const taskTitle = taskInput.value.trim();
    
    if (taskTitle) {
      
      tasksList.insertAdjacentHTML('afterbegin', `
        <div class="task">
          <div class="task__title">
            ${taskTitle}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>
      `);
      
      const task = tasksList.querySelector('.task:first-child');
      const taskRemove = task.querySelector('.task__remove');
      
      taskRemove.addEventListener('click', function(e) {
        e.preventDefault();
        task.remove();
      });
      
      taskInput.value = '';
    }
  }
});