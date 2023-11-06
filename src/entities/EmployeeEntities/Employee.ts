import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    BaseEntity,
    ManyToMany,
    OneToMany,
    ManyToOne,
    JoinTable,
} from 'typeorm';
import { Meeting } from '../MeetingEntities/Meeting';
import { Task } from '../TasksEntites/Tasks';
import { ContactInfo } from '../ContactInfoEntities/ContaInfo';

@Entity()
export class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Employee, (employee) => employee.direcReports, { onDelete: 'SET NULL' })
    manager: number;

    @OneToMany(() => Employee, (employee) => employee.manager)
    direcReports: Array<Employee>;

    @ManyToMany(
        () => Meeting,
        (meeting) => {
            meeting.atendees;
        },
    )
    @JoinTable({ name: 'meetings_employees' })
    meetings: Array<Meeting>;

    @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.employee, { onDelete: 'CASCADE' })
    contactInfo: ContactInfo;

    @OneToMany(() => Task, (tasks) => tasks.employee, { onDelete: 'SET NULL' })
    tasks: Array<Task>;
}
