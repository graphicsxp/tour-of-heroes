import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ContactComponent } from './component/contact.component';
import { AwesomePipe } from './pipe/awesome.pipe';
import { HighlightDirective } from './directive/highlight.directive';

import { ContactService } from './service/contact.service';

import contactRoutes from './contact.routing';

@NgModule({
    imports: [SharedModule, contactRoutes],
    exports: [ContactComponent],
    declarations: [ContactComponent, AwesomePipe, HighlightDirective],
    providers: [ContactService],
})
export default class ContactModule { }
