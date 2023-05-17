import { Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography,} from '@mui/material';
import React, { useCallback } from 'react';
import TimeTableRow from './TimeTableRow';
import { withStyles } from '@mui/styles';
import { AddBox } from '@mui/icons-material';
import { useState } from 'react';
import InputModal from '../Component/InputModal';
import { timeTableState } from '../Component/store';
import { useRecoilValue } from 'recoil';
const hourData = Array.from({ length: 13 }, (i, j) => j + 9);
const styles = () => ({
  Table: {
    '& th, td': {
      border: '1px solid rgba(224,224,224,1)',
    },
  },
});

const TimeTable = ({ classes }) => {
  const timeTableData = useRecoilValue(timeTableState);
  const [showModal, setshowModal] = useState(false);
  const [editInfo, seteditInfo] = useState({});
  const handleClose = useCallback(() => {
    setshowModal(false);
    seteditInfo({});
  }, []);

  const Edit = useCallback(
    (day, id) => {
      const { start, end, name, color } = timeTableData[day].find(
        (lectureInfo) => lectureInfo.id === id,
      );
      seteditInfo({
        dayData: day,
        startTimeData: start,
        endTimeData: end,
        lectureNameData: name,
        colorData: color,
        idNum: id,
      });
      setshowModal(true);
    },
    [timeTableData],
  );
  return (
    <>
      <TableContainer
        sx={{
          width: '100%',
          minWidth: '650px',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#f5f5f5'
        }}
      >
        <Typography variant="h2" fontSize = {40}fontWeight={5} component="div" align="center">
          TimeTable
        </Typography>
        <Button
          variant="contain"
          sx={{ float: 'right' }}
          endIcon={<AddBox />}
          onClick={() => setshowModal(true)}
        >Add course
        </Button>
        <Table className={classes.Table}>
          <TableHead>
            <TableRow>
              <TableCell align="center" width={100}>
                Time
              </TableCell>
              <TableCell align="center" width={200}>
                Mon
              </TableCell>
              <TableCell align="center" width={200}>
                Tue
              </TableCell>
              <TableCell align="center" width={200}>
                Wed
              </TableCell>
              <TableCell align="center" width={200}>
                Thur
              </TableCell>
              <TableCell align="center" width={200}>
                Fri
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hourData.map((time, index) => (
              <TableRow key={index}>
                <TableCell align="center">{`${time}:00-${
                  time + 1
                }:00`}</TableCell>
                <TimeTableRow timeNum={time} Edit={Edit} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <InputModal
        showModal={showModal}
        handleClose={handleClose}
        {...editInfo}
      />
    </>
  );
};

export default withStyles(styles)(TimeTable);
