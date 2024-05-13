import { useFormik } from 'formik'
// @ts-expect-error .d.ts
import { useAxios, useThrottle } from 'lvlup-react-hooks'
import * as React from 'react'

import LoginForm, { type UserForm } from '../components/LoginForm/LoginForm'
import { authInstance } from '../config/axios'
import { useUser } from '../contexts/User/useUser'
import { initialValues, userSchema } from './schemas'

export const Login = (): React.JSX.Element => {
  const { logout, user, setUser } = useUser()
  console.log('user', user)
  const { fetcher } = useAxios({
    instance: authInstance,
    enabled: false,
    method: 'POST',
    url: '/auth'
  })
 
  const onSubmit = async (values: UserForm): Promise<void> => {
    const response = await fetcher({
      data: {
        user: values.user,
        password: values.password
      }
    })
    console.log('response', response)
    setUser({ jwt: response.jwt })
    // state...
  }
  const throttledSubmit = useThrottle(onSubmit, 500)

  const { handleSubmit, handleChange, errors } = useFormik({ 
    initialValues,
    onSubmit: (values) => throttledSubmit(values),
    // validationSchema: userSchema
    validate: (values) => {
      const result = userSchema.safeParse(values)
      if (result.success) {
        // el usuario es valido
        // eslint-disable-next-line no-useless-return
        return
      }
      const errors: Record<string, string> = {}
      result.error.issues.forEach((error) => {
        errors[error.path[0]] = error.message
      })
      // setValidUser(false)
      return errors

      // setear el state de usuario valido
      // llenar el objeto errors
    }
   })

  return (
    // onSubmit, onChange, error  (cliente -> formik + zod), isValidUser (axios (node))
    <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} isValidUser={false} />
  ) 
}
