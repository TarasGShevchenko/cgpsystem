import React, { DragEvent, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material'

import { WidgetItem } from '../WidgetItem'
import { widgetsSelector } from '../../store/selectors'

const WorkingGridContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  width: '100%',
  minWidth: 538,
  maxWidth: 558,
  padding: '17.5px 0',
  background: '#F5F5FC',
  overflowY: 'auto',
}))

export const WorkingGrid = () => {
  const widgets = useSelector(widgetsSelector)

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.currentTarget.style.background = '#dedee5'
  }, [])

  const onDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.currentTarget.style.background = '#F5F5FC'
  }, [])

  const onDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.currentTarget.style.background = '#F5F5FC'
  }, [])

  return (
    <WorkingGridContainer onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
      {!widgets.length ? (
        <div>No item to display</div>
      ) : (
        widgets.map(({ id, type, content }) => <WidgetItem key={id} type={type} id={id} content={content} />)
      )}
    </WorkingGridContainer>
  )
}
