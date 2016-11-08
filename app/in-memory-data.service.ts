import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let Languages = [
        {"id" : 1,"name" : "Java"},
        {"id" : 2,"name" : "HTML"},
        {"id" : 3,"name" : "Ruby On Rails"},
        {"id" : 4,"name" : "CSS"},
        {"id" : 5,"name" : "Angular 2"},
        {"id" : 6,"name" : "Node"},
        {"id" : 7,"name" : "Express"}
    ];

    return {languages};
  }
}
