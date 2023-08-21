import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router
  ) {}
  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  public fazerLogin(){
    this.router.navigate(['/home']).then(r => r);
  }
}
