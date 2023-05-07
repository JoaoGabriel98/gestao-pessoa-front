import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PeopleService } from '../services/people.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-createpeople',
  templateUrl: './createpeople.component.html',
  styleUrls: ['./createpeople.component.css']
})
export class CreatepeopleComponent {
  people: any;

  personForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    birth_date: new FormControl('')
  });

  constructor(private peopleService: PeopleService, private route: Router) {

  }

  onSubmit() {
    this.peopleService.addPeople(this.personForm.value).subscribe(
      people => {
        this.people = people;
        this.route.navigate([''])
      }
    )
  }
}
