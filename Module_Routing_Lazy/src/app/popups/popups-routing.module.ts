import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupHomeComponent } from './popup-home/popup-home.component';

const routes: Routes = [
  {path:"",component:PopupHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupsRoutingModule { }
