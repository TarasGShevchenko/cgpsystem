import { combineEpics } from 'redux-observable'

import app from './app'

export const rootEpics = combineEpics(...app)
