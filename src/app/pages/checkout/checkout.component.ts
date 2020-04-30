import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public selectedStepIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public onStepClick(stepIndex: number): void {
    this.selectedStepIndex = stepIndex;
  }

}
