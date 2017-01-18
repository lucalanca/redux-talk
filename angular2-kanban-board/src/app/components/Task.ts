import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'task',
  template: `
    <div class="board__task">
      <div class="board__task-header">
        <form class="board__task-name" (submit)="onTaskNameChange.emit('foo')">
          <input type="text" class="board__task-name-field" [value]="task.name" (focus)="$event.target.select()">
        </form>
      </div>
      <div class="board__task-actions">
        <button class="button-icon" (click)="onMoveTaskBackward.emit()">◀</button>
        <button class="button-icon" (click)="onMoveTaskFoward.emit()">▶</button>
        <button class="button-icon" (click)="onDeleteTask.emit()">✝</button>
      </div>
      <div class="board__task-footer"></div>
    </div>

  `
})
export class TaskComponent {

  @Input() task;

  @Output() onMoveTaskFoward = new EventEmitter();
  @Output() onMoveTaskBackward = new EventEmitter();
  @Output() onDeleteTask = new EventEmitter();
  @Output() onTaskNameChange = new EventEmitter();
}
