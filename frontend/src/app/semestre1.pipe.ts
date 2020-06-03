import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semestre1'
})
export class Semestre1Pipe implements PipeTransform {

  transform(list: any[], semestre: string) {

    return semestre ? list.filter(item => item.periode.libelle === "semestre 1") : list;

  }

  

}
