import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { IndexComponent } from './index/index.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
