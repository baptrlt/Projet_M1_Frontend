import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semestre2'
})
export class Semestre2Pipe implements PipeTransform {

  transform(list: any[], semestre: string) {

    return semestre ? list.filter(item => item.periode.libelle === "semestre 2") : list;

  }

}
