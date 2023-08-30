import { DoctorInterface } from 'interfaces/doctor';
import { InsuranceInterface } from 'interfaces/insurance';
import { ServiceInterface } from 'interfaces/service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  doctor?: DoctorInterface[];
  insurance?: InsuranceInterface[];
  service?: ServiceInterface[];
  user?: UserInterface;
  _count?: {
    doctor?: number;
    insurance?: number;
    service?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
