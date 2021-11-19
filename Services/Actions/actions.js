import {DATE_SELECT} from '../Constants';

export const dateSelect=(data) =>{
    return {
        type:DATE_SELECT,
        data:data
    }
}