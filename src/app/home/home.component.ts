import {Component, OnInit} from '@angular/core';
import {ElementRef, ViewChild} from "@angular/core";
import * as jspdf from "jspdf";
import jsPDF from "jspdf";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @ViewChild('pdf', {static: false}) el!: ElementRef;

  constructor() {
  }

  ngOnInit() {

  }

}
