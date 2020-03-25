import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import {login} from '../../api/login';
import {NavigationEvents} from 'react-navigation';
import {connect} from 'react-redux';
import {ApplicationState} from '../../store';
import {Repository} from '../../store/ducks/repositories/types';
import {bindActionCreators, Dispatch} from 'redux';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import {Provider} from 'react-redux';
import store from '../../store';
import Header from '../../components/header';
import NavigationScreenProp from 'react-navigation';
import Icon from '../../components/icon';
import ListaMultipla from '../../components/lista';
import {StyleSheet} from 'react-native';
interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

export class TelaCardapio extends Component<Props> {
  state = {
    filial: '0005',
    caixa: '007',
    garcom: '999',
    senha: '',
  };
  componentDidMount() {
    const {loadRequest} = this.props;
    loadRequest();
  }

  render() {
    const styles = StyleSheet.create({
      textArea: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        fontFamily: 'OpenSans-Italic',
      },
      viewAerea: {
        paddingLeft: 16,
        marginBottom: 140,
      },
    });

    const {repositories} = this.props;
    console.log('props', this.props);
    return (
      <View>
        <Header
          title="Cardápio"
          titleStyle={{alignItems: 'flex-end'}}
          hideBorder
          Action1={
            <Icon
              onPress={() => {
                this.props.navigation.goBack();
              }}
              source={require('../../assets/arrow-left.png')}
            />
          }
        />
        <View style={styles.viewAerea}>
          <FlatList
            data={repositories}
            renderItem={({item}) => (
              <Text style={styles.textArea}>{item.NMGRUPO}</Text>
            )}
            keyExtractor={item => item.CDGRUPO}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.repositories,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TelaCardapio);
