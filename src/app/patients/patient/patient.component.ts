import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms'

import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { ToastService } from '../../core/toast.service';

@Component({
  selector: 'nh-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  @Input() selectedPatient: Patient;
  @Output() selectedChange = new EventEmitter<Patient>();

  surveyView: boolean = false;

  constructor(private patientService: PatientService, 
    private toastService: ToastService,
    private router: Router) { }

  ngOnInit() {
    // this.resetForm();
  }

  onSubmit(patientForm: NgForm) {
    if (patientForm.value.key == null)
      this.patientService.createPatient(patientForm.value);
    else
      this.patientService.updatePatient(patientForm.value.key, patientForm.value);
    this.resetForm(patientForm);
    this.toastService.success('Submitted Succcessfully', 'Patient Register');
  }

  resetForm(patientForm?: NgForm) {
    if (patientForm != null) {
      patientForm.reset();
    }

    this.patientService.selectedPatient = {
      key: null,
      dni: null,
      name: '',
      lastName: '',
      job: '',
      address: '',
      genre: '',
      phone: ''
    }

    this.selectedChange.emit(undefined);
  }

  showConsultations(): void {
    this.router.navigate([`consultations/${this.selectedPatient.key}`])
  }

}