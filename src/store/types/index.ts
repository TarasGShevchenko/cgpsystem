import { ActionType } from 'typesafe-actions'
import { Epic } from 'redux-observable'

import { WidgetIdentifier } from '../../enums'
import * as actions from '../actions'
import { WidgetsState } from '../reducers/widget'

export type RootEpic = Epic<ActionTypes, ActionTypes, RootState>
export type ActionTypes = ActionType<typeof actions>

export type RootState = {
  widgets: WidgetsState
}

export interface IWidget {
  type: WidgetIdentifier
  id: string
  content: string
}
