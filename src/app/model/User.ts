import {
  Min,
  Max,
  IsInt,
  IsEmail,
  MinLength,
  MaxLength,
} from 'class-validator';
import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', { length: 255 })
  @MinLength(3)
  @MaxLength(255)
  fullName: string;

  @Column()
  @IsInt()
  @Min(0)
  @Max(200)
  age: number;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
