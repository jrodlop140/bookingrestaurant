import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { EditComponent } from './components/pages/edit/edit.component';
import { BookingsComponent } from './components/pages/bookings/bookings.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { StatsComponent } from './components/dashboard/stats/stats.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'bookings', component: BookingsComponent},
    {path:'edit/:id', component: EditComponent},
    {path: 'dashboard', component : DashboardComponent, children: [
        {path: 'stats', component : StatsComponent },
        {path: 'profile', component : ProfileComponent}
    ]},
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
