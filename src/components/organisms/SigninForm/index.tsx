'use client'

import { Box, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

export type SigninFormData = {
  username: string
  password: string
}

interface SigninFormProps {
  /**
   * サインインボタンを押したときのイベントハンドラ
   */
  onSignin?: (username: string, password: string) => void
}

/**
 * サインインフォーム
 */
const SigninForm = ({ onSignin }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>()

  const onSubmit = (data: SigninFormData) => {
    const { username, password } = data

    onSignin && onSignin(username, password)
  }

  return (
    <Box>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '250px',
          margin: '1rem',
        }}
      >
        <TextField id='outlined-username-input' label='Username' type='text' />
        <TextField
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
        />
        <Button variant='contained'>Singin</Button>
      </form>
    </Box>
  )
}

export default SigninForm
