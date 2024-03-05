import { Component, Input } from '@angular/core';
import { seminarSpec } from 'src/data/data';

@Component({
  selector: 'app-seminarbox',
  templateUrl: './seminarbox.component.html',
  styleUrls: ['./seminarbox.component.scss']
})
export class SeminarboxComponent {
  @Input() seminar!:seminarSpec;
}
