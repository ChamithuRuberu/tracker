import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FileUpload} from "../model/file-upload";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private fireStore : AngularFirestore, private fireStorage : AngularFireStorage) { }

  saveMetaDataOfFile(fileObj : FileUpload) {

    const fileMeta = {
      id : '',
      name : fileObj.name,
      url : fileObj.url,
      size : fileObj.size
    }

    fileMeta.id = this.fireStore.createId();

    this.fireStore.collection('/Upload').add(fileMeta);

  }

  // dislpay all files
  getAllFiles() {
    return this.fireStore.collection('/Upload').snapshotChanges();
  }

  // delete file
  deleteFile(fileMeta : FileUpload) {

    this.fireStore.collection('/Upload').doc(fileMeta.id).delete();
    this.fireStorage.ref('/Uploads/'+fileMeta.name).delete();

  }
}
