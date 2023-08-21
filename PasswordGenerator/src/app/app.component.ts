import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'PasswordGenerator';
  password:string = "";
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  modifyLength(value: Event) {
    const target = value.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    if (!isNaN(parsedValue))
      this.length = parsedValue;
  }

  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick() {
    //this.password = "murat demirci"
    // console.log(this.includeLetters);
    const numbers = "0123456789";
    const letters = "asdfghjklpoiuztrewqyxcvbnm";
    const symbols = "!$%&()#*@";

    let validChars = "";
    if (this.includeLetters)
      validChars += letters
    if (this.includeNumbers)
      validChars += numbers
    if (this.includeSymbols)
      validChars += symbols

    if(validChars.length < 1)

      return;

    let generatedPassword = "";
    for (let i = 0; i < (this.length>32 ? 32 : this.length); i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;

  }

  // getPassword(){
  //   return this.password
  // }

  // getName(){
  //   return "MURAT"
  // }
}
