export class PaginationModel {
    public machineName: string;
    public dateFrom: string;
    public dateTo: string;
    public level: string; // INFO || ERROR
    public search: string; // phrase to search for
    public limit: number = 10;
    public page: number = 0;

    constructor(machineName: string, level: string, dateFrom: string, dateTo: string, search: string, limit?: number, page?: number) {
        this.machineName = machineName;
        this.level = level;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.search = search;
        this.limit = limit;
        this.page = page;
    }
}