import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './english/about/about.component';
import { ContentEnComponent } from './english/content-en/content-en.component';
import { EnglishComponent } from './english/english.component';
import { CorrespondenciaEnComponent } from './english/portfolio/correspondencia-en/correspondencia-en.component';
import { EncuestaEnComponent } from './english/portfolio/encuesta-en/encuesta-en.component';
import { TurismoEnComponent } from './english/portfolio/turismo-en/turismo-en.component';
import { ErrorComponent } from './error/error.component';
import { ContentComponent } from './espanol/content/content.component';
import { EspanolComponent } from './espanol/espanol.component';
import { CorrespondenciaComponent } from './espanol/porfolio/correspondencia/correspondencia.component';
import { EncuestaComponent } from './espanol/porfolio/encuesta/encuesta.component';
import { TurismoComponent } from './espanol/porfolio/turismo/turismo.component';
import { SobrepaginaComponent } from './espanol/sobrepagina/sobrepagina.component';

const routes: Routes = [
  {path: '', redirectTo: 'es/portafolio', pathMatch: 'full'},
  {path: 'es', component: EspanolComponent,children: [
    {path: 'portafolio',component: ContentComponent},
    {path: 'retorno-seguro', component: EncuestaComponent},
    {path: 'correspondencia-utvt', component: CorrespondenciaComponent},
    {path: 'turismo-lerma', component: TurismoComponent},
    {path: 'sobre-pagina', component: SobrepaginaComponent},
  ]},
  {path: 'en', component: EnglishComponent, children:[
    {path: 'portfolio', component: ContentEnComponent},
    {path: 'retorno-seguro-en', component: EncuestaEnComponent},
    {path: 'correspondencia-utvt-en', component: CorrespondenciaEnComponent},
    {path: 'turismo-lerma-en', component: TurismoEnComponent},
    {path: 'about-page', component: AboutComponent}
  ]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
