import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    
    
  constructor() { }

  getHobbies(){
    return [
      'dancing',
    'singing',
    'internet'
    ];
    
    }
}
