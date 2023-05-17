import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    // FormControl,
    // FormControlLabel,
    // FormLabel,
    // MenuItem,
    // Radio,
    // RadioGroup,
    TextField,
  } from '@mui/material';
  import React, { useCallback } from 'react';
  import { Controller, useForm } from 'react-hook-form';
  import { useRecoilState } from 'recoil';
  import { timeTableState } from '../Component/store';
  import { v4 as uuidv1 } from 'uuid';
  import { useEffect } from 'react';
  
//   const timeOptions = new Array(12).fill(null).map((e, i) => ({
//     value: i + 9,
//     label: i + 9,
//   }));
  
//   const checkOverLap = (A, B) =>
//     B.start < A.start ? B.end > A.start : B.start < A.end;
  
  function InputModal({
    showModal,
    handleClose,
    dayData = 'mon',
    startTimeData = 9,
    endTimeData = 10,
    lectureNameData = '',
    colorData = '#FFFFFF',
    idNum,
  }) {
    const {
      formState: { errors },
      control,
      getValues,
      handleSubmit,
      reset,
    } = useForm();
    const [timeTableData, setttimeTableData] = useRecoilState(timeTableState);
    useEffect(() => {
      if (showModal) {
        reset({
          lecturename: lectureNameData,
          day: dayData,
          startTime: startTimeData,
          endTime: endTimeData,
          lectureColor: colorData,
        });
      }
    }, [
      colorData,
      dayData,
      endTimeData,
      lectureNameData,
      reset,
      showModal,
      startTimeData,
    ]);
    //timetable API call 해서 정보 가져오기
    const Submit = useCallback(
      ({ lectureName, day, startTime, endTime, lectureColor }) => {
        const data = {
          start: startTime,
          end: endTime,
          name: lectureName,
          color: lectureColor,
          id: uuidv1(),
        };
  
        setttimeTableData((oldTimeData) => ({
          ...oldTimeData,
          [day]: [...oldTimeData[day], data],
        }));
  
        handleClose();
      },
      [handleClose, setttimeTableData, timeTableData],
    );
  
    const Edit = useCallback(
      ({ lectureName, day, startTime, endTime, lectureColor }) => {
        const filteredDayData = [
          ...timeTableData[dayData].filter((data) => data.id !== idNum),
        ];
  
        const newTimeTableData = {
          ...timeTableData,
          [dayData]: filteredDayData,
        };
        const newDayData = [
          ...newTimeTableData[day],
          {
            start: startTime,
            end: endTime,
            id: idNum,
            name: lectureName,
            color: lectureColor,
          },
        ];
  
        setttimeTableData({
          ...newTimeTableData,
          [day]: newDayData,
        });
  
        handleClose();
      },
      [dayData, handleClose, idNum, setttimeTableData, timeTableData],
    );
    return (
      <Dialog open={showModal} onClose={handleClose}>
        <form onSubmit={handleSubmit(idNum ? Edit : Submit)}>
          <DialogTitle align="center"> 강의 정보 입력</DialogTitle>
          <DialogContent style={{ width: '400px' }}>
            <Controller
              control={control}
              name="lectureName"
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.lectureName}
                  style={{ marginTop: '30px', width: '350px' }}
                  autoComplete="off"
                  label="Course Number"
                />
              )}
            />
            {errors.lectureName?.type === 'required' && (
              <p style={{ color: '#d32f2f' }}>You should type course number to add course</p>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
  
  export default InputModal;
  