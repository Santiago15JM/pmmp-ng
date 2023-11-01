import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-animal-panel',
  templateUrl: './animal-panel.component.html',
  styleUrls: ['./animal-panel.component.css']
})
export class AnimalPanelComponent {
  summaries!: any[]
  
  constructor(private Api: ApiService) { }

  ngOnInit() {
    this.summaries = this.Api.getSummaries()
  }


}
