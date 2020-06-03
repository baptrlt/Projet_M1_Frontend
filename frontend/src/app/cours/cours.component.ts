import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cours} from '../cours/cours';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
@Injectable()
export class CoursComponent {

  constructor(private http: HttpClient) { }
  valueRetour: any;
  selectedCours: Cours;
  detail: boolean = false;
  Cycle: string;

  ngAfterViewInit(): void {
    this.doGET();
  }


  doGET() {
    console.log("GET");
    let url = `http://51.38.191.75:80/api/cours/liste`;
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

  onSelect(cour: Cours): void {
    this.selectedCours = cour;
    this.detail = !this.detail;
  }

  backToCours(){
    this.detail = !this.detail;
  }

}

