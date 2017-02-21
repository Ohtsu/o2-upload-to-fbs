/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './index';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from 'angularfire2/angularfire2';
import * as import4 from '@angular/common/src/localization';
import * as import5 from 'angularfire2/auth/auth';
import * as import6 from 'angularfire2/database/database';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/i18n/tokens';
import * as import9 from 'angularfire2/tokens';
import * as import10 from 'angularfire2/auth/auth_backend';
class O2UploadToFbsModuleInjector extends import0.NgModuleInjector<import1.O2UploadToFbsModule> {
  _CommonModule_0:import2.CommonModule;
  _AngularFireModule_1:import3.AngularFireModule;
  _O2UploadToFbsModule_2:import1.O2UploadToFbsModule;
  __NgLocalization_3:import4.NgLocaleLocalization;
  __FirebaseApp_4:any;
  __AuthBackend_5:any;
  __WindowLocation_6:any;
  __AngularFireAuth_7:import5.AngularFireAuth;
  __AngularFireDatabase_8:import6.AngularFireDatabase;
  __AngularFire_9:import3.AngularFire;
  constructor(parent:import7.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_3():import4.NgLocaleLocalization {
    if ((this.__NgLocalization_3 == null)) { (this.__NgLocalization_3 = new import4.NgLocaleLocalization(this.parent.get(import8.LOCALE_ID))); }
    return this.__NgLocalization_3;
  }
  get _FirebaseApp_4():any {
    if ((this.__FirebaseApp_4 == null)) { (this.__FirebaseApp_4 = import3._getFirebase(this.parent.get(import9.FirebaseConfig),this.parent.get(import9.FirebaseAppName))); }
    return this.__FirebaseApp_4;
  }
  get _AuthBackend_5():any {
    if ((this.__AuthBackend_5 == null)) { (this.__AuthBackend_5 = import3._getAuthBackend(this._FirebaseApp_4)); }
    return this.__AuthBackend_5;
  }
  get _WindowLocation_6():any {
    if ((this.__WindowLocation_6 == null)) { (this.__WindowLocation_6 = import3._getWindowLocation()); }
    return this.__WindowLocation_6;
  }
  get _AngularFireAuth_7():import5.AngularFireAuth {
    if ((this.__AngularFireAuth_7 == null)) { (this.__AngularFireAuth_7 = new import5.AngularFireAuth(this._AuthBackend_5,this._WindowLocation_6,this.parent.get(import9.FirebaseAuthConfig,(null as any)))); }
    return this.__AngularFireAuth_7;
  }
  get _AngularFireDatabase_8():import6.AngularFireDatabase {
    if ((this.__AngularFireDatabase_8 == null)) { (this.__AngularFireDatabase_8 = new import6.AngularFireDatabase(this.parent.get(import9.FirebaseConfig),this._FirebaseApp_4)); }
    return this.__AngularFireDatabase_8;
  }
  get _AngularFire_9():import3.AngularFire {
    if ((this.__AngularFire_9 == null)) { (this.__AngularFire_9 = new import3.AngularFire(this.parent.get(import9.FirebaseConfig),this._AngularFireAuth_7,this._AngularFireDatabase_8)); }
    return this.__AngularFire_9;
  }
  createInternal():import1.O2UploadToFbsModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._AngularFireModule_1 = new import3.AngularFireModule();
    this._O2UploadToFbsModule_2 = new import1.O2UploadToFbsModule();
    return this._O2UploadToFbsModule_2;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.AngularFireModule)) { return this._AngularFireModule_1; }
    if ((token === import1.O2UploadToFbsModule)) { return this._O2UploadToFbsModule_2; }
    if ((token === import4.NgLocalization)) { return this._NgLocalization_3; }
    if ((token === import9.FirebaseApp)) { return this._FirebaseApp_4; }
    if ((token === import10.AuthBackend)) { return this._AuthBackend_5; }
    if ((token === import9.WindowLocation)) { return this._WindowLocation_6; }
    if ((token === import5.AngularFireAuth)) { return this._AngularFireAuth_7; }
    if ((token === import6.AngularFireDatabase)) { return this._AngularFireDatabase_8; }
    if ((token === import3.AngularFire)) { return this._AngularFire_9; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const O2UploadToFbsModuleNgFactory:import0.NgModuleFactory<import1.O2UploadToFbsModule> = new import0.NgModuleFactory(O2UploadToFbsModuleInjector,import1.O2UploadToFbsModule);