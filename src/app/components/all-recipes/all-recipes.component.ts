import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { SharedService } from 'src/app/shared/service/shared.service';


@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
 recipes :any[]=[];

  constructor(private service:SharedService) { }

  ngOnInit() {
    this.getRecipes();

  }

  getRecipes(){
    this.service.getAllRecipes().subscribe((res:any)=>{
      this.recipes=res



    }
    )
  }


}
