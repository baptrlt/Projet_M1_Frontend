import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semestre8'
})
export class Semestre8Pipe implements PipeTransform {

  transform(list: any[], semestre: string) {

    return semestre ? list.filter(item => item.periode.libelle === "semestre 8") : list;

  }

}
