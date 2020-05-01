import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BurgerListComponent } from './burger-list/burger-list.component';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './api_burger';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    BurgerListComponent,
    BurgerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    ApiModule,

    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
