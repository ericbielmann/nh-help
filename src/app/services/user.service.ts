import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class UserService {
    private baseUrl: string;
    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
        this.baseUrl = baseUrl;
    }

    getAll() {
        return this.http.get<User[]>(`${this.baseUrl}/users`);
    }
}