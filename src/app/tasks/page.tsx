"use client";

import React, { useState } from "react";

type Task = {
  id: number;
  title: string;
  farm: string;
  dueDate: string;
  completed: boolean;
};

export default function TasksPage() {
  const initialTasks: Task[] = [
    {
      id: 1,
      title: "Полив пшениці",
      farm: "Ферма 1",
      dueDate: "2026-03-04",
      completed: false,
    },
    {
      id: 2,
      title: "Обробка ґрунту",
      farm: "Ферма 3",
      dueDate: "2026-03-05",
      completed: false,
    },
    {
      id: 3,
      title: "Збір врожаю кукурудзи",
      farm: "Ферма 2",
      dueDate: "2026-03-06",
      completed: false,
    },
    {
      id: 4,
      title: "Посів сої",
      farm: "Ферма 5",
      dueDate: "2026-03-07",
      completed: true,
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleCompleted = (taskId: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="container-fluid p-4" id="pageContent">
      <div id="tasksPage" className="page-content">
        <h4>Завдання та нагадування</h4>
        <p className="text-muted">
          Список поточних завдань для фермерів та ферм
        </p>

        <div className="card shadow-sm">
          <div className="card-body">
            {tasks.length === 0 ? (
              <p>Немає завдань на сьогодні.</p>
            ) : (
              <ul className="list-group">
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className={`list-group-item d-flex justify-content-between align-items-center ${
                      task.completed ? "list-group-item-success" : ""
                    }`}
                  >
                    <div>
                      <strong>{task.title}</strong> — {task.farm}
                      <br />
                      <small className="text-muted">
                        Термін: {task.dueDate}
                      </small>
                    </div>
                    <div>
                      <button
                        className={`btn btn-sm ${
                          task.completed ? "btn-secondary" : "btn-success"
                        }`}
                        onClick={() => toggleCompleted(task.id)}
                      >
                        {task.completed ? "Відновити" : "Виконано"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
