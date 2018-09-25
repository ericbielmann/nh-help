import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms'

import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { ToastService } from '../../core/toast.service';

@Component({
  selector: 'patient-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  @Input() selectedPatient: Patient;
  @Output() cancelEdition = new EventEmitter<boolean>();

  constructor(private patientService: PatientService, 
    private toastService: ToastService,
    private router: Router) { }

  ngOnInit() {
    // this.resetForm();
  }

  onSubmit(surveyForm: NgForm) {
    this.patientService.updatePatient(surveyForm.value.key, surveyForm.value);
    this.toastService.success('Submitted Succcessfully', 'Survey Register');
  }

  resetForm(surveyForm?: NgForm) {
    this.cancelEdition.emit(true);
  }
}