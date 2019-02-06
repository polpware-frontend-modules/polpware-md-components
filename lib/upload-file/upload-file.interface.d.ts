import { HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IUploadFileEvent {
    fileName: string;
    fileSize?: number;
    eventType: HttpEventType;
    percent?: number;
    body?: any;
}
export interface IUploadFileService {
    upload(file: File, url: string, makeData: (file: File) => FormData): Observable<IUploadFileEvent>;
}
