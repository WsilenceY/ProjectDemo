/*
 * @Author: wangying wangying@waytous.com
 * @Date: 2023-06-09 09:54:59
 * @LastEditors: wangying wangying@waytous.com
 * @LastEditTime: 2023-06-09 18:29:57
 * @FilePath: /ProjectDemo/src/config/routes.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import List from '@@/pages/list/indexold.tsx'
import Detail from '@@/pages/detail/index.tsx'
//import ListNew from '@@/pages/list/index.tsx'
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
