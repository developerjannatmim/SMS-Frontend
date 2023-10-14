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
  marks,
  onDelete
}) => {
  const navigate = useNavigate();

  return marks && (
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
                  { marks?.map( mark => (
                      <TableRow key={mark?.id}>
                          <TableCell>
                              {mark?.id}
                          </TableCell>
                          <TableCell>
                              {mark?.user?.name}
                          </TableCell>
                          <TableCell>
                              {mark?.exam?.name}
                          </TableCell>
                          <TableCell>
                              {mark?.class?.name}
                          </TableCell>
                          <TableCell>
                              {mark?.section.name}
                          </TableCell>
                          <TableCell>
                              {mark?.subject.name}
                          </TableCell>
                          <TableCell>
                              {mark?.marks}
                          </TableCell>
                          <TableCell>
                              {mark?.grade_point}
                          </TableCell>
                          <TableCell>
                              {mark?.comment}
                          </TableCell>
                          <TableCell>
                              <ButtonGroup
                                size="small"
                                variant="contained"
                              >
                              <Button
                                color="info"
                                onClick={() => navigate(`/marks/${mark.id}`)}
                                title="Show Marks"
                              >
                                  <InfoOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => navigate(`/marks/${mark.id}/edit`)}
                                title="Edit Marks"
                              >
                                <EditOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => onDelete(mark)}
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



















