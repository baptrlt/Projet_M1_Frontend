import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semestre3'
})
export class Semestre3Pipe implements PipeTransform {

  transform(list: any[], semestre: string) {

    return semestre ? list.filter(item => item.periode.libelle === "semestre 3") : list;

  }
}
