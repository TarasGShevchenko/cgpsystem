import React, { ReactElement } from 'react'
import { styled, Button } from '@mui/material'
import { useSelector } from 'react-redux'

import image from '../../assets/Rectangle.png'
import { widgetsSelector } from '../../store/selectors'
import { IWidget } from '../../store/types'
import { WidgetIdentifier } from '../../enums'

const FrameContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  margin: 15,
  overflowY: 'auto',
  minWidth: 623,
  width: '100%',
}))
const FrameImage = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 15,
  '& > img': {
    width: 540,
  },
}))
const FrameTitle = styled('div')(() => ({
  display: 'flex',
  textAlign: 'center',
  margin: 15,
  fontSize: 22,
  color: '#252A32',
  fontWeight: 700,
  lineHeight: '33px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  letterSpacing: '0.02em',
}))
const FrameContent = styled('div')(() => ({
  display: 'flex',
  textAlign: 'center',
  margin: 15,
  fontSize: 14,
  color: '#97AACD',
  fontWeight: 400,
  lineHeight: '21px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  letterSpacing: '0.02em',
}))

const getElementFromWidget = (widget: IWidget): ReactElement => {
  let Element
  switch (widget.type) {
    case WidgetIdentifier.image: {
      Element = (
        <FrameImage key={widget.id}>
          <img src={image} alt={'image'} />
        </FrameImage>
      )
      break
    }
    case WidgetIdentifier.headline: {
      Element = <FrameTitle key={widget.id}>{widget.content}</FrameTitle>
      break
    }
    case WidgetIdentifier.paragraph: {
      Element = <FrameContent key={widget.id}>{widget.content}</FrameContent>
      break
    }
    case WidgetIdentifier.button: {
      Element = (
        <Button key={widget.id} variant={'contained'}>
          {widget.content}
        </Button>
      )
      break
    }
  }
  return Element
}

export const Frame = () => {
  const widgets = useSelector(widgetsSelector)

  return (
    <FrameContainer>
      {!widgets.length ? <div>No item to display</div> : widgets.map((widget) => getElementFromWidget(widget))}
    </FrameContainer>
  )
}
