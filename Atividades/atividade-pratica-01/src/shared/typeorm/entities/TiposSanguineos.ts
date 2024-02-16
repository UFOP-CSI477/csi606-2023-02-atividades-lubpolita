import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pessoas } from './Pessoas';

@Entity('TipoSanguineo')
export class TiposSanguineos {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tipo: string;

  @Column()
  fator: string;

  @Column()
  create_at: string;

  @Column()
  update_at: string;

  @OneToMany(() => Pessoas, pessoa => pessoa.tipo_id)
  pessoas: Pessoas[];
}
