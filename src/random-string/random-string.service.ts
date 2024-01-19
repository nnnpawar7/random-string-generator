import { Injectable } from '@nestjs/common';
import { UtilService } from '../util/util.service';

@Injectable()
export class RandomStringService {
    constructor(private util: UtilService){}
    public getRandomWords(): string {
        return this.util.getRandomWords()
    }
}
