import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  thisMap: any;
  // invalidRegister: boolean | undefined;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFormSubmit(f: NgForm) {
    const thisMap: any = {
      'clusterRaduis': f.value.clusterRaduis,
      'isGeoFencing': f.value.isGeoFencing,
      'timeBuffer': f.value.timeBuffer,
      'locationBuffer': f.value.locationBuffer,
      'duration': f.value.duration,
      'mapTypeId': f.value.mapTypeId,
      'mapSubTypeId': f.value.mapSubTypeId,
    }
    this.http.post("https://localhost:5001/api/Auth/token", thisMap).subscribe(
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
