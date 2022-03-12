import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* español components */

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

/* English components*/

import { EnglishComponent } from './english/english.component';
import { NavbarComponent as NavbarComponent_en } from './english/navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { BannerEnComponent } from './english/banner-en/banner-en.component';
import { FooterEnComponent } from './english/footer-en/footer-en.component';
import { ContentEnComponent } from './english/content-en/content-en.component';
import { EncuestaEnComponent } from './english/portfolio/encuesta-en/encuesta-en.component';
import { CorrespondenciaEnComponent } from './english/portfolio/correspondencia-en/correspondencia-en.component';
import { TurismoEnComponent } from './english/portfolio/turismo-en/turismo-en.component';
import { AboutComponent } from './english/about/about.component';
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
    SobrepaginaComponent,
    ErrorComponent,
    EnglishComponent,
    NavbarComponent_en,
    BannerEnComponent,
    FooterEnComponent,
    ContentEnComponent,
    EncuestaEnComponent,
    CorrespondenciaEnComponent,
    TurismoEnComponent,
    AboutComponent
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
