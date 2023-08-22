import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-home',
  templateUrl: './popup-home.component.html',
  styleUrls: ['./popup-home.component.css']
})
export class PopupHomeComponent {
  modalOpen: boolean = false;

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
