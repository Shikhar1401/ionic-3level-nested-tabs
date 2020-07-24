import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homefeed',
  templateUrl: './homefeed.page.html',
  styleUrls: ['./homefeed.page.scss'],
})
export class HomefeedPage implements OnInit {

  constructor(private router: Router) { 
    // this.router.events.subscribe((res) =>{
    //   console.log(res);
    //   console.log(this.router.url);
    // })
  }

  ngOnInit() {
  }
  clicktab(event: Event,tab: string){
    event.stopImmediatePropagation();
  }

}
