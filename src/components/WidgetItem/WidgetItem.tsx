import React, { FC, useCallback, MouseEvent, useMemo } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { capitalize } from 'lodash'

import {
  copyWidgetAction,
  deleteWidgetAction,
  downWidgetAction,
  selectWidgetAction,
  upWidgetAction,
} from '../../store/actions'
import { activeWidgetSelector } from '../../store/selectors'
import { ReactComponent as ArrowTop } from '../../assets/arrow-top.svg'
import { ReactComponent as ArrowBottom } from '../../assets/arrow-bottom.svg'
import { ReactComponent as Copy } from '../../assets/copy.svg'
import { ReactComponent as Trash } from '../../assets/trash.svg'
import { CustomInput } from '../CustomInput'
import { IWidget } from '../../store/types'
import { getIcon } from '../../utils'

const WidgetItemContainer = styled('div')<{ current: boolean }>(({ current }) => ({
  position: 'relative',
  minWidth: 478,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '15px 10px',
  gap: 10,
  margin: '7.5px 30px',
  background: '#FFFFFF',
  borderRadius: 6,
  ...(current && {
    background: '#D9E7FF',
  }),
}))
const WidgetItemText = styled('div')(() => ({
  fontSize: 12,
  color: '#252A32',
  fontWeight: 400,
  lineHeight: '18px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  letterSpacing: '0.02em',
}))
const WidgetActions = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  right: 7.5,
  top: -27,
}))
const ArrowsActions = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: 53,
  height: 27,
  background: '#449CF4',
  borderRadius: '3px 3px 0px 0px',
  margin: '0 2.5px',
  cursor: 'pointer',
}))
const PositionActions = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: 53,
  height: 27,
  background: '#68C2E9',
  borderRadius: '3px 3px 0px 0px',
  margin: '0 2.5px',
  cursor: 'pointer',
}))

export const WidgetItem: FC<IWidget> = ({ id, content, type }) => {
  const active = useSelector(activeWidgetSelector)
  const dispatch = useDispatch()

  const current = active?.id === id

  const src = useMemo(() => getIcon(type), [type])

  const selectWidget = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const { id } = e.currentTarget.dataset
      id && dispatch(selectWidgetAction({ id }))
    },
    [dispatch],
  )

  const upWidget = useCallback(
    (e: MouseEvent<SVGSVGElement>) => {
      const { id } = e.currentTarget.dataset
      id && dispatch(upWidgetAction({ id }))
    },
    [dispatch],
  )

  const downWidget = useCallback(
    (e: MouseEvent<SVGSVGElement>) => {
      const { id } = e.currentTarget.dataset
      id && dispatch(downWidgetAction({ id }))
    },
    [dispatch],
  )

  const copyWidget = useCallback(
    (e: MouseEvent<SVGSVGElement>) => {
      const { id } = e.currentTarget.dataset
      id && dispatch(copyWidgetAction({ id }))
    },
    [dispatch],
  )

  const deleteWidget = useCallback(
    (e: MouseEvent<SVGSVGElement>) => {
      const { id } = e.currentTarget.dataset
      id && dispatch(deleteWidgetAction({ id }))
    },
    [dispatch],
  )

  return (
    <WidgetItemContainer current={current} onClick={selectWidget} data-id={id}>
      <img src={src} alt={type} />
      <WidgetItemText>{capitalize(type)}</WidgetItemText>
      {current && !!content.length && <CustomInput content={content} id={id} />}
      {current && (
        <WidgetActions>
          <ArrowsActions>
            <ArrowTop onClick={upWidget} data-id={id} />
            <ArrowBottom onClick={downWidget} data-id={id} />
          </ArrowsActions>
          <PositionActions>
            <Copy onClick={copyWidget} data-id={id} />
            <Trash onClick={deleteWidget} data-id={id} />
          </PositionActions>
        </WidgetActions>
      )}
    </WidgetItemContainer>
  )
}
