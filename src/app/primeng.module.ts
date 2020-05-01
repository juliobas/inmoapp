import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';


@NgModule({
  imports: [
    ButtonModule,
    PanelModule,
    InputTextModule,
    PasswordModule,
    KeyFilterModule,
    MessagesModule,
    MessageModule,
    DialogModule,
    InputMaskModule
  ],
  declarations: [
    
  ],
  exports: [
    ButtonModule,
    PanelModule,
    InputTextModule,
    PasswordModule,
    KeyFilterModule,
    MessagesModule,
    MessageModule,
    DialogModule,
    InputMaskModule
  ]
})
export class PrimeNgModule {}