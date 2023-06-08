// import { Home as HomeIcon } from '@mui/icons-material'

import Home from '@@/pages/Home'
import { createBrowserRouter } from 'react-router-dom'
// import { Route } from '../types/Route'

const routes = createBrowserRouter([
  {
    path: '/',
    element: Home(),
    children: [
      // {
      //   path: 'team',
      //   element: <Team />,
      // },
    ],
  },
])
export default routes
