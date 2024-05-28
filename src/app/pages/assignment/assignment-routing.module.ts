import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAssignmentComponent } from './list-assignment/list-assignment.component';
import { DetailAssignmentComponent } from './detail-assignment/detail-assignment.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
    { path: '', component: ListAssignmentComponent},
    { path: 'detail/:id', component: DetailAssignmentComponent},
    { path: 'progress/:id', component: ProgressComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AssignmentRoutingModule {}