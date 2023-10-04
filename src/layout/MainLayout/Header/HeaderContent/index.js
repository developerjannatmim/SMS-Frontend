// material-ui
import { useMediaQuery } from '@mui/material';
//import { GithubOutlined } from '@ant-design/icons';

// project import
import Search from './Search';
import Name from './Name';
import Profile from './Profile';
import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      {!matchesXs && <Search />}
      
      <Name />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
