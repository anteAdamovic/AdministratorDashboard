import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MdIconModule, MdListModule, MdSelectModule, MdCardModule, MdTableModule, MdPaginatorModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { LogViewerComponent } from './components/log-viewer/log-viewer.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        HttpModule,
        MdIconModule,
        MdListModule,
        MdSelectModule,
        MdCardModule,
        MdTableModule,
        MdPaginatorModule
    ],
    declarations: [
        DashboardComponent,
        LogViewerComponent
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }