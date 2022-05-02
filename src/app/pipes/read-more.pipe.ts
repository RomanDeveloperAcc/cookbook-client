import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore'
})
export class ReadMorePipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.length > 39) {
      const transformedVal = value.slice(0, 39).split('');
      transformedVal.map((val, index) => {
        if (index > 35) { transformedVal[index] = '.'; }
      });
      return transformedVal.join('');
    }

    return value;
  }

}
