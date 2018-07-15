import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qf-navbar',
  templateUrl: './qf-navbar.component.html'
})
export class QfNavbarComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
