import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
interface Database<T> {
    dataChange: BehaviorSubject<Array<T>>;
}
export declare class TableDataSourceAdaptor<T> extends DataSource<T> {
    protected readonly _database: Database<T>;
    protected readonly _filterChange: BehaviorSubject<string>;
    constructor(_database: Database<T>);
    filter: string;
    connect(): Observable<Array<T>>;
    disconnect(): void;
}
export {};
