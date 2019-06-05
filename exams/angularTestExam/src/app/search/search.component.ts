import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SearchServiceService} from '../search-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

     // resultsArray=[];
  constructor(private searchService :SearchServiceService) { }

  ngOnInit() {
  }

  getSearchResutls(){

    this.searchService.fetchSearchResult("The Shawshank Redemption",1);
  }



}
