import * as z from 'zod'

export const userSchema = z.object({
  user: z.string().min(1, 'El usuario no puede estar vacío'),
  password: z.string().min(5, 'La contraseña debe tener al menos 5 caracteres').max(20, 'La contraseña debe tener como máximo 20 caracteres')
})

export const initialValues = {
  user: '',
  password: ''
}
