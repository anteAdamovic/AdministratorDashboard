import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Rx';

export class LogsDataSourceModel extends DataSource<any> {

    constructor(private data: any[]) {
        super();
    }

    public connect(): Observable<any> {
        return Observable.of(this.data);
    }

    public disconnect(): void { }
}