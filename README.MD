# _o2-upload-to-fbs_ Angular2 Library to upload files to Firebase Storage
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)


_o2-upload-to-fbs_ is a tool library for uploading files to Firebase Storage by AngularFire2.


## Overview 
   - _o2-upload-to-fbs_ is a tool for those who want to upload files to Firebase Storage by using AngularFire2

   - File select button is supported

   - Target location in Firebase Storage can be set by a variable.

    You can set a location variable in HTML. So it is very easy to set each UserId path for the target.
   

## Prerequisite

   - Node.js
   - TypeScript2
   - Angular2
   - AngularFire2
   - Firebase


## Installation


To install this library, run:

```bash
$ npm install o2-upload-to-fbs --save
```


### Step by Step Installation for Angular-CLI


#### Install Angular-CLI

```bash
$ npm install -g angular-cli
```

#### Create New Project

```bash
$ ng new sample-upload (Your project name)
$ cd sample-upload 
```
#### Check Your Program

If you start local server as follows, you can get the first page in your browser by accessing **http://localhost:4200**.


```bash
$ ng serve
```

  - ***First Page*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/install/first-view-by-localserver01.png" width= "640" >

#### Stop Local Server

Input **Ctrl+C** and **y+Return** to stop the local server.


#### Install o2-upload-to-fbs

```bash
$ npm install o2-upload-to-fbs --save
```

#### Get Firebase config data

Of course you need to have Firebase account and your own project. If you don't have the account, visit the following page in advance and make your own project.  

<https://www.firebase.com/login/>  


You need to get Firebase config data from your own project page. This url is as follows.

_https://console.firebase.google.com/project/your-project-name/overview_

You need the following parameters
   - apiKey
   - authDomain
   - databaseURL
   - storageBucket
   - messagingSenderId

In "Overview" page, click Web Application icon.
  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/firebase/FirebaseConsoleOverview11.png" width= "640" >
  
Then those parameters above will be shown. Copy them.
  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/firebase/FirebaseGetConfigData11.png" width= "640" >

#### Modify app.module.ts

Change directory to "src/app".

```bash
$ cd src/app
```
You will find **app.module.ts**.
Modify this file as follows. In firebaseConfig, paste the data above. 

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

  // Add Start --------------------------------------------

import { AngularFireModule } from 'angularfire2'; 		
import { O2UploadToFbsComponent } from 'o2-upload-to-fbs';	

export const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxxxxxxxxxxxx.firebaseio.com",
    storageBucket: "xxxxxxxxxxxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxxxxxxxxx"

};
  // Add End --------------------------------------------


@NgModule({
  declarations: [
    O2UploadToFbsComponent,  // <= Add
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)  // <= Add

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


#### Modify app.component.html
In the same directory, modify **app.component.html** as follows. 

```html

<h1>
  {{title}}
</h1>
<!-- Add Start -->

<o2-upload-to-fbs [fbsBasePath] = "'images/'" [btnSelectText] = "'Browse'"></o2-upload-to-fbs>

<!-- Add End -->


```

You can set two parameters (**fbsBasePath** and **btnSelectText**)

   - **fbsBasePath**   : Target path in your Firebase Storage 
                    (eg. 'images/' --> 'xxxxxxxx.appspot.com/images/')
   - **btnSelectText** : Title text of the select button



#### Check your Firebase Storage Rule

This sample program does not have authentication function. Therefore, it is necessary for unauthenticated users can access the target location in Firebase Storage.

So you need to set "Rule" in Firebase Storage.

From Firebase console, open **Storage** page and click **Rules** tab for changing the rule.

In this program, the upload destination is "images /" by default.

Therefore, change the rule as follows. Of course you need to change **your_project_name** to your own project name.


```typescript

service firebase.storage {
  match /b/your_project_name.appspot.com/o {
    match /images/{allPaths=**} {
      allow read, write;
    }
  }
}

```

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/firebase/FirebaseStorageRule11.png" width= "640" >


#### Restart local server
Restart the local server as follows. 

```bash
$ ng serve
```

And you will get a (Browse) button  in your browser by accessing **http://localhost:4200**.  

Click Browse Button.  
 
  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/firebase/O2UploadToFbs_Initial11.png" width= "640" >

 
Select your target file for uploading.  


  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/firebase/O2UploadToFbs_SelectFile12.png" width= "640" >

If you want to check the uploading process, open "Console" tab page in your browser.  

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/firebase/O2UploadToFbs_UploadComplete11.png" width= "640" >  

Next, open Firebase Storage page in your browser. If you click "File" tab, "images/" directory will be shown.  
Click "images/" directory name.  


  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/firebase/O2UploadToFbs_UploadFileDir12.png" width= "640" >

Then you can find the file which you uploaded from your local computer.  

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/firebase/O2UploadToFbs_DisplayUploadedFile11.png" width= "640" >



## Version

   - o2-upload-to-fbs : 0.1
   - Angular2     : 2.0.0
   - TypeScript   : 2.0.2
   - Angularfire2 : 2.0-beta,
   - Firebase     : 3.6



## Reference

- "ウェブでファイルをアップロードする",
<https://firebase.google.com/docs/storage/web/upload-files?hl=ja>

- "Angular2 / Ionic2 / How to upload and get file or image from firebase storage" ,2016/11/16,by Muhammet Bakan, 
<http://www.muhammetbakan.com/angular2-ionic2-how-to-upload-and-get-image-from-firebase-storage/>

- "Firebase storage and angularfire2 - Stack Overflow",
<http://stackoverflow.com/questions/38593188/firebase-storage-and-angularfire2>

- "feat(storage): upload, read, and process* files #213",2016/6/8,
<https://github.com/angular/angularfire2/issues/213>



## Change Log

 - 2017.2.19 version 0.1 uploaded 

## Copyright

copyright 2017 by Shuichi Ohtsu (DigiPub Japan)


## License

MIT © [Shuichi Ohtsu](ohtsu@digipub-net.com)
