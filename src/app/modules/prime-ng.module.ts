import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenubarModule} from 'primeng/menubar';
import { SharedModule } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    SplitButtonModule,
    MenubarModule,
    SharedModule
  ],
  exports: [
    ButtonModule,
    SplitButtonModule,
    MenubarModule,
    SharedModule
  ]
})
export class PrimeNgModule { }
