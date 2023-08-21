import { Component } from '@angular/core';
import { faker } from "@faker-js/faker"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText: string = faker.lorem.sentence();
  title: string = 'HarfEslestirme';
  enteredText: string = "";


  getInputValue(value: Event) {
    const target = value.target as HTMLInputElement;
    this.enteredText = target.value;
  }

  compare(letter: string, enteredLetter: string) {
    if (!enteredLetter)
      return "pending"
    
    return letter === enteredLetter ? "correct" : "incorrect";
  }
}
