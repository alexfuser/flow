import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CodefasterComponent } from './codefaster/codefaster.component';
import { CodesmarterComponent } from './codesmarter/codesmarter.component';
import { CodeconfidentlyComponent } from './codeconfidently/codeconfidently.component';
import { CodebiggerComponent } from './codebigger/codebigger.component';
import { GetgoingComponent } from './getgoing/getgoing.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CodefasterComponent,
    CodesmarterComponent,
    CodeconfidentlyComponent,
    CodebiggerComponent,
    GetgoingComponent,
    FeaturesComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
