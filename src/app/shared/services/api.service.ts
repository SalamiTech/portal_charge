import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private baseURL = environment.appUrl;
  private validateTinUrl = `${this.baseURL}/tin`;
  private baseUrlOTP = `${this.baseURL}/proxy/v2/otpgenerate`;
  private authenticateUrl = `${this.baseURL}/proxy/v2/login`;
  private saveClientInfoUrl = `${this.baseURL}/api/v1/forms/business`;
  private getClientDataUrl = `${this.baseURL}/api/v1/forms/business`;
  private sendEmailVerificationUrl = `${this.baseURL}/proxy/v2/verification-mail`;
  private verifyEmailTokenURM = `${this.baseURL}/proxy/v2/verify-client-mail`;
  private branchesUrl = `${this.baseURL}/proxy/v2/list-available-branches`;
  private countriesUrl = `${this.baseURL}/proxy/v2/countries`;
  private relationshipManagers = `${this.baseURL}/api/v1/forms/business/rms?segment=all`;


  private httpHeaders = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("sourceCode", environment.app)
    .set("Access-Control-Allow-Origin", "*")
    .set("Content-Security-Policy", "script-src 'self'")
    .set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    .set(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    .set("Content-Type", "application/json")
    .set("sourceCode", environment.app)
    .set("countryCode", environment.countryCode)
    .set("X-User-Type", "Staff")
    .set("Cache-Control", "no-cache");

  constructor(
    private http: HttpClient,
  ) { }



  getBranches() {
    return this.http.get<any>(this.branchesUrl, { headers: this.httpHeaders });
  }

}



