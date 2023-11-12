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


const StudentTable = ({
  students,
  onDelete
}) => {
  const navigate = useNavigate();

  return students && (
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
                  { students?.map( student => {
                    let userInformation;
                      try {
                        userInformation = JSON.parse(student.user_information);
                      } catch (error) { /**/ }
                      return (
                      <TableRow key={student?.id}>
                          <TableCell>
                              {student?.id}
                          </TableCell>
                          <TableCell>
                              {student?.name}
                          </TableCell>
                          <TableCell>
                              {student?.email}
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
                          <Image src={`http://127.0.0.1:8000/student-images/${userInformation?.photo}`} width="50px" alt={student?.name}/>
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
                                onClick={() => navigate(`/students/${student.id}`)}
                                title="Show Student"
                              >
                                  <InfoOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => navigate(`/students/${student.id}/edit`)}
                                title="Edit Student"
                              >
                                <EditOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => onDelete(student)}
                                title="Delete Student"
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
export default StudentTable;



















