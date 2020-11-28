import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ZilaService{

    constructor(private http:HttpClient){}

    fetchapi():Observable<Object>{
        return this.http.get('/assets/data/zila.json');
    }

}