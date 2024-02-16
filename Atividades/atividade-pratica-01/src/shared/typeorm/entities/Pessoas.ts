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
import { TiposSanguineos } from './TiposSanguineos';

@Entity('Pessoas')
export class Pessoas {
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
  rg: string;

  @Column()
  cidade_id: string;

  @ManyToOne(() => Cidades)
  @JoinColumn({ name: 'cidade_id' })
  cidade: Cidades;

  @Column()
  tipo_id: string;

  @ManyToOne(() => TiposSanguineos)
  @JoinColumn({ name: 'tipo_id' })
  tipo: TiposSanguineos;

  @Column()
  create_at: string;

  @Column()
  update_at: string;

  @OneToMany(() => Doacoes, doacao => doacao.pessoa_id)
  doacoes: Doacoes[];
}
