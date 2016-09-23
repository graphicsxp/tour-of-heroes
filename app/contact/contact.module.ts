import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ContactComponent } from './component/contact.component';


import { ContactService } from './service/contact.service';

import contactRoutes from './contact.routing';

@NgModule({
    imports: [SharedModule, contactRoutes],
    exports: [ContactComponent],
    declarations: [ContactComponent],
    providers: [],
})
export default class ContactModule { }
