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


const ParentTable = ({
  parents,
  onDelete
}) => {
  const navigate = useNavigate();

  return parents && (
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
                  {parents?.map(parent => {
                    let userInformation;
                        try {
                          userInformation = JSON.parse(parent.user_information);
                        } catch (error) { /**/ }
                      return (
                      <TableRow key={parent?.id}>
                          <TableCell>
                              {parent?.id}
                          </TableCell>
                          <TableCell>
                              {parent?.name}
                          </TableCell>
                          <TableCell>
                              {parent?.email}
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
                              <Image src={userInformation?.photo} alt="image"/>
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
                                  onClick={() => navigate(`/parents/${parent.id}`)}
                                  title="Show Parent"
                              >
                                  <InfoOutlined />
                              </Button>
                              <Button
                                  color="warning"
                                  onClick={() => navigate(`/parents/${parent.id}/edit`)}
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
                      </TableRow>
                      );
                    })}
                  </TableBody>
              </Table>
          </TableContainer>
      </>
  )
}
export default ParentTable;



















