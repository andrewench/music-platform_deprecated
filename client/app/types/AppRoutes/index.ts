export type TApiMainEndpoint = '/api';
export type TApiEndpoints = '/login' | '/join' | '/users';
export type TApiRoutes = keyof Record<
  `${TApiMainEndpoint}${TApiEndpoints}`,
  never
>;
