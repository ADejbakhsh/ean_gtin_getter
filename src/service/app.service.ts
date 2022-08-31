import { Injectable } from '@nestjs/common';
import axios from 'axios';
import countryCodeBar from './codebar.json';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async searchEngine(ean: number): Promise<string> {
    // get country
    const option = {
      rejectUnauthorized: false,
      auth: {
        username: process.env.PROXY_USER,
        password: process.env.PROXY_PASS,
      },
      host: process.env.PROXY_URL,
      port: Number(process.env.PROXY_PORT),
    };

    // seek google
    const response = await axios.get(process.env.SEARCH_ENGINE, option);

    //
    console.log(response);
    return response.data;
  }

  countryOfcodeBar(codebar: number) {
    
  }
}
