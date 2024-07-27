export interface IVerifyTokenRepository {
    verify(authToken: string, userCode: string): Promise<void>;
}