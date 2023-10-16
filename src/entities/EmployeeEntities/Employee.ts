import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    BaseEntity,
    ManyToMany,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import { Meeting } from '../MeetingEntities/Meeting';
import { Tasks } from '../TasksEntites/Tasks';
import { ContactInfo } from '../ContactInfoEntities/ContaInfo';

@Entity()
export class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Employee, (employee) => employee.id, { onDelete: 'SET NULL' })
    @JoinColumn()
    manager: number;

    @ManyToMany(
        () => Meeting,
        (meeting) => {
            meeting.atendees;
        },
    )
    meetings: Array<Meeting>;

    @OneToOne(() => ContactInfo, (contact) => contact.id, { onDelete: 'CASCADE' })
    @JoinColumn()
    contactInfo: ContactInfo;

    @OneToMany(() => Tasks, (tasks) => tasks.id, { onDelete: 'SET NULL' })
    @JoinColumn()
    tasks: Array<Tasks>;
}
