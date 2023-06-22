import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormArayComponent } from './form-aray/form-aray.component';
import { DynamicValidationComponent } from './dynamic-validation/dynamic-validation.component';
import { MulticheckboxValidationComponent } from './multicheckbox-validation/multicheckbox-validation.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    FormArayComponent,
    DynamicValidationComponent,
    MulticheckboxValidationComponent,
    CustomValidationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
