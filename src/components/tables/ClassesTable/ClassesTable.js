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


const ClassesTable = ({
  classes,
  onDelete
}) => {
  const navigate = useNavigate();

  return classes && (
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
                            Section
                          </TableCell>
                          <TableCell>
                            Actions
                          </TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  { classes?.map( classes => (
                      <TableRow key={classes.id}>
                          <TableCell>
                              {classes.id}
                          </TableCell>
                          <TableCell>
                              {classes.name}
                          </TableCell>
                          <TableCell>
                              {classes.section_id}
                          </TableCell>
                          <TableCell>
                              <ButtonGroup
                                size="small"
                                variant="contained"
                              >
                              <Button
                                color="info"
                                onClick={() => navigate(`/classes/${classes.id}`)}
                                title="Show Classes"
                              >
                                  <InfoOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => navigate(`/classes/${classes.id}/edit`)}
                                title="Edit Classes"
                              >
                                <EditOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => onDelete(classes)}
                                title="Delete Classes"
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
export default ClassesTable;



















