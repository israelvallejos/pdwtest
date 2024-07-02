import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointments, deleteAppointment } from '../redux/AppointmentsSlice';
import AppointmentForm from './AppointmentForm';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #f8f9fa;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const FilterContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const FilterInput = styled.input`
  display: block;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
`;

const AppointmentList = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments);
  const [showForm, setShowForm] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const handleAddAppointment = () => {
    setCurrentAppointment(null);
    setShowForm(true);
  };

  const handleEditAppointment = (appointment) => {
    setCurrentAppointment(appointment);
    setShowForm(true);
  };

  const handleDeleteAppointment = (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta cita?')) {
      dispatch(deleteAppointment(id));
    }
  };

  const handleFormSubmit = () => {
    setShowForm(false);
    dispatch(fetchAppointments());
  };

  const filteredAppointments = filterDate
    ? appointments.filter((appointment) => appointment.date === filterDate)
    : appointments;

  return (
    <Container>
      <Title>Lista de Citas</Title>
      <FilterContainer>
        <FilterLabel>Filtrar citas por fecha</FilterLabel>
        <FilterInput
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          placeholder="Seleccione una fecha"
        />
      </FilterContainer>
      <Button onClick={handleAddAppointment}>Agregar Cita</Button>
      {showForm && <AppointmentForm appointment={currentAppointment} onFormSubmit={handleFormSubmit} />}
      <List>
        {filteredAppointments.map((appointment) => (
          <ListItem key={appointment.id}>
            <div>
              {appointment.name} - {appointment.date}
            </div>
            <div>
              <button onClick={() => handleEditAppointment(appointment)}>Editar</button>
              <button onClick={() => handleDeleteAppointment(appointment.id)}>Eliminar</button>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AppointmentList;
