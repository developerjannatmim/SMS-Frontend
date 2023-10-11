// assets
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

// ==============================|| MENU ITEMS - EXAMINATION ||============================== //

const pages = {
  title: 'Settings',
  id: 'settings',
  type: 'group',
  children: [
    {
      id: 'schools',
      title: 'School Settings',
      type: 'item',
      url: '/schools',
      icon: HistoryEduIcon,
      breadcrumbs: false
    }
  ]
};

export default pages;
