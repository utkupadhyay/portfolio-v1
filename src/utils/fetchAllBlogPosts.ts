import supabase from '../database/supabaseClient';

export const fetchAllBlogs = async (setState: any, setErrorState: any) => {
  let { data, error } = await supabase.from('blogposts').select('*');
  if (data) {
    setState(data);
  }
  if (error) {
    setErrorState(error)
    console.error(error);
  }
};
