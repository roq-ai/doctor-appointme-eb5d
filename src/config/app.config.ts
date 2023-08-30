interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Insurance Provider'],
  tenantName: 'Organization',
  applicationName: 'Doctor Appointment System v3',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View list of doctors and services', 'Book an appointment with a doctor', 'Manage appointments.'],
  ownerAbilities: [
    'Manage organizations',
    'Invite users to the system',
    'Add doctors and services',
    'Manage doctor and service details',
    'Manage appointments',
    'Add insurance plans',
    'Manage insurance plan details',
    'View doctors and services',
    'Book appointments',
    'Manage own appointments',
  ],
};
