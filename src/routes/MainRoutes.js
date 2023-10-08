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

const StudentCreate = lazy(() => import('../pages/Student/StudentCreate'));
const StudentEdit = lazy(() => import('../pages/Student/StudentEdit'));
const StudentList = lazy(() => import('../pages/Student/StudentList'));
const StudentShow = lazy(() => import('../pages/Student/StudentShow'));

const TeacherCreate = lazy(() => import('../pages/Teacher/TeacherCreate'));
const TeacherEdit = lazy(() => import('../pages/Teacher/TeacherEdit'));
const TeacherList = lazy(() => import('../pages/Teacher/TeacherList'));
const TeacherShow = lazy(() => import('../pages/Teacher/TeacherShow'));

const ParentCreate = lazy(() => import('../pages/Parent/ParentCreate'));
const ParentEdit = lazy(() => import('../pages/Parent/ParentEdit'));
const ParentList = lazy(() => import('../pages/Parent/ParentList'));
const ParentShow = lazy(() => import('../pages/Parent/ParentShow'));

const ParentCreate = lazy(() => import('../pages/Parent/ParentCreate'));
const ParentEdit = lazy(() => import('../pages/Parent/ParentEdit'));
const ParentList = lazy(() => import('../pages/Parent/ParentList'));
const ParentShow = lazy(() => import('../pages/Parent/ParentShow'));

const ParentCreate = lazy(() => import('../pages/Parent/ParentCreate'));
const ParentEdit = lazy(() => import('../pages/Parent/ParentEdit'));
const ParentList = lazy(() => import('../pages/Parent/ParentList'));
const ParentShow = lazy(() => import('../pages/Parent/ParentShow'));

const ParentCreate = lazy(() => import('../pages/Parent/ParentCreate'));
const ParentEdit = lazy(() => import('../pages/Parent/ParentEdit'));
const ParentList = lazy(() => import('../pages/Parent/ParentList'));
const ParentShow = lazy(() => import('../pages/Parent/ParentShow'));

const ParentCreate = lazy(() => import('../pages/Parent/ParentCreate'));
const ParentEdit = lazy(() => import('../pages/Parent/ParentEdit'));
const ParentList = lazy(() => import('../pages/Parent/ParentList'));
const ParentShow = lazy(() => import('../pages/Parent/ParentShow'));

const ParentCreate = lazy(() => import('../pages/Parent/ParentCreate'));
const ParentEdit = lazy(() => import('../pages/Parent/ParentEdit'));
const ParentList = lazy(() => import('../pages/Parent/ParentList'));
const ParentShow = lazy(() => import('../pages/Parent/ParentShow'));

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
    },
    {
      children: [
        {
          element: <StudentList />,
          path: ''
        },
        {
          element: <StudentCreate />,
          path: 'create'
        },
        {
          children: [
            {
              element: <StudentShow />,
              path: ''
            },
            {
              element: <StudentEdit />,
              path: 'edit'
            },
          ],
          path: ':studentId',
        },
      ],
      path: 'students',
    },
    {
      children: [
        {
          element: <ClassList />,
          path: ''
        },
        {
          element: <ClassCreate />,
          path: 'create'
        },
        {
          children: [
            {
              element: <ClassShow />,
              path: ''
            },
            {
              element: <ClassEdit />,
              path: 'edit'
            },
          ],
          path: ':classId',
        },
      ],
      path: 'classes',
    },
    {
      children: [
        {
          element: <ExaminationList />,
          path: ''
        },
        {
          element: <ExaminationCreate />,
          path: 'create'
        },
        {
          children: [
            {
              element: <ExaminationShow />,
              path: ''
            },
            {
              element: <ExaminationEdit />,
              path: 'edit'
            },
          ],
          path: ':examId',
        },
      ],
      path: 'exams',
    },
    {
      children: [
        {
          element: <GradeList />,
          path: ''
        },
        {
          element: <GradeCreate />,
          path: 'create'
        },
        {
          children: [
            {
              element: <GradeShow />,
              path: ''
            },
            {
              element: <GradeEdit />,
              path: 'edit'
            },
          ],
          path: ':gradeId',
        },
      ],
      path: 'grades',
    },
    {
      children: [
        {
          element: <MarksList />,
          path: ''
        },
        {
          element: <MarksCreate />,
          path: 'create'
        },
        {
          children: [
            {
              element: <MarksShow />,
              path: ''
            },
            {
              element: <MarksEdit />,
              path: 'edit'
            },
          ],
          path: ':marksId',
        },
      ],
      path: 'marks',
    },
    {
      children: [
        {
          element: <RoutineList />,
          path: ''
        },
        {
          element: <RoutineCreate />,
          path: 'create'
        },
        {
          children: [
            {
              element: <RoutineShow />,
              path: ''
            },
            {
              element: <RoutineEdit />,
              path: 'edit'
            },
          ],
          path: ':routineId',
        },
      ],
      path: 'routines',
    },
    {
      children: [
        {
          element: <TeacherList />,
          path: ''
        },
        {
          element: <TeacherCreate />,
          path: 'create'
        },
        {
          children: [
            {
              element: <TeacherShow />,
              path: ''
            },
            {
              element: <TeacherEdit />,
              path: 'edit'
            },
          ],
          path: ':teacherId',
        },
      ],
      path: 'teachers',
    },
    {
      children: [
        {
          element: <SubjectList />,
          path: ''
        },
        {
          element: <SubjectCreate />,
          path: 'create'
        },
        {
          children: [
            {
              element: <SubjectShow />,
              path: ''
            },
            {
              element: <SubjectEdit />,
              path: 'edit'
            },
          ],
          path: ':subjectId',
        },
      ],
      path: 'subjects',
    },
    {
      children: [
        {
          element: <SyllabusList />,
          path: ''
        },
        {
          element: <SyllabusCreate />,
          path: 'create'
        },
        {
          children: [
            {
              element: <SyllabusShow />,
              path: ''
            },
            {
              element: <SyllabusEdit />,
              path: 'edit'
            },
          ],
          path: ':syllabusId',
        },
      ],
      path: 'syllabuses',
    }
  ]
};

export default MainRoutes;
