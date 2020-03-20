import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
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
    required: "Field required",
    isgif: "Gif required",
    nametaken: "Name not available"
  }

  ngOnInit(): void {
    this.poneyForm = new FormGroup({
      name: new FormControl('', [ Validators.required ], [ this.isNameAvailable.bind(this) ]),
      img: new FormControl('', [ Validators.required, this.isGif ])
    })
  }

  isGif(control: FormControl): ValidationErrors | undefined {
    const regExp = new RegExp(/.+\.gif$/i)

    return regExp.test(control.value) ? undefined : {
      isgif: true
    }
  }

  isNameAvailable(control: FormControl): Observable<ValidationErrors | undefined> {
    return this.dataService.getPoniesByName(control.value).pipe(map(ponies => {
      return ponies && ponies.length ? {
        nametaken: true
      } : undefined
    }))
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
