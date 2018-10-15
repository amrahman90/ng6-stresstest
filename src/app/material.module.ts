import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatSidenavModule, MatProgressBarModule, MatSliderModule, MatProgressSpinnerModule, MatBadgeModule, MatExpansionModule, MatIconModule } from '@angular/material';

const modules = [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatExpansionModule,
    MatIconModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules],
})
export class MaterialModule { }