import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ChipModule } from 'primeng/chip';
import { FieldsetModule } from 'primeng/fieldset'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FieldsetModule
  ],
  exports: [
    ToolbarModule,
    ButtonModule,
    AvatarModule,
    CardModule,
    ChipModule,
    FieldsetModule
  ]
})
export class PrimeModule { }
