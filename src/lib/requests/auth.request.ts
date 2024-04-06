import { IUpdateUser } from 'src/model/auth';
import client from '../client';

export function login({ email }: { email: string }) {
  return client.post('/auth/login', { email });
}

export function validateOTP({ email, otp }: { email: string; otp: string }) {
  return client.post('/auth/authenticate', { email, otp });
}

export function getUserDetails() {
  return client.get('/auth/current-user');
}

export function updateUserDetails(payload: Partial<IUpdateUser>) {
  return client.patch('/auth/update-user', payload);
}

export function logoutUser() {
  return client.get('/auth/logout');
}
