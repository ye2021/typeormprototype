import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class AppealHistory {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    appealNumber: number

    @Column()
    appeal_type: string


}
