import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ellipsisSlice'
})
export class EllipsisSlicePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value && value.length > 20) {
      return `${value.substring(0, 20)}...`
    }
    return value;
  }

}
