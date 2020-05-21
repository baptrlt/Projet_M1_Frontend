import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.scss']
})

@Injectable()
export class CycleComponent {

  constructor(private http: HttpClient) { }
  valueRetour: any;

  ngAfterViewInit(): void {
    this.doGET();
  }


  doGET() {
    console.log("GET");
    let url = `http://51.38.191.75:80/api/cycle/liste`;
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

/*export class CycleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
