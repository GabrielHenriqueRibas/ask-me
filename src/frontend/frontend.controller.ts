import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import * as path from 'path';

@Controller()
export class FrontendController {
    @Get()
    home(@Res() res: Response) {
        res.sendFile(path.join(process.cwd(), 'views', 'index.html'));
    }

    @Get('duvidas.html')
    duvidas(@Res() res: Response) {
        res.sendFile(path.join(process.cwd(), 'views', 'duvidas.html'));
    }

    @Get('nova-duvida.html')
    novaDuvida(@Res() res: Response) {
        res.sendFile(path.join(process.cwd(), 'views', 'nova-duvida.html'));
    }
}
