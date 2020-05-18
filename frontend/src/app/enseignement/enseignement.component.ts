import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enseignement',
  templateUrl: './enseignement.component.html',
  styleUrls: ['./enseignement.component.scss']
})
@Injectable()
export class EnseignementComponent {

  constructor(private http: HttpClient) { }
  valueRetour: any;

  ngAfterViewInit(): void {
    this.doGET();
  }


  doGET() {
    console.log("GET");
    let url = `http://51.38.191.75:80/api/enseignement/liste`;
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

