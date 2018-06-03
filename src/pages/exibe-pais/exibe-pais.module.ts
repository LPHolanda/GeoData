import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibePaisPage } from './exibe-pais';

@NgModule({
  declarations: [
    ExibePaisPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibePaisPage),
  ],
})
export class ExibePaisPageModule {}
