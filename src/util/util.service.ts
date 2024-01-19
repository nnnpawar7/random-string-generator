import { Injectable } from '@nestjs/common';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

@Injectable()
export class UtilService {
    /**
     * getRandomWords
    */
   public getRandomWords():string {
        return lorem.generateWords(10);

    }
}
