/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { FC, useState } from 'react'
import { Box } from '@mui/material'

import { Footer } from '../Footer'

import { FOOTER_HEIGHT } from '../../utils/constants'
interface LayoutProps {
  children: React.ReactNode
}
export const Layout: FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const toggleNavigation = () => setOpen((status) => !status)

  return (
    <div
      css={css`
        min-height: 100vh;
      `}
    >
      <div
        css={css`
          display: flex;
          min-height: calc(100vh - ${FOOTER_HEIGHT}px);
        `}
      >
        <Box component='main' sx={{ flexGrow: 1, p: 3, pt: 10 }}>
          {children}
        </Box>
      </div>
      <Box component='footer'>
        <Footer />
      </Box>
    </div>
  )
}
