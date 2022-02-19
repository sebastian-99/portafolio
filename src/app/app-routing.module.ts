import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './espanol/content/content.component';
import { EspanolComponent } from './espanol/espanol.component';
import { EncuestaComponent } from './espanol/porfolio/encuesta/encuesta.component';

const routes: Routes = [
  {path: '', redirectTo: 'es/portafolio', pathMatch: 'full'},
  {path: 'es', component: EspanolComponent,children: [
    {path: 'portafolio',component: ContentComponent},
    {path: 'retorno-seguro', component: EncuestaComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
