import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  cost: yup.number().integer().nullable(),
  billing: yup.string().nullable(),
  invoice: yup.string().nullable(),
  organization_id: yup.string().nullable().required(),
});
