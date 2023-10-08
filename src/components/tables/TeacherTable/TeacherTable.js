import {
  DeleteOutlined,
  EditOutlined,
  InfoOutlined,
} from '@ant-design/icons';
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
  teacher,
  onDelete
}) => {
  const navigate = useNavigate();

  return teacher && (
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
                  {teacher?.map(teacher => (
                      <TableRow key={teacher.id}>
                          <TableCell>
                              {teacher.id}
                          </TableCell>
                          <TableCell>
                              {teacher.name}
                          </TableCell>
                          <TableCell>
                              {teacher.email}
                          </TableCell>
                          <TableCell>
                              {teacher.gender}
                          </TableCell>
                          <TableCell>
                              {teacher.birthday}
                          </TableCell>
                          <TableCell>
                              {teacher.address}
                          </TableCell>
                          <TableCell>
                              {teacher.phone}
                          </TableCell>
                          <TableCell>
                              {teacher.photo}
                          </TableCell>
                          <TableCell>
                              {teacher.blood_group}
                          </TableCell>
                          <TableCell>
                              <ButtonGroup
                                  size="small"
                                  variant="contained"
                              >
                              <Button
                                  color="info"
                                  onClick={() => navigate(`/teacher/${teacher.id}`)}
                                  title="Show Teacher"
                              >
                                  <InfoOutlined />
                              </Button>
                              <Button
                                  color="warning"
                                  onClick={() => navigate(`/teacher/${teacher.id}/edit`)}
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
                  ))}
                  </TableBody>
              </Table>
          </TableContainer>
      </>
  )
}
export default TeacherTable;



















