import axios from "axios";

const fetchUser = async (url: string): Promise<any> => {

   const config = {
      method: 'get',
      url,
   }

   let res: (any);

   try {
      res = await axios(config);
      console.log('Fetch user func called', res.data.results[0])
   } catch (err: any) {
      console.log(err.message)
   }

   return res.data.results[0];

}

export default fetchUser;