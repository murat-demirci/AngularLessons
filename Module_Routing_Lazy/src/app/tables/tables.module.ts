import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesHomeComponent } from './tables-home/tables-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BioComponent } from './bio/bio.component';
import { CompanyComponent } from './company/company.component';
import { PartnerComponent } from './partner/partner.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    TablesHomeComponent,
    TableComponent,
    BioComponent,
    CompanyComponent,
    PartnerComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule
  ]
})
export class TablesModule { }
