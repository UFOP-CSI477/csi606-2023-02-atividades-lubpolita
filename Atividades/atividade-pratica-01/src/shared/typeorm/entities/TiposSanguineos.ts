import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
