import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-emp',
  template: `
    <p>
      emp works!
    </p>
    <p>hi </p>
<li *ngFor="let h of hobbies">
<b> {{h}} </b>
</li>
  `,
  styles: []
})
export class EmpComponent implements OnInit {
  public hobbies=[];
  constructor(private _es: DataService) {}
  

  ngOnInit() {
    this.hobbies=this._es.getHobbies();
  }

}
