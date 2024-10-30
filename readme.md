# Task Tracker CLI
==========================

Sample solution for the [number-guessing-game](https://roadmap.sh/projects/task-tracker) challenge from [roadmap.sh](https://roadmap.sh).

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


