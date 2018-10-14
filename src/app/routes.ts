import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TestPageComponent } from './components/test-page/test-page.component';

export const appRoutes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'test', component: TestPageComponent },
    { path: '*', redirectTo: '', pathMatch: 'full' }
];

export const components = [
    MainPageComponent,
    TestPageComponent
];