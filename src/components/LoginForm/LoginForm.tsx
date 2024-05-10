import * as React from 'react'

const LoginForm: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
    <form
      className="bg-white rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={() => {}}
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
          onChange={() => {}}
        />
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
          onChange={() => {}}
        />
        {/* Errors */}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={true}
        >
          Ingresar
        </button>
      </div>
    </form>
  </div>
  )
}

export default LoginForm
