import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from '../EmployeeEntities/Employee';

@Entity()
export class Tasks extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Employee, (employee) => employee.id, { onDelete: 'SET NULL' })
    @JoinColumn()
    employeeId: number;
}
