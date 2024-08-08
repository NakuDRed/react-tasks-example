import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/tasks';

// TaskContext en mayúscula
export const TaskContext = createContext();

export function TaskContextProvider(props) {
	const [tasks, setTasks] = useState([]);

	useEffect(() => setTasks(data), []);

	function createTask(task) {
		setTasks([
			...tasks,
			{
				id: tasks.length,
				title: task.title,
				description: task.description,
			},
		]);
	}

	function deleteTask(taskId) {
		setTasks(tasks.filter((task) => taskId !== task.id));
	}

	return (
		<TaskContext.Provider
			value={{
				tasks,
				createTask,
				deleteTask,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
}
