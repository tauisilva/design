import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { FieldsetModule } from 'primeng/fieldset';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FieldsetModule
  ],
  exports: [
    AvatarModule,
    ButtonModule,
    CardModule,
    ChipModule,
    FieldsetModule,
    SpeedDialModule,
    ToolbarModule
  ]
})
export class PrimeModule { }
