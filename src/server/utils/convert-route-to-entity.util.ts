const mapping: Record<string, string> = {
  appointments: 'appointment',
  doctors: 'doctor',
  insurances: 'insurance',
  organizations: 'organization',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
