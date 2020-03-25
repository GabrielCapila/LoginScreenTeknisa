import {NavigationScreenProp} from 'react-navigation';
import {KeyboardType} from 'react-native';
interface LoginProps {
  navigation: NavigationScreenProp<any>;
  setDataset(dataset: any): void;
  toggleLoading(): void;

  setOperadorSenha(operador: string, senha: string): void;
  toggleLoading(): void;
  openInputModal(
    title: string,
    onConfirm: (a: string) => void,
    keyboardType: KeyboardType,
    startupValue?: string,
    confirmName?: string,
  ): void;
  openConfirmation(title: string, message?: string, a?: any, b?: any): void;
}

interface LoginState {
  email: string;
  senha: string;
  count: number;
}
