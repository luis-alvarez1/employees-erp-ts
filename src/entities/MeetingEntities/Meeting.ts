import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from '../EmployeeEntities/Employee';

@Entity()
export class Meeting extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToMany(() => Employee, (employee) => employee.meetings)
    @JoinTable({ name: 'meetings_employees' })
    atendees: Array<Employee>;
}
