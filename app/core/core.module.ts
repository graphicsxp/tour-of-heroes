import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { TitleComponent } from './component/title.component';

//import services
import { UserService } from './service/user.service';

@NgModule({
    imports: [CommonModule],
    exports: [TitleComponent, HttpModule],
    declarations: [TitleComponent],
    providers: [UserService],
})
export class CoreModule { }
