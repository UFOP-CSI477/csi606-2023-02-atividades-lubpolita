import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Cidades')
export class Cidades {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  estado_id: string;

  @Column()
  create_at: string;

  @Column()
  update_at: string;
}
