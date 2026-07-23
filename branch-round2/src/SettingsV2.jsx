import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

const SettingsSchema = z.object({
  displayName: z.string().min(3, 'Display name must be at least 3 characters'),
  email: z.string().email('Invalid email'),
  receiveNewsletter: z.boolean().optional(),
});

export default function SettingsV2({onSubmit}){
  const {register, handleSubmit, formState:{errors}} = useForm({resolver: zodResolver(SettingsSchema)});
  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="settings-form">
      <label>
        Display name
        <input {...register('displayName')} aria-label="displayName" />
        {errors.displayName && <div role="alert">{errors.displayName.message}</div>}
      </label>

      <label>
        Email
        <input {...register('email')} aria-label="email" />
        {errors.email && <div role="alert">{errors.email.message}</div>}
      </label>

      <label>
        <input type="checkbox" {...register('receiveNewsletter')} /> Receive newsletter
      </label>

      <button type="submit">Save</button>
    </form>
  );
}
