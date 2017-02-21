import { Component, OnInit, Input, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'o2-upload-to-fbs',
  template: `
  <input type="file" id="btnUpload" style="display:none;"  (change)="onBtnUploadChange($event)" />
  <button type="button" (click) = "onBtnBrowseClick($event)">{{btnSelectText}}</button>
  `
//   ,
//   styleUrls: ['./o2-upload-to-fbs.component.css']
})
export class O2UploadToFbsComponent implements OnInit {
    @Input() fbsBasePath: string;
    @Input() btnSelectText: string;
     targetRef:any;
     storageRef:any;
     constructor(@Inject(FirebaseApp) firebaseApp:any){
        this.storageRef = firebaseApp.storage().ref();
     }

     ngOnInit() {
         if (this.btnSelectText == ''){
           this.btnSelectText = "Select File";
         }
     }

     
     onBtnBrowseClick(event:any){
         let uploadButton = document.getElementById("btnUpload");
         uploadButton.click();
     }

     onBtnUploadChange(event:any){
         let targetFile = event.srcElement.files[0];
         let uploader = document.getElementById("btnUpload");
         let fbsPath = this.fbsBasePath + targetFile.name;
         this.uploadFile(fbsPath,targetFile);
     }

     uploadFile(fbsPath:string,targetFile:string) {
       let promise = new Promise((res,rej) => {
          this.targetRef=this.storageRef.child(fbsPath);
          let task=this.targetRef.put(targetFile);
          task.on('state_changed',
            (snapshot:any) => {
              console.log(snapshot.state);
            },
            (error:any) => {
              console.log(error.code);
              rej(error);
            },
            () => {
              let downloadUrl = task.snapshot.downloadURL;
              console.log(downloadUrl);
              res(downloadUrl);
            }
          );
       })
       return promise;
     }
}
