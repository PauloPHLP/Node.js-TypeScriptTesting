interface TechObject {
  title: string,
  experience: number
}

interface CreateUserData {
  name?: string;
  email: string;
  senha: string;
  techs: Array<string | TechObject>;
}

export default function createUser({ name = '', email, senha, techs }: CreateUserData) {
  const user = {
    name,
    email,
    senha,
    techs
  }
  

  return user;
}
