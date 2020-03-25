import React,{useState} from 'react';
import {View, Image, Text,ActivityIndicator} from 'react-native';
import {LoginProps} from './types';
import InputText from '../../components/text-input';
import globalStyleCss,{COLOR} from '../../utility/global-style.css'
import Button from '../../components/button';
import {NavigationEvents} from 'react-navigation'
import {login} from '../../api/login'
import loader from '../../components/loader'
import {useDispatch} from 'react-redux';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';


 
export default function TelaLogin(props:LoginProps) {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [state,setState] = useState({
      filial: '0005',
      caixa: '007',
      garcom: '',
      senha: '',
  })

 async function handleLogin(){
   const response = await login(state)
   if(response.data.messages){
     // se der erro
     return console.error('Failed to login')
   }
   //se não der erro
   console.log('DEU BOM');
   dispatch(RepositoriesActions.loadSuccess(response.data.dataset.ParamsGroupRepository))
   navigation.navigate('TelaCardapio')

  console.log('retorno API',response)
   
 }
  return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', padding: 40}}>
          <Image
            style={{
              width: '70%',
              height: '20%',
              alignSelf: 'center',
              marginBottom: 16,
            }}
            source={require('../../assets/odhen_pos.png')}
            resizeMode="center"
          />
          <Text
            style={{
              fontFamily: 'OpenSans',
              color: '#262626',
              fontSize: 20, marginBottom: 32, textAlign: 'center'
            }}>

                {'Bem vindo ao\nodhen POS'}
            </Text>
            <View>
            <InputText
                placeholder="E-mail ou operador*"
                value={null}
                onChangeText={garcom => setState({...state,garcom})}
                onSubmitEditing={null}
                keyboardType="email-address"
              />
               <View style={{paddingTop: 16}}>
             
              <InputText
                placeholder="Senha*"
                ref={ref => (null)}
                value={null}
                secureTextEntry
                onSubmitEditing={null}
                onChangeText={senha => setState({...state,senha})}
              />
            </View>
            
            <Button
              style={{
                marginTop: 40,
              }}
              onPress={()=> handleLogin()}
              title="Entrar"
            />
           
                
            </View>
        </View>
      </View>
    );
  }
