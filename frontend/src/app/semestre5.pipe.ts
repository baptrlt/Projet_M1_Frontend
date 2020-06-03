import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semestre5'
})
export class Semestre5Pipe implements PipeTransform {

  transform(list: any[], semestre: string) {

    return semestre ? list.filter(item => item.periode.libelle === "semestre 5") : list;

  }

}
