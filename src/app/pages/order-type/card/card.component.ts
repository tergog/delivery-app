import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @HostBinding('class.active')
  @Input() isActive: boolean;
  @Input() type: string;
  @Input() buttonText: string;

  constructor() { }

  ngOnInit() {
  }

}
