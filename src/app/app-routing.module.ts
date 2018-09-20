import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    // { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: '', pathMatch: 'full', redirectTo: 'nh-patients' },
    { path: 'consultations/:patientKey', loadChildren: './consultations/consultations.module#ConsultationsModule' },
    // { path: 'nh-patients', loadChildren: './patients/patients.module#PatientsModule' },
    { path: 'callback', loadChildren: './callback/callback.module#CallbackModule' },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }