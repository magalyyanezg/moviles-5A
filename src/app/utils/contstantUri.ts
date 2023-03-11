const baseUrl = 'https://api.themoviedb.org/3';

export class ConstantUri {
  public static readonly apikey = '7e3056c8d2ecfd59e469c0e86d407034'; //este número corresponde al apikey
  public static readonly  validateWithLogin = baseUrl + '/autothentication/token0/validate_with_login';
  public static readonly  tokenNew = baseUrl +  '/autothentication/token/new';
}

