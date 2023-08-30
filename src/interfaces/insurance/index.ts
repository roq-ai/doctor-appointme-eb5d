import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InsuranceInterface {
  id?: string;
  plan_name: string;
  coverage?: number;
  organization_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InsuranceGetQueryInterface extends GetQueryInterface {
  id?: string;
  plan_name?: string;
  organization_id?: string;
  user_id?: string;
}
