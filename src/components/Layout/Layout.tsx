/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { FC, useState } from 'react'
import { Box } from '@mui/material'
import { Footer } from '../Footer'
import { FOOTER_HEIGHT } from '../../utils/constants'
interface LayoutProps {
  children: React.ReactNode
}
export const Layout: FC<LayoutProps> = (props) => {
  console.log('----layout-- props--', props)
  const {children} = props;
  const [open, setOpen] = useState(false)
  const toggleNavigation = () => setOpen((status) => !status)
  return (
    <div
      css={css`
        width:100%;
        height: 100%;
        overflow: hidden;
      `}
    >
        {children}
    </div>
  )
}
