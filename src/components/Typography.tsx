import { Typography as MTTypography, TypographyProps as MTTypographyProps } from '@material-tailwind/react'
import React from 'react'

interface TypographyProps extends MTTypographyProps {
  children: string
  placeholder?: () => void
}

const Typography = (props: TypographyProps) => {
  return (
    <MTTypography
      {...props}
      placeholder={props.placeholder}
    >
      {props.children}
    </MTTypography>
  )
}

export default Typography