import { Member } from "../domains/Members/member";
import { MemberRepository } from "../domains/Members/member.repository";
import { fsync } from "fs";
export class InMemoryMemberRepository implements MemberRepository {
  private dataSource: any;

  findAll(): Promise<Member[]> {
    throw new Error("Method not implemented.");
  }
  findByOne(key: string): Promise<Member> {
    throw new Error("Method not implemented.");
  }
  save(member: Member): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(key: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
