import { Component, OnInit, Input } from '@angular/core';
import {DescriptionLinkBuilderService} from '../services/description-link-builder/description-link-builder.service'

@Component({
  selector: 'app-problem-description',
  templateUrl: './problem-description.component.html',
  styleUrls: ['./problem-description.component.css']
})
export class ProblemDescriptionComponent implements OnInit {
  @Input() problemNumber: number;
  public link: string;
  public description: string;
  
  constructor(private _linkBuilderService: DescriptionLinkBuilderService) {
  }

  ngOnInit() {
    this.link = this._linkBuilderService.buildLink(this.problemNumber);
    this.description = "Problem " +  this.problemNumber;
  }

}
