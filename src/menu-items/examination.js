// assets
//import { InfoCircleTwoTone } from '@ant-design/icons';
import ExplicitIcon from '@mui/icons-material/Explicit';
import DescriptionIcon from '@mui/icons-material/Description';
import GradeIcon from '@mui/icons-material/Grade';

// ==============================|| MENU ITEMS - EXAMINATION ||============================== //

const pages = {
  title: 'Examination',
  id: 'examination',
  type: 'group',
  children: [
    {
      id: 'exam',
      title: 'Exam',
      type: 'item',
      url: '/exams',
      icon: ExplicitIcon,
      breadcrumbs: false
    },

    {
      id: 'marks',
      title: 'Marks',
      type: 'item',
      url: '/marks',
      icon: DescriptionIcon,
      breadcrumbs: false
    },

    {
      id: 'grades',
      title: 'Grades',
      type: 'item',
      url: '/grades',
      icon: GradeIcon,
      breadcrumbs: false
    }
  ]
};

export default pages;
