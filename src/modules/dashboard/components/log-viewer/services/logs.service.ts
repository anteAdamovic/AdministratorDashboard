import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/rx';

import { PaginationModel } from '../models/pagination.model';

@Injectable()
export class LogsService {

    constructor(private http: Http) { }

    public getLogs(model: PaginationModel): Observable<any> {
        console.log('Pagination data: ', model);
        return this.http.get('./assets/logs.json')
            .map((response: any) => JSON.parse(response._body))
            .map(
                (logs: any[]) => {
                    const dateFrom = new Date(model.dateFrom);
                    const dateTo = new Date(model.dateTo);
                    const level = model.level;
                    const search = model.search;
                    const limit = model.limit;
                    const page = model.page;
                    const filteredLogs: any[] = [];

                    logs.forEach(
                        (log: any) => {
                            const logTimestamp: Date = new Date(log["@timestamp"]);
                            if (logTimestamp > dateFrom && logTimestamp < dateTo) {
                                if (log.level === level) {
                                    if (search) {
                                        if (
                                            log["@timestamp"].find(search) > 0 ||
                                            log["@version"].find(search) > 0 ||
                                            log["message"].find(search) > 0 ||
                                            log["thread_name"].find(search) > 0 ||
                                            log["logger_name"].find(search) > 0 ||
                                            log["level"].find(search) > 0 ||
                                            log["level_value"].find(search) > 0 ||
                                            log["service"].find(search) > 0
                                        ) {
                                            filteredLogs.push(log);
                                        }
                                    } else {
                                        filteredLogs.push(log);
                                    }
                                }
                            }
                        }
                    );
                    return {
                        length: filteredLogs.length,
                        logs: filteredLogs.slice(page * limit, (page * limit) + limit)
                    };
                }
            );
    }
}