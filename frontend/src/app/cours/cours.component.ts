import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cours} from '../cours/cours';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
@Injectable()
export class CoursComponent {

  constructor(private http: HttpClient, config: NgbPopoverConfig) {
    config.placement = 'bottom';
    config.triggers = 'hover';
   }
   
  showSpinner: boolean = true;
  valueRetour: any;
  listCycle: any;
  listPeriode: any;
  selectedCours: Cours;
  detail: boolean = false;
  Cycle: string;

  ngAfterViewInit(): void {
    
    this.getPeriode();
    this.getCycle();
    this.getCours();
  }


  getCours() {
    console.log("GET");
    let url = `http://51.38.191.75:80/api/cours/liste`;
    //let url = `http://127.0.0.1:8000/api/cours/liste`;
    //this.http.get(url).subscribe(res => console.log(res.json()));
    this.http
      .get<any[]>(url)
      .subscribe(
        (response) => {
          this.valueRetour = response;
          this.showSpinner = false;
        },
        
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

  }

  getCycle() {
    console.log("GET");
    let url = `http://51.38.191.75:80/api/cycle/liste`;
    //let url = `http://127.0.0.1:8000/api/cycle/liste`;
    //this.http.get(url).subscribe(res => console.log(res.json()));
    this.http
      .get<any[]>(url)
      .subscribe(
        (response) => {
          this.listCycle = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

  }

  getPeriode() {
    console.log("GET");
    let url = `http://51.38.191.75:80/api/axe_temps/liste`;
    //let url = `http://127.0.0.1:8000/api/axe_temps/liste`;
    //this.http.get(url).subscribe(res => console.log(res.json()));
    this.http
      .get<any[]>(url)
      .subscribe(
        (response) => {
          this.listPeriode = response;
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

 //-----------------
  title = 'ngSlick';


  slides = [342, 453, 846, 855, 234, 564, 744, 243];

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };


  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }


}

