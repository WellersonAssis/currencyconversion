import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ConversorComponent } from './conversor/conversor.component';
import { ListagemComponent } from './listagem/listagem.component';
import { HistoricolistagemComponent } from './historicolistagem/historicolistagem.component';

const routes: Routes = [
  {path: '',component: PrincipalComponent},
  {path: 'principal',component: PrincipalComponent},
  {path: 'conversor',component: ConversorComponent},
  {path: 'listagem',component: ListagemComponent},
  {path: 'historicolistagem',component: HistoricolistagemComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
