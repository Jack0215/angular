import { Component, Input, OnInit } from '@angular/core';
import {Book} from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

 @Input() bookList:[]; 
 @Input() title:string;
 
}
