import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { maps } from './../../../Models/mapModel';
import { map } from 'src/Models/mapModel';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // invalidRegister: boolean | undefined;
  
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
   }
mapForm(f:NgForm){
  const thisMap:any={
    'clusterRaduis':f.value.clusterRaduis,
    'isGeoFencing':f.value.isGeoFencing,
    'timeBuffer':f.value.timeBuffer,
    'locationBuffer':f.value.locationBuffer,
    'duration':f.value.duration,
    'mapTypeId':f.value.mapTypeId,
    'mapSubTypeId':f.value.mapSubTypeId,
   }

   
  
    this.http.post('https://localhost:7184/api/Map',thisMap).subscribe(
      Response=>{
        console.log("ok");
        this.router.navigate(["home"]);
      }
    )
  }

  //  this.http.post("https://localhost:5001/api/Auth/register", Credential).subscribe(
  //   Response => {
  //     const token = (<any>response).token;
  //     localStorage.setItem("jwt", token);
  //     this.invalidRegister = false;
  //     this.router.navigate(["/home"]);
  //   }, err => {
  //     this.invalidRegister = true;
  //   }

 // )
  }
