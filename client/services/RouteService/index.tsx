type Route = Readonly<{
  pages: {
    signIn: {
      title: 'SignIn';
      redirectTo: '/signin?act=login';
      queries: 'login' | 'join' | 'restore';
    };
  };
}>;

type Pages = keyof Route['pages'];
type SignInRoute = Route['pages']['signIn'];

interface IRouteServiceWatch {
  page: Pages;
  query: SignInRoute['queries'];
}

type ISupportQueriesItem = {
  redirectTo: SignInRoute['redirectTo'];
  queries: Array<SignInRoute['queries']>;
};

type ISupportQueriesList = {
  pages: {
    [K in Pages]: ISupportQueriesItem;
  };
};

export class RouteService {
  public static readonly supportQueries: ISupportQueriesList = {
    pages: {
      signIn: {
        redirectTo: '/signin?act=login',
        queries: ['login', 'join', 'restore'],
      },
    },
  };

  public static watch({ page, query }: IRouteServiceWatch, cb: () => void) {
    if (!this.supportQueries.pages[page].queries.includes(query)) {
      cb();
    }
  }
}
