import { Mutation, Query, Resolver } from "type-graphql";


@Resolver()
export class AppointmentsResolver {
  
  @Query(() => String)
  async helloWorld() {
    return 'Olá Mundo';
  }

  @Mutation(() => Boolean)
  async createAppointment() {
    return true;
  }
}
