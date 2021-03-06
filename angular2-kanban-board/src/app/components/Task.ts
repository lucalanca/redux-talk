import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'task',
  template: `
    <div class="board__task">
      <div class="board__task-header">
        <form class="board__task-name" (submit)="onTaskNameChange.emit(tempName)">
          <input type="text" class="board__task-name-field"  name="name" [(ngModel)]="tempName" (focus)="$event.target.select()">
        </form>
      </div>
      <div class="board__task-actions">
        <button *ngIf="hasBackwardButton" class="button-icon" (click)="onMoveTaskBackward.emit()">◀</button>
        <button *ngIf="hasFowardButton" class="button-icon" (click)="onMoveTaskFoward.emit()">▶</button>
        <button class="button-icon" (click)="onDeleteTask.emit()">✝</button>
      </div>
      <div class="board__task-footer"></div>
    </div>

  `
})
export class TaskComponent implements OnInit {
  @Input() task;
  @Input() hasBackwardButton: boolean = false;
  @Input() hasFowardButton: boolean = false;

  @Output() onMoveTaskFoward = new EventEmitter();
  @Output() onMoveTaskBackward = new EventEmitter();
  @Output() onDeleteTask = new EventEmitter();
  @Output() onTaskNameChange = new EventEmitter();

  tempName: string;

  ngOnInit() {
    this.tempName = this.task.name;
  }

}
