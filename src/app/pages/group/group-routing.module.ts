import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGroupComponent } from './list-group/list-group.component';
import { DetailGroupComponent } from './detail-group/detail-group.component';
import { FileComponent } from './file/file.component';

const routes: Routes = [
    { path: '', component: ListGroupComponent},
    { path: 'detail/:id', component: DetailGroupComponent},
    { path: 'file/:id', component: FileComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GroupRoutingModule {}