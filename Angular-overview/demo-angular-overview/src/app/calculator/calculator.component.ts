import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}
	output: number;
	first: number;
	second: number;
	operator = '+';

	calculate() {
		switch (this.operator) {
			case '+': this.output = this.first + this.second;
			break;
			case '-': this.output = this.first - this.second;
			break;
			case '*': this.output = this.first * this.second;
			break;
			case '/': this.output = this.first / this.second;
			break;

		}
	}
}
