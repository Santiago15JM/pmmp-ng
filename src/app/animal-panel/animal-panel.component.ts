import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Summary } from 'src/models/stats.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-animal-panel',
  templateUrl: './animal-panel.component.html',
  styleUrls: ['./animal-panel.component.css']
})
export class AnimalPanelComponent {
  summaries!: Summary[]
  
  constructor(private Api: ApiService, private Auth: AuthService) { }

  ngOnInit() {
    const id = this.Auth.userId
    this.Api.getPublicStatus(id).subscribe((res: Summary[]) =>{
      this.summaries = res
    })

  }

}
