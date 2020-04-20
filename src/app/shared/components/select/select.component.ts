import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @HostBinding('class.w__126')
  @Input() isTimeSelect: boolean;

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
