/* tslint:disable:max-line-length */
/**
 * Все Работы Хороши API
 * 1.0.0
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {of} from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import {RoomsService} from '../../../../controllers/Rooms';
import * as actions from './actions';

@Injectable()
export class DeleteOneBaseRoomsControllerRoomEffects {
  @Effect()
  DeleteOneBaseRoomsControllerRoom = this.storeActions.pipe(
    ofType<actions.Start>(actions.Actions.START),
    switchMap((action: actions.Start) => this.roomsService.deleteOneBaseRoomsControllerRoom(action.payload)
      .pipe(
        map(result => new actions.Success(result)),
        catchError((error: HttpErrorResponse) => of(new actions.Error(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private roomsService: RoomsService,
  ) {}
}
