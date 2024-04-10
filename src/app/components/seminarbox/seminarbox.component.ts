import { Component, Input } from '@angular/core';
import { seminarSpec } from 'src/data/data';

@Component({
  selector: 'app-seminarbox',
  templateUrl: './seminarbox.component.html',
  styleUrls: ['./seminarbox.component.css']
})
export class SeminarboxComponent {
  @Input() seminar!:seminarSpec;
  copyToClipboard(text:string,elementID:string){
    navigator.clipboard.writeText(text);
    let icon = document.getElementById(elementID);
    if(icon){
      icon.className = "fa fa-check";
      setTimeout(() => {
        if(icon){
          icon.className = "fa fa-copy"
        }
      }, 700);
    }
  }
}
