import * as yup from 'yup';

export const insuranceValidationSchema = yup.object().shape({
  plan_name: yup.string().required(),
  coverage: yup.number().integer().nullable(),
  organization_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
