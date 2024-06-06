import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';
import { Grant } from '../entities/Grant';
import { AppDataSource } from '../data-source';

@Resolver(() => Grant)
export class GrantResolver {
  private grantRepository = AppDataSource.getRepository(Grant);

  @Query(() => [Grant])
  async grants() {
    return this.grantRepository.find();
  }

  @Mutation(() => Grant)
  async updateGrantStatus(@Arg('id', () => Int) id: number, @Arg('status') status: string) {
    const grant = await this.grantRepository.findOneBy({ id });
    if (!grant) throw new Error('Grant not found!');
    grant.status = status;
    await this.grantRepository.save(grant);
    return grant;
  }
}