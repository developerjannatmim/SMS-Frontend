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


const StudentTable = ({
  student,
  onDelete
}) => {
  const navigate = useNavigate();

  return student && (
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
                  { student?.map( student => (
                      <TableRow key={student.id}>
                          <TableCell>
                              {student.id}
                          </TableCell>
                          <TableCell>
                              {student.name}
                          </TableCell>
                          <TableCell>
                              {student.email}
                          </TableCell>
                          <TableCell>
                              {student.user_information}
                          </TableCell>
                          <TableCell>
                              {student.birthday}
                          </TableCell>
                          <TableCell>
                              {student.address}
                          </TableCell>
                          <TableCell>
                              {student.phone}
                          </TableCell>
                          <TableCell>
                              {student.photo}
                          </TableCell>
                          <TableCell>
                              {student.blood_group}
                          </TableCell>
                          <TableCell>
                              <ButtonGroup
                                size="small"
                                variant="contained"
                              >
                              <Button
                                color="info"
                                onClick={() => navigate(`/student/${student.id}`)}
                                title="Show Student"
                              >
                                  <InfoOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => navigate(`/student/${student.id}/edit`)}
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
                  ))}
                  </TableBody>
              </Table>
          </TableContainer>
      </>
  )
}
export default StudentTable;



















