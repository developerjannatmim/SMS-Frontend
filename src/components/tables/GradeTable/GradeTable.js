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


const GradeTable = ({
  grades,
  onDelete
}) => {
  const navigate = useNavigate();

  return grades && (
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
                          grade_point
                          </TableCell>
                          <TableCell>
                          mark_from
                          </TableCell>
                          <TableCell>
                          mark_upto
                          </TableCell>
                          <TableCell>
                            Actions
                          </TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  { grades?.map( grade => (
                      <TableRow key={grade?.id}>
                          <TableCell>
                              {grade?.id}
                          </TableCell>
                          <TableCell>
                              {grade?.name}
                          </TableCell>
                          <TableCell>
                              {grade?.grade_point}
                          </TableCell>
                          <TableCell>
                              {grade?.mark_from}
                          </TableCell>
                          <TableCell>
                              {grade?.mark_upto}
                          </TableCell>
                          <TableCell>
                              <ButtonGroup
                                size="small"
                                variant="contained"
                              >
                              <Button
                                color="info"
                                onClick={() => navigate(`/grades/${grade.id}`)}
                                title="Show Grade"
                              >
                                  <InfoOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => navigate(`/grades/${grade.id}/edit`)}
                                title="Edit Grade"
                              >
                                <EditOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => onDelete(grade)}
                                title="Delete Grade"
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
export default GradeTable;



















