import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
            this.validateAllFormFields(control);
        }
    });
}
}
