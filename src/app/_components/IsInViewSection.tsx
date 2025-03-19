import { Box } from '@mui/material'
import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const IsInViewSection = ({
  children,
  onChange,
}: {
  children: React.ReactNode
  onChange: (isInView: boolean) => void
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.25 })

  useEffect(() => {
    onChange(isInView)
  }, [isInView, onChange])

  return <Box ref={ref}>{children}</Box>
}
