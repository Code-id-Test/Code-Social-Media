import React from 'react'
import { Typography as MTTypography, TypographyProps as MTTypographyProps } from '@material-tailwind/react'
import { children } from '@material-tailwind/react/types/components/accordion'

interface TypographyProps extends MTTypographyProps {
  children: children
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