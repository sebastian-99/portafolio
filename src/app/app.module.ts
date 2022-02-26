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
import { NgChartsModule } from 'ng2-charts';
import { GraficaHtmlComponent } from './espanol/habilidades/grafica-html/grafica-html.component';
import { GraficaJavascriptComponent } from './espanol/habilidades/grafica-javascript/grafica-javascript.component';
import { GraficaCssComponent } from './espanol/habilidades/grafica-css/grafica-css.component';
import { GraficaLaravelComponent } from './espanol/habilidades/grafica-laravel/grafica-laravel.component';
import { GraficaJqueryComponent } from './espanol/habilidades/grafica-jquery/grafica-jquery.component';
import { GraficaBootstrapComponent } from './espanol/habilidades/grafica-bootstrap/grafica-bootstrap.component';
import { GraficaPhpComponent } from './espanol/habilidades/grafica-php/grafica-php.component';
import { GraficaMysqlComponent } from './espanol/habilidades/grafica-mysql/grafica-mysql.component';
import { GraficaGitComponent } from './espanol/habilidades/grafica-git/grafica-git.component';
import { GraficaPwaComponent } from './espanol/habilidades/grafica-pwa/grafica-pwa.component';
import { SobrepaginaComponent } from './espanol/sobrepagina/sobrepagina.component';
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
    TurismoComponent,
    GraficaHtmlComponent,
    GraficaJavascriptComponent,
    GraficaCssComponent,
    GraficaLaravelComponent,
    GraficaJqueryComponent,
    GraficaBootstrapComponent,
    GraficaPhpComponent,
    GraficaMysqlComponent,
    GraficaGitComponent,
    GraficaPwaComponent,
    SobrepaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
