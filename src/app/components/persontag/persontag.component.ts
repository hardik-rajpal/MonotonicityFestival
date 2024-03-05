import { Component, Input } from '@angular/core';
import { personTileSpec } from 'src/data/data';

@Component({
  selector: 'app-persontag',
  templateUrl: './persontag.component.html',
  styleUrls: ['./persontag.component.scss']
})
export class PersontagComponent {
  @Input() person!:personTileSpec;
}
