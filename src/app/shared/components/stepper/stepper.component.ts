import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  @Output() stepSelected = new EventEmitter<number>();

  constructor() { }

  public stepChange({ selectedIndex }): void {
    this.stepSelected.emit(selectedIndex);
  }

}
