import { Authentication } from "./authentication";

export interface AuthenticationRepository {
  findOne(authentication: Authentication): Promise<Authentication>;
  findAll(): Promise<Authentication[]>;
}
