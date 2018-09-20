import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { ConsultationService } from '../../services/consultation.service';
import { Consultation } from '../../models/consultation';
import { ToastService } from '../../core/toast.service';
import { SpinnerService } from '../../core/spinner/spinner.service';

@Component({
  selector: 'nh-consultation-list',
  templateUrl: './consultation-list.component.html',
  styleUrls: ['./consultation-list.component.scss']
})
export class ConsultationListComponent implements OnInit {
  @Output() selectedChange = new EventEmitter<Consultation>();

  consultations: Consultation[];
  constructor(private consultationService: ConsultationService,
    private toastService: ToastService,
    private spinnerService: SpinnerService,
    private ativatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Use snapshotChanges().map() to store the key
    this.spinnerService.show();
    this.consultationService.getConsultationsList(this.ativatedRoute.snapshot.params['patientKey']).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(consultations => {
      this.consultations = consultations;
      this.spinnerService.hide();
    });
  }

  onEdit(consultation: Consultation) {
    this.consultationService.selectedConsultation = Object.assign({}, consultation);
    this.selectedChange.emit(consultation);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.consultationService.deleteConsultation(key);
      this.toastService.warning("Deleted Successfully");
    }
  }

}