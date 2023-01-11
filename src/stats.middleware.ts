import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { url } from 'inspector';
import * as fs from 'fs';

export function stats(req: Request, res: Response, next: NextFunction) {
  //Fájlba írás
  const ido = new Date().toISOString();
  const url = req.path;
  const adat = ido + ';' + url + '\n';
  fs.appendFile('stats.csv', adat, (err) => {
    if (err) {
      console.log('Hiba a fájl írásakor:');
      console.log(err);
    }
  });

  next();
}
