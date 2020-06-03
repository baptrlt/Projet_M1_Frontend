import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semestre9'
})
export class Semestre9Pipe implements PipeTransform {

  transform(list: any[], semestre: string) {

    return semestre ? list.filter(item => item.periode.libelle === "semestre 9") : list;

  }

}
