import { Component, signal, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-todolist',
	standalone: true,
  imports: [RouterOutlet],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css',
})
export class Todolist {
  task = signal('');
  taskList = signal<{ id: number; task: string }[]>([]);
  editId = signal<number | null>(null);
  addTask() {
    if (!this.task().trim()) return;
    if (this.editId() == null) {
      this.taskList.update((list) => list.concat({ id: Date.now(), task: this.task() }));
    } else {
      this.taskList.update((list) =>
        list.map((t) => (t.id === this.editId() ? { ...t, task: this.task() } : t))
      );
      this.editId.set(null);
    }
    this.task.set('');
  }
  editTask(t: any) {
    this.task.set(t.task);
    this.editId.set(t.id);
  }
  deleteTask(id: number) {
    this.taskList.update((list) => list.filter((t) => t.id !== id));
  }
}

