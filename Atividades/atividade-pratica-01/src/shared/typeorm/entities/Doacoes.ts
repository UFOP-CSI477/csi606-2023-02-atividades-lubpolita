import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => Pessoas)
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: Pessoas;

  @Column()
  local_id: string;

  @ManyToOne(() => LocaisColeta)
  @JoinColumn({ name: 'local_id' })
  local: LocaisColeta;

  @Column()
  data: string;

  @Column()
  create_at: string;

  @Column()
  update_at: string;
}
