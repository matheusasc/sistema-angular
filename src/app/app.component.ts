import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'matheus';

  constructor(
    private router:Router
  ) {
  }

  ngOnInit() {
    this.router.navigate(['/login']).then(r => r);

    // this.router.navigate(["home"]);
  }
}
