import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { PatientsComponent }     from './patients.component';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientComponent } from "./patient/patient.component";
import { PatientListComponent } from "./patient-list/patient-list.component";
import { SurveyComponent } from "./survey/survey.component";

import { PatientService } from "../services/patient.service";


@NgModule({
  imports: [
    SharedModule,
    PatientsRoutingModule
  ],
  declarations: [ PatientsComponent, PatientComponent, PatientListComponent, SurveyComponent ],
  providers:    [ PatientService ]
})
export class PatientsModule { }