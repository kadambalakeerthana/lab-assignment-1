import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  
  transform(value: any, hobbie: string): any {
    if(hobbie === 'reading'){
    return value+" is good hobbie ";
    }
    else
    {
    return value+ " is bad hobbie ";
    }
    }
}
