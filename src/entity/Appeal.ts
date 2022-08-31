import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Appeal {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    appealNumber: number

    @Column()
    appeal_type: string

}
