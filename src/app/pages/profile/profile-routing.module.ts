import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourProfileComponent } from './your-profile/your-profile.component';

const routes: Routes = [
    { path: ':id', component: YourProfileComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule {}