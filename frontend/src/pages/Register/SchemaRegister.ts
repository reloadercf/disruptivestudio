import { z } from 'zod';

export const SchemaRegister = z
  .object({
    username: z.string().trim().min(2, { message: 'Complete your name' }),
    email: z.coerce
      .string()
      .email({ message: 'Email invalid' })
      .min(5, { message: 'Complete your email' })
      .toLowerCase(),
    password: z
      .string()
      .min(5, { message: 'Password must have 5 elements' })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, {
        message: 'Remember use uppercase letter and number ',
      }),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ['repeatPassword'],
  });
