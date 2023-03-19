import React from 'react'
import { styled } from '@mui/material'

import { WidgetButton } from '../WidgetButton'
import { WidgetIdentifier } from '../../enums'

const WidgetsAreaContainer = styled('div')(() => ({
  position: 'absolute',
  left: 0,
  top: 70,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: 24,
  borderRight: '1px solid #E4E6F1',
  height: 'calc(100% - 118px)',
}))
const WidgetsAreaInner = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const WidgetsArea = () => {
  return (
    <WidgetsAreaContainer>
      <WidgetsAreaInner>
        <WidgetButton type={WidgetIdentifier.headline} />
        <WidgetButton type={WidgetIdentifier.paragraph} />
      </WidgetsAreaInner>
      <WidgetsAreaInner>
        <WidgetButton type={WidgetIdentifier.image} />
        <WidgetButton type={WidgetIdentifier.button} />
      </WidgetsAreaInner>
    </WidgetsAreaContainer>
  )
}
