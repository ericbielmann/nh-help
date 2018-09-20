import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Consultation } from '../models/consultation';
 
@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
 
  private dbPath = '/consultations';
 
  consultationsRef: AngularFireList<Consultation> = null;
  selectedConsultation: Consultation = new Consultation();
 
  constructor(private db: AngularFireDatabase) {
    this.consultationsRef = db.list(this.dbPath);
  }
 
  createConsultation(consultation: Consultation): void {
    this.consultationsRef.push(consultation);
  }
 
  updateConsultation(key: string, value: any): void {
    this.consultationsRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteConsultation(key: string): void {
    this.consultationsRef.remove(key).catch(error => this.handleError(error));
  }
 
  getConsultationsList(patientKey): AngularFireList<Consultation> {
    this.consultationsRef = this.db.list(`${this.dbPath}/${patientKey}`);
    return this.consultationsRef;
  }
 
  deleteAll(): void {
    this.consultationsRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }
}