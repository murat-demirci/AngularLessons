import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
datas:any = [
  {name:"murat",age:24,job:"Computer Engineer",employed:"hayir"},
  {name:"metin",age:26,job:"Electronic Engineer",employed:"evet"},
  {name:"eren",age:18,job:"Student",employed:"hayir"}
];
headers=[
  {key:"employed",label:"Aldigi ücretten memnun mu?"},
  {key:"name",label:"Ad Soyad"},
  {key:"age",label:"Yas"},
  {key:"job",label:"Meslek"},
]
}
