import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getAll(): any[] {
    return [
      {'title':'NewsOne', 'article':'Some text of the article', 'source': 'SomeSource'},
      {'title':'NewsTwo', 'article':'Some text of the article', 'source': 'AnySource'},
      {'title':'NewsThree', 'article':'Some text of the article', 'source': 'SourceOfAny'}
    ]
  }

  constructor() { }
}
