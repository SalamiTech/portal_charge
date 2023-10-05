import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EntryComponentComponent } from 'src/app/modules/dashboard/pages/entry-component/entry-component.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';

const routes: Routes = [
  {
    path: '',
    component: EntryComponentComponent,
  },
  {
    path: 'app',
    component: DashboardComponent,
    children: [
    
      { path: 'insurance', component: InsuranceComponent },
      { path: 'evaluation', component: EvaluationComponent },
      
    ],
   
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
