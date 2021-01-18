import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,HttpEventType } from '@angular/common/http';
export const environment = {
  production: false,
  isMockEnabled: false, // You have to switch this, when your real back-end is done
  authTokenKey: 'x-auth-token'
};



@Component({
  selector: 'nanny-form',
  templateUrl: './nanny-form.component.html',
  styleUrls: ['./nanny-form.component.css'],
})

export class NannyFormComponent {
  selectedFile: any = File;

  onSubmit(data: any) {
    let httpHeaders = new HttpHeaders();
    const userToken = localStorage.getItem(environment.authTokenKey);
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + userToken);



    this.http.post('http://localhost:5000/Nannys/nannyform', data,{headers: httpHeaders}).subscribe((res) => {
      console.warn('res', res);
    });
    console.warn(data)
  }

  constructor(private http: HttpClient) {}
  ngOnInit() {}
  url = './assets/';
  log(test: string) {
    console.log(test);
  }
  onFileSelected(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http
      .post('/', fd, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          // console.warn(
          //   'upload progress: ' +
          //     Math.round((event.loaded / event.total) * 100) +
          //     '%'
          // );
        } else if (event.type === HttpEventType.Response) {
          // console.log(event);
        }
        console.warn(event);
      });
  }
}
