import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Estados')
export class Estados {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  sigla: string;

  @Column()
  create_at: string;

  @Column()
  update_at: string;
}
