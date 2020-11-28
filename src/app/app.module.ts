import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FileUploadModule} from 'ng2-file-upload';
import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZilaService } from './services/zila.service';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FileUploadModule,
    AppRoutingModule,
    UploaderModule,   
    FormsModule ,
    CommonModule
  ],
  providers: [ZilaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
