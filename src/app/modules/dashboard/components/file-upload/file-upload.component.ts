import {Component, OnInit} from '@angular/core';
import {FileUpload} from "../../../../model/file-upload";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import {FileUploadService} from "../../../../shared/file-upload.service";
import {DataService} from "../../../../shared/data.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit{
  selectedFiles !: FileList;
  currentFileUpload !: FileUpload;
  percentage: number = 0;

  listOfFiles : FileUpload[] = [];


  constructor(private fileService: FileUploadService, private fireStorage: AngularFireStorage, private dataService : DataService) { }

  ngOnInit(): void {
    this.getAllFiles();
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
    this.currentFileUpload =  new FileUpload(this.selectedFiles[0]);
    const path = 'Uploads/'+this.currentFileUpload.file.name;

    const storageRef = this.fireStorage.ref(path);
    const uploadTask = storageRef.put(this.selectedFiles[0]);

    uploadTask.snapshotChanges().pipe(finalize( () => {
        storageRef.getDownloadURL().subscribe(downloadLink => {
          this.currentFileUpload.id = '';
          this.currentFileUpload.url = downloadLink;
          this.currentFileUpload.size = this.currentFileUpload.file.size;
          this.currentFileUpload.name = this.currentFileUpload.file.name;

          this.fileService.saveMetaDataOfFile(this.currentFileUpload);
        })
        this.ngOnInit();
      })
    ).subscribe( (res : any) => {
      this.percentage = (res.bytesTransferred * 100 / res.totalBytes);
    }, err => {
      console.log('Error occured');
    });

  }

  getAllFiles() {
    this.fileService.getAllFiles().subscribe( res => {
      this.listOfFiles = res.map((e : any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        //console.log(data);
        return data;
      });
    }, err => {
      console.log('Error occured while fetching file meta data');
    })
  }

  deleteFile(file : FileUpload) {

    if(window.confirm('Are you sure you want to delete '+file.name   + '?')) {
      this.fileService.deleteFile(file);
      this.ngOnInit();
    }

  }

}
