import { UserEntity } from "../user.entity";

export type UserType = Omit<UserEntity, 'hashPassword'>// удаляем поле hashPassword
