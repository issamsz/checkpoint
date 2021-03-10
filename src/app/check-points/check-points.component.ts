import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-points',
  templateUrl: './check-points.component.html',
  styleUrls: ['./check-points.component.css']
})
export class CheckPointsComponent implements OnInit {

 color='';

 constructor() { }

  ngOnInit(): void {
  }

maCouleur = (couleur: any): void  => {
this.color= couleur;
}

changecolor = (): void  => {

this.color= '';

}


}
