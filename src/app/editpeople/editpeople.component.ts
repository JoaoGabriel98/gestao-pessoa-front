import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PeopleService } from '../services/people.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-editpeople',
  templateUrl: './editpeople.component.html',
  styleUrls: ['./editpeople.component.css']
})
export class EditpeopleComponent {
  personForm!: FormGroup;
  person: any;
  id: any;

  constructor(private peopleService: PeopleService, private router: Router, private route: ActivatedRoute)
  { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.peopleService.findPeople(this.id).subscribe(
      (person) => {
        this.person = person
        this.personForm = new FormGroup({
          name: new FormControl(this.person.name),
          email: new FormControl(this.person.email),
          phone: new FormControl(this.person.phone),
          birth_date: new FormControl(this.person.birth_date)
        })
      }
    )
  }

  onSubmit() {
    this.peopleService.updatePeople(this.personForm.value, this.id).subscribe(
      (person) => {
        console.log("Alterado com sucesso")
        this.router.navigate([''])
      }
    )
    console.log(this.personForm.value)
  }
}
