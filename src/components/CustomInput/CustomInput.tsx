import React, { FC, useCallback, useState, ChangeEvent } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'

import { editingWidgetAction } from '../../store/actions'

interface IInputProps {
  id: string
  content: string
}

const InputItem = styled('input')(() => ({
  fontSize: 11,
  color: '#252A32',
  fontWeight: 400,
  lineHeight: '16px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  letterSpacing: '0.02em',

  width: '100%',
  height: 38,
  margin: '7.5px 10.5px',
  background: '#FFFFFF',
  border: '1px solid #E4E6F1',
  boxShadow:
    '0px 64px 64px rgba(211, 214, 215, 0.2), 0px 32px 32px rgba(211, 214, 215, 0.2), 0px 16px 16px rgba(211, 214, 215, 0.2), 0px 4px 4px rgba(211, 214, 215, 0.2), 0px 2px 2px rgba(211, 214, 215, 0.2)',
  borderRadius: 2,
  padding: 5,
}))
export const CustomInput: FC<IInputProps> = ({ content, id }) => {
  const [value, setValue] = useState<string>(content)
  const dispatch = useDispatch()
  const handleTyping = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const content = e.target.value
      setValue(content)
      dispatch(editingWidgetAction({ id, content }))
    },
    [dispatch, id],
  )
  return (
    <>
      <InputItem type={'text'} value={value} onChange={handleTyping} />
    </>
  )
}
