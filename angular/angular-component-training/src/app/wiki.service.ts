import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikiService {
  constructor() {}

  search(searchTerm: string) {
    return 'Search Results' + searchTerm;
  }
}
