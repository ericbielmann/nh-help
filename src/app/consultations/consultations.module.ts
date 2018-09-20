import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { ConsultationsComponent }     from './consultations.component';
import { ConsultationsRoutingModule } from './consultations-routing.module';
import { ConsultationComponent } from "./consultation/consultation.component";
import { ConsultationListComponent } from "./consultation-list/consultation-list.component";

import { ConsultationService } from "../services/consultation.service";


@NgModule({
  imports: [
    SharedModule,
    ConsultationsRoutingModule
  ],
  declarations: [ ConsultationsComponent, ConsultationComponent, ConsultationListComponent ],
  providers:    [ ConsultationService ]
})
export class ConsultationsModule { }