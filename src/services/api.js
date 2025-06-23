import axios from 'axios';

const api = axios.create({
  baseURL: 'http://leoproti.com.br:8004'
});

export const getEstudantes = async () => {
  const res = await api.get('/alunos');
  return res.data;
};

export const postEstudante = async (estudante) => {
  await api.post('/alunos', estudante);
};

export const deleteEstudante = async (id) => {
  await api.delete(`/alunos/${id}`);
};
