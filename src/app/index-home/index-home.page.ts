import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.page.html',
  styleUrls: ['./index-home.page.scss'],
})
export class IndexHomePage implements OnInit {
  userType: string;

  constructor(private route: ActivatedRoute,
      
    private router: Router) { 

     
    }

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.userType=params.userType}
  );

  }

}
