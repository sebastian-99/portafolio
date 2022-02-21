import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './espanol/navbar/navbar.component';
import { BannerComponent } from './espanol/banner/banner.component';
import { EspanolComponent } from './espanol/espanol.component';
import { EncuestaComponent } from './espanol/porfolio/encuesta/encuesta.component';
import { ContentComponent } from './espanol/content/content.component';
import { FooterComponent } from './espanol/footer/footer.component';
import { CorrespondenciaComponent } from './espanol/porfolio/correspondencia/correspondencia.component';
import { TurismoComponent } from './espanol/porfolio/turismo/turismo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    EspanolComponent,
    EncuestaComponent,
    ContentComponent,
    FooterComponent,
    CorrespondenciaComponent,
    TurismoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
