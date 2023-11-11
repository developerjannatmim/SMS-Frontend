import {
  DeleteOutlined,
  EditOutlined,
  InfoOutlined,
} from '@ant-design/icons';
import { Image } from 'mui-image';
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TeacherTable = ({
  teachers,
  onDelete
}) => {
  const navigate = useNavigate();

  return teachers && (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Email
              </TableCell>
              <TableCell>
                Gender
              </TableCell>
              <TableCell>
                Birthday
              </TableCell>
              <TableCell>
                Address
              </TableCell>
              <TableCell>
                Phone
              </TableCell>
              <TableCell>
                Photo
              </TableCell>
              <TableCell>
                Blood Group
              </TableCell>
              <TableCell>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers?.map(teacher => {
              let userInformation;
                try {
                  userInformation = JSON.parse(teacher.user_information);
                } catch (error) { /**/ }
              return (
                <TableRow key={teacher?.id}>
                  <TableCell>
                    {teacher?.id}
                  </TableCell>
                  <TableCell>
                    {teacher?.name}
                  </TableCell>
                  <TableCell>
                    {teacher?.email}
                  </TableCell>
                  <TableCell>
                    {userInformation?.gender}
                  </TableCell>
                  <TableCell>
                    {userInformation?.birthday}
                  </TableCell>
                  <TableCell>
                    {userInformation?.address}
                  </TableCell>
                  <TableCell>
                    {userInformation?.phone}
                  </TableCell>
                  <TableCell>
                  <Image src={`http://127.0.0.1:8000/teacher-images/${userInformation?.photo}`} width="50px" alt={teacher?.name}/>
                  </TableCell>
                  <TableCell>
                    {userInformation?.blood_group}
                  </TableCell>
                  <TableCell>
                    <ButtonGroup
                      size="small"
                      variant="contained"
                    >
                    <Button
                      color="info"
                      onClick={() => navigate(`/teachers/${teacher.id}`)}
                      title="Show Teacher"
                    >
                      <InfoOutlined />
                    </Button>
                    <Button
                      color="warning"
                      onClick={() => navigate(`/teachers/${teacher.id}/edit`)}
                      title="Edit Teacher"
                    >
                      <EditOutlined />
                    </Button>
                    <Button
                      color="warning"
                      onClick={() => onDelete(teacher)}
                      title="Delete Teacher"
                    >
                      <DeleteOutlined />
                    </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
export default TeacherTable;



















