import React from 'react';
import { Themetoggle } from '../Actiontypes';

export const Themereducer = (state = initval,action)=>{
        switch(action.type){
          case Themetoggle: 
          return {
            ...state,
            theme : action.payload
          }
          default :
          return state;
        }
}