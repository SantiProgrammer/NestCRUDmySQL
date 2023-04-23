import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      status: 'success',
      message: 'ruta base en el puerto 8080',
    };
  }
}
