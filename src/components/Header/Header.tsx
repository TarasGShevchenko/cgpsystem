import React, { FC } from 'react'
import { styled } from '@mui/material'

const HeaderContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '21px 31px',
  gap: 10,
}))
const HeaderTitle = styled('div')(() => ({
  fontSize: 18,
  fontWeight: 500,
  color: '#252A32',
  lineHeight: '27px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  letterSpacing: '0.02em',
}))
const HeaderDivider = styled('div')(() => ({
  position: 'absolute',
  width: '100%',
  height: 1,
  left: 0,
  top: 69,
  background: '#E4E6F1',
}))

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>CGP System Test</HeaderTitle>
      <HeaderDivider />
    </HeaderContainer>
  )
}
