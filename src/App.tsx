import { useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'

import { Layout } from './components/Layout'

import { ThemeModeContext } from './contexts'
import { router } from './config'
import { getAppTheme } from './styles/theme'
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants'

function App() {
  const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(DARK_MODE_THEME)

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME))
      },
    }),
    []
  )

  const theme = useMemo(() => getAppTheme(mode), [mode])

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default App
