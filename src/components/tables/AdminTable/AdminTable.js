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


const AdminTable = ({
    admin,
    onDelete,
    onPage,
    onPerPage,
    page,
    perPage
}) => {
    const navigate = useNavigate();

    return admin && (
        <>
            <TablePagination 
                component="div"
                count={admin.total || 0}
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
                    {admin.data?.map(admin => (
                        <TableRow key={admin.id}>
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
                                    title="Edit Admin"
                                >
                                    <DeleteOutlined />
                                </Button>
                                </ButtonGroup>
                            </TableCell>
                            <TableCell>
                                {admin.id}
                            </TableCell>
                            <TableCell>
                                {admin.name}
                            </TableCell>
                            <TableCell>
                                {admin.email}
                            </TableCell>
                            <TableCell>
                                {admin.gender}
                            </TableCell>
                            <TableCell>
                                {admin.birthday}
                            </TableCell>
                            <TableCell>
                                {admin.address}
                            </TableCell>
                            <TableCell>
                                {admin.phone}
                            </TableCell>
                            <TableCell>
                                {admin.photo}
                            </TableCell>
                            <TableCell>
                                {admin.blood_group}
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default AdminTable;



















