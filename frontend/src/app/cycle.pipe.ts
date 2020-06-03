import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cycle'
})
export class CyclePipe implements PipeTransform {

  transform(list: any[], value: string) {


    return value ? list.filter(item => item.Cycle.libelle === value) : list;
  }

}
