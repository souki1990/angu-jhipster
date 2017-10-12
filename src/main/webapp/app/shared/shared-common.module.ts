import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    PerseeSharedLibsModule,
    JhiLanguageHelper,
    FindLanguageFromKeyPipe,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        PerseeSharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        JhiLanguageHelper,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'fr'
        },
    ],
    exports: [
        PerseeSharedLibsModule,
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class PerseeSharedCommonModule {}
