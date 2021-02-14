import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jmeno = '';
  email = '';
  zpravy = '';

  posilam() {
    console.log('Name: ' + this.jmeno);
    console.log('email: ' + this.email);
    console.log('zpravy:' + this.zpravy);
  }
  constructor() { }

  ngOnInit() {
  }

}
