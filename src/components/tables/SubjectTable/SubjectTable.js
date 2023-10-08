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


const SubjectTable = ({
  subject,
  onDelete
}) => {
  const navigate = useNavigate();

  return subject && (
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
                Class
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subject?.map(subject => (
              <TableRow key={subject.id}>
                <TableCell>
                  {subject.id}
                </TableCell>
                <TableCell>
                  {subject.name}
                </TableCell>
                <TableCell>
                  {subject.class_id}
                </TableCell>
                <TableCell>
                  <ButtonGroup
                    size="small"
                    variant="contained"
                  >
                    <Button
                      color="info"
                      onClick={() => navigate(`/subject/${subject.id}`)}
                      title="Show Subject"
                    >
                      <InfoOutlined />
                    </Button>
                    <Button
                      color="warning"
                      onClick={() => navigate(`/subject/${subject.id}/edit`)}
                      title="Edit Subject"
                    >
                      <EditOutlined />
                    </Button>
                    <Button
                      color="warning"
                      onClick={() => onDelete(subject)}
                      title="Delete Subject"
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
export default SubjectTable;



















