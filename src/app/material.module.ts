import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatSidenavModule, MatProgressBarModule, MatSliderModule } from '@angular/material';

const modules = [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatSliderModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules],
})
export class MaterialModule { }