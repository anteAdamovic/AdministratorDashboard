import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
    MdButtonModule, 
    MdCheckboxModule, 
    MdCardModule, 
    MdInputModule, 
    MdIconModule,
    MdProgressSpinnerModule,
    MD_PLACEHOLDER_GLOBAL_OPTIONS 
} from '@angular/material';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MdButtonModule, 
        MdCheckboxModule, 
        MdCardModule, 
        MdInputModule, 
        MdIconModule,
        MdProgressSpinnerModule
    ],
    providers: [
        LoginService,
        { provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'never' } }
    ],
    declarations: [LoginComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }