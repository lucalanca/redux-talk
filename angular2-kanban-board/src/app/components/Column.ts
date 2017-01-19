import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'column',
  template: `
    <form class="board__title" (submit)="onColumnNameChange.emit(tempName)">
      <input  type="text"  class="board__title-field" name="name" (focus)="$event.target.select()" [(ngModel)]="tempName" />
    </form>
    <div class="board__actions">
      <button type="button" *ngIf="hasBackwardButton" class="button-icon" (click)="onMoveColumnBackward.emit()">◀</button>
      <button type="button" *ngIf="hasFowardButton" class="button-icon" (click)="onMoveColumnFoward.emit()">▶</button>
      <button type="button" class="button-icon" (click)="onDeleteColumn.emit()">✝</button>
    </div>
    <div class="board__tasks">
      <ng-content></ng-content>
    </div>
    <button class="board__add-task button-icon" (click)="onAddTask.emit()">+</button>
`
})
export class ColumnComponent implements OnInit {
  @Input() column;
  @Input() hasBackwardButton: boolean = false;
  @Input() hasFowardButton: boolean = false;

  @Output() onColumnNameChange = new EventEmitter();
  @Output() onMoveColumnBackward = new EventEmitter();
  @Output() onMoveColumnFoward= new EventEmitter();
  @Output() onDeleteColumn = new EventEmitter();
  @Output() onAddTask = new EventEmitter();

  tempName: string;

  ngOnInit(){
    this.tempName = this.column.name;
  }
}
