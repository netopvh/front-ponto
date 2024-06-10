import { Checkbox, FormControl, FormControlLabel, FormHelperText, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface IRHFCheckbox {
  name: string
  label: string
  helperText?: string
}

const RHFCheckbox = ({ name, label, helperText, ...other }: IRHFCheckbox) => {
  const { control } = useFormContext()
  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <FormControlLabel control={<Checkbox {...field} {...other} />} label={label} />
          {error ? <FormHelperText>{error?.message || helperText}</FormHelperText> : null}
        </FormControl>
      )}
      name={name}
      control={control}
    />
  )
}

export default RHFCheckbox
