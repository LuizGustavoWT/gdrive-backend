import { Prisma } from '@prisma/client';
export declare class User implements Prisma.UserUncheckedCreateInput {
    id?: string;
    name: string;
    username: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
