import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//servicios
import { FormValidationService } from '../../services/form-validation.service';
import { UserService } from '../../backend/users/user.service';
import { User } from '../../backend/users/users';
import { AuthUserService } from '../../services/auth/auth-user.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  form: FormGroup;
  user: User;
  constructor(
    private formBuilder: FormBuilder, 
    public formValidate: FormValidationService,
    public userService: UserService,
    private ngZone: NgZone,
    private router: Router,
    private auth: AuthUserService
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [<any>Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      passwd: ['', [<any>Validators.required]]
    });
  }

  iniciar(){    
    this.userService.getOne(this.form.get("email").value, this.form.get("passwd").value)
    .subscribe(result => {
      if(result.length > 0){
        const res: any = result[0];
        let user: User = {id: res.payload.doc.id,
        ...res.payload.doc.data()};
        this.auth.login(user);
        this.ngZone
              .run(() => this.router.navigate(['/admin']))
              .then();
      }
      
    })
  }


  regresar(){
    this.ngZone
              .run(() => this.router.navigate(['']))
              .then();
  }

}
