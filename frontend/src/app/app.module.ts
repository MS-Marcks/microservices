import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { InterceptorService } from './service/interceptor/interceptor.service';
import { AuthComponent } from './public/auth/auth.component';
import { Micro1Component } from './private/micro1/micro1.component';
import { Micro2Component } from './private/micro2/micro2.component';
import { Micro3Component } from './private/micro3/micro3.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    Micro1Component,
    Micro2Component,
    Micro3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
