import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmpresaFormComponent } from './modal-empresa-form.component';

describe('ModalEmpresaFormComponent', () => {
  let component: ModalEmpresaFormComponent;
  let fixture: ComponentFixture<ModalEmpresaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEmpresaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEmpresaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
