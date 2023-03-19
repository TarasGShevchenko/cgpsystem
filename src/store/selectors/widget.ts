import { IWidget, RootState } from '../types'

export const widgetsSelector = (state: RootState): IWidget[] => state.widgets.data
export const activeWidgetSelector = (state: RootState): Pick<IWidget, 'id'> | null => state.widgets.active
