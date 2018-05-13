import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItaliaPage } from './italia';

@NgModule({
  declarations: [
    ItaliaPage,
  ],
  imports: [
    IonicPageModule.forChild(ItaliaPage),
  ],
})
export class ItaliaPageModule {}
