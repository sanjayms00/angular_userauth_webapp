import { Pipe, PipeTransform } from '@angular/core';
import { Associate } from '../model/associate.model';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: Associate[], ...args: any): Associate[] | null {
    if(!value) return null;
    if(!args) return value;

    return value.filter((item: Associate): boolean => {
      // console.log('item is', item)
      console.log('return is', JSON.stringify(item).toLowerCase().includes(args))
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }
}
