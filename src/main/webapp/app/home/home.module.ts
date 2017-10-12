import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PerseeSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';

@NgModule({
    imports: [
        PerseeSharedModule,
        RouterModule.forRoot([ HOME_ROUTE ], { useHash: true })
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PerseeHomeModule {}
