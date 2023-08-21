import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import {Usuario} from "./usuario";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public loginForm: FormGroup;

  constructor() {}
  ngOnInit() {}

}
