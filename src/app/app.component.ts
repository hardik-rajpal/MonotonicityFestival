import { Component } from '@angular/core';
import { data, dataSpec } from 'src/data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monotonicity-festival';
  data:dataSpec = data;
  observer = new IntersectionObserver((entriees)=>{
    entriees.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
      else{
        entry.target.classList.remove('show');
      }
    })
  })
  ngAfterViewInit(){
   let elems = document.querySelectorAll('.hidden')
    elems.forEach((elem)=>{
      this.observer.observe(elem);
    })
  }
}
