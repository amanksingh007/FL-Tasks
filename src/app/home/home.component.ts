import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  sub:string;
  ngOnInit(): void {
    this.route.queryParams.subscribe( params =>{
      this.sub=params["sub"];
      //alert(this.sub);
    })
  }

  ch(url){
    this.router.navigate([],{queryParams:{sub:url}, relativeTo:this.route});
  }

}
