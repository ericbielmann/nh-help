import { Component, OnInit } from '@angular/core';

import { Patient } from '../models/patient';

@Component({
  selector: 'nh-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers: []
})
export class PatientsComponent implements OnInit {

  selectedPatient: Patient;

  constructor() { }

  ngOnInit() {
  }

  setPatient(patient: Patient): void {
    this.selectedPatient = patient;
  }

  createPatient(): void {
    this.selectedPatient = new Patient();
    this.selectedPatient.key = null;
  }
}