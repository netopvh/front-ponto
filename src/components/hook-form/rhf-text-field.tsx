import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface IRHFTextField {
  name: string
  label: string
  helperText?: string
  type?: 'text' | 'number'
}

const RHFTextField = ({ name, label, helperText, type = 'text', ...other }: IRHFTextField) => {
  const { control } = useFormContext()
  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          label={label}
          error={!!error}
          value={type === 'number' && field.value === 0 ? '' : field.value}
          onChange={(event) => {
            if (type === 'number') {
              field.onChange(Number(event.target.value))
            } else {
              field.onChange(event.target.value)
            }
          }}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
      name={name}
      control={control}
    />
  )
}

export default RHFTextField
