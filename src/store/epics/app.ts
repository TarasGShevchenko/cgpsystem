import { isActionOf } from 'typesafe-actions'
import { filter, switchMap } from 'rxjs/operators'
import { EMPTY, of } from 'rxjs'

import { RootEpic } from '../types'
import {
  addWidgetAction,
  deleteWidgetAction,
  downWidgetAction,
  editingWidgetAction,
  initialized,
  setFromStorage,
  upWidgetAction,
} from '../actions'
import { widgetsSelector } from '../selectors'

export const GetWidgetsFromStorage: RootEpic = (action$) => {
  return action$.pipe(filter(isActionOf(initialized))).pipe(
    switchMap(() => {
      const widgets = localStorage.getItem('widgets')
      return widgets ? of(setFromStorage(JSON.parse(widgets))) : EMPTY
    }),
  )
}
export const AddWidgetsToStorage: RootEpic = (action$, state$) => {
  return action$
    .pipe(
      filter(isActionOf([addWidgetAction, upWidgetAction, downWidgetAction, deleteWidgetAction, editingWidgetAction])),
    )
    .pipe(
      switchMap(() => {
        const widgets = widgetsSelector(state$.value)
        localStorage.setItem('widgets', JSON.stringify(widgets))
        return EMPTY
      }),
    )
}

export default [GetWidgetsFromStorage, AddWidgetsToStorage]
