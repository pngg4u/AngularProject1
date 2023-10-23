import { Component, OnInit } from '@angular/core';
import { Recipee } from '../recipe.model';

@Component({
  selector: 'app-recipee-list',
  templateUrl: './recipee-list.component.html',
  styleUrls: ['./recipee-list.component.css']
})
export class RecipeeListComponent implements OnInit {
  recipes: Recipee[] = [
    new Recipee ('Test Recipe 1', 'This is for Test Recipe 1 Only', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg'
    ),
    new Recipee ('Test Recipe 2', 'This is for Test Recipe 2 Only', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg'
    )
  ];

  constructor(){
    
  }

  ngOnInit() {
    
  }
}
