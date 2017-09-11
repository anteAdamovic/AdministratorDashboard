import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MdIconModule, MdListModule, MdSelectModule, MdCardModule, MdTableModule, MdPaginatorModule, MdSliderModule, MdInputModule, MdNativeDateModule, MdDatepickerModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { LogViewerComponent } from './components/log-viewer/log-viewer.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        MdIconModule,
        MdListModule,
        MdSelectModule,
        MdCardModule,
        MdTableModule,
        MdPaginatorModule,
        MdSliderModule,
        MdInputModule,
        MdNativeDateModule,
        MdDatepickerModule
    ],
    declarations: [
        DashboardComponent,
        LogViewerComponent
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }