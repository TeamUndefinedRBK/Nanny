import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nanny-form',
  templateUrl: './nanny-form.component.html',
  styleUrls: ['./nanny-form.component.css'],
})
export class NannyFormComponent {
  selectedFile: any = File;

  onSubmit(data) {
    this.http.post('', data).subscribe((res) => {
      console.warn('res', res);
    });
    console.warn(data);
  }

  
  constructor(private http: HttpClient) {}
  log(test: string) {
    console.log(test);
  }
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http;
    // UNCOMMENT  /////////////////////////
    // .post('FIRE_BASE_LINK_YA_GHASSEN_WALA_A3MEL_LOCAL_STORAGE', fd)
    // .subscribe((res) => {
    //   console.log(res);
    // });
  }
}
