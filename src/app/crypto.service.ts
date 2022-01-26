import { Injectable } from '@angular/core';
import * as crypto from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  static algorithm = 'aes-256-ctr';
  static secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
  static iv = crypto.randomBytes(16);  

  constructor() { }

  static encrypt(text:string): Object {
    
    const cipher = crypto.createCipheriv(this.algorithm, this.secretKey, this.iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: this.iv.toString('hex'),
        content: encrypted.toString('hex')
    };
  }
}