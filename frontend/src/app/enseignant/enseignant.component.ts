import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.scss']
})

@Injectable()
export class EnseignantComponent{

  constructor(private http: HttpClient) { }
  valueRetour: any;

  ngAfterViewInit(): void {
    this.doGET();  }


  doGET(){
    console.log("GET");
    let url = `http://51.38.191.75:80/api/enseignant/liste`;
    //this.http.get(url).subscribe(res => console.log(res.json()));
    this.http
      .get<any[]>(url)
      .subscribe(
        (response) => {
          this.valueRetour = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      ); 

  }
}
