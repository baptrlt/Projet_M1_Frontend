import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semestre7'
})
export class Semestre7Pipe implements PipeTransform {

  transform(list: any[], semestre: string) {

    return semestre ? list.filter(item => item.periode.libelle === "semestre 7") : list;

  }

}
