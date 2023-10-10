// assets
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

// ==============================|| MENU ITEMS - EXAMINATION ||============================== //

const pages = {
  title: 'Settings',
  id: 'settings',
  type: 'group',
  children: [
    {
      id: 'school_info',
      title: 'School Settings',
      type: 'item',
      url: '/school_info',
      icon: HistoryEduIcon,
      breadcrumbs: false
    }
  ]
};

export default pages;
