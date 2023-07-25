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
import { OnHoverOverLinkDirective } from './directives/on-hover-over-link.directive';
import { OnHoverOverMenuLinkDirective } from './directives/on-hover-over-menu-link.directive';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactSendButtonDirective } from './directives/ContactForm/contact-send-button.directive';
import { ContactGetInputDirective } from './directives/ContactForm/contact-get-input.directive';
import { ResetContactDirective } from './directives/ContactForm/reset-contact.directive';
import { LoginGetInputDirective } from './directives/login/login-get-input.directive';
import { LoginButtonDirective } from './directives/login/login-button.directive';
import { ResetLoginDirective } from './directives/login/reset-login.directive';

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
    OnHoverOverLinkDirective,
    OnHoverOverMenuLinkDirective,
    ContactSendButtonDirective,
    ContactGetInputDirective,
    ResetContactDirective,
    LoginGetInputDirective,
    LoginButtonDirective,
    ResetLoginDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
