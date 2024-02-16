import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Estados } from './Estados';
import { LocaisColeta } from './LocaisColeta';
import { Pessoas } from './Pessoas';

@Entity('Cidades')
export class Cidades {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @ManyToOne(() => Estados)
  @JoinColumn({ name: 'estado_id' })
  estado_id: Estados;

  @Column()
  create_at: string;

  @Column()
  update_at: string;

  @OneToMany(() => LocaisColeta, local => local.cidade_id)
  locaisColeta: LocaisColeta[];

  @OneToMany(() => Pessoas, pessoa => pessoa.cidade_id)
  pessoas: Pessoas[];
}
