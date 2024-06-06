import { AppDataSource } from '../src/data-source';
import { Grant } from '../src/entities/Grant';

describe('Grant Resolver', () => {
  beforeAll(async () => {
    await AppDataSource.initialize();
  });

  afterAll(async () => {
    await AppDataSource.destroy();
  });

  it('should fetch grants', async () => {
    const grantRepository = AppDataSource.getRepository(Grant);
    const grants = await grantRepository.find();
    expect(grants).toHaveLength(4);
  });

  it('should update grant status', async () => {
    const grantRepository = AppDataSource.getRepository(Grant);
    let grant = await grantRepository.findOneBy({ id: 1 });
    if (grant) {
      grant.status = 'Approved';
      await grantRepository.save(grant);
    }
    grant = await grantRepository.findOneBy({ id: 1 });
    expect(grant?.status).toBe('Approved');
  });
});