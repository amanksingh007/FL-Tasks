import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-release-info',
  templateUrl: './release-info.component.html',
  styleUrls: ['./release-info.component.css']
})
export class ReleaseInfoComponent implements OnInit {
  key:string=null;
  sub:string=null;
  subProjDetail:any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params =>{
      this.sub=params["sub"];
      if(!this.sub || this.sub.length==0) this.sub="default-section";
      this.key= this.route.snapshot.paramMap.get('key');
      this.loadSubProjInfo();
    })
  }
  viewSubProj(url){
    // this will update the query params
    this.router.navigate([],{queryParams:{sub:url}});
  }
  loadSubProjInfo(){
    // Write your logic here to fetch or display data for specitif subsection
    this.subProjDetail=this.key +"-->"+this.sub;
  }
}
