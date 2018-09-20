import { Component, OnInit } from '@angular/core';

import { Consultation } from '../models/consultation';

@Component({
  selector: 'consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss'],
  providers: []
})
export class ConsultationsComponent implements OnInit {

  private selectedConsultation: Consultation;

  constructor() { }

  ngOnInit() {
  }

  setConsultation(consultation: Consultation): void {
    this.selectedConsultation = consultation;
  }

  createConsultation(): void {
    this.selectedConsultation = new Consultation();
    this.selectedConsultation.key = null;
  }
}