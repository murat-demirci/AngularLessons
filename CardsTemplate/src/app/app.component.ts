import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title:"First",
      image:"../assets/defaultThumbnail.jpg",
      content:"random content"
    },
    {
      title:"Second",
      image:"../assets/mesh-gradient.png",
      content:"random content"
    },
    {
      title:"Third",
      image:"../assets/defaultThumbnail.jpg",
      content:"random content"
    }
  ]
}
