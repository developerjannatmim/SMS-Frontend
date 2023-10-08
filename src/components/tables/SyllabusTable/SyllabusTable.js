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


const SyllabusTable = ({
  syllabus,
  onDelete
}) => {
  const navigate = useNavigate();

  return syllabus && (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                Class
              </TableCell>
              <TableCell>
                Section
              </TableCell>
              <TableCell>
                Subject
              </TableCell>
              <TableCell>
                File
              </TableCell>
              <TableCell>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {syllabus?.map(syllabus => (
              <TableRow key={syllabus.id}>
                <TableCell>
                  {syllabus.id}
                </TableCell>
                <TableCell>
                  {syllabus.class_id}
                </TableCell>
                <TableCell>
                  {syllabus.section_id}
                </TableCell>
                <TableCell>
                  {syllabus.subject_id}
                </TableCell>
                <TableCell>
                  {syllabus.file}
                </TableCell>
                <TableCell>
                  <ButtonGroup
                    size="small"
                    variant="contained"
                  >
                    <Button
                      color="info"
                      onClick={() => navigate(`/syllabus/${syllabus.id}`)}
                      title="Show Syllabus"
                    >
                      <InfoOutlined />
                    </Button>
                    <Button
                      color="warning"
                      onClick={() => navigate(`/syllabus/${syllabus.id}/edit`)}
                      title="Edit Syllabus"
                    >
                      <EditOutlined />
                    </Button>
                    <Button
                      color="warning"
                      onClick={() => onDelete(syllabus)}
                      title="Delete Syllabus"
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
export default SyllabusTable;



















