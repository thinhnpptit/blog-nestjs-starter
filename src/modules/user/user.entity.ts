// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate, IsEmail, Min } from 'class-validator';
import moment from 'moment';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Expose()
  name: string;

  @Column({ unique: true })
  @IsEmail()
  @Expose()
  email: string;

  @Column()
  @Min(0)
  @Exclude()
  password: string;

  @Column({
    type: Date,
    default: moment(new Date()).format('YYYY-MM-DD HH:ss'),
    nullable: true,
  })
  @IsDate()
  createdAt: Date;

  @Column({
    type: Date,
    default: moment(new Date()).format('YYYY-MM-DD HH:ss'),
    nullable: true,
  })
  @IsDate()
  updatedAt: Date;
}
