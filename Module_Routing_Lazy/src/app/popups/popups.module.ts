import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupsRoutingModule } from './popups-routing.module';
import { PopupHomeComponent } from './popup-home/popup-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PopupHomeComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    PopupsRoutingModule,
    SharedModule
  ]
})
export class PopupsModule { }
