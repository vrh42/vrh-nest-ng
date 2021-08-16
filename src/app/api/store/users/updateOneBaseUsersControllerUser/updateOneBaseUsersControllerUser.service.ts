/* tslint:disable:max-line-length */
/**
 * Все Работы Хороши API
 * 1.0.0
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../controllers/Users';

@Injectable()
export class UpdateOneBaseUsersControllerUserFormService {
  form: FormGroup;
  constructor(
    private usersService: UsersService,
  ) {
    this.form = new FormGroup({
      id: new FormControl(undefined, [Validators.required]),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.usersService.updateOneBaseUsersControllerUser(data);
  }
}