import { Component } from '@angular/core';
import { FormGroup,FormBuilder,FormArray } from '@angular/forms';

/**
 * Generated class for the Sn2_1sec2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sn2-1sec2',
  templateUrl: 'sn2-1sec2.html'
})
export class Sn2_1sec2Component {
  area1 :any;
  sec2Form : FormGroup
  s2Data:any[] = [];
  currentPage:any;
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.currentPage=1;
  }

  createForm(){
    this.sec2Form = this.fb.group({
      's1': '',
      's2': null,
      'currentPage': 1,
      's2Data': this.fb.array([]),

    });
  }


  pushToArray(length:any){

    const s2 = this.sec2Form.get('s2Data');
    for(let i=0;i<length;i++){
    (s2 as FormArray).push(this.fb.group({
      's2_1':'',
      's2_2':'',
      's2_3':'',
      's2_4':'',
      's2_5':'',

    }));
  }
  }

  changeMenus1(i:any){
    this.sec2Form.patchValue({
      currentPage : i+1,
    });
  }
}
