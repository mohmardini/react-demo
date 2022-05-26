import axios from 'axios';
const baseURL =
  'https://pulse.dev.sirenanalytics.com/pulseservices/pulse_controller/';

interface SignUpRequest {
  username: string;
  email: string;
  password: string;
  dob: Date;
  skill: number;
  agreed: boolean;
}

interface SignUpResponse {
  ok: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
  id: number;
  token_type: string;
  expires_in: number;
}

export const login = async (values: LoginRequest) => {
  return await axios
    .post(baseURL + 'auth', {
      username: values.email,
      password: values.password,
    })
    .then((response: any) => response.json())
    .then((response: LoginResponse) => response.access_token);
};

export const signup = async (values: SignUpRequest) => {
  return await axios
    .post(baseURL + 'signup', {
      username: values.email,
      password: values.password,
    })
    .then((response: any) => response.json())
    .then((response: SignUpResponse) => response.ok);
};
