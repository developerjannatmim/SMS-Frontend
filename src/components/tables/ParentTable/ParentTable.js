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
  TablePagination,
  TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ParentTable = ({
  parent,
  onDelete,
  onPage,
  onPerPage,
  page,
  perPage
}) => {
  const navigate = useNavigate();

  return parent && (
      <>
          <TablePagination 
              component="div"
              count={parent.total || 0}
              onPageChange={(_, value) => onPage(value)}
              onRowsPerPageChange={event => onPerPage(event.target.value)}
              page={page}
              rowsPerPage={perPage}
          />
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>
                              Actions
                          </TableCell>
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
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  {parent.data?.map(parent => (
                      <TableRow key={parent.id}>
                          <TableCell>
                              <ButtonGroup
                                  size="small"
                                  variant="contained"
                              >
                              <Button
                                  color="info"
                                  onClick={() => navigate(`/parent/${parent.id}`)}
                                  title="Show Parent"
                              >
                                  <InfoOutlined />
                              </Button>
                              <Button
                                  color="warning"
                                  onClick={() => navigate(`/parent/${parent.id}/edit`)}
                                  title="Edit Parent"
                              >
                                  <EditOutlined />
                              </Button>
                              <Button
                                  color="warning"
                                  onClick={() => onDelete(parent)}
                                  title="Delete Parent"
                              >
                                  <DeleteOutlined />
                              </Button>
                              </ButtonGroup>
                          </TableCell>
                          <TableCell>
                              {parent.id}
                          </TableCell>
                          <TableCell>
                              {parent.name}
                          </TableCell>
                          <TableCell>
                              {parent.email}
                          </TableCell>
                          <TableCell>
                              {parent.gender}
                          </TableCell>
                          <TableCell>
                              {parent.birthday}
                          </TableCell>
                          <TableCell>
                              {parent.address}
                          </TableCell>
                          <TableCell>
                              {parent.phone}
                          </TableCell>
                          <TableCell>
                              {parent.photo}
                          </TableCell>
                          <TableCell>
                              {parent.blood_group}
                          </TableCell>
                      </TableRow>
                  ))}
                  </TableBody>
              </Table>
          </TableContainer>
      </>
  )
}
export default ParentTable;



















