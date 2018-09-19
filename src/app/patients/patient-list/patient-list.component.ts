import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';

import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient';
import { ToastService } from '../../core/toast.service';
import { SpinnerService } from '../../core/spinner/spinner.service';

@Component({
  selector: 'nh-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  @Output() selectedChange = new EventEmitter<Patient>();

  patients: Patient[];
  constructor(private patientService: PatientService,
    private toastService: ToastService,
    private spinnerService: SpinnerService) { }

  ngOnInit() {
    // Use snapshotChanges().map() to store the key
    this.spinnerService.show();
    this.patientService.getPatientsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(patients => {
      this.patients = patients;
      this.spinnerService.hide();
    });
  }

  onEdit(patient: Patient) {
    this.patientService.selectedPatient = Object.assign({}, patient);
    this.selectedChange.emit(patient);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.patientService.deletePatient(key);
      this.toastService.warning("Deleted Successfully");
    }
  }

}