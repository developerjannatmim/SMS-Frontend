// assets
import SubjectIcon from '@mui/icons-material/Subject';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIcon from '@mui/icons-material/Assignment';

// ==============================|| MENU ITEMS - ACADEMIC ||============================== //

const pages = {
  title: 'Academic',
  id: 'academic',
  type: 'group',
  children: [
    {
      id: 'class_routine',
      title: 'Class Routiune',
      type: 'item',
      url: '/class_routine',
      icon: TextSnippetIcon,
      breadcrumbs: false
    },

    {
      id: 'subjects',
      title: 'Subjects',
      type: 'item',
      url: '/subjects',
      icon: SubjectIcon,
      breadcrumbs: false
    },

    {
      id: 'syllabus',
      title: 'Syllabus',
      type: 'item',
      url: '/syllabus',
      icon: ArticleIcon,
      breadcrumbs: false
    },
    {
      id: 'class_list',
      title: 'Class List',
      type: 'item',
      url: '/class_list',
      icon: AssignmentIcon,
      breadcrumbs: false
    }
  ]
};

export default pages;