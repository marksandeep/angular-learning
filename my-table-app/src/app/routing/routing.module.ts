import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TaskTableComponent } from '../project-table/task-table/task-table.component';
import { ProjectTableComponent } from '../project-table/project-table.component';

const routes: Routes = [
  { path: '', component: ProjectTableComponent},
  { path: 'alltasks', component: TaskTableComponent, pathMatch: 'full' },
  { path: 'mytask', component: TaskTableComponent, pathMatch: 'full' },
  { path: 'projects', component: ProjectTableComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
