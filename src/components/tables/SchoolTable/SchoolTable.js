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


const SchoolTable = ({
  schools,
  onDelete
}) => {
  const navigate = useNavigate();

  return schools && (
      <>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>
                            ID
                          </TableCell>
                          <TableCell>
                          Title
                          </TableCell>
                          <TableCell>
                          Email Address
                          </TableCell>
                          <TableCell>
                          Phone
                          </TableCell>
                          <TableCell>
                          Address
                          </TableCell>
                          <TableCell>
                          School Info
                          </TableCell>
                          <TableCell>
                          Status
                          </TableCell>
                          <TableCell>
                            Actions
                          </TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  { schools?.map( school => (
                      <TableRow key={school?.id}>
                          <TableCell>
                              {school?.id}
                          </TableCell>
                          <TableCell>
                              {school?.title}
                          </TableCell>
                          <TableCell>
                              {school?.email}
                          </TableCell>
                          <TableCell>
                              {school?.phone}
                          </TableCell>
                          <TableCell>
                              {school?.address}
                          </TableCell>
                          <TableCell>
                              {school?.school_info}
                          </TableCell>
                          <TableCell>
                              {school?.status}
                          </TableCell>
                          <TableCell>
                              <ButtonGroup
                                size="small"
                                variant="contained"
                              >
                              <Button
                                color="info"
                                onClick={() => navigate(`/schools/${school.id}`)}
                                title="Show School"
                              >
                                  <InfoOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => navigate(`/schools/${school.id}/edit`)}
                                title="Edit School"
                              >
                                <EditOutlined />
                              </Button>
                              <Button
                                color="warning"
                                onClick={() => onDelete(school)}
                                title="Delete School"
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
export default SchoolTable;



















