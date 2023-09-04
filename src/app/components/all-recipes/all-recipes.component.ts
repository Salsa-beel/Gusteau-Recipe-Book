import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes/services/recipes.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
 recipes :any[]=[];

  constructor(private service:RecipesService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(){
    this.service.getAllRecipes().subscribe((res:any)=>{
      this.recipes=res

      // console.log(res)

    }
    )
  }

}