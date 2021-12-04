import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SxMaterialModule } from './material-module';
import { SxSearchComponent } from './sx-search/sx-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SxResultComponent } from './sx-result/sx-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SxSearchComponent,
    SxResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SxMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
