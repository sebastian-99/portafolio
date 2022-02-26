import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
