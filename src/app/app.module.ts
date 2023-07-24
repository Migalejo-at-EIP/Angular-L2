import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { CheckEmtpyFieldDirective } from './directives/check-emtpy-field.directive';
import { OnHoverOverLinkDirective } from './directives/on-hover-over-link.directive';
import { OnHoverOverMenuLinkDirective } from './directives/on-hover-over-menu-link.directive';
import { ContactComponent } from './pages/formular/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CurriculumComponent,
    NotFoundComponent,
    WelcomeComponent,
    LoginComponent,
    CheckEmtpyFieldDirective,
    OnHoverOverLinkDirective,
    OnHoverOverMenuLinkDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
