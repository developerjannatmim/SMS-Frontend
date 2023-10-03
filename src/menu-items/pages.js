
// assets
import { InfoCircleTwoTone } from '@ant-design/icons';


// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  title: 'Users',
  id: 'users',
  type: 'group',
  children: [
    {
      id: 'admin',
      title: 'Admin',
      type: 'item',
      url: '/admin',
      icon: InfoCircleTwoTone,
      breadcrumbs: false
    },

    {
      id: 'parents',
      title: 'Parents',
      type: 'item',
      url: '/parents',
      icon: InfoCircleTwoTone,
      breadcrumbs: false
    },

    {
      id: 'students',
      title: 'Students',
      type: 'item',
      url: '/students',
      icon: InfoCircleTwoTone,
      breadcrumbs: false
    },
    {
      id: 'teachers',
      title: 'Teachers',
      type: 'item',
      url: '/teachers',
      icon: InfoCircleTwoTone,
      breadcrumbs: false
    }
  ]
};

export default pages;
