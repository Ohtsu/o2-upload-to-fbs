import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { O2UploadToFbsComponent } from './src/o2-upload-to-fbs.component';

export * from './src/o2-upload-to-fbs.component';


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule
  ],
  declarations: [
    O2UploadToFbsComponent,
  ],
  exports: [
    O2UploadToFbsComponent,
  ]
})
export default class O2UploadToFbsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: O2UploadToFbsModule,
      providers: []
    };
  }
}
