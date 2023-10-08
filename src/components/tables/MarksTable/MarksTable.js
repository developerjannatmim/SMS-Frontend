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


const MarksTable = ({
  admin,
  onDelete
}) => {
  const navigate = useNavigate();

  return admin && (
      <>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>
                            ID
                          </TableCell>
                          <TableCell>
                          user_id
                          </TableCell>
                          <TableCell>
                          exam_id
                          </TableCell>
                          <TableCell>
                          class_id
                          </TableCell>
                          <TableCell>
                          section_id
                          </TableCell>
                          <TableCell>
                          subject_id
                          </TableCell>
                          <TableCell>
                          marks
                          </TableCell>
                          <TableCell>
                          grade_point
                          </TableCell>
                          <TableCell>
                          comment
                          </TableCell>
                          <TableCell>
                            Actions
                          </TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  { marks?.map( marks => (
                      <TableRow key={marks.id}>
                          <TableCell>
                              {marks.id}
                          </TableCell>
                          <TableCell>
                              {marks.user_id}
                          </TableCell>
                          <TableCell>
                              {marks.exam_id}
                          </TableCell>
                          <TableCell>
                              {marks.class_id}
                          </TableCell>
                          <TableCell>
                              {marks.section_id}
                          </TableCell>
                          <TableCell>
                              {marks.subject_id}
                          </TableCell>
                          <TableCell>
                              {marks.marks}
                          </TableCell>
                          <TableCell>
                              {marks.grade_point}
                          </TableCell>
                          <TableCell>
                              {marks.comment}
                          </TableCell>
                          <TableCell>
                              <ButtonGroup
                                size="small"
                                variant="contained"
                              >
                              <Button
                                color="info"
                                onClick={() => navigate(`/marks/${marks.id}`)}
                                title="Show Marks"
                              >
                                  <InfoOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => navigate(`/marks/${marks.id}/edit`)}
                                title="Edit Marks"
                              >
                                <EditOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => onDelete(marks)}
                                title="Delete Marks"
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
export default MarksTable;



















