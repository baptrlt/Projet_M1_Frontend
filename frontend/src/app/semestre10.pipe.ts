import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semestre10'
})
export class Semestre10Pipe implements PipeTransform {

  transform(list: any[], semestre: string) {

    return semestre ? list.filter(item => item.periode.libelle === "semestre 10") : list;

  }

}
