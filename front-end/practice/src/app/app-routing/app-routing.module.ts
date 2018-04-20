import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "../index/index.component";
import {PageNotFountComponent} from "../page-not-fount/page-not-fount.component";

const router: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: '**', component: PageNotFountComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
