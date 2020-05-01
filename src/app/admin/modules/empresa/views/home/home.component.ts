import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  display = false;
  constructor() { }

  ngOnInit() {
  }
  openForm() {
    this.display = true;
  }

  closeModal(event) {
    this.display = event;
    console.log("cerrando modal en padre", this.display);
  }
}
