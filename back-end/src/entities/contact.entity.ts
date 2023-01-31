import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn} from "typeorm"
import { Client } from "./client.entity";
@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    readonly id?: string;

    @Column({length: 60})
    name?: string;

    @Column({ length: 60, unique: true})
    email?: string;

    @Column({length: 53})
    telephone?: number;

    @CreateDateColumn()
    createdAt?: Date;

    @ManyToOne(() => Client, {eager: true})
    @JoinColumn()
    client?: Client;

}