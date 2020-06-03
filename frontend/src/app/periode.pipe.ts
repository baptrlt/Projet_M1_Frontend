import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'periode'
})
export class PeriodePipe implements PipeTransform {

  transform(list: any[], periode: string) {

    return periode ? list.filter(item => item.periode.libelle === "periode" ) : list;
  
  }

}
