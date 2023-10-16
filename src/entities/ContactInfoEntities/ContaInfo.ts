import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from '../EmployeeEntities/Employee';

@Entity()
export class ContactInfo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    phone: string;

    @Column({ unique: true })
    email: string;

    @OneToOne(() => Employee, (employee) => employee.id, { onDelete: 'CASCADE' })
    @JoinColumn()
    employee: number;
}
