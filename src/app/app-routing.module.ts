import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameResultsComponent } from './game-results/game-results.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {
    path : '',
    component: TeamsComponent
  },
  {
    path: 'results/:teamCode',
    component: GameResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
