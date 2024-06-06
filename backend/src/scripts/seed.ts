import { AppDataSource } from '../data-source';
import { Grant } from '../entities/Grant';

async function seed() {
  await AppDataSource.initialize();

  const grantRepository = AppDataSource.getRepository(Grant);

  const grants = [
    { name: 'Robinson Foundation Grant', foundation: 'Robinson Foundation', amount: 25000, status: 'Applied', deadline: 'January 1st', matchDate: '20 December 2024' },
    { name: 'Looking Out', foundation: 'Looking Out Foundation', amount: 100000, status: 'Rejected', deadline: 'February 1st', matchDate: '20 December 2024' },
    { name: 'Dribble Foundation Grant', foundation: 'Dribble Foundation', amount: 75000, status: 'Accepted', deadline: 'January 1st', matchDate: '20 December 2024' },
    { name: 'Walki wako Foundation Grant', foundation: 'Walki Foundation', amount: 130000, status: 'Applied', deadline: 'February 1st', matchDate: '20 December 2024' }
  ];

  await grantRepository.save(grants);
  await AppDataSource.destroy();
}

seed();