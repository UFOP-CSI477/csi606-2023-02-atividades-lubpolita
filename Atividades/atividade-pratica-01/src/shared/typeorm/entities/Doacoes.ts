import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Doacoes')
export class Doacoes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pessoa_id: string;

  @Column()
  local_id: string;

  @Column()
  data: string;

  @Column()
  create_at: string;

  @Column()
  update_at: string;
}
