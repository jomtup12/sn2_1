import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

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
  area1: any;
  sec2Form: FormGroup
  s2Data: any[] = [];
  currentPage: any;
  constructor(private fb: FormBuilder) {

    this.currentPage = "1";
  }


  ngOnInit() {
    this.sec2Form = this.fb.group({
      's1': '',
      's2': null,
      'cPage': null,
      's2Data': this.fb.array([]),

    });
  }

  pushToArray(length: any) {

    const s2 = this.sec2Form.get('s2Data');
    let isNegative = false;
    console.log(s2.value.length);
    if (length > s2.value.length) {
      length = length - s2.value.length
    } else if (length < s2.value.length) {
      length = s2.value.length - length
      isNegative = true;
    }
    for (let i = 0; i < length; i++) {
      if (!isNegative) {
        (s2 as FormArray).push(this.fb.group({
          's2_1': '',
          's2_2': '',
          's2_3': '',
          's2_4': this.fb.array([]),
          's2_5': '',
          's2_6': '',

        }));
      }
      else {
        (s2 as FormArray).removeAt(s2.value.length - 1);
      }
    }
    this.sec2Form.patchValue({
      cPage: 1,
    });

  }

  pushToSubArray(index: number, length: any) {
    const s2Sub = this.sec2Form.get(['s2Data', index, 's2_4']);
    let isNegative = false;

    if (length > s2Sub.value.length) {
      length = length - s2Sub.value.length
    } else if (length < s2Sub.value.length) {
      length = s2Sub.value.length - length
      isNegative = true;
    }
    for (let i = 0; i < length; i++) {
      if (!isNegative) {
        (s2Sub as FormArray).push(this.fb.group({
          's3_1': '',
          's3_2': '',
        }));
      } else {
        (s2Sub as FormArray).removeAt(s2Sub.value.length - 1);
      }
    }

  }

  changeMenus1(i: any) {
    this.sec2Form.patchValue({
      cPage: i + 2,
    });
  }

  resetForm() {
    this.sec2Form.reset()
    this.sec2Form.patchValue({
      s1: false,
    });
  }
}
