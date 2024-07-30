import axios, { AxiosRequestConfig } from "axios";
import { IVerifyTokenRepository } from "./IVerifyTokenRepository";
import { TS_AUTH_BASE_PATH } from "../../config/Config";
import { TS_AUTH_TOKEN } from "../../config/Secrets";

export class VerifyTokenRepository implements IVerifyTokenRepository {
  async verify(authToken: string, userCode: string): Promise<void> {
    console.log(authToken + " " + userCode);
    

    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
        "x-service-token": TS_AUTH_TOKEN,
      },
    };

    return await axios
      .post(
        `${TS_AUTH_BASE_PATH}/verify`,
        {
          key: authToken,
          userCode: userCode,
        },
        config
      )
      .then(() => console.log("Token is valid"))
      .catch((error) => {
        console.log("Token expired ");
        throw new Error("Token expired");
      });
  }
}
