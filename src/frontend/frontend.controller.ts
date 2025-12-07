import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import * as path from 'path';

@Controller()
export class FrontendController {
  @Get()
  home(@Res() res: Response) {
    return res.sendFile(path.join(__dirname, '..', '..', 'views', 'index.html'));
  }

  @Get('duvidas.html')
  duvidas(@Res() res: Response) {
    return res.sendFile(path.join(__dirname, '..', '..', 'views', 'duvidas.html'));
  }

  @Get('nova-duvida.html')
  novaduvidas(@Res() res: Response) {
    return res.sendFile(path.join(__dirname, '..', '..', 'views', 'nova-duvida.html'));
  }
}
