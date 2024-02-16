import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cidades } from './Cidades';

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

  @OneToMany(() => Cidades, cidade => cidade.estado_id)
  doacoes: Cidades[];
}
