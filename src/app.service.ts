import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async testFetch(): Promise<string> {
    const option = {
      rejectUnauthorized: false,
      auth: {
        username: process.env.PROXY_USER,
        password: process.env.PROXY_PASS,
      },
      host: process.env.PROXY_URL,
      port: Number(process.env.PROXY_PORT),
    };

    const response = await axios.get('http://lumtest.com/myip.json', option);
    console.log(response);
    return response.data;
  }
}
