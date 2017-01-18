import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'column',
  template: `
    <div class="board__column">
      <form class="board__title" (submit)="onColumnNameChange.emit('foo')">
        <input  type="text"  class="board__title-field"  (focus)="$event.target.select()" [value]="column.name" />
      </form>
      <div class="board__actions">
        <button type="button" class="button-icon" (click)="onMoveColumnBackward.emit()">◀</button>
        <button type="button" class="button-icon" (click)="onMoveColumnFoward.emit()">▶</button>
        <button type="button" class="button-icon" (click)="onDeleteColumn.emit()">✝</button>}
      </div>
      <div class="board__tasks">
        <ng-content></ng-content>
      </div>
      <button class="board__add-task button-icon" (click)="onAddTask.emit()">+</button>
    </div>
`
})
export class ColumnComponent {
  @Input() column;

  @Output() onColumnNameChange = new EventEmitter();
  @Output() onMoveColumnBackward = new EventEmitter();
  @Output() onMoveColumnFoward= new EventEmitter();
  @Output() onDeleteColumn = new EventEmitter();
  @Output() onAddTask = new EventEmitter();
}
