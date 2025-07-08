document.addEventListener('DOMContentLoaded', function() {
  const tasksForm = document.getElementById('tasks__form');
  const taskInput = document.getElementById('task__input');
  const tasksList = document.getElementById('tasks__list');
  
  tasksForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
  });
  
  function addTask() {
    const taskText = taskInput.value;
    
    if (taskText) {
      const task = document.createElement('div');
      task.className = 'task';
      
      const taskTitle = document.createElement('div');
      taskTitle.className = 'task__title';
      taskTitle.textContent = taskText;
      
      const removeTask = document.createElement('a');
      removeTask.className = 'task__remove';
      removeTask.href = '#';
      removeTask.innerHTML = '&times;';
      
      removeTask.addEventListener('click', function(e) {
        e.preventDefault();
        task.remove();
      });
      
      task.appendChild(taskTitle);
      task.appendChild(removeTask);
      
      tasksList.appendChild(task);
      
      taskInput.value = '';
    }
  }
});