import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Employees extends BaseEntity {
@PrimaryGeneratedColumn()
id!: number;

@Column()
name!: string;

@Column()
email!: string;

@Column()
password!: string;

@Column()
department!: string;

}