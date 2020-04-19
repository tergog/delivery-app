import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-radio-button-small',
  templateUrl: './radio-button-small.component.html',
  styleUrls: ['./radio-button-small.component.scss']
})
export class RadioButtonSmallComponent implements OnInit {
  @HostBinding('class.active')
  @Input() isActive: boolean;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
