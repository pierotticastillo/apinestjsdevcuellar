// Una entidad es una epresentación en código de la tabla de la base de datos que va a utilizar ORM

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  code: string;

  @Column({type: 'varchar', length: 255})
  description: string;

	@Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
