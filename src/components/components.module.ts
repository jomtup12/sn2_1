import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Sn2_1sec1Component } from './sn2-1sec1/sn2-1sec1';
import { Sec2_1sec4Component } from './sec2-1sec4/sec2-1sec4';
import { Sn2_1sec2Component } from './sn2-1sec2/sn2-1sec2';
@NgModule({
	declarations: [
	Sn2_1sec1Component,
    Sec2_1sec4Component,
    Sn2_1sec2Component],
	imports: [IonicModule],
	exports: [Sn2_1sec1Component,
    Sec2_1sec4Component,
    Sn2_1sec2Component]
})
export class ComponentsModule {}
