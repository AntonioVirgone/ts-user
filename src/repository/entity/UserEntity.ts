export type UserEntity = {
    username: string,
    password?: string,
    userCode: string,
    role: string,
    app?: string,
    createdAt?: Date
}

export type NullableUserEntity = UserEntity | null;