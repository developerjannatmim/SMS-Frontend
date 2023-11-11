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


const AdminTable = ({
    admins,
    onDelete
}) => {
    const navigate = useNavigate();

    return admins && (
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
                    { admins?.map( admin => {
                      let userInformation;
                        try {
                          userInformation = JSON.parse(admin.user_information);
                        } catch (error) { /**/ }
                      return (
                        <TableRow key={admin?.id}>
                            <TableCell>
                                {admin?.id}
                            </TableCell>
                            <TableCell>
                                {admin?.name}
                            </TableCell>
                            <TableCell>
                                {admin?.email}
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
                            <Image src={`http://127.0.0.1:8000/admin-images/${userInformation?.photo}`}  width="50px" alt={admin?.name}/>
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
                                  onClick={() => navigate(`/admin/${admin.id}`)}
                                  title="Show Admin"
                                >
                                    <InfoOutlined />
                                </Button>
                                <Button
                                  color="warning"
                                  onClick={() => navigate(`/admin/${admin.id}/edit`)}
                                  title="Edit Admin"
                                >
                                  <EditOutlined />
                                </Button>
                                <Button
                                  color="warning"
                                  onClick={() => onDelete(admin)}
                                  title="Delete Admin"
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
export default AdminTable;



















