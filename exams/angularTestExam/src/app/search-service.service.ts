import { Injectable } from '@angular/core';
import {resultObj} from './resultObj.model';
@Injectable({
  providedIn: 'root'
})
export class SearchServiceService { 
            url:string;
            apiKey:string;
            type:string;
            s:string;
            page:number;
            resultsArray:resultObj[];

  constructor() { 
this.url=" http://www.omdbapi.com/?";
this.apiKey="d777cf78";
        this.type="movie";
        this.page=1;

} 

      fetchSearchResult(s,page){

        fetch(this.url+"apikey="+this.apiKey+"&s="+s+"&type"+this.type+"&page"+page)
        .then(response=>response.json())
        .then(data=>{
          console.log(data.Search[0].Year)
          
        });
      }



      getresultsArray(){
        return this.resultsArray;
      }


}