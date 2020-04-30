import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-radio-group-small',
  templateUrl: './radio-group-small.component.html',
  styleUrls: ['./radio-group-small.component.scss']
})
export class RadioGroupSmallComponent implements OnInit {
  @HostBinding('class.extended')
  @Input() extended: boolean;

  constructor() { }

  ngOnInit() {
  }

}
