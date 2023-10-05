import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const Dashboard = Loadable(lazy(() => import('../pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// render - pages
const AdminCreate = lazy(() => import('../pages/Admin/AdminCreate'));
const AdminEdit = lazy(() => import('../pages/Admin/AdminEdit'));
const AdminList = lazy(() => import('../pages/Admin/AdminList'));
const AdminShow = lazy(() => import('../pages/Admin/AdminShow'));
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
      path: 'color',
      element: <Color />
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
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    //pages
    {
      children: [
        {
          path: '',
          element: <AdminList />
        },
        {
          path: '',
          element: <AdminCreate />
        },
        {
          children: [
            {
              path: '',
              element: <AdminShow />
            },
            {
              path: 'edit',
              element: <AdminEdit />
            },
          ],
          path: ':adminId',
        },
      ],
      path: 'admin',
    }
  ]
};

export default MainRoutes;
