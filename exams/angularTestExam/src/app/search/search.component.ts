import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SearchServiceService} from '../search-service.service';

import { resultObj } from '../resultObj.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInput:string;           
  booksArray:resultObj[];
  finishedData:boolean;

  constructor(private searchService :SearchServiceService) { 
    this.searchInput="";
    this.finishedData=false;
    this.booksArray=[];
  }

  ngOnInit() {
  }

  async getSearchResutls(myForm){
    
    this.searchInput=myForm.value.search;
    this.searchService.setStartIndex();
    this.booksArray=[];
    this.finishedData=false;
    await this.searchService.fetchSearchResult(this.searchInput);
    
   this.getBooks();
  }

  async loadMoreBooks(){
    await this.searchService.fetchSearchResult(this.searchInput);
    this.getBooks();
    
  }

  getBooks(){
    if(this.searchService.getresultsArray().length>0)
    this.booksArray=this.booksArray.concat(this.searchService.getresultsArray()); 
    else {
      this.finishedData=true;
    }
  }


}
