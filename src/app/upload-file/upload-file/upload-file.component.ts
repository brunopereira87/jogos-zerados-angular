import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'bdg-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files: Set<File>;
  constructor(
    private uploadService: UploadFileService
  ) { }

  ngOnInit() {
  }

  onChange(event) {
    const selectedFiles = <FileList>event.srcElement.files;
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      this.files.add(selectedFiles[i])
    }
  }
  upload() {
    this.uploadService.upload(this.files, 'http://localhost:8000/upload')
      .subscribe(response => console.log('Upload concluido:', response));
  }
}
