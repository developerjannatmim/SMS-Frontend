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
      id: 'routines',
      title: 'Class Routiune',
      type: 'item',
      url: '/routines',
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
      id: 'syllabuses',
      title: 'Syllabus',
      type: 'item',
      url: '/syllabuses',
      icon: ArticleIcon,
      breadcrumbs: false
    },
    {
      id: 'classes',
      title: 'Classes',
      type: 'item',
      url: '/classes',
      icon: AssignmentIcon,
      breadcrumbs: false
    }
  ]
};

export default pages;
