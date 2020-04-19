import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-icon',
  templateUrl: './circle-icon.component.html',
  styleUrls: ['./circle-icon.component.scss']
})
export class CircleIconComponent implements OnInit {

  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
