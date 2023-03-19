import React, { DragEvent, FC, useCallback, useMemo } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { capitalize } from 'lodash'

import { addWidgetAction } from '../../store/actions'
import { WidgetIdentifier } from '../../enums'
import { getIcon } from '../../utils'

interface WidgetButtonProps {
  type: WidgetIdentifier
}

const Button = styled('div')(() => ({
  display: 'flex',
  flex: '1 0 100px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 100,
  height: 83,
  background: '#F6F9FE',
  borderRadius: 6,
  gap: 10,
  margin: 5,
  fontSize: 12,
  zIndex: 99999,
}))

const ButtonText = styled('div')(() => ({
  fontSize: 12,
  color: '#252A32',
  fontWeight: 400,
  lineHeight: '18px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  letterSpacing: '0.02em',
}))

export const WidgetButton: FC<WidgetButtonProps> = ({ type }) => {
  const dispatch = useDispatch()

  const src = useMemo(() => getIcon(type), [type])

  const handleClick = useCallback(() => {
    dispatch(addWidgetAction(type))
  }, [dispatch, type])

  const onDragEnd = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      if (event.clientX > 270 && event.clientX < 828 && event.clientY > 70 && event.clientY < window.innerHeight) {
        dispatch(addWidgetAction(type))
      }
    },
    [dispatch, type],
  )

  return (
    <Button onClick={handleClick} draggable={true} onDragEnd={onDragEnd}>
      <img src={src} alt={type} />
      <ButtonText>{capitalize(type)}</ButtonText>
    </Button>
  )
}
