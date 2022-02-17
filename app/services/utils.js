import Service from '@ember/service';

export default class UtilsService extends Service {

    generateRandomNumbers(endRange){
        return Math.floor((Math.random() * endRange) + 1);
    }
}
