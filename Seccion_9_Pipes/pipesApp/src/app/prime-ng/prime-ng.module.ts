import { NgModule } from '@angular/core';

//PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

//Provider PrimeNG
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    RippleModule,
    ToastModule,
    TooltipModule
  ],
  providers: [
    MessageService
  ]
})
export class PrimeNgModule { }
