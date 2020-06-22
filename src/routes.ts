import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'paulo.phpl@outlook.com', 
    senha: '123123',
    techs: [
      'NodeJs', 
      'ReactJs', 
      'React Native',
      { title: 'JavaScript', experience: 100}
    ]
  });

  return response.json({ message: 'Hello, World!' });
};
