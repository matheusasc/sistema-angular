import {Component, OnInit} from '@angular/core';
import {ElementRef, ViewChild} from "@angular/core";
import jsPDF from "jspdf";

@Component({
  selector: 'app-tela-ccaf',
  templateUrl: './tela-ccaf.component.html',
  styleUrls: ['./tela-ccaf.component.css']
})
export class TelaCcafComponent implements OnInit{

  @ViewChild('ccaf', {static: false}) el!: ElementRef;


  constructor() {
  }

  ngOnInit() {
  }

  gerarPDF(){
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("teste.pdf")
      }
    })
  }

}
