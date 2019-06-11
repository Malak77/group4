import { Injectable } from '@angular/core';
import { resultObj } from './resultObj.model';
@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  url: string;
  apiKey: string;
  startIndex: number;

  resultsArray: resultObj[];

  constructor() {
    this.url = "https://www.googleapis.com/books/v1/volumes?";
    this.apiKey = "AIzaSyBQx_8AIKCiQdYGcIR2cvlo3ljjOq5bDNc";
    this.startIndex =0;

  }

   async fetchSearchResult(s) {
   await fetch(this.url + "key=" + this.apiKey + "&q=" + s + "&startIndex=" + this.startIndex)
      .then(response => response.json())
      .then(data => {
       this.resultsArray=[];
        if(data.items){
        for(let i=0;i<data.items.length;i++){
             
         // console.log(data.items[i].volumeInfo.title)
         // console.log(data.items[i].volumeInfo.previewLink)
         // console.log(data.items[i].volumeInfo.authors)
            let ins =new resultObj(data.items[i].volumeInfo.title,data.items[i].volumeInfo.authors,data.items[i].volumeInfo.previewLink);
            this.resultsArray.push(ins);
            
        }
       this.startIndex++;
      }
      else { this.resultsArray=[];
   }
      });
  }



  getresultsArray() {
         return this.resultsArray;
  }



  setStartIndex(){
    this.startIndex =0;
  }

  
}