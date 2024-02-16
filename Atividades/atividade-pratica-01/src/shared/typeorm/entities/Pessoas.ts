import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  tipo_id: string;

  @Column()
  create_at: string;

  @Column()
  update_at: string;
}
