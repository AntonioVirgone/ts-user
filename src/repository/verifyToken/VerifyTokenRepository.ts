import axios, { AxiosRequestConfig } from "axios";
import { IVerifyTokenRepository } from "./IVerifyTokenRepository";
import { TS_AUTH_BASE_PATH } from "../../config/Config";
import { TS_AUTH_TOKEN } from "../../config/Secrets";

export class VerifyTokenRepository implements IVerifyTokenRepository {
  async verify(authToken: string, userCode: string): Promise<void> {
    try {
      const config: AxiosRequestConfig = {
        headers: {
          "Content-Type": "application/json",
          "x-service-token": TS_AUTH_TOKEN,
        },
      };
      return await axios.post(
        `${TS_AUTH_BASE_PATH}/verify`,
        {
          key: authToken,
          userCode: userCode,
        },
        config
      );
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
