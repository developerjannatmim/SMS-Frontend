// eslint-disable-next-line
import { useState } from 'react';

// material-ui
import {
  Avatar,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';

import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// sales report status


// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce total="Total" name="Students" title="Students" count="442" percentage={442} extra="35,000" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce total="Total" name="Teachers" title="Teachers" count="78" color="warning" percentage={78} extra="8,900" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce total="Total" name="Parents" title="Parents" count="340" percentage={340} color="warning" extra="$20,395" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce total="Total" name="Staff" title="Staff" count="18" percentage={18}  extra="1,943" />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />


      {/* row 4 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Progress Report</Typography>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
          <Stack spacing={1.5} sx={{ mb: -12 }}>
            <Typography variant="h6" color="secondary">
            Progress Report
            </Typography>
          </Stack>
          <SalesColumnChart />
        </MainCard>
      </Grid>


      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Upcoming Events</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 3 }} content={false}>
          <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              '& .MuiListItemButton-root': {
                py: 1.5,
                '& .MuiAvatar-root': avatarSX,
                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
              }
            }}
          >
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'success.main',
                    bgcolor: 'success.lighter'
                  }}
                >
                  <GiftOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">SCHOOL FOUNDATION DAY</Typography>} secondary="Sun, Sep 17 2023" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
                  
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'success.main',
                    bgcolor: 'success.lighter'
                  }}
                >
                  <GiftOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">UNIQUE SPECIAL EVENT IDEAS</Typography>} secondary="Sun, Sep 17 2023" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>

            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'success.main',
                    bgcolor: 'success.lighter'
                  }}
                >
                  <GiftOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">REPUBLIC DAY</Typography>} secondary="Sun, Sep 17 2023" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>

            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'primary.main',
                    bgcolor: 'primary.lighter'
                  }}
                >
                  <MessageOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">WINTER VACATION</Typography>} secondary="Sun, Sep 17 2023" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'error.main',
                    bgcolor: 'error.lighter'
                  }}
                >
                  <SettingOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">SCHOOL PICNIC</Typography>} secondary="Sun, Sep 17 2023" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
          </List>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
