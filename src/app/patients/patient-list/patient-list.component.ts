import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient';
import { ToastService } from '../../core/toast.service';

@Component({
  selector: 'nh-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  patients: Patient[];
  constructor(private patientService: PatientService, private toastService: ToastService) { }

  ngOnInit() {
    // Use snapshotChanges().map() to store the key
    this.patientService.getPatientsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(patients => {
      this.patients = patients;
    });
  }

  onEdit(emp: Patient) {
    this.patientService.selectedPatient = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.patientService.deletePatient(key);
      this.toastService.warning("Deleted Successfully");
    }
  }

}