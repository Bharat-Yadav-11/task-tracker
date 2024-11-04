# Task Tracker CLI
==========================

Sample solution for the [task-tracker](https://roadmap.sh/projects/task-tracker) challenge from [roadmap.sh](https://roadmap.sh).

Task Tracker CLI is a command-line tool for managing tasks, allowing users to create, update, delete, and view tasks with details like description, status, creation date, and last update date. Each task has a unique, sequential ID.

## Features

- **Add Task**: Creates a new task with a description and default status of "todo."
- **Update Task Description**: Modify the description of an existing task by task ID.
- **Update Task Status**: Change the status of an existing task to "todo," "in-progress," or "done."
- **Delete Task**: Remove a task by its ID.
- **View Tasks**: List tasks based on status or view all tasks.

## Task Properties

Each task includes the following properties:
- **id**: Sequential unique identifier for the task.
- **description**: A brief description of the task.
- **status**: Status of the task; can be "todo," "in-progress," or "done."
- **createdAt**: Timestamp when the task was created.
- **updatedAt**: Timestamp of the most recent update to the task.

## Prerequisites

- [Node.js](https://nodejs.org) installed on your machine.

## Setup

1. Clone the repository or copy the files to your project directory.
2. Install Node.js if not already installed.
3. Open your terminal and navigate to the project directory.
4. Run the following command to start the application:
   ```bash
   node index.js

## Usage
Upon starting, a menu will display options:

- **Add Task:** Enter a description, and a new task will be created with a unique ID.
- **Update Task Description:**** Enter the task ID and new description to update the task's content.
- **Update Task Status:** Enter the task ID and a new status to update the task's status.
- **Delete Task:** Enter the task ID to remove a specific task.
- **List All Tasks:** Display all tasks, including details.
- **List Done Tasks:** Show only tasks marked as "done."
- **List Todo/Not Done Tasks:** Show only tasks marked as "todo."
- **List In Progress Tasks:** Show only tasks marked as "in-progress."
- **Exit:** Exit the application.

## Example Workflow
1. Adding a Task:
    ```bash
    Select an option: 1
    Enter task description: Complete the CLI project documentation
This will create a new task with an incremental ID, description, status as "todo," and timestamps.

2. Updating a Task Description:
    ```bash
    Select an option: 2
    Enter task ID to update description: 1
    Current Description: Complete the CLI project documentation
    Enter new description: Complete the CLI project README file
The description of the task with ID 1 will be updated.

3. Changing Task Status:
    ```bash
    Select an option: 3
    Enter task ID to update status: 1
    Enter new status (todo, in-progress, done): done
The status of the task with ID 1 will change to "done."

4. Deleting a Task:
    ```bash
    Select an option: 4
    Enter task ID to delete: 1
    Task deleted.
This removes the task with ID 1 from the task list. If the task ID does not exist, it displays "Task not found."

5. Listing all Tasks:
    ```bash
    Select an option: 5
    All tasks: [
    {
        "id": 2,
        "description": "Finish Node.js tutorial",
        "status": "in-progress",
        "createdAt": "2024-10-30T12:00:00.000Z",
        "updatedAt": "2024-10-30T12:30:00.000Z"
    }
    ]
This displays all tasks with their details (ID, description, status, and timestamps) in JSON format.

6. Listing Done Tasks:
    ```bash
    Select an option: 6
    Done tasks: [
    {
        "id": 3,
        "description": "Submit project report",
        "status": "done",
        "createdAt": "2024-10-29T08:00:00.000Z",
        "updatedAt": "2024-10-29T18:00:00.000Z"
    }
    ]
Shows only tasks marked with the status "done."

7. Listing Todo/Not Done Tasks:
    ```bash
    Select an option: 7
    Todo tasks: [
    {
        "id": 4,
        "description": "Review project code",
        "status": "todo",
        "createdAt": "2024-10-30T10:00:00.000Z",
        "updatedAt": "2024-10-30T10:00:00.000Z"
    }
    ]
Displays tasks with the "todo" status, showing those that haven't been started.

8. Listing In Progress Tasks:
    ```bash
    Select an option: 8
    In progress tasks: [
    {
        "id": 5,
        "description": "Develop additional CLI features",
        "status": "in-progress",
        "createdAt": "2024-10-30T09:00:00.000Z",
        "updatedAt": "2024-10-30T12:00:00.000Z"
    }
    ]
Displays tasks with the status "in-progress," highlighting ongoing tasks.

9. Existing the Application:
    ```bash
    Select an option: 9
    Exiting Task Tracker CLI. Goodbye!
This option terminates the application.

## Notes
- Tasks are stored in tasks.json. If the file is missing, it will be created automatically upon adding the first task.
- Task IDs are sequential and retained even if tasks are deleted to prevent duplicate identifiers.
- All timestamps are in ISO format.

## Contributing
--------------

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

### Contributing Guidelines

* Please follow the existing code style and structure.
* Make sure to test your changes before submitting a pull request.
* Keep your changes concise and focused on a single issue or feature.

## Authors
---------

* [Bharat Yadav](https://github.com/Bharat-Yadav-11)

## Acknowledgments
---------------

* Thanks to the Node.js community for providing the `readline` module.
* Thanks to the GitHub community for providing a platform for open-source projects.
* Thanks to Roadmap.sh for providing this project idea.


## License
This project is open-source and available for personal or educational use.
    ```bash
    This `README.md` file provides a detailed guide to every menu option and feature, with sample interactions for each scenario. It ensures that new users have a clear understanding of the CLI tool's capabilities.
    

