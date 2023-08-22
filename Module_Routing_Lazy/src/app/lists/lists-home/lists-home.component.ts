import { Component } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  templateUrl: './lists-home.component.html',
  styleUrls: ['./lists-home.component.css']
})
export class ListsHomeComponent {
  numbers = [
    { value: 50, label: "Müsteri" },
    { value: 35000, label: "Ciro" },
    { value: 150, label: "Yorumlar" }
  ];
  images = [
    {
      image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Tree",
      description: "Tree description"
    },
    {
      image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Car",
      description: "Cat description"
    }
  ];
}
