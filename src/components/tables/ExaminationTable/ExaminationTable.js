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


const ExaminationTable = ({
  exams,
  onDelete
}) => {
  const navigate = useNavigate();

  return exams && (
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
                          class
                          </TableCell>
                          <TableCell>
                            section
                          </TableCell>
                          <TableCell>
                          exam_type
                          </TableCell>
                          <TableCell>
                          starting_time
                          </TableCell>
                          <TableCell>
                          ending_time
                          </TableCell>
                          <TableCell>
                          total_marks
                          </TableCell>
                          <TableCell>
                          status
                          </TableCell>
                          <TableCell>
                            Actions
                          </TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  { exams?.map( exam => (
                      <TableRow key={exam.id}>
                          <TableCell>
                              {exam.id}
                          </TableCell>
                          <TableCell>
                              {exam.name}
                          </TableCell>
                          <TableCell>
                              {exam.class?.name}
                          </TableCell>
                          <TableCell>
                              {exam.section.name}
                          </TableCell>
                          <TableCell>
                              {exam.exam_type}
                          </TableCell>
                          <TableCell>
                              {exam.starting_time}
                          </TableCell>
                          <TableCell>
                              {exam.ending_time}
                          </TableCell>
                          <TableCell>
                              {exam.total_marks}
                          </TableCell>
                          <TableCell>
                              {exam.status}
                          </TableCell>
                          <TableCell>
                              <ButtonGroup
                                size="small"
                                variant="contained"
                              >
                              <Button
                                color="info"
                                onClick={() => navigate(`/exams/${exam.id}`)}
                                title="Show Exam"
                              >
                                  <InfoOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => navigate(`/exams/${exam.id}/edit`)}
                                title="Edit Exam"
                              >
                                <EditOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => onDelete(exam)}
                                title="Delete Exam"
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
export default ExaminationTable;



















