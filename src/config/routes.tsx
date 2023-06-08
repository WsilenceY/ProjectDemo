import List from '@@/pages/list/index.tsx'
import Detail from '@@/pages/detail/index.tsx'
import { createBrowserRouter } from 'react-router-dom'
// import { Route } from '../types/Route'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <List/>,
    children: [
      {
        path: 'detail/:id',
        element: <Detail/>,
      },
    ],
  },
])
export default routes
