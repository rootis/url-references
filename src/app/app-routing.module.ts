import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from '@components/list';
import { MainEntryComponent } from '@components/main-entry';

const routes: Routes = [
  {
    path: '',
    component: MainEntryComponent
  },
  {
    path: ':code',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
