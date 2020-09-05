import { HttpHeaders } from '@angular/common/http';
export class Utils {
    constructor(){}
    public setHeaders(header: HttpHeaders){
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
    }
}
