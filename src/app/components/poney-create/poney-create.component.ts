import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'adi-poney-create',
  templateUrl: './poney-create.component.html',
  styleUrls: ['./poney-create.component.scss']
})
export class PoneyCreateComponent implements OnInit {

  poneyForm: FormGroup
  errorMessages: Object = {
    required: "Field required"
  }

  ngOnInit(): void {
    this.poneyForm = new FormGroup({
      name: new FormControl('', [ Validators.required ]),
      img: new FormControl('', [ Validators.required ])
    })
  }

  handleSubmit() {
    this.dataService.savePoney({
      distance: 0,
      ...this.poneyForm.value
    }).subscribe(poney => {
      this.router.navigateByUrl('/race-create')
    })
  }

  constructor(private dataService: DataService, private router: Router) { }

}
