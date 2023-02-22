import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
 import { map } from 'src/Models/mapModel';
  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) { }
  maps:map[];
  ngOnInit(): void {
        this.http.get<map[]>('https://localhost:7184/api/Map').subscribe(
          (Response) => {
             this.maps= Response
          
        },err=>{
          console.log('error')
        })
    }
}
