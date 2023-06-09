/*
 * @Author: wangying wangying@waytous.com
 * @Date: 2023-06-09 09:54:59
 * @LastEditors: wangying wangying@waytous.com
 * @LastEditTime: 2023-06-09 23:31:19
 * @FilePath: /ProjectDemo/src/config/routes.tsx
 * @Description: 路由配置
 */
import List from '@@/pages/list'
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
