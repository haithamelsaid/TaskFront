import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './Components/home/home.component';
import { MapComponent } from './Components/map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatIconModule, 
    MatTableModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
 
export class AppModule { }
