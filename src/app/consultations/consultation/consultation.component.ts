import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Consultation } from '../../models/consultation';
import { ConsultationService } from '../../services/consultation.service';
import { ToastService } from '../../core/toast.service';

@Component({
  selector: 'nh-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  @Input() selectedConsultation: Consultation;
  @Output() selectedChange = new EventEmitter<Consultation>();

  constructor(private consultationService: ConsultationService, private toastService: ToastService) { }

  ngOnInit() {
    // this.resetForm();
  }

  onSubmit(consultationForm: NgForm) {
    if (consultationForm.value.key == null)
      this.consultationService.createConsultation(consultationForm.value);
    else
      this.consultationService.updateConsultation(consultationForm.value.key, consultationForm.value);
    this.resetForm(consultationForm);
    this.toastService.success('Submitted Succcessfully', 'Consultation Register');
  }

  resetForm(consultationForm?: NgForm) {
    if (consultationForm != null) {
      consultationForm.reset();
    }

    this.consultationService.selectedConsultation = {
      comment: null,
      height: null,
      imc: null,
      key: null,
      musculature: null,
      patientKey: null,
      totalFat: null,
      visceralFat: null,
      weight: null,
      wristCircumfence: null
    }

    this.selectedChange.emit(undefined);
  }

}