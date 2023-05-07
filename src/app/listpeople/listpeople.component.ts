import { Component } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-listpeople',
  templateUrl: './listpeople.component.html',
  styleUrls: ['./listpeople.component.css']
})
export class ListpeopleComponent {

  people: any;

  constructor(private peopleService: PeopleService){}

  ngOnInit() {
    this.PeopleList()
  }

  PeopleList() {
    this.people = this.peopleService.listPeople().subscribe(
      people => {
        this.people = people
        console.log(this.people)
      }
    )
  }

  deletePerson(id: any) {
    this.peopleService.deletePeople(id).subscribe(people => {
      window.location.reload()
    })
  }

}
