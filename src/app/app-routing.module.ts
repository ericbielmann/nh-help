import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

export const routes: Routes = [
    // { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: '', pathMatch: 'full', redirectTo: 'nh-patients', canActivate: [AuthGuard] },
    { path: 'consultations/:patientKey', loadChildren: './consultations/consultations.module#ConsultationsModule', canActivate: [AuthGuard] },
    { path: 'nh-login', loadChildren: './login/login.module#LoginModule' },
    { path: 'nh-patients', loadChildren: './patients/patients.module#PatientsModule', canActivate: [AuthGuard] },
    // { path: 'callback', loadChildren: './callback/callback.module#CallbackModule' },
    { path: '**', redirectTo: 'nh-patients', canActivate: [AuthGuard] },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        canActivate: [AuthGuard]
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }