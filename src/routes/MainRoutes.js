import { lazy } from 'react';

import MainLayout from '../layout/MainLayout';

// render - dashboard
const Dashboard = lazy(() => import('../pages/dashboard'));

// render - pages
const AdminCreate = lazy(() => import('../pages/Admin/AdminCreate'));
const AdminEdit = lazy(() => import('../pages/Admin/AdminEdit'));
const AdminList = lazy(() => import('../pages/Admin/AdminList'));
const AdminShow = lazy(() => import('../pages/Admin/AdminShow'));

const ParentCreate = lazy(() => import('../pages/Parent/ParentCreate'));
const ParentEdit = lazy(() => import('../pages/Parent/ParentEdit'));
const ParentList = lazy(() => import('../pages/Parent/ParentList'));
const ParentShow = lazy(() => import('../pages/Parent/ParentShow'));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <Dashboard />
        }
      ]
    },
    {
      children: [
        {
          element: <AdminList />,
          path: ''
        },
        {
          element: <AdminCreate />,
          path: 'create'
        },
        {
          children: [
            {
              element: <AdminShow />,
              path: ''
            },
            {
              element: <AdminEdit />,
              path: 'edit'
            },
          ],
          path: ':adminId',
        },
      ],
      path: 'admin',
    },
    {
      children: [
        {
          element: <ParentList />,
          path: ''
        },
        {
          element: <ParentCreate />,
          path: 'create'
        },
        {
          children: [
            {
              element: <ParentShow />,
              path: ''
            },
            {
              element: <ParentEdit />,
              path: 'edit'
            },
          ],
          path: ':parentId',
        },
      ],
      path: 'parents',
    }
  ]
};

export default MainRoutes;
