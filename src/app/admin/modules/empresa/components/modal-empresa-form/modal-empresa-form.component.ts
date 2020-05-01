import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from '../../../../../services/form-validation.service';

@Component({
  selector: 'app-modal-empresa-form',
  templateUrl: './modal-empresa-form.component.html',
  styleUrls: ['./modal-empresa-form.component.scss']
})
export class ModalEmpresaFormComponent implements OnInit {
  @Input() display = false;
  @Output() closeModal = new EventEmitter();
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    public formValidate: FormValidationService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      email: ['', [<any>Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phone: ['', [<any>Validators.required]]
    });
  }
  
  cerrar() {
    console.log("cerrando modal");
    this.closeModal.emit(false);
  }

}
