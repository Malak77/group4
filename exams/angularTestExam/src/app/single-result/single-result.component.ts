import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css']
})
export class SingleResultComponent implements OnInit {

  @Input() title:string;
  @Input() authors:string[];
  @Input() previewLink:string;


  constructor() { 
  }

  ngOnInit() {
  }

}
