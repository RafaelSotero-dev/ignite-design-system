import { Heading } from './components/Heading';
import { Text } from './components/Text';
import './styles/global.css';
import reactIcon from './assets/react-2.svg';
import { TextInput } from './components/Input';
import { Envelope, LockSimple } from 'phosphor-react';
import { CheckBox } from './components/CheckBox';
import { Button } from './components/Button';

function App() {
  return (
    <main className="bg-black-900 h-[100vh] flex items-center justify-center">
      <form className="flex flex-col items-center justify-center w-[30%]">
        <div className="flex flex-col items-center justify-center mb-8 w-full">
          <img
            src={`${reactIcon}`}
            alt="React Icon"
            className="w-[87.76px] h-[100px] mb-8"
          />
          <Heading size="lg" asChild={true}>
            <h1>Ignite Lab</h1>
          </Heading>
          <Text size="md" asChild={true}>
            <p className="mt-[11px]">Faça login e comece a usar!</p>
          </Text>
        </div>
        <div className="flex flex-col items-start justify-center w-full mb-6">
          <Text size="md" asChild={true}>
            <label htmlFor="email" className="text-white cursor-pointer mb-2">
              Endereço de e-mail
            </label>
          </Text>
          <TextInput.root>
            <TextInput.icon>
              <Envelope />
            </TextInput.icon>
            <TextInput.input
              type="email"
              placeholder="johndoe@example.com"
              id="email"
            />
          </TextInput.root>
        </div>
        <div className="flex flex-col items-start justify-center w-full mb-6">
          <Text size="md" asChild={true}>
            <label htmlFor="password" className="text-white cursor-pointer mb-2">
              Sua senha
            </label>
          </Text>
          <TextInput.root>
            <TextInput.icon>
              <LockSimple />
            </TextInput.icon>
            <TextInput.input
              type="password"
              placeholder="*************"
              id="password"
            />
          </TextInput.root>
        </div>
        <div className="flex items-center justify-start w-full mb-6 gap-2">
          <CheckBox id="checkbox" />
          <Text size="sm" asChild={true}>
            <label htmlFor="checkbox" className="text-grey-800 cursor-pointer">
              Lembrar de mim por 30 dias!
            </label>
          </Text>
        </div>
        <Button asChild={true}>
          <button className="mb-6">Entrar na plataforma</button>
        </Button>
        <footer className="flex flex-col items-center justify-center">
          <Text size="sm" asChild={true}>
            <p className="mb-6 underline cursor-pointer">Esqueceu sua senha?</p>
          </Text>
          <Text size="sm" asChild={true}>
            <p className="underline cursor-pointer">
              Não possui conta? Cria uma agora!
            </p>
          </Text>
        </footer>
      </form>
    </main>
  );
}

export default App;
