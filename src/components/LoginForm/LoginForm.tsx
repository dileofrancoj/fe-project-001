import type { FormikErrors } from 'formik'
import * as React from 'react'

export interface UserForm {
  user: string
  password: string
}

export interface LoginFormProps {
  handleSubmit: React.FormEventHandler<HTMLFormElement>
  handleChange: (params: unknown) => void
  errors: FormikErrors<UserForm> // errors.user. ....errors.password...
  isValidUser: boolean
}

// const LoginForm : React.FC<LoginFormProps> = ({ handleChange, handleSubmit, errors, isValidUser } => {

const LoginForm = ({ handleChange, handleSubmit, errors, isValidUser }: LoginFormProps): React.JSX.Element => {
  console.log('errors', errors)
  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
    <form
      className="bg-white rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Correo electrónico
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="user"
          type="text"
          name="user"
          placeholder="Username"
          onChange={handleChange}
        />
        {errors.user !== null && (
          <p className="text-red-500 text-xs italic">{errors.user}</p>
        )}
        {/* Errors */}
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Contraseña
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          placeholder="******************"
          onChange={handleChange}
        />
        {errors.password !== null && (
          <p className="text-red-500 text-xs italic">{errors.password}</p>
        )}
        {/* Errors */}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Ingresar
        </button>
      </div>
    </form>
  </div>
  )
}

export default LoginForm
