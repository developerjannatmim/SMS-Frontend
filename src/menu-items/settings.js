// assets
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

// ==============================|| MENU ITEMS - EXAMINATION ||============================== //

const pages = {
  title: 'Settings',
  id: 'settings',
  type: 'group',
  children: [
    {
      id: 'school_settings',
      title: 'School Settings',
      type: 'item',
      url: '/school_settings',
      icon: HistoryEduIcon,
      breadcrumbs: false
    }
  ]
};

export default pages;
