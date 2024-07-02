import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAppointment, editAppointment } from '../redux/AppointmentsSlice';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const AppointmentForm = ({ appointment, onFormSubmit }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (appointment) {
      setName(appointment.name);
      setDate(appointment.date);
      setTime(appointment.time);
      setDescription(appointment.description);
    }
  }, [appointment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (appointment) {
      await dispatch(editAppointment({ id: appointment.id, name, date, time, description }));
    } else {
      await dispatch(addAppointment({ name, date, time, description }));
    }
    setName('');
    setDate('');
    setTime('');
    setDescription('');
    onFormSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Nombre del Cliente</Label>
        <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="date">Fecha</Label>
        <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="time">Hora</Label>
        <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Descripción</Label>
        <TextArea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required></TextArea>
      </FormGroup>
      <Button type="submit">{appointment ? 'Editar Cita' : 'Agregar Cita'}</Button>
    </Form>
  );
};

export default AppointmentForm;
