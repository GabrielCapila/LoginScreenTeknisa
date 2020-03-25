import fetchAPI, {Params, getFilter, getUrl} from '.';
import api from '../services/api';

export async function login({
  filial,
  caixa,
  garcom,
  senha,
}:{filial?:string,caixa?:string,garcom?:string,senha?:string}) {
  try{
    const response = await api.post('/OperatorRepository',JSON.stringify({
      filter: [
        getFilter('filial', filial),
        getFilter('caixa', caixa),
        getFilter('operador', garcom),
        getFilter('senha', senha),
        getFilter('version', '6.0.8'),
        getFilter('currentMode', 'M'),
      ],
      page: 0,
      itemsPerPage: 100000,
      requestType: 'FilterData',
      origin: {containerName: 'loginContainer', widgetName: 'loginWidget'},
    }),{headers:{'Content-Type': 'application/json'}});
    
    return response;
  }catch(err){
    throw new Error(err);
  }
  
}

// return new Promise((resolve, reject) => {
//   getUrl(result => {
//     let url = `${result}/OperatorRepository`;
//     let body = JSON.stringify({
//       filter: [
//         getFilter('filial', filial),
//         getFilter('caixa', caixa),
//         getFilter('operador', garcom),
//         getFilter('senha', senha),
//         getFilter('version', '6.0.8'),
//         getFilter('currentMode', 'M'),
//       ],
//       page: 0,
//       itemsPerPage: 100000,
//       requestType: 'FilterData',
//       origin: {containerName: 'loginContainer', widgetName: 'loginWidget'},
//     });
//     let options: Params = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       method: 'POST',
//       body,
//     };
//     fetchAPI(url, options)
//       .then(response => resolve(response))
//       .catch(error => reject(error));
//   });
// });