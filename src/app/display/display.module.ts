import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayPageRoutingModule } from './display-routing.module';

import { DisplayPage } from './display.page';
import { CopyrightComponent } from '../copyright/copyright.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayPageRoutingModule
  ],
  declarations: [DisplayPage, CopyrightComponent]
})
export class DisplayPageModule {}
