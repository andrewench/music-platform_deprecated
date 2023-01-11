type MainApiRouteType = '/api';
type ApiEndpointsType = '/login' | '/join' | '/users';
export type RoutesType = keyof Record<
  `${MainApiRouteType}${ApiEndpointsType}`,
  never
>;
