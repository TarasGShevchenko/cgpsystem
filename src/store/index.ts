import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { ActionTypes, RootState } from './types'
import { rootEpics } from './epics'

import { rootReducer } from './reducers'

const epicMiddleware = createEpicMiddleware<ActionTypes, ActionTypes, RootState>()

const store = createStore(rootReducer, compose(applyMiddleware(epicMiddleware)))
epicMiddleware.run(rootEpics)

export default store
