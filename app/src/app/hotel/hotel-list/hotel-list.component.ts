import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HotelFilter } from '../hotel-filter';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';

@Component({
    selector: 'hotel',
    templateUrl: 'hotel-list.component.html'
})
export class HotelListComponent implements OnInit {

    filter = new HotelFilter();
    selectedHotel: Hotel;

    get hotelList(): Hotel[] {
        return this.hotelService.hotelList;
    }

    constructor(private hotelService: HotelService) {
    }

    ngOnInit() {
    }

    search(): void {
        this.hotelService.load(this.filter);
    }

    select(selected: Hotel): void {
        this.selectedHotel = selected;
    }

}
