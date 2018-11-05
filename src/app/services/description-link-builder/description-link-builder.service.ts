import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescriptionLinkBuilderService {
  constructor() { }

  public buildLink(problemNumber: number): string {
    // No need to be dynamic or read from a file; fully intended to be a static link, done intentionally
    const baseLink: string = "https://adventofcode.com/2017/day/"
    return baseLink + problemNumber.toString();
  }
}
