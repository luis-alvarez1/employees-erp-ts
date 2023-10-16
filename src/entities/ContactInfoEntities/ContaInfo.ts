import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from '../EmployeeEntities/Employee';

@Entity()
export class ContactInfo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    phone: string;

    @Column()
    email: string;

    @OneToOne(() => Employee, (employee) => employee.id, { onDelete: 'CASCADE' })
    @JoinColumn()
    employee: number;
}
