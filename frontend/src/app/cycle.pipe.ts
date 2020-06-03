import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cycle'
})
export class CyclePipe implements PipeTransform {


  transform(list: any[], cycle: string) {

    return cycle ? list.filter(item => item.Cycle.libelle === "cycle") : list;

  }

}
