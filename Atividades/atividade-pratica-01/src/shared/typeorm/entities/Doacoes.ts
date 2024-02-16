import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LocaisColeta } from './LocaisColeta';
import { Pessoas } from './Pessoas';

@Entity('Doacoes')
export class Doacoes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pessoa_id: string;

  @ManyToOne(() => LocaisColeta)
  @JoinColumn({ name: 'local_id' })
  local_id: LocaisColeta;

  @Column()
  data: string;

  @Column()
  create_at: string;

  @Column()
  update_at: string;

  @OneToMany(() => Pessoas, pessoa => pessoa.cidade_id)
  pessoas: Pessoas[];
}
