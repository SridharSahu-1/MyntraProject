import { initializeApp } from "firebase/app";
import {getDatabase, ref , query, get, limitToFirst,startAt}  from "firebase/database";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


export async function getData(path="/",idx=0){
  let limit = 20;
  const dbref = ref(db,path) 
  try{
  let val = (await get(query(dbref,startAt(null,""+limit*idx),limitToFirst(limit)))).val()
  let res =[]
  if(typeof(val)=="object"){
    for(let key of Object.keys(val)){
      res.push(val[key])
    }
  }else{
    res = val.slice(idx*limit,limit*(idx+1));
  }
    return res;
  }
  catch(e){
    console.log(e)
  }
}

export default db;

