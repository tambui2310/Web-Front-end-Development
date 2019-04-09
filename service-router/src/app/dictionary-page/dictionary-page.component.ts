import { Component, OnInit } from '@angular/core';
import { DictionaryService, IWord } from '../dictionary.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})

@Injectable()
export class DictionaryPageComponent implements OnInit {
  listWord: IWord[] = [];
  constructor(
    private dictionaryService: DictionaryService,
    ) { }

  ngOnInit() {
    this.listWord = this.dictionaryService.getAll();
  }

}