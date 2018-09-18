import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Patient } from '../models/patient';
 
@Injectable({
  providedIn: 'root'
})
export class PatientService {
 
  private dbPath = '/patients';
 
  patientsRef: AngularFireList<Patient> = null;
  selectedPatient: Patient = new Patient();
 
  constructor(private db: AngularFireDatabase) {
    this.patientsRef = db.list(this.dbPath);
  }
 
  createPatient(patient: Patient): void {
    this.patientsRef.push(patient);
  }
 
  updatePatient(key: string, value: any): void {
    this.patientsRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deletePatient(key: string): void {
    this.patientsRef.remove(key).catch(error => this.handleError(error));
  }
 
  getPatientsList(): AngularFireList<Patient> {
    return this.patientsRef;
  }
 
  deleteAll(): void {
    this.patientsRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }
}