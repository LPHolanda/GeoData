import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionaPaisPage } from './adiciona-pais';

@NgModule({
  declarations: [
    AdicionaPaisPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionaPaisPage),
  ],
})
export class AdicionaPaisPageModule {}
