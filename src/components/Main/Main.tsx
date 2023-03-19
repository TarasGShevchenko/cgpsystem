import React, { FC } from 'react'
import { styled } from '@mui/material'

import { WorkingGrid } from '../WorkingGrid'
import { Frame } from '../Frame'

const MainContent = styled('div')(() => ({
  position: 'absolute',
  left: 270,
  top: 70,
  display: 'flex',
  height: 'calc(100% - 70px)',
}))

export const Main: FC = () => {
  return (
    <MainContent>
      <WorkingGrid />
      <Frame />
    </MainContent>
  )
}
