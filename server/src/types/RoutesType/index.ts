type MainApiRouteType = '/api';
type ApiEndpointsType = '/login' | '/join' | '/users';
type RoutesType = keyof Record<`${MainApiRouteType}${ApiEndpointsType}`, never>;
