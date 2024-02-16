import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  create_at: string;

  @Column()
  update_at: string;
}
