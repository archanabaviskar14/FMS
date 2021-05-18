import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HouseService } from 'src/app/services/house.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';


@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  propertyId: any;
  property=new Property();
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(public router:Router,
              public aroute:ActivatedRoute,
              public houseservice:HouseService) { }

  ngOnInit(): void {
   this.propertyId= this.aroute.snapshot.params['id'];

   this.aroute.params.subscribe(
    (params) => {
      this.propertyId = +params['id'];
      this.houseservice.getProperty(this.propertyId).subscribe(
        (data:Property)=>{
          this.property=data;
        }
      )
    }
  );
//
this.galleryOptions = [
  {
    width: '100%',
    height: '465px',
    thumbnailsColumns: 4,
    imageAnimation: NgxGalleryAnimation.Slide
  },
  
];

this.galleryImages = [
  {
    small: 'assets/images/i1.jpeg',
    medium: 'assets/images/i1.jpeg',
    big: 'assets/images/i1.jpeg'
  },
  {
    small: 'assets/images/i2.jpeg',
    medium: 'assets/images/i2.jpeg',
    big: 'assets/images/i2.jpeg'
  },
  {
    small: 'assets/images/i3.jpeg',
    medium: 'assets/images/i3.jpeg',
    big: 'assets/images/i3.jpeg'
  },{
    small: 'assets/images/i4.jpeg',
    medium: 'assets/images/i4.jpeg',
    big: 'assets/images/i4.jpeg'
  },
  {
    small: 'assets/images/i5.jpeg',
    medium: 'assets/images/i5.jpeg',
    big: 'assets/images/i5.jpeg'
  }
];
}


  }
  
  

