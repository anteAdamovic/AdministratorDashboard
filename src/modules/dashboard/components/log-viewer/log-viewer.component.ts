import { Component } from '@angular/core';

import { LogsService } from './services/logs.service';
import { PaginationModel } from './models/pagination.model';
import { LogsDataSourceModel } from './models/logs-datasource.model';

@Component({
    selector: 'log-viewer',
    templateUrl: 'log-viewer.component.html',
    styleUrls: ['log-viewer.component.css'],
    providers: [LogsService]
})
export class LogViewerComponent {
    public displayedColumns = ['service', '@version', 'level', 'message', '@timestamp'];
    public pageSizes: number[] = [10, 25, 50, 100];
    public resultLength: number = 0;
    public dataSource: LogsDataSourceModel;
    public paginationModel: PaginationModel;
    public selectedMachine: any;
    public machines: any[] = [
        { name: 'PC-01', value: '01' },
        { name: 'PC-02', value: '02' },
        { name: 'PC-03', value: '03' },
        { name: 'PC-04', value: '04' }
    ];

    constructor(private logsService: LogsService) { }

    public formatDate(date: string): string {
        const d = new Date(date);
        let miliseconds = d.getUTCMilliseconds().toString();

        if (miliseconds.length === 1) {
            miliseconds = "00" + miliseconds;
        } else if (miliseconds.length === 2) {
            miliseconds = "0" + miliseconds;
        }

        return d.toLocaleDateString() + ' ' + d.toLocaleTimeString() + '.' + miliseconds;
    }

    public updateMachineName(event: any): void {
        this.paginationModel = new PaginationModel(
            event.value,
            "",
            (new Date(1)).toISOString(),
            (new Date()).toISOString(),
            null,
            10,
            0
        );
        this.fetchLogsData();
    }
    public updatePage(page: any): void {
        this.paginationModel.limit = page.pageSize;
        this.paginationModel.page = page.pageIndex;
        this.fetchLogsData();
    }

    public showMeData(data: any): void {
        console.log(data);
        console.log(this.selectedMachine);
        alert(JSON.stringify(data));
    }

    private fetchLogsData(): void {
        this.logsService.getLogs(this.paginationModel).subscribe(
            (result: any) => {
                console.log('Logs: ', result.logs);
                this.resultLength = result.length;
                this.dataSource = new LogsDataSourceModel(result.logs);
            }
        );
    }
}