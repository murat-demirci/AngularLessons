import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesHomeComponent } from './tables-home/tables-home.component';
import { BioComponent } from './bio/bio.component';
import { CompanyComponent } from './company/company.component';
import { PartnerComponent } from './partner/partner.component';

const routes: Routes = [
  {path:"",component:TablesHomeComponent,
  children:[
    {path:"",component:BioComponent,},
    {path:"companies",component:CompanyComponent},
    {path:"partners",component:PartnerComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
