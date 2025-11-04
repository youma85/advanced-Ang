import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Journey } from '../models/journey.model';
import { Vehicle } from '../models/vehicle.model';

/**
 * API Service for HTTP calls to the mock server
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/api';

  /**
   * Get all journeys
   * Supports query params for testing:
   * - ?delay=1500 : adds delay in milliseconds
   * - ?error=true : returns 500 error
   */
  getJourneys(queryParams?: { delay?: number; error?: boolean }): Observable<Journey[]> {
    let url = `${this.API_URL}/journeys`;
    const params: string[] = [];

    if (queryParams?.delay) {
      params.push(`delay=${queryParams.delay}`);
    }
    if (queryParams?.error) {
      params.push('error=true');
    }

    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }

    return this.http.get<Journey[]>(url);
  }

  /**
   * Get all vehicles
   * Supports query params for testing:
   * - ?delay=1500 : adds delay in milliseconds
   * - ?error=true : returns 500 error
   */
  getVehicles(queryParams?: { delay?: number; error?: boolean }): Observable<Vehicle[]> {
    let url = `${this.API_URL}/vehicles`;
    const params: string[] = [];

    if (queryParams?.delay) {
      params.push(`delay=${queryParams.delay}`);
    }
    if (queryParams?.error) {
      params.push('error=true');
    }

    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }

    return this.http.get<Vehicle[]>(url);
  }
}
