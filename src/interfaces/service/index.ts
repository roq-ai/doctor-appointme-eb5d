import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  description?: string;
  cost?: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  billing?: string;
  invoice?: string;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
  billing?: string;
  invoice?: string;
}
