import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "placeholders",
    loadChildren: () =>
      import('./placeholders/placeholders.module').then(p => p.PlaceholdersModule)
  },
  {
    path: "tables",
    loadChildren: () =>
      import('./tables/tables.module').then(t => t.TablesModule)
  },
  {
    path: "lists",
    loadChildren: () =>
      import('./lists/lists.module').then(l => l.ListsModule)
  },
  {
    path: "popups",
    loadChildren: () =>
      import('./popups/popups.module').then(p => p.PopupsModule)
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
