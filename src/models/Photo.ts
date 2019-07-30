import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Post {

    constructor(title: string, description: string, filename: string) {
        this.title = title;
        this.description = description;
        this.filename = filename;
        this.views = 0;
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    filename: string;

    @Column()
    views: number;

    @CreateDateColumn({type: "timestamp"})
    createdAt!: Date;

    @UpdateDateColumn({type: "timestamp"})
    updatedAt!: Date;
}