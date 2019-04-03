import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pet',
	templateUrl: './pet.component.html',
	styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}
	petName = 'Viễn Hồ';
	petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';

	updatePetName(){
		this.petName = name;
	}

	updatePetImage(){
		this.petImage = image;
	}
}
