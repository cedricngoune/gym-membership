export interface Subscription {
  username: string;
  gender: Gender;
  subscriptionDate: string;
  subscriptionType: SusbcriptionType;
  password: string;
  passwordConfirmed: string;
}
type Gender = "Male" | "Female";
type SusbcriptionType = "Premium" | "Simple" | "Advanced";
