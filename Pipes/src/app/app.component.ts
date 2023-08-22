import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "";
  date:string="";
  total:number=0;
  heigth:number=0;
  lessons:object={
    name:"math",
    subject:"natural number",
    currentPoint:65
  }
  miles:number=0;

  onNameChange(event:Event) {
    const target = event.target as HTMLInputElement;
    this.name = target.value;
  }

  onDateChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.date = target.value;
  }

  onTotalChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.total = parseFloat(target.value);
    if(isNaN(this.total))
      this.total=0;
  }

  onHeigthChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.heigth = parseFloat(target.value);
  }

  onMilChange(event:Event){
    const target = event.target as HTMLInputElement;
    this.miles = parseFloat(target.value);
    
    if(isNaN(this.miles))
      this.miles = 0;
  }
}
