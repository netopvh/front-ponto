import { Autocomplete, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface IOption {
  label: string
  value: string
}

interface IRHFAutocomplete {
  name: string
  label: string
  helperText?: string
  options: IOption[]
}

const RHFAutocomplete = ({ name, label, options = [], helperText, ...other }: IRHFAutocomplete) => {
  const { control, setValue } = useFormContext()
  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          disablePortal
          id={`autocomlete-${name}`}
          options={options}
          onChange={(_, newValue: string | null) => {
            setValue(name, newValue)
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              label={label}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...other}
            />
          )}
        />
      )}
      name={name}
      control={control}
    />
  )
}

export default RHFAutocomplete
