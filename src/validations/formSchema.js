import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter a name for the order')
    .min(2, 'name must be at least 2 characters'),

  email: yup.string().email('Email address must be valid'),

  size: yup.string().oneOf(['XL', 'L', 'M', 'S'], 'Please select a size'),

  sauce: yup
    .string()
    .oneOf(
      ['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'],
      'Please Choose a sauce'
    ),

  top1: yup.boolean(),
  top2: yup.boolean(),
  top3: yup.boolean(),
  top4: yup.boolean(),
  top5: yup.boolean(),
  top6: yup.boolean(),
  top7: yup.boolean(),
  top8: yup.boolean(),
  top9: yup.boolean(),
  top10: yup.boolean(),
  top11: yup.boolean(),
  top12: yup.boolean(),
  top13: yup.boolean(),
  top14: yup.boolean(),

  special: yup.string().trim(),
});

export default formSchema;
