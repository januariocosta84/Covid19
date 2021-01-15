import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PopulationComponent } from './population/population.component';
import { BaseComponent } from './base/base.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { AboutComponent } from './about/about.component';

const appRoutes :Routes=[
  {path:'corona-virus', component:HomeComponent},
  {path:'population', component:PopulationComponent},
  {path:'about-us', component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopulationComponent,
    BaseComponent,
    AboutComponent,
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
