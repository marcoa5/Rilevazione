import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButComponent } from './comp/but/but.component';
import { ExistComponent } from './comp/exist/exist.component';
import { MainComponent } from './comp/main/main.component';
import { ResComponent } from './comp/res/res.component';
import { RilevazioniComponent } from './comp/rilevazioni/rilevazioni.component';


const routes: Routes = [
  {path:'', component: ButComponent},
  {path:'res', component: ResComponent},
  {path:'exist', component: ExistComponent},
  {path:'rile', component: RilevazioniComponent},
  {path: 'home', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
