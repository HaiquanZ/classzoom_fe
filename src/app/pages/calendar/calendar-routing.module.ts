import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalCalendarComponent } from './personal-calendar/personal-calendar.component';

const routes: Routes = [
    { path: '', component: PersonalCalendarComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CalendarRoutingModule {}