import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'hotel-edit',
  templateUrl: './hotel-edit.component.html'
})
export class HotelEditComponent implements OnInit {

    id: string;
    hotel: Hotel;
    errors: string;

    constructor(
        private route: ActivatedRoute,
        private hotelService: HotelService) { 
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    if (id === 'new') return of(new Hotel());
                    return this.hotelService.findById(id)
                })
            )
            .subscribe(
                hotel => { 
                    this.hotel = hotel; 
                    this.errors = ''; 
                },
                err => { 
                    this.errors = 'Error loading'; 
                }
            );
    }

    save() {
        this.hotelService.save(this.hotel).subscribe(
            hotel => { 
                this.hotel = hotel; 
                this.errors = 'Save was successful!'; 
            },
            err => { 
                this.errors = 'Error saving'; 
            }
        );
    }
}