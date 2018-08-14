import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { masterRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(masterRoutes,{onSameUrlNavigation: 'reload'})
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
