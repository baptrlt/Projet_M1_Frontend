import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semestre4'
})
export class Semestre4Pipe implements PipeTransform {

  transform(list: any[], semestre: string) {

    return semestre ? list.filter(item => item.periode.libelle === "semestre 4") : list;

  }

}
