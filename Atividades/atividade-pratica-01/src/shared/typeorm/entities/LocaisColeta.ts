import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cidades } from './Cidades';
import { Doacoes } from './Doacoes';

@Entity('LocaisColeta')
export class LocaisColeta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  rua: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  cidade_id: string;

  @ManyToOne(() => Cidades)
  @JoinColumn({ name: 'cidade_id' })
  cidade: Cidades;

  @Column()
  create_at: string;

  @Column()
  update_at: string;

  @OneToMany(() => Doacoes, doacao => doacao.local_id)
  doacoes: Doacoes[];
}
