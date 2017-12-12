import { Hotel } from './hotel';
import { HotelFilter } from './hotel-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class HotelService {
    
    constructor(private http: HttpClient) {
    }

    hotelList: Hotel[] = [];
  
    findById(id: string): Observable<Hotel> {
        let url = 'http://www.angular.at/api/hotel'; 
        let params = { "id": id };
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
        return this.http.get<Hotel>(url, {params, headers});
    }
    
    load(filter: HotelFilter): void {
        this.find(filter).subscribe(
            result => {
                this.hotelList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: HotelFilter): Observable<Hotel[]> {
        let url = 'http://www.angular.at/api/hotel';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "city": filter.city,
        };

        return this.http.get<Hotel[]>(url, {params, headers});
    }

    save(entity: Hotel): Observable<Hotel> {
        let url = 'http://www.angular.at/api/hotel';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Hotel>(url, entity, {headers});
    }
}

