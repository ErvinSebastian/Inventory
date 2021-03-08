import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestItemsService } from './test-items.service'
import { AuthGuard } from './auth.guard';
import { AddItemComponent } from './add-item/add-item.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddItemComponent,
    ViewItemComponent,
    UpdateItemComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],

  providers: [TestItemsService, AuthGuard], 
  bootstrap: [AppComponent]
})
export class AppModule { }
