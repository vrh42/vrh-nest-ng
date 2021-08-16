/* tslint:disable:max-line-length */
/**
 * Все Работы Хороши API
 * 1.0.0
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {RoomsService} from '../../../controllers/Rooms';
import {FormsSharedModule} from '../../forms-shared.module';
import {GetOneBaseRoomsControllerRoomFormService} from './getOneBaseRoomsControllerRoom.service';

import {GetOneBaseRoomsControllerRoomEffects} from './states/effects';
import {GetOneBaseRoomsControllerRoomReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, GetOneBaseRoomsControllerRoomReducer),
    NgrxEffectsModule.forFeature([GetOneBaseRoomsControllerRoomEffects]),
  ],
  providers: [
    RoomsService,
    GetOneBaseRoomsControllerRoomFormService,
  ],
})
export class GetOneBaseRoomsControllerRoomModule {}
