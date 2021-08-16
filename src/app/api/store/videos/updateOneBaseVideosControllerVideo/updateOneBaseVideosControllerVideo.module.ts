/* tslint:disable:max-line-length */
/**
 * Все Работы Хороши API
 * 1.0.0
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {VideosService} from '../../../controllers/Videos';
import {FormsSharedModule} from '../../forms-shared.module';
import {UpdateOneBaseVideosControllerVideoFormService} from './updateOneBaseVideosControllerVideo.service';

import {UpdateOneBaseVideosControllerVideoEffects} from './states/effects';
import {UpdateOneBaseVideosControllerVideoReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, UpdateOneBaseVideosControllerVideoReducer),
    NgrxEffectsModule.forFeature([UpdateOneBaseVideosControllerVideoEffects]),
  ],
  providers: [
    VideosService,
    UpdateOneBaseVideosControllerVideoFormService,
  ],
})
export class UpdateOneBaseVideosControllerVideoModule {}