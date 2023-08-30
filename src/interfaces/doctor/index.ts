import { AppointmentInterface } from 'interfaces/appointment';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface DoctorInterface {
  id?: string;
  name: string;
  specialty: string;
  experience?: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  organization?: OrganizationInterface;
  _count?: {
    appointment?: number;
  };
}

export interface DoctorGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  specialty?: string;
  organization_id?: string;
}
