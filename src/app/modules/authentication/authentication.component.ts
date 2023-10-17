import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ILoginModel, ILoginResponse } from 'src/app/shared/models/login.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { StateStorageService } from 'src/app/shared/services/state-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
navigateByUrl() {
throw new Error('Method not implemented.');
}

  assetUrl = environment.assetsUrl;

  public loginData: ILoginModel = {
    username: '',
    password: ''
  };

  loginFormGroup: FormGroup;
  authResp: any;
  loader = false;
  constructor(
    private _formBuilder: FormBuilder, private router: Router,
    private authService: AuthService,
    private store: StateStorageService,
  
    private notification: NotificationService
  ) {
    // this.ILoginModel = new ILoginModel();

    this.loginFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/maker-portal/home/dashboard']);
  }


  // login() {

    

  //   this.loader = true;

  //   this.router.navigateByUrl('/maker-portal/home/dashboard')
  //   this.authService.signin(this.loginData).subscribe((res: ILoginResponse) => {

  //     console.log(res.hostHeaderInfo)

  //   });
  // }
}
