import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPickedFile, IRelationshipManagerResponse, ISaveClientInfoRequest, IUserAccountInfoResponse, MultipleFileUploadResponse, UserAccountInfoResponse } from '../models/account.model';
import { IGenerateOTPResponse } from '../models/authentication.model';
import { IBranchesResponse } from '../models/branches.model';
import { ICategory } from '../models/categories.model';
import { ILink, ILinkResponse } from '../models/link.model';
import { AuthService } from './auth.service';
import { TableControllerService } from './paging-controller.service';



 interface HeaderRequest {
  requestId: string;
  sourceCode: string;
  countryCode: string;
  requestToken: string;
}

interface CompanyDetails {
  companyName: string;
  companyDirectorName: string;
  companyRegNo: string;
  companyNatureOfBusiness: string;
  companyAddress: string;
  companyEffectiveDateOfAgreement: string;
}

interface CustomerDetails {
  customerName: string;
  customerDirectorName: string;
  customerRegNo: string;
  customerAddress: string;
  customerNatureOfBusiness: string;
  customerEffectiveDateOfAgreement: string;
  customerRatePerPickup: string;
  customerCostOfKilometers: string;
}

interface ICreateCustomer {
  headerRequest: HeaderRequest;
  company: CompanyDetails;
  customer: CustomerDetails;
}




@Injectable({
  providedIn: 'root'
})
export class APIService {

  private baseURL = environment.appUrl;


  // private validateTinUrl =`${this.baseURL}/tin`;
  // private baseUrlOTP = `${this.baseURL}/proxy/v2/otpgenerate`;
  // private authenticateUrl = `${this.baseURL}/proxy/v2/login`;
  // private saveClientInfoUrl = `${this.baseURL}/api/v1/forms/business`;
  // private getClientDataUrl = `${this.baseURL}/api/v1/forms/business`;
  // private sendEmailVerificationUrl = `${this.baseURL}/proxy/v2/verification-mail`;
  // private verifyEmailTokenURM = `${this.baseURL}/proxy/v2/verify-client-mail`;
  // private branchesUrl = `${this.baseURL}/proxy/v2/list-available-branches`;
  // private countriesUrl = `${this.baseURL}/proxy/v2/countries`;
  // private relationshipManagers = `${this.baseURL}/api/v1/forms/business/rms?segment=all`;

  private createCustomerURL = `${this.baseURL}/api/v1/customer`;
  private getCustomerInfoURL = `${this.baseURL}/api/fetch_customers`;


  private httpHeaders = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("sourceCode", environment.app)
    .set("Access-Control-Allow-Origin", "*")
    .set("Content-Security-Policy", "script-src 'self'")
    .set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    .set(
      "X-IBM-Client-Secret",
      "jE1yI1pS6rP0kX1xT2pP3hQ6bY7mX1jJ3rW2xR8lN0hM7wX7tH"
    )
    .set("requestToken", "jE1yI1pS6rP0kX1xT2pP3hQ6bY7mX1jJ3rW2xR8lN0hM7wX7tH")
    .set("X-IBM-Client-Id", "25bea38f-8aa5-4f7b-b50b-b9ab6ea6c830")
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
    private auth : AuthService,
    private page : TableControllerService
  ) { }



  getSingleCustomer(id : number) {

    // const token = this.auth.getCurrentToken();
    // const token  = "eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJTVEFGRiIsImF1ZCI6IkFDQ0VTUyIsImV4cCI6MTY5NjM2Mzk5OCwiaWF0IjoxNjk2MzYwMzk4LCJqdGkiOiI0OTIxN2ZjYS1kY2Y3LTRiOGUtYjc5ZS0zZGQwZDBjN2ExNWUifQ.NIEWGpq_Rx-MHcKwTCNgOIWhwDWZ3u8Bv54yHPUjACm1qex5-9TJ-97NAIVSteJHRj8q28Nbuo5hxAyuxqyKJjaL79GaGcEmG-2Yi8jMsvOEEzU5Ysf9n2kO9GpfCBhrvyDnz1B6E4yruT0PJBHhui_QYPjOkIEI6NhJetY-y7NyxCzdojyma9IA928BVxWUhwJ7lDOtW_qkS2F1lU3Urkyi5iMXEo8iIiXMmtsPZ13O12eFQZd1YvzyrxQIAF7vt063bH4qyvnUQFPGTqFNHI_9wq5w1UMHovd4LsRs-AUrYe2qEuG8x8BBUNA2earo-mvqbCDt4WDo6-1I54BawQ";
    const token  = "eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJTVEFGRiIsImF1ZCI6IkFDQ0VTUyIsImV4cCI6MTY5NjM2NDI2NSwiaWF0IjoxNjk2MzYwNjY1LCJqdGkiOiIwYTY0ZjM4ZC0wNTQ2LTQxNzgtOTljYy01ZGQwODY3OTBiMTIifQ.SwpMwkUdiLntp8WLNzSxrwtW79JiWEDMekpxFn-TwSrrAHltRLcgbdPCcKwfyWl6HooHFvV7m7x1AMDb6bpEdrCG2SB2p_EbaFoIQb01Gd3cC1fzgXzYDqnXp6MB8_zNMsuQHI4lgn_TLE_M6guryolOo5J50WU1i1GgiluerGf6fbibQRHYJiBtLYnAz4hQvcAdU78XOhqXhY9cKSBLg3zfLOy4P6LQMROqwSs3ntcYsd4c8mT9iufdG2sRFMn_bF8oph7Cuboe4bji9PQsjqHEHrwCwN0UOoJC4T_hvvaSFC0AzG6zP2fRsXXhdBzMgMG9oOAweuBO-p7i-2Y3CQ";
 
    const headers = this.httpHeaders.set(
      'Authorization',
      `Bearer ${token}`
    );


  return  this.http.get<any>(`${this.getCustomerInfoURL}/{id}`, {
      headers: headers,
    });



  }


  

  validateTin(tin : string){
    const httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Accept', '*/*');

    const body = new URLSearchParams();
    body.set('tin', tin);
    // return this.http.post(this.validateTinUrl, body, {
    //   headers: httpHeaders,
    // });

    
  }

  createCustomer(data: ICreateCustomer) {
    let payload = {
      ...data,
      "headerRequest": {
        "requestId": "1065ce56f9b6d47a42534000",
        "sourceCode": "MOBY_LETTERS_APIS",
        "countryCode": "GH",
        "requestToken": "065ce56f9b6d47a48b159355337ffe54",
      }
    }

    const token = this.auth.getCurrentToken();

    const httpOptions = {
      headers: {
        ...this.httpHeaders,
        // "Authorization": `Bearer ${token}`
        "Authorization" : "Bearer eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJTVEFGRiIsImF1ZCI6IkFDQ0VTUyIsImV4cCI6MTY5NjM2MDU2MiwiaWF0IjoxNjk2MzU2OTYyLCJqdGkiOiIyOTEyMTk3YS1kOGI3LTQ1ZTAtOGM1YS03ZWRkNjdkNGJkYzkifQ.2MS_chH2dL1X93FN0msx_Gaf6i-SMGLxgfBkm9hehdTeR0J8OiEkrb5agcLnHHldoijLGLYOIsgosa_ebKeLxzzZJqkxlGlVVSNDalmlCELM7o1CxB6MuTFs98yEi3F4pAsUdb0Kzk-n5EheedazMNzMOW4Ezc-vgo93ofH8O59Go0Q4_Jnv-ShCsgzMhp9nQsjr_3vkHy7xYulr2-aUzbHsE5jbOfyT7dKCWGwD3J8M_0YWy3OPV_il9ZVv4_tFQxVUvuWiVEEoek4_cjPPS7S6nlDGE86TFb-t1r9Z81xd0rE5xLDFPNqkzf1TWqKaVzfLlDa4MLUXEN6rNw4-Rw"
      }
    };

    const headers = this.httpHeaders.set(
      'Authorization',
      `Bearer ${token}`
    );
   return this.http.post<any>(this.createCustomerURL, payload, {
      headers: headers,
    });

  }


  getClientInfo() {
    
    const token = this.auth.getCurrentToken();


  //   const headers = this.httpHeaders.set(
  //     'Authorization',
  //     `Bearer ${token}`
  //   );


  // return  this.http.get<IUserAccountInfoResponse>(this.saveClientInfoUrl, {
  //     headers: headers,
  //   });


  }


    /*
   * Get RMS
   */
    getRelationshipManagers() {

      const token = this.auth.getCurrentToken();


      const headers = this.httpHeaders.set(
        'Authorization',
        `Bearer ${token}`
      );

      // return this.http.get<IRelationshipManagerResponse>(this.relationshipManagers, {
      //   headers: headers,
      // });

    }
}



