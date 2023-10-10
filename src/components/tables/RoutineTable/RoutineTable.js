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


const RoutineTable = ({
  routines,
  onDelete
}) => {
  const navigate = useNavigate();

  return routines && (
      <>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>
                            ID
                          </TableCell>
                          <TableCell>
                          class_id
                          </TableCell>
                          <TableCell>
                          section_id
                          </TableCell>
                          <TableCell>
                          routine_creator
                          </TableCell>
                          <TableCell>
                          subject_id
                          </TableCell>
                          <TableCell>
                          room_id
                          </TableCell>
                          <TableCell>
                          starting_hour
                          </TableCell>
                          <TableCell>
                          ending_hour
                          </TableCell>
                          <TableCell>
                          starting_minute
                          </TableCell>
                          <TableCell>
                          ending_minute
                          </TableCell>
                          <TableCell>
                          day
                          </TableCell>
                          <TableCell>
                            Actions
                          </TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  { routines?.map( routine => (
                      <TableRow key={routine?.id}>
                          <TableCell>
                              {routine?.id}
                          </TableCell>
                          <TableCell>
                              {routine?.class_id}
                          </TableCell>
                          <TableCell>
                              {routine?.section_id}
                          </TableCell>
                          <TableCell>
                              {routine?.routine_creator}
                          </TableCell>
                          <TableCell>
                              {routine?.subject_id}
                          </TableCell>
                          <TableCell>
                              {routine?.room_id}
                          </TableCell>
                          <TableCell>
                              {routine?.starting_hour}
                          </TableCell>
                          <TableCell>
                              {routine?.ending_hour}
                          </TableCell>
                          <TableCell>
                              {routine?.starting_minute}
                          </TableCell>
                          <TableCell>
                              {routine?.ending_minute}
                          </TableCell>
                          <TableCell>
                              {routine?.day}
                          </TableCell>
                          <TableCell>
                              <ButtonGroup
                                size="small"
                                variant="contained"
                              >
                              <Button
                                color="info"
                                onClick={() => navigate(`/routines/${routine.id}`)}
                                title="Show Routine"
                              >
                                  <InfoOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => navigate(`/routines/${routine.id}/edit`)}
                                title="Edit Routine"
                              >
                                <EditOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => onDelete(routine)}
                                title="Delete Routine"
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
export default RoutineTable;



















