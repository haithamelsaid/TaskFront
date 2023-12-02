import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  thisMap={name:Text}

  constructor(
    private router: Router,
     private http: HttpClient,
     ) { }

  onFormSubmit() {
    this.http.post("https://localhost:7184/api/Map", this.thisMap).subscribe(
      response => {
        console.log(response)
        console.log("ok")
        this.router.navigate(["/home"]);
      }, err => {
        console.log("no")
      }
    )
  }
}
