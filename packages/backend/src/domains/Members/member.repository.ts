import { Member } from "./member";

export interface MemberRepository {
  findAll(): Promise<Member[]>;
  findByOne(key: string): Promise<Member>;
  save(member: Member): Promise<void>;
  delete(key: string): Promise<void>;
}
