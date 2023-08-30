import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  status: yup.string().required(),
  doctor_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
