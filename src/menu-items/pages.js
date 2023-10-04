// assets
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

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
      icon: SupervisorAccountIcon,
      breadcrumbs: false
    },

    {
      id: 'parents',
      title: 'Parents',
      type: 'item',
      url: '/parents',
      icon: SupervisorAccountIcon,
      breadcrumbs: false
    },

    {
      id: 'students',
      title: 'Students',
      type: 'item',
      url: '/students',
      icon: SupervisorAccountIcon,
      breadcrumbs: false
    },
    {
      id: 'teachers',
      title: 'Teachers',
      type: 'item',
      url: '/teachers',
      icon: SupervisorAccountIcon,
      breadcrumbs: false
    }
  ]
};

export default pages;
