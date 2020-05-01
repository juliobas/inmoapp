import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//servicios
import { FormValidationService } from '../../services/form-validation.service';
import { UserService } from '../../backend/users/user.service';
import { User } from '../../backend/users/users';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  form: FormGroup;
  users: User[];
  constructor(
      private formBuilder: FormBuilder, 
      public formValidate: FormValidationService,
      public userService: UserService,
      private ngZone: NgZone,
      private router: Router
      ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      email: ['', [<any>Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      passwd: ['', [<any>Validators.required]]
    });

    this.userService.getAll().subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as User;
      });
      console.log(this.users)
    });
  }
  onRegister() {    
    if(this.form.valid){
      let user: User;
      user = {
        name: this.form.get("name").value,
        email: this.form.get("email").value,
        password: this.form.get("passwd").value
      }
      this.create(user);
    }else{
      this.formValidate.validateAllFormFields(this.form);
    }
  }

  create(user: User){
    this.userService.add(user).then(res => {
      console.log(res);
      if(res.id) {
        this.ngZone
              .run(() => this.router.navigate(['login']))
              .then();
      }
    });
  }

  regresar(){
    this.ngZone
              .run(() => this.router.navigate(['']))
              .then();
  }
}
