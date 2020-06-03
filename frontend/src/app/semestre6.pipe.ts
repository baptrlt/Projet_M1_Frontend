import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semestre6'
})
export class Semestre6Pipe implements PipeTransform {

  transform(list: any[], semestre: string) {

    return semestre ? list.filter(item => item.periode.libelle === "semestre 6") : list;

  }

}
