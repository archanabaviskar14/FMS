import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ipropertybase } from 'src/app/model/ipropertybase';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  Today=new Date();
  City='';
  SearchCity='';
  SortbyParam = '';
  SortDirection='asc';

  properties:Array<Ipropertybase>;

  constructor(private houseservice:HouseService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
    }
    this.houseservice.getAllProperties(this.SellRent).subscribe(
        data => {
        this.properties = data;
        const newProperty = JSON.parse(localStorage.getItem('newProp'));

        if (newProperty.SellRent === this.SellRent) {
          this.properties = [newProperty, ...this.properties];
        }

        console.log(data);
      }, error => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }

  onCityFilter(){
    this.SearchCity=this.City;
  }
  onCityFilterClear(){
    this.SearchCity='';
    this.City='';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
