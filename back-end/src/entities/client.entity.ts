import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Contact } from "./contact.entity";

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  readonly id?: string;

  @Column({ length: 60 })
  name?: string;

  @Column()
  telephone?: string;

  @Column({ length: 60, unique: true })
  email?: string;

  @Column({ length: 150 })
  @Exclude()
  password?: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => Contact, (contact) => contact.client, { eager: true })
  @JoinColumn()
  contact?: Contact[];
}
