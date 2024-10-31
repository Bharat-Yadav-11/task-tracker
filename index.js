const fs = require('fs');
const readline = require('readline');
const path = './tasks.json';

// Helper function to load tasks from the JSON file
function loadTasks() {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf-8');
    // Check if the file is empty or contains only whitespace
    if (data.trim()) {
      return JSON.parse(data);
    }
  }
  return [];
}

// Helper function to save tasks to the JSON file
function saveTasks(tasks) {
  fs.writeFileSync(path, JSON.stringify(tasks, null, 2), 'utf-8');
}

// Helper function to get the next task ID
function getNextId(tasks) {
  return tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
}

// Initialize readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display Menu
function showMenu() {
  console.log('\nTask Tracker CLI');
  console.log('1. Add Task');
  console.log('2. Update Task Description');
  console.log('3. Update Task Status');
  console.log('4. Delete Task');
  console.log('5. List All Tasks');
  console.log('6. List Done Tasks');
  console.log('7. List Todo/Not Done Tasks');
  console.log('8. List In Progress Tasks');
  console.log('9. Exit');
  rl.question('\nSelect an option: ', handleMenuInput);
}

// Handle User Input
function handleMenuInput(option) {
  switch (option.trim()) {
    case '1':
      rl.question('Enter task description: ', (description) => {
        const tasks = loadTasks();
        const newTask = {
          id: getNextId(tasks),
          description,
          status: 'todo',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        tasks.push(newTask);
        saveTasks(tasks);
        console.log('Task added:', newTask);
        showMenu();
      });
      break;
    case '2':
      rl.question('Enter task ID to update description: ', (id) => {
        const tasks = loadTasks();
        const task = tasks.find((task) => task.id === parseInt(id));

        if (task) {
          console.log(`Current Description: ${task.description}`);
          rl.question('Enter new description: ', (description) => {
            task.description = description;
            task.updatedAt = new Date().toISOString();
            saveTasks(tasks);
            console.log('Task updated:', task);
          });
        } else {
          console.log('Task not found.');
          showMenu();
        }
      });
      break;
    case '3':
      rl.question('Enter task ID to update status: ', (id) => {
        rl.question('Enter new status (todo, in progress, done): ', (status) => {
          const tasks = loadTasks();
          const task = tasks.find((task) => task.id === parseInt(id));
          if (task && ["todo", "in-progress", "done"].includes(status)) {
            task.status = status;
            task.updatedAt = new Date().toISOString();
            saveTasks(tasks);
            console.log('Task status updated:', task);
          } else {
            console.log('Invalid Status or Task not found.');
          }
          showMenu();
        });
      });
      break;
    case '4':
      rl.question('Enter task ID to delete: ', (id) => {
        let tasks = loadTasks();
        const initialLength = tasks.length;
        tasks = tasks.filter((task) => task.id !== parseInt(id));
        saveTasks(tasks);
        initialLength !== tasks.length ? console.log('Task deleted.') : console.log('Task not found.');
        showMenu();
      });
      break;
    case '5':
      console.log('All tasks:', loadTasks());
      showMenu();
      break;
    case '6':
      console.log('Done tasks:', loadTasks().filter((task) => task.status === 'done'));
      showMenu();
      break;
    case '7':
      console.log('Todo tasks:', loadTasks().filter((task) => task.status === 'todo'));
      showMenu();
      break;
    case '8':
      console.log('In progress tasks:', loadTasks().filter((task) => task.status === 'in progress'));
      showMenu();
      break;
    case '9':
      rl.close();
      break;
    default:
      console.log('Invalid option. Please try again.');
      showMenu();
  }
}

// Start the application by displaying the menu
showMenu();

// Handle readline close event
rl.on('close', () => {
  console.log('\nExiting Task Tracker CLI. Goodbye!');
  process.exit(0);
});
